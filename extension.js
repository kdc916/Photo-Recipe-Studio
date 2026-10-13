/* Photo Recipe Studio v0.14.0 — P6/P7/P8 optional professional workflow.
   Core color transforms and the original 77 Sony recipes are unchanged. */
(()=>{
'use strict';
const api=window.PRS_TEST;
const $=id=>document.getElementById(id);
if(!api||!api.state||!api.processor){$('status').textContent='확장 기능을 시작할 수 없습니다. 기본 사진 편집 기능은 유지됩니다.';return;}
const {state,el,processor}=api;
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const defaults={grain:0,grainSize:30,grainSharp:0,halation:0,haloRadius:35};
const version='0.14.0';
const readJson=(key,fallback)=>{try{const d=JSON.parse(localStorage.getItem(key));return d??fallback;}catch{return fallback;}};
const writeJson=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{api.setStatus('브라우저 저장소 사용 불가 · 이번 세션에서만 사용',true);return false;}};
const keyFav='prs-v014-favorites',keyCustom='prs-v014-custom';
let favorites=new Set(readJson(keyFav,[])),custom=readJson(keyCustom,[]);
let split=false,splitValue=50,history=[],future=[],lastSnapshot=null,tracking=false;
let calibrationLut=null,calibrationText='',batchBusy=false;
function settingsSnapshot(){
 const snap={recipeId:state.recipe?.id,creative:el.creative.checked,p0:el.p0.checked,p1:el.p1.checked,p2:el.p2.checked,
  exif:el.exif.checked,lut:state.lut,lutName:state.lutName, lutStrength:+el.lutStrength.value};
 for(const id of ['strength','grain','grainSize','grainSharp','halation','haloRadius'])snap[id]=+el[id].value;
 return snap;
}
function comparable(s){const c={...s};delete c.lut;return JSON.stringify(c);}
lastSnapshot=settingsSnapshot();
function record(){if(tracking)return;const now=settingsSnapshot();if(comparable(now)===comparable(lastSnapshot))return;
 if(!history.length||comparable(history[history.length-1])!==comparable(lastSnapshot))history.push(lastSnapshot);
 if(history.length>30)history.shift();future=[];lastSnapshot=now;buttons();}
function onAction(){if(tracking)return;queueMicrotask(record);}
function buttons(){$('undoBtn').disabled=!history.length;$('redoBtn').disabled=!future.length;}
function restore(s){tracking=true;try{
 const rec=api.allRecipes.find(r=>r.id===s.recipeId);if(rec){state.recipe=rec;state.currentGroup=rec.group;el.group.value=rec.group;}
 for(const id of ['creative','p0','p1','p2','exif'])el[id].checked=!!s[id];
 for(const id of ['strength','grain','grainSize','grainSharp','halation','haloRadius','lutStrength']){el[id].value=s[id];$(id+'Value').textContent=s[id]+'%';}
 state.lut=s.lut||null;state.lutName=s.lutName||null;
 $('lutInfo').textContent=s.lutName?'적용 중: '+s.lutName:'LUT 미적용';
 api.renderRecipes();api.requestPreview();lastSnapshot=settingsSnapshot();buttons();
 }finally{tracking=false;}}
$('undoBtn').onclick=()=>{record();if(!history.length)return;future.push(settingsSnapshot());restore(history.pop());};
$('redoBtn').onclick=()=>{if(!future.length)return;history.push(settingsSnapshot());restore(future.pop());};
for(const e of ['input','change','click'])document.addEventListener(e,ev=>{
 const t=ev.target;if(!t||!t.closest)return;
 if(t.closest('#professionalTools')||t.closest('#exportQualityPanel'))return;
 if(t.matches('input[type=range],input[type=checkbox],select,.recipe-chip')||t.closest('#resetBtn,#grainReset,#fxPresetApply,#lutClear'))onAction();
},false);
function applyFavoriteBadge(){const id=state.recipe?.id; $('favoriteBtn').textContent=favorites.has(id)?'★ 즐겨찾기':'☆ 즐겨찾기';
 for(const chip of el.list.querySelectorAll('.recipe-chip')){
  const ref=api.allRecipes.find(r=>r.name===chip.textContent.trim()&&r.group===state.currentGroup);
  if(ref){chip.dataset.recipeId=ref.id;chip.style.display=$('favoritesOnly').checked&&!favorites.has(ref.id)?'none':'';}
 }
}
$('favoriteBtn').onclick=()=>{const id=state.recipe.id;if(favorites.has(id))favorites.delete(id);else favorites.add(id);writeJson(keyFav,[...favorites]);applyFavoriteBadge();};
$('favoritesOnly').onchange=applyFavoriteBadge;
const obs=new MutationObserver(()=>applyFavoriteBadge());obs.observe(el.list,{childList:true});
function saveCustom(){const label=prompt('커스텀 레시피 이름',state.recipe.name+' 개인 설정');if(label===null)return;
 const name=label.trim().slice(0,52);if(!name){api.setStatus('레시피 이름을 입력해주세요.',true);return;}
 const snap=settingsSnapshot();delete snap.lut;delete snap.lutName; // do not persist binary LUT to localStorage
 custom.unshift({name,settings:snap,savedAt:new Date().toISOString()});custom=custom.slice(0,30);writeJson(keyCustom,custom);renderCustom();api.setStatus('커스텀 레시피 저장 · '+name);
}
function renderCustom(){const target=$('customSelect');target.replaceChildren(new Option('저장된 커스텀 레시피 선택',''));
 custom.forEach((c,i)=>target.add(new Option(c.name,i)));}
$('customSave').onclick=saveCustom;
$('customLoad').onclick=()=>{const i=Number($('customSelect').value);if($('customSelect').value===''||!custom[i])return;history.push(settingsSnapshot());buttons();const s={...custom[i].settings,lut:null,lutName:null};restore(s);api.setStatus('커스텀 설정 적용 · '+custom[i].name);};
$('customDelete').onclick=()=>{const i=Number($('customSelect').value);if($('customSelect').value===''||!custom[i])return;custom.splice(i,1);writeJson(keyCustom,custom);renderCustom();};
$('customExport').onclick=()=>{downloadBlob(new Blob([JSON.stringify({format:'PRS_CUSTOM_V1',custom},null,2)],{type:'application/json'}),'PRS_Custom_Recipes.json');};
$('customImport').onchange=async(e)=>{try{const f=e.target.files[0];if(!f)return;if(f.size>250000)throw Error('JSON 최대 250KB');const d=JSON.parse(await f.text());if(d.format!=='PRS_CUSTOM_V1'||!Array.isArray(d.custom))throw Error('지원하지 않는 파일');
 custom=d.custom.filter(x=>x&&typeof x.name==='string'&&x.settings&&typeof x.settings==='object'&&api.allRecipes.some(r=>r.id===x.settings.recipeId)).slice(0,30).map(x=>({name:x.name.slice(0,52),settings:x.settings}));writeJson(keyCustom,custom);renderCustom();api.setStatus('커스텀 레시피 '+custom.length+'개 가져옴');}catch(err){api.setStatus('레시피 가져오기 실패: '+err.message,true);}finally{e.target.value='';}};
renderCustom();
function getBlob(canvas,quality){return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('JPG 인코딩 오류')),'image/jpeg',quality));}
function downloadBlob(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
function crc32(data){let crc=0xffffffff;for(const byte of data){crc^=byte;for(let j=0;j<8;j++)crc=(crc>>>1)^(crc&1?0xedb88320:0);}return (crc^0xffffffff)>>>0;}
function zipFiles(files){let chunks=[],central=[],offset=0,total=0;const enc=new TextEncoder();
 for(const file of files){const name=enc.encode(file.name),data=file.data,crc=crc32(data);
  const loc=new Uint8Array(30+name.length),v=new DataView(loc.buffer);v.setUint32(0,0x04034b50,true);v.setUint16(4,20,true);v.setUint16(6,0x0800,true);
  v.setUint32(14,crc,true);v.setUint32(18,data.length,true);v.setUint32(22,data.length,true);v.setUint16(26,name.length,true);loc.set(name,30);
  chunks.push(loc,data);const c=new Uint8Array(46+name.length),z=new DataView(c.buffer);z.setUint32(0,0x02014b50,true);z.setUint16(4,20,true);z.setUint16(6,20,true);z.setUint16(8,0x0800,true);z.setUint32(16,crc,true);z.setUint32(20,data.length,true);z.setUint32(24,data.length,true);z.setUint16(28,name.length,true);z.setUint32(42,offset,true);c.set(name,46);central.push(c);offset+=loc.length+data.length;total+=data.length;
  if(total>150*1024*1024)throw Error('압축 전 파일 총량은 150MB 이하만 지원합니다.');
 }
 const end=new Uint8Array(22),d=new DataView(end.buffer);d.setUint32(0,0x06054b50,true);d.setUint16(8,files.length,true);d.setUint16(10,files.length,true);d.setUint32(12,central.reduce((n,x)=>n+x.length,0),true);d.setUint32(16,offset,true);
 return new Blob([...chunks,...central,end],{type:'application/zip'});
}
// P6: output policy. Full-size is explicit; no silent quality downgrade.
function exportDimensions(w,h){const mode=$('exportResolution').value,limit=mode==='original'?Infinity:mode==='preview'?(state.orig?.width||w)*(state.orig?.height||h):Number(mode)*1000000;
 const scale=Math.min(1,Math.sqrt(limit/(w*h)));return {w:Math.max(1,Math.floor(w*scale)),h:Math.max(1,Math.floor(h*scale)),mode};}
function photoManifest(source,output,mode){return {app:'Photo Recipe Studio',appVersion:version,sourceName:source.name,sourceWidth:state.origDims?.[0],sourceHeight:state.origDims?.[1],outputWidth:output.width,outputHeight:output.height,colorSpace:'sRGB (browser JPEG canvas)',sourceICCEmbedded:false,sourceEXIFEmbedded:false,sourceEXIFSummary:state.metadata,settings:{...api.opts(),lut:null},recipe:state.recipe.name,outputMode:mode,date:new Date().toISOString(),note:'Privacy: original EXIF including GPS and ICC profiles not embedded in JPEG; manifest is optional. ICC preservation would be invalid if the pixels are converted to sRGB.'};}
async function imgElement(file){const url=URL.createObjectURL(file);try{const img=await new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=()=>reject(Error('이미지 디코딩 실패'));i.src=url;});return {img,url};}catch(e){URL.revokeObjectURL(url);throw e;}}
async function exportPhoto(){if(state.saving||!state.file)return;
 const source=state.decodeFile||state.file,quality=Number($('exportQuality').value)/100;
 const originalW=state.origDims?.[0]||state.orig.width,originalH=state.origDims?.[1]||state.orig.height;
 const dim=exportDimensions(originalW,originalH),pixels=dim.w*dim.h;
 const maxLimit=Number(navigator.deviceMemory||0)<=4&&navigator.deviceMemory?24e6:54e6;
 if(pixels>maxLimit||Math.max(dim.w,dim.h)>16384){api.setStatus('선택한 해상도는 이 기기에서 안전하게 처리하기 어렵습니다. 12MP/20MP를 선택해 주세요.',true);return;}
 state.saving=true;api.setDisabled(true);api.setStatus('고품질 JPG 준비 · '+dim.w+'×'+dim.h);
 let url=null;
 try{
 const out=document.createElement('canvas');out.width=dim.w;out.height=dim.h;const ctx=out.getContext('2d',{colorSpace:'srgb',willReadFrequently:false});if(!ctx)throw Error('출력 캔버스 생성 실패');
 // Process in bounded vertical strips; 24px overlap reduces seams in local sharp/halation.
 const image=await imgElement(source);url=image.url;
 const cfg=api.opts(),look=cfg.creative?api.getLook(state.recipe):null,chunk=256,pad=24;
 for(let y=0;y<dim.h;y+=chunk){const top=Math.max(0,y-pad),bottom=Math.min(dim.h,y+chunk+pad),hh=bottom-top;
  const tmp=document.createElement('canvas');tmp.width=dim.w;tmp.height=hh;
  const t=tmp.getContext('2d',{willReadFrequently:true,colorSpace:'srgb'});if(!t)throw Error('이미지 작업 버퍼 생성 실패');
  t.drawImage(image.img,0,0,originalW,originalH,0,-top,dim.w,dim.h);
  const input=t.getImageData(0,0,dim.w,hh);
  const output=await api.processor.process(input,state.recipe,look,{...cfg,tileY:top,fullH:dim.h},state.metadata,()=>false,()=>{});
  if(!output)throw Error('이미지 처리가 중단되었습니다.');
  ctx.putImageData(output,0,top,0,y-top,dim.w,Math.min(chunk,dim.h-y));
  api.progress((y+Math.min(chunk,dim.h-y))/dim.h);
  await new Promise(res=>setTimeout(res,0));
 }
 const blob=await getBlob(out,quality);
 const base='PRS_'+state.recipe.name.replace(/[^a-zA-Z0-9가-힣_-]+/g,'_')+'_'+Date.now();
 if($('exportSidecar').checked){const json=new TextEncoder().encode(JSON.stringify(photoManifest(source,{width:dim.w,height:dim.h},dim.mode),null,2));const jpeg=new Uint8Array(await blob.arrayBuffer());downloadBlob(zipFiles([{name:base+'.jpg',data:jpeg},{name:base+'.json',data:json}]),base+'.zip');}
 else downloadBlob(blob,base+'.jpg');
 api.setStatus('JPG 저장 완료 · '+dim.w+'×'+dim.h+' · 품질 '+Math.round(quality*100)+'% · '+(blob.size/1048576).toFixed(1)+'MB');
 }catch(err){api.setStatus('고해상도 저장 실패: '+err.message+' · 낮은 출력 해상도를 선택해 주세요.',true);}
 finally{if(url)URL.revokeObjectURL(url);state.saving=false;api.setDisabled(false);api.progress(0);}
}
$('exportQuality').oninput=()=>{$('exportQualityValue').textContent=$('exportQuality').value+'%';};
$('exportResolution').onchange=()=>api.setStatus('저장 해상도: '+$('exportResolution').selectedOptions[0].textContent);
// P7: ICC-managed lab conversions in display sRGB D65 and CIEDE2000.
function linear(v){v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4);}
function lab(rgb){const r=linear(rgb[0]),g=linear(rgb[1]),b=linear(rgb[2]);
 const x=(.4124564*r+.3575761*g+.1804375*b)/.95047,y=(.2126729*r+.7151522*g+.0721750*b),z=(.0193339*r+.1191920*g+.9503041*b)/1.08883;
 const f=v=>v>.008856451679?Math.cbrt(v):v/ (.128418549346)+16/116;
 const X=f(x),Y=f(y),Z=f(z);return [116*Y-16,500*(X-Y),200*(Y-Z)];}
