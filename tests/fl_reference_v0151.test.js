/* Sony FL scene-calibration core regression: no full user photographs stored. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const app=fs.readFileSync(path.join(__dirname,'..','app.js'),'utf8');
const context={window:{addEventListener(){}},document:{getElementById(){return null;}},module:{exports:{}},
 requestAnimationFrame:cb=>cb(),ImageData:class Img{constructor(data,width,height){Object.assign(this,{data,width,height});}}};
vm.runInNewContext(app.slice(0,app.indexOf('/* Web app UI'))+
 '\n;globalThis.core={PRS_SOURCE,PRS_V015_ADDED,PRS_FL_REFERENCE_COEFFS,PRSEngine};',context);
const {PRS_SOURCE,PRS_V015_ADDED,PRS_FL_REFERENCE_COEFFS,PRSEngine}=context.core;
assert.equal(PRS_SOURCE.recipes.length,77);assert.equal(PRS_V015_ADDED.length,5);
assert.equal(new Set([...PRS_SOURCE.recipes,...PRS_V015_ADDED].map(x=>x.id)).size,82);
const samples={
r081:[[[10,9,9],[13,13,12]],[[52,52,57],[70,72,77]],[[105,109,118],[140,150,157]],[[127,130,139],[166,174,179]],[[183,197,221],[218,230,236]],[[205,213,225],[230,234,237]]],
r077:[[[28,31,20],[40,49,38]],[[71,70,72],[99,101,102]],[[103,104,109],[136,138,141]],[[161,163,172],[191,192,196]],[[201,208,223],[212,217,221]],[[206,213,226],[214,219,223]]],
r078:[[[16,17,13],[31,35,30]],[[82,84,87],[110,117,119]],[[105,109,118],[137,147,153]],[[136,160,197],[167,201,216]],[[167,187,218],[190,217,228]],[[203,212,232],[215,228,234]]]
};
const config={creative:true,strength:100,p0:true,p1:true,p2:true,exif:false,lut:null,lutStrength:0,
 fx:{grain:0,grainSize:30,grainSharp:0,halation:0,haloRadius:35}};
(async()=>{
 for(const [id,pairs] of Object.entries(samples)){
  assert.equal(PRS_FL_REFERENCE_COEFFS[id].length,3);
  const r=PRS_V015_ADDED.find(x=>x.id===id);assert.ok(r);
  const input=pairs.flatMap(p=>[...p[0],255]),im=new context.ImageData(Uint8ClampedArray.from(input),pairs.length,1);
  const output=await PRSEngine.process(im,r,null,config);
  let error=0;for(let i=0;i<pairs.length;i++)for(let j=0;j<3;j++)error+=Math.abs(output.data[4*i+j]-pairs[i][1][j]);
  const mae=error/(3*pairs.length);assert.ok(mae<5,id+' RGB MAE '+mae);
  const off=await PRSEngine.process(im,r,null,{...config,creative:false});
  const zero=await PRSEngine.process(im,r,null,{...config,strength:0});
  assert.deepEqual(Array.from(off.data),input,'creative toggle disabled');
  assert.deepEqual(Array.from(zero.data),input,'strength zero');
  console.log('PASS',id,'small reference sRGB sample MAE',mae.toFixed(2),'/255');
 }
})().catch(e=>{console.error(e);process.exitCode=1});
