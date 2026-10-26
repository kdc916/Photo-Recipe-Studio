/* Creative Look P9 regression, no third-party packages. Run: node tests/creative_look_v015.test.js */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const ext=fs.readFileSync(path.join(root,'extension.js'),'utf8');
new vm.Script(app);new vm.Script(ext);
const match=html.match(/<script>([\s\S]*?)<\/script>/);
assert.ok(match);new vm.Script(match[1]);
const ctx={window:{addEventListener(){}},document:{getElementById(){return null;}},module:{exports:{}},
  requestAnimationFrame:cb=>cb(),ImageData:class ImageData{constructor(data,width,height){Object.assign(this,{data,width,height});}}};
vm.runInNewContext(app.slice(0,app.indexOf('/* Web app UI'))+'\n;globalThis.__core={PRS_SOURCE,PRS_V015_ADDED,PRS_V015_LOOKS,PRSEngine};',ctx);
const {PRS_SOURCE,PRS_V015_ADDED,PRS_V015_LOOKS,PRSEngine}=ctx.__core;
const legacy=PRS_SOURCE.recipes,extra=PRS_V015_ADDED,looks=PRS_V015_LOOKS,engine=PRSEngine;
assert.equal(legacy.length,77);assert.equal(extra.length,5);
assert.deepEqual(Array.from(extra,r=>r.id),['r077','r078','r079','r080','r081']);
assert.equal(new Set([...legacy,...extra].map(r=>r.id)).size,82);
assert.equal(legacy.find(x=>x.id==='r000').name,'FACTORY (ST)');
assert.ok(html.includes('id="lookSlots"'));
for(const id of ['creativeContrast','creativeHighlights','creativeShadows','creativeFade','creativeSaturation','creativeSharpness','creativeSharpnessRange','creativeClarity']){
 assert.ok(html.includes('id="'+id+'"'),id+' slider missing');
}
const input=new ctx.ImageData(Uint8ClampedArray.from([80,130,220,255,188,99,54,255,230,235,239,255,25,40,12,255]),2,2);
const config={strength:100,creative:true,p0:true,p1:true,p2:true,exif:false,lut:null,lutStrength:0,
 fx:{grain:0,grainSize:30,grainSharp:0,halation:0,haloRadius:35}};
const empty={contrast:0,highlights:0,shadows:0,fade:0,saturation:0,sharpness:3,sharpnessRange:3,clarity:0};
(async()=>{
 const original=await engine.process(input,legacy[0],null,config);
 const neutral=await engine.process(input,legacy[0],null,{...config,creativeTune:empty});
 assert.deepEqual(Array.from(neutral.data),Array.from(original.data),'neutral tuning must be pixel exact');
 for(const [key,value] of Object.entries({contrast:5,highlights:5,shadows:5,fade:5,saturation:5,sharpness:7,sharpnessRange:5,clarity:6})){
  const result=await engine.process(input,legacy[0],null,{...config,creativeTune:{...empty,[key]:value,...(key==='sharpnessRange'?{sharpness:7}:{})}});
  assert.notDeepEqual(Array.from(result.data),Array.from(original.data),key+' must change image');
 }
 const zero=await engine.process(input,legacy[0],null,{...config,strength:0,creativeTune:{...empty,contrast:9,sharpness:9,clarity:9}});
 assert.deepEqual(Array.from(zero.data),Array.from(input.data),'strength zero must preserve source');
 const f2=await engine.process(input,extra[0],null,config),f3=await engine.process(input,extra[1],null,config);
 assert.notDeepEqual(Array.from(f2.data),Array.from(f3.data),'FL2 and FL3 must differ');
 const dim=4,w=8,h=8,grid=new Uint8ClampedArray(w*h*dim);
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=(y*w+x)*4;grid[i]=x*30;grid[i+1]=y*30;grid[i+2]=(x+y)*14;grid[i+3]=255;}
 const large=new ctx.ImageData(grid,w,h);
 const data=await engine.process(large,extra[2],looks.r079,{...config,creativeTune:{...empty,sharpness:0,clarity:9}});
 assert.equal(data.data.length,grid.length);assert.ok(data.data.every(n=>Number.isFinite(n)));
 console.log('PASS: source+UI syntax, 77+4 catalog, neutral identity, eight controls, strength zero, FL2/FL3, 8x8 spatial');
})().catch(e=>{console.error(e);process.exitCode=1});