function deltaE00(a,b){const [L1,A1,B1]=lab(a),[L2,A2,B2]=lab(b),C1=Math.hypot(A1,B1),C2=Math.hypot(A2,B2),meanC=(C1+C2)/2;
 const G=.5*(1-Math.sqrt(Math.pow(meanC,7)/(Math.pow(meanC,7)+Math.pow(25,7))));
 const aa1=(1+G)*A1,aa2=(1+G)*A2,c1=Math.hypot(aa1,B1),c2=Math.hypot(aa2,B2);
 const wrap=x=>(x%(Math.PI*2)+Math.PI*2)%(Math.PI*2),h1=wrap(Math.atan2(B1,aa1)),h2=wrap(Math.atan2(B2,aa2));
 const dL=L2-L1,dC=c2-c1,dh=c1*c2<1e-10?0:Math.abs(h2-h1)<=Math.PI?h2-h1:h2-h1>Math.PI?h2-h1-Math.PI*2:h2-h1+Math.PI*2;
 const dH=2*Math.sqrt(c1*c2)*Math.sin(dh/2),Lbar=(L1+L2)/2,Cbar=(c1+c2)/2;
 const hbar=c1*c2<1e-10?h1+h2:Math.abs(h1-h2)<=Math.PI?(h1+h2)/2:(h1+h2<2*Math.PI?(h1+h2+Math.PI*2)/2:(h1+h2-Math.PI*2)/2);
 const deg=hbar*180/Math.PI,T=1-.17*Math.cos(hbar-Math.PI/6)+.24*Math.cos(2*hbar)+.32*Math.cos(3*hbar+Math.PI/30)-.20*Math.cos(4*hbar-63*Math.PI/180);
 const dtheta=30*Math.exp(-Math.pow((deg-275)/25,2))*Math.PI/180,RC=2*Math.sqrt(Math.pow(Cbar,7)/(Math.pow(Cbar,7)+Math.pow(25,7)));
 const SL=1+.015*Math.pow(Lbar-50,2)/Math.sqrt(20+Math.pow(Lbar-50,2)),SC=1+.045*Cbar,SH=1+.015*Cbar*T;
 const RT=-Math.sin(2*dtheta)*RC;
 return Math.sqrt(Math.pow(dL/SL,2)+Math.pow(dC/SC,2)+Math.pow(dH/SH,2)+RT*(dC/SC)*(dH/SH));}
