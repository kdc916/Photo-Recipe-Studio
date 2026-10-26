/* v0.15.0 real Chromium smoke: image IO, new looks, sliders, slots, ZIP.
   npm install --no-save playwright-core@1.56.1
   node tests/browser_smoke_v015.test.js */
'use strict';
const fs=require('node:fs'),http=require('node:http'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require('playwright-core');
const root=path.resolve(__dirname,'..');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript','.md':'text/plain','.csv':'text/csv'};
const server=http.createServer((req,res)=>{
 const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
 const p=path.resolve(root,'.'+pathname.replace(/\/$/,'/index.html'));
 if(!p.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
 try{const data=fs.readFileSync(p);res.writeHead(200,{'content-type':mime[path.extname(p)]||'application/octet-stream','cache-control':'no-store'});res.end(data);}
 catch(e){if(!res.headersSent)res.writeHead(404);res.end(e.message);}
});
const launchPaths=['/usr/bin/google-chrome','/usr/bin/chromium','/opt/google/chrome/chrome'];
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const port=server.address().port;
 const exe=process.env.CHROME_PATH||launchPaths.find(fs.existsSync);
 if(!exe)throw Error('Chrome/Chromium executable not found');
 const browser=await chromium.launch({executablePath:exe,headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
 try{
  for(const viewport of [{width:1440,height:900},{width:390,height:844}]){
   const ctx=await browser.newContext({viewport,acceptDownloads:true});
   const page=await ctx.newPage(),errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto('http://127.0.0.1:'+port+'/',{waitUntil:'load'});
   await page.waitForFunction(()=>window.PRS_BOOT?.state==='ready'&&window.PRS_EXTENSION?.version==='0.15.1');
   assert.equal(await page.evaluate(()=>window.PRS_TEST.allRecipes.length),82);
   const png=await page.evaluate(async()=>{
    const canvas=document.createElement('canvas');canvas.width=240;canvas.height=150;
    const c=canvas.getContext('2d');const grd=c.createLinearGradient(0,0,240,150);
    grd.addColorStop(0,'#3164bb');grd.addColorStop(.5,'#d48956');grd.addColorStop(1,'#f7c921');c.fillStyle=grd;c.fillRect(0,0,240,150);
    return canvas.toDataURL('image/png');
   });
   const image=Buffer.from(png.split(',')[1],'base64');
   await page.locator('#imageInput').setInputFiles({name:'qa.png',mimeType:'image/png',buffer:image});
   await page.waitForFunction(()=>window.PRS_TEST.state.filtered?.width===240,{timeout:20000});
   await page.locator('#groupSelect').selectOption('Sony');
   await page.getByRole('button',{name:'Sony FL2 (reference match)'}).click();
   await page.waitForFunction(()=>window.PRS_TEST.state.recipe.id==='r077'&&window.PRS_TEST.state.filtered);
   await page.waitForTimeout(500);
   const pixels=()=>page.evaluate(()=>{
    const c=document.getElementById('photoCanvas');
    return Array.from(c.getContext('2d').getImageData(45,35,1,1).data);
   });
   const f2=await pixels();
   await page.getByRole('button',{name:'Sony FL3 (reference match)'}).click();
   await page.waitForTimeout(550);
   const f3=await pixels();
   assert.notDeepEqual(f2,f3,'FL2/FL3 should render differently');
   await page.locator('#creativeLookPanel').evaluate(el=>el.open=true);
   await page.locator('#creativeContrast').evaluate(el=>{el.value='9';el.dispatchEvent(new Event('input',{bubbles:true}));});
   await page.waitForTimeout(550);
   const tuned=await pixels();
   assert.notDeepEqual(f3,tuned,'contrast must alter preview');
   page.once('dialog',d=>d.accept('QA slot one'));
   await page.locator('#lookSlotSave').click();
   assert.deepEqual(await page.evaluate(()=>window.PRS_EXTENSION.lookSlots[0]),'QA slot one');
   await page.locator('#creativeContrast').evaluate(el=>{el.value='0';el.dispatchEvent(new Event('input',{bubbles:true}));});
   await page.waitForTimeout(180);
   await page.locator('#lookSlotLoad').click();
   assert.equal(await page.locator('#creativeContrast').inputValue(),'9');
   await page.locator('#professionalTools').evaluate(el=>el.open=true);
   const customPromise=page.waitForEvent('download',{timeout:15000});
   await page.locator('#customExport').click();
   const customDownload=await customPromise;
   assert.ok(customDownload.suggestedFilename().endsWith('.json'));
   const downloadPromise=page.waitForEvent('download');
   await page.locator('#saveBtn').click();
   const result=await downloadPromise;
   assert.ok(result.suggestedFilename().endsWith('.jpg'));
   const filePath=await result.path();assert.ok(fs.statSync(filePath).size>200);
   await page.locator('#batchFiles').setInputFiles([{name:'one.png',mimeType:'image/png',buffer:image},{name:'two.png',mimeType:'image/png',buffer:image}]);
   const batchPromise=page.waitForEvent('download');
   await page.locator('#batchRun').click();
   const batch=await batchPromise;
   assert.ok(batch.suggestedFilename().endsWith('.zip'));
   assert.ok(fs.statSync(await batch.path()).size>200);
   assert.deepEqual(errors,[],'unexpected page JS errors');
   await ctx.close();
   console.log('PASS browser viewport',viewport.width,viewport.height,'81 looks / files / contrast / custom slot / JPG / batch ZIP');
  }
 }finally{await browser.close();}
})().catch(err=>{console.error(err);process.exitCode=1}).finally(()=>server.close());