function parsePairs(text){const lines=text.replace(/\ufeff/g,'').trim().split(/\r?\n/).filter(s=>s.trim()&&!s.trim().startsWith('#'));const out=[];
 for(const line of lines){const p=line.trim().split(/[,;\t]+/).map(s=>s.trim());if(p.length<6)continue;const v=p.slice(0,6).map(Number);if(v.every(n=>Number.isFinite(n)&&n>=0&&n<=255))out.push({input:v.slice(0,3),target:v.slice(3,6)});}
 if(out.length<6||out.length>96)throw Error('RGB 기준 쌍은 6~96개 필요합니다. input R,G,B / target R,G,B (0~255).');
 return out;
}
function correctAt(rgb,pairs){let out=rgb.slice(),wt=1.4; // regularization prevents extreme color turns
 for(const {input,target} of pairs){const d2=Math.pow((rgb[0]-input[0])/90,2)+Math.pow((rgb[1]-input[1])/90,2)+Math.pow((rgb[2]-input[2])/90,2);const w=Math.exp(-d2/2);
  wt+=w;for(let i=0;i<3;i++)out[i]+=w*clamp(target[i]-input[i],-70,70);
 }
 return out.map((v,i)=>clamp(rgb[i]+(v-rgb[i])/wt,0,255));
}
function makeCube(pairs,size=17){const rows=['TITLE "PRS measured-reference calibration (training fit)"','LUT_3D_SIZE '+size,'DOMAIN_MIN 0 0 0','DOMAIN_MAX 1 1 1'];
 for(let z=0;z<size;z++)for(let y=0;y<size;y++)for(let x=0;x<size;x++){
 const a=[x,y,z].map(v=>v*255/(size-1)),out=correctAt(a,pairs);rows.push(out.map(v=>(v/255).toFixed(7)).join(' '));}
 return rows.join('\n')+'\n';}
$('calibrationCSV').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{
 if(file.size>100000)throw Error('CSV는 100KB 이하');const pairs=parsePairs(await file.text());
 calibrationText=makeCube(pairs);calibrationLut=api.processor.parseCube(calibrationText);
 const before=pairs.reduce((sum,p)=>sum+deltaE00(p.input,p.target),0)/pairs.length;
 const after=pairs.reduce((sum,p)=>{const inColor=(p.input[0]<<16)|(p.input[1]<<8)|p.input[2];const c=api.processor.lutPixel(inColor,calibrationLut,1);return sum+deltaE00([(c>>16)&255,(c>>8)&255,c&255],p.target);},0)/pairs.length;
 $('calibrationMetrics').textContent=`기준 RGB ${pairs.length}개 · 학습 데이터 평균 ΔE00 ${before.toFixed(2)} → ${after.toFixed(2)} · 별도 검증 데이터 아님`;
 $('calibrationApply').disabled=false;$('calibrationDownload').disabled=false;
 }catch(err){api.setStatus('P7 기준 데이터 오류: '+err.message,true);$('calibrationMetrics').textContent='교정 실패 · CSV 형식/값을 확인하세요.';}finally{e.target.value='';}};
$('calibrationApply').onclick=()=>{if(!calibrationLut)return;history.push(settingsSnapshot());buttons();state.lut=calibrationLut;state.lutName='P7 CSV fitting';el.lutStrength.value=100;$('lutStrengthValue').textContent='100%';$('lutInfo').textContent='P7 기준값 보정 LUT · ΔE 학습 데이터 참고';api.requestPreview();api.setStatus('P7 보정 LUT 적용 · 장면별 색차를 별도 검증하세요.');};
$('calibrationDownload').onclick=()=>{if(calibrationText)downloadBlob(new Blob([calibrationText],{type:'text/plain'}),'PRS_P7_Measured_Fit_17.cube');};
// P8 split compare: same pan and zoom as the edit canvas.
const comparison=document.createElement('canvas');comparison.id='comparisonCanvas';comparison.className='preview-canvas';comparison.style.pointerEvents='none';comparison.style.zIndex='2';comparison.hidden=true;el.stage.insertBefore(comparison,el.placeholder);
function updateComparison(){if(!state.orig||!split){comparison.hidden=true;comparison.style.display='none';return;}comparison.hidden=false;comparison.style.display='block';
 if(comparison.width!==state.orig.width||comparison.height!==state.orig.height){comparison.width=state.orig.width;comparison.height=state.orig.height;comparison.getContext('2d').putImageData(state.orig,0,0);}
 comparison.style.width=el.canvas.style.width;comparison.style.height=el.canvas.style.height;comparison.style.transform=el.canvas.style.transform;
 comparison.style.clipPath=`inset(0 ${100-splitValue}% 0 0)`;
}
$('splitToggle').onclick=()=>{split=!split;$('splitToggle').textContent=split?'분할 비교 ON':'분할 비교';$('splitControl').hidden=!split;updateComparison();};
$('splitRange').oninput=e=>{splitValue=+e.target.value;updateComparison();};
api.onPresent=updateComparison;
const oldResize=window.onresize;window.addEventListener('resize',()=>requestAnimationFrame(updateComparison));
// P8 batch: zip archive avoids the browser blocking dozens of separate downloads.
$('batchRun').onclick=async()=>{const files=[...$('batchFiles').files];if(batchBusy||!files.length){api.setStatus('일괄 변환할 사진을 선택하세요.',true);return;}
 if(files.length>10){api.setStatus('일괄 변환은 한 번에 최대 10장까지 지원합니다.',true);return;}
 batchBusy=true;$('batchRun').disabled=true;const zip=[];let total=0;
 try{
 for(let n=0;n<files.length;n++){
  const file=files[n];api.setStatus(`일괄 변환 ${n+1}/${files.length}: ${file.name}`);
  const loaded=await api.decodeWithHeicFallback(file,Number($('batchMaxPixels').value)*1000000);const d=loaded.decoded;
  const cfg=api.opts(),look=cfg.creative?api.getLook(state.recipe):null;
  const processed=await processor.process(d.data,state.recipe,look,cfg,{},()=>false,()=>{});if(!processed)throw Error('이미지 처리 중단');
  const canvas=document.createElement('canvas');canvas.width=processed.width;canvas.height=processed.height;canvas.getContext('2d').putImageData(processed,0,0);
  const blob=await getBlob(canvas,Number($('exportQuality').value)/100);const array=new Uint8Array(await blob.arrayBuffer());total+=array.length;
  if(total>140*1024*1024)throw Error('사진 묶음 용량 초과 (140MB)');
  const safe=file.name.replace(/\.[^.]+$/,'').replace(/[^a-zA-Z0-9가-힣_-]/g,'_').slice(0,80);
  zip.push({name:`${String(n+1).padStart(2,'0')}_${safe}_${state.recipe.id}.jpg`,data:array});
 }
 downloadBlob(zipFiles(zip),'PRS_Batch_'+Date.now()+'.zip');api.setStatus('사진 '+zip.length+'장 JPG 일괄 변환 완료 · ZIP 저장');
 }catch(err){api.setStatus('일괄 변환 실패: '+err.message,true);}finally{batchBusy=false;$('batchRun').disabled=false;}
};
window.PRS_EXTENSION={version,exportPhoto,onPresent:updateComparison,deltaE00,parsePairs,makeCube,zipFiles,get historyLength(){return history.length;},get favorites(){return [...favorites];}};
buttons();applyFavoriteBadge();api.setStatus('P6~P8 확장 준비 완료 · 사진을 열어주세요.');
})();