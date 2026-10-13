
// Build v0.9.0 P1: unchanged external script runtime, opt-in stock profiles. Failure is visible rather than silently skipping filters.
window.PRS_DIAGNOSTIC={version:'0.9.0',engineReady:false};
window.addEventListener('error',function(event){
  const status=document.getElementById('status');
  if(status){status.classList.add('error');status.textContent='실행 오류: '+(event.message||'알 수 없는 오류')+' · 새로고침 후 다시 확인해주세요.';}
});
const PRS_SOURCE={"schema_version":"1.0.0","source_project":"recipe-lab-sony-pmca","source_path":"src/com/voxivoid/recipelab/Recipes.java","license":"MIT / Copyright (c) 2026 Andre Domingues (see included LICENSE)","description":"Camera parameter presets exported verbatim as metadata; not calibrated Android photo filters.","recipe_count":77,"group_count":12,"groups":["Sony","Fuji Sim","Fuji Film","Kodak","Cine","Ricoh GR","Leica","Hasselblad","Canon / Nikon","Pana / Olympus","Other Stocks","Ilford"],"recipes":[{"id":"r000","group_index":0,"group":"Sony","name":"FACTORY (ST)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r001","group_index":0,"group":"Sony","name":"Sony PT (portrait)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":4,"creative_style":"Portrait","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r002","group_index":0,"group":"Sony","name":"Sony NT (neutral)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r003","group_index":0,"group":"Sony","name":"Sony VV (vivid)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":2,"creative_style":"Vivid","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r004","group_index":0,"group":"Sony","name":"Sony VV2","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":2,"creative_style":"Vivid","saturation_steps":2,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r005","group_index":0,"group":"Sony","name":"Sony FL (film-like)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-3,"contrast_steps":-1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r006","group_index":0,"group":"Sony","name":"Sony IN (instant)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-3,"contrast_steps":-3,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":-1,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r007","group_index":0,"group":"Sony","name":"Sony SH (soft high-key)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":9,"creative_style":"Light","saturation_steps":-2,"contrast_steps":-2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":0,"picture_effect_id":5,"exposure_bias_third_stops":3,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r008","group_index":1,"group":"Fuji Sim","name":"Provia","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":1,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r009","group_index":1,"group":"Fuji Sim","name":"Velvia","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":2,"creative_style":"Vivid","saturation_steps":3,"contrast_steps":2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r010","group_index":1,"group":"Fuji Sim","name":"Astia","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":4,"creative_style":"Portrait","saturation_steps":0,"contrast_steps":-1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r011","group_index":1,"group":"Fuji Sim","name":"Classic Chrome","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":-1,"contrast_steps":2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":3,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":-1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r012","group_index":1,"group":"Fuji Sim","name":"Classic Negative","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":-3,"contrast_steps":3,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":-1,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r013","group_index":1,"group":"Fuji Sim","name":"Nostalgic Neg","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":1,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":3,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r014","group_index":1,"group":"Fuji Sim","name":"Reala Ace","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":0,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r015","group_index":1,"group":"Fuji Sim","name":"Pro Neg Std","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":4,"creative_style":"Portrait","saturation_steps":-2,"contrast_steps":-1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r016","group_index":1,"group":"Fuji Sim","name":"Pro Neg Hi","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":4,"creative_style":"Portrait","saturation_steps":-2,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r017","group_index":1,"group":"Fuji Sim","name":"Eterna","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-3,"contrast_steps":-2,"sharpness_steps":-1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":-1,"dro_id":3,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r018","group_index":1,"group":"Fuji Sim","name":"Eterna Bleach Bypass","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-3,"contrast_steps":3,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":-1,"dro_id":0,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r019","group_index":1,"group":"Fuji Sim","name":"Acros","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":1,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r020","group_index":1,"group":"Fuji Sim","name":"Acros +Ye (yellow filter)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":1,"sharpness_steps":1,"white_balance_mode_id":14,"kelvin":4000,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r021","group_index":1,"group":"Fuji Sim","name":"Acros +R (red filter)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":14,"kelvin":2500,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":7,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r022","group_index":1,"group":"Fuji Sim","name":"Acros +G (green filter)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":1,"sharpness_steps":1,"white_balance_mode_id":14,"kelvin":5600,"wb_amber_blue_steps":0,"wb_green_magenta_steps":4,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r023","group_index":1,"group":"Fuji Sim","name":"Sepia","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":14,"creative_style":"Sepia","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r024","group_index":2,"group":"Fuji Film","name":"Fuji Pro 400H","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":9,"creative_style":"Light","saturation_steps":-2,"contrast_steps":-2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":-1,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":2,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r025","group_index":2,"group":"Fuji Film","name":"Fuji Fortia 50","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":2,"creative_style":"Vivid","saturation_steps":3,"contrast_steps":2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":-1,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":-1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r026","group_index":2,"group":"Fuji Film","name":"Fuji Superia 400","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":1,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r027","group_index":2,"group":"Fuji Film","name":"Fuji C200","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":-1,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r028","group_index":2,"group":"Fuji Film","name":"Fuji Natura 1600","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":4,"creative_style":"Portrait","saturation_steps":-2,"contrast_steps":-2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r029","group_index":3,"group":"Kodak","name":"Kodak Portra 160","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":4,"creative_style":"Portrait","saturation_steps":-3,"contrast_steps":-2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":-1,"picture_effect_id":0,"exposure_bias_third_stops":2,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r030","group_index":3,"group":"Kodak","name":"Kodak Portra 400","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":4,"creative_style":"Portrait","saturation_steps":-1,"contrast_steps":-1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":3,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":2,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r031","group_index":3,"group":"Kodak","name":"Kodak Portra 800","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":4,"creative_style":"Portrait","saturation_steps":-2,"contrast_steps":-2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r032","group_index":3,"group":"Kodak","name":"Kodak Gold 200","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":2,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":3,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r033","group_index":3,"group":"Kodak","name":"Kodak Ultra Max 400","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r034","group_index":3,"group":"Kodak","name":"Kodak Color Plus 200","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":1,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":2,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r035","group_index":3,"group":"Kodak","name":"Kodak Ektar 100","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":3,"contrast_steps":1,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":-1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r036","group_index":3,"group":"Kodak","name":"Kodak Ektachrome E100","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":7,"creative_style":"Clear","saturation_steps":3,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":-1,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":-1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r037","group_index":3,"group":"Kodak","name":"Kodachrome 64","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":8,"creative_style":"Deep","saturation_steps":3,"contrast_steps":2,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":-1,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":-1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r038","group_index":3,"group":"Kodak","name":"Kodak Vision3 500T (daylight)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-1,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":14,"kelvin":3200,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":3,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r039","group_index":3,"group":"Kodak","name":"Kodak Vision 200T (Asteroid City)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-2,"contrast_steps":-3,"sharpness_steps":0,"white_balance_mode_id":14,"kelvin":5000,"wb_amber_blue_steps":2,"wb_green_magenta_steps":3,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":3,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r040","group_index":3,"group":"Kodak","name":"Kodak Tri-X 400","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":2,"sharpness_steps":2,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r041","group_index":3,"group":"Kodak","name":"Kodak T-Max","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":2,"sharpness_steps":3,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r042","group_index":3,"group":"Kodak","name":"Kodak Tri-X 1600 (pushed)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":7,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r043","group_index":4,"group":"Cine","name":"Cinestill 50D (Blue Velvet)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":-2,"contrast_steps":-1,"sharpness_steps":0,"white_balance_mode_id":14,"kelvin":5500,"wb_amber_blue_steps":-1,"wb_green_magenta_steps":-1,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r044","group_index":4,"group":"Cine","name":"Cinestill 800T","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":14,"kelvin":3200,"wb_amber_blue_steps":0,"wb_green_magenta_steps":-1,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r045","group_index":4,"group":"Cine","name":"Classic Cinema","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":0,"contrast_steps":-1,"sharpness_steps":0,"white_balance_mode_id":14,"kelvin":6000,"wb_amber_blue_steps":2,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":3,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r046","group_index":4,"group":"Cine","name":"Rec709 Video (flat-ish)","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-2,"contrast_steps":-2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":5,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r047","group_index":5,"group":"Ricoh GR","name":"GR Positive Film","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":3,"contrast_steps":2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":2,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":-1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r048","group_index":5,"group":"Ricoh GR","name":"GR Negative Film","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-2,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":-1,"wb_green_magenta_steps":1,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r049","group_index":5,"group":"Ricoh GR","name":"GR Bleach Bypass","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-3,"contrast_steps":3,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":0,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r050","group_index":5,"group":"Ricoh GR","name":"GR Retro","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":-3,"contrast_steps":-1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":3,"wb_green_magenta_steps":-1,"picture_effect_id":4,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r051","group_index":5,"group":"Ricoh GR","name":"GR Cross Process","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":2,"creative_style":"Vivid","saturation_steps":2,"contrast_steps":2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":-2,"wb_green_magenta_steps":4,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r052","group_index":5,"group":"Ricoh GR","name":"GR Hi-Contrast B&W","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":3,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":7,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r053","group_index":5,"group":"Ricoh GR","name":"GR Hard Monotone","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":2,"sharpness_steps":2,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r054","group_index":5,"group":"Ricoh GR","name":"GR Soft Monotone","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":-2,"sharpness_steps":-1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r055","group_index":6,"group":"Leica","name":"Leica Contemporary","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":1,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r056","group_index":6,"group":"Leica","name":"Leica Classic","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":-1,"contrast_steps":2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r057","group_index":6,"group":"Leica","name":"Leica Eternal","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-3,"contrast_steps":-1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":3,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r058","group_index":6,"group":"Leica","name":"Leica Monochrom","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":2,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r059","group_index":7,"group":"Hasselblad","name":"Hasselblad HNCS Natural","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-1,"contrast_steps":-1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r060","group_index":8,"group":"Canon / Nikon","name":"Canon Standard","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":1,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":-1,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r061","group_index":8,"group":"Canon / Nikon","name":"Canon Portrait","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":4,"creative_style":"Portrait","saturation_steps":0,"contrast_steps":0,"sharpness_steps":-1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":-1,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r062","group_index":8,"group":"Canon / Nikon","name":"Canon Faithful","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":0,"contrast_steps":0,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r063","group_index":8,"group":"Canon / Nikon","name":"Nikon Flat","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-3,"contrast_steps":-3,"sharpness_steps":-1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":5,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r064","group_index":8,"group":"Canon / Nikon","name":"Nikon Vivid","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":2,"creative_style":"Vivid","saturation_steps":1,"contrast_steps":1,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r065","group_index":9,"group":"Pana / Olympus","name":"Pana L.Monochrome D","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":3,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r066","group_index":9,"group":"Pana / Olympus","name":"Pana L.ClassicNeo","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":3,"creative_style":"Neutral","saturation_steps":-3,"contrast_steps":-1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":2,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r067","group_index":9,"group":"Pana / Olympus","name":"Olympus Pop Art","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":2,"creative_style":"Vivid","saturation_steps":3,"contrast_steps":3,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r068","group_index":9,"group":"Pana / Olympus","name":"Olympus Pale & Light","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":9,"creative_style":"Light","saturation_steps":-3,"contrast_steps":-2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":2,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r069","group_index":10,"group":"Other Stocks","name":"Agfa Vista 200","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":2,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":2,"wb_green_magenta_steps":-1,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r070","group_index":10,"group":"Other Stocks","name":"Agfa Ultra 100","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":2,"creative_style":"Vivid","saturation_steps":3,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r071","group_index":10,"group":"Other Stocks","name":"Polaroid / Instax","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":1,"creative_style":"Standard","saturation_steps":-3,"contrast_steps":-2,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":1,"wb_green_magenta_steps":-2,"picture_effect_id":4,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r072","group_index":11,"group":"Ilford","name":"Ilford HP5","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":1,"sharpness_steps":0,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":1,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r073","group_index":11,"group":"Ilford","name":"Ilford FP4","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":1,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r074","group_index":11,"group":"Ilford","name":"Ilford Delta 100","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":1,"sharpness_steps":1,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r075","group_index":11,"group":"Ilford","name":"Ilford Delta 3200","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":3,"sharpness_steps":-2,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":2,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."},{"id":"r076","group_index":11,"group":"Ilford","name":"Ilford Pan F 50","source_camera":"Sony A6000 PMCA (approximation)","sony_settings":{"creative_style_id":6,"creative_style":"B&W","saturation_steps":0,"contrast_steps":2,"sharpness_steps":2,"white_balance_mode_id":1,"kelvin":null,"wb_amber_blue_steps":0,"wb_green_magenta_steps":0,"picture_effect_id":0,"exposure_bias_third_stops":0,"dro_id":6,"picture_effect_subparameter":0},"calibration":{"status":"not_calibrated","lut3d":null,"reference_profile":null},"implementation_note":"These are Sony CAMERA SETTING values, not Android photo pixel adjustment values."}]};
const PRS_LOOKS={"id":{"r009":{"saturation":1.0,"contrast":1.0,"vibrance":0.015,"shadowCurve":0.0,"highlightCurve":0.0,"warmth":0,"magenta":0,"rationale":"Velvia balanced: clear skin, modestly richer primary reds/greens/blues","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.028,-0.012,0.035,0.015,0.04,-0.005],"monoWeights":null,"balancedSaturation":1.135,"balancedContrast":1.065,"skinProtection":0.17,"shadowDepth":0.025,"wbFraction":1},"r010":{"saturation":0.97,"contrast":0.98,"vibrance":0.04,"shadowCurve":-0.02,"highlightCurve":0.05,"warmth":0.03,"magenta":0.01,"rationale":"Astia: soft portrait contrast and gentle warm skin","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.06,-0.01,-0.03,0.0,-0.03,-0.05],"monoWeights":null},"r011":{"saturation":0.93,"contrast":1.03,"vibrance":0.02,"shadowCurve":0.08,"highlightCurve":0.05,"warmth":-0.01,"magenta":0.01,"rationale":"Classic Chrome: restrained color, deeper shadows, muted blue/magenta","shadowRgb":[-0.006,0.002,0.01],"highlightRgb":[0.008,0.004,-0.003],"sectorSat":[-0.04,-0.06,-0.04,-0.06,-0.22,-0.16],"monoWeights":null},"r012":{"saturation":1.06,"contrast":1.05,"vibrance":0.05,"shadowCurve":0.12,"highlightCurve":0.04,"warmth":0.0,"magenta":0.03,"rationale":"Classic Negative: cyan-green shadows with warmer magenta highlights","shadowRgb":[-0.024,0.016,0.021],"highlightRgb":[0.024,-0.017,0.018],"sectorSat":[0.05,0.06,0.03,0.04,0.03,0.09],"monoWeights":null},"r013":{"saturation":1.0,"contrast":1.0,"vibrance":0.03,"shadowCurve":0.04,"highlightCurve":0.06,"warmth":0.05,"magenta":0.01,"rationale":"Nostalgic Negative: warm amber highlights, calmer deep tones","shadowRgb":[0.004,0.002,-0.001],"highlightRgb":[0.028,0.017,-0.019],"sectorSat":null,"monoWeights":null},"r014":{"saturation":1.01,"contrast":1.03,"vibrance":0.05,"shadowCurve":0.06,"highlightCurve":0.03,"warmth":0.01,"magenta":0.0,"rationale":"Reala Ace: clean tonal separation and restrained saturation","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.01,0.0,0.01,0.0,0.0,0.0],"monoWeights":null},"r015":{"saturation":0.98,"contrast":0.98,"vibrance":0.03,"shadowCurve":-0.02,"highlightCurve":0.04,"warmth":0.03,"magenta":0.0,"rationale":"Pro Neg Std: natural low-key portrait look","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.03,0.0,-0.03,-0.02,-0.02,0.0],"monoWeights":null},"r016":{"saturation":0.98,"contrast":1.06,"vibrance":0.03,"shadowCurve":0.08,"highlightCurve":0.04,"warmth":0.03,"magenta":0.0,"rationale":"Pro Neg Hi: portrait contrast with reserved color","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":null},"r017":{"saturation":0.94,"contrast":0.99,"vibrance":0.0,"shadowCurve":0.0,"highlightCurve":0.08,"warmth":-0.02,"magenta":0.0,"rationale":"Eterna: low saturation, soft highlights, cinematic restraint","shadowRgb":[-0.003,0.002,0.006],"highlightRgb":[0,0,0],"sectorSat":[0.0,-0.03,-0.03,0.0,0.0,-0.04],"monoWeights":null},"r018":{"saturation":0.8,"contrast":1.15,"vibrance":-0.04,"shadowCurve":0.16,"highlightCurve":0.02,"warmth":-0.02,"magenta":0.0,"rationale":"Eterna Bleach Bypass: reduced color, darker blacks, dry contrast","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":null},"r020":{"saturation":1,"contrast":1,"vibrance":0,"shadowCurve":0,"highlightCurve":0,"warmth":0,"magenta":0,"rationale":"Acros yellow filter: blue-sky suppression","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":[0.35,0.55,0.1]},"r021":{"saturation":1,"contrast":1,"vibrance":0,"shadowCurve":0,"highlightCurve":0,"warmth":0,"magenta":0,"rationale":"Acros red filter: darkened blue sky and bright red objects","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":[0.65,0.3,0.05]},"r022":{"saturation":1,"contrast":1,"vibrance":0,"shadowCurve":0,"highlightCurve":0,"warmth":0,"magenta":0,"rationale":"Acros green filter: vegetation and skin-tonality separation","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":[0.16,0.7,0.14]},"r024":{"saturation":0.98,"contrast":0.96,"vibrance":0.03,"shadowCurve":-0.01,"highlightCurve":0.03,"warmth":-0.01,"magenta":0.0,"rationale":"Fuji 400H: airy pastel rendering with cooler greens","shadowRgb":[-0.006,0.006,0.007],"highlightRgb":[0,0,0],"sectorSat":[-0.04,-0.01,0.01,0.0,-0.02,-0.02],"monoWeights":null},"r029":{"saturation":0.98,"contrast":0.95,"vibrance":0.05,"shadowCurve":-0.02,"highlightCurve":0.06,"warmth":0.04,"magenta":0.0,"rationale":"Portra 160: soft contrast, restrained skin-friendly color","shadowRgb":[0,0,0],"highlightRgb":[0.008,0.005,-0.002],"sectorSat":[-0.06,-0.03,-0.03,-0.05,-0.07,-0.04],"monoWeights":null},"r030":{"saturation":1.01,"contrast":0.99,"vibrance":0.06,"shadowCurve":-0.01,"highlightCurve":0.05,"warmth":0.05,"magenta":0.0,"rationale":"Portra 400: balanced warmth and natural skin separation","shadowRgb":[0,0,0],"highlightRgb":[0.012,0.006,-0.007],"sectorSat":[-0.05,0.0,-0.02,-0.04,-0.05,-0.04],"monoWeights":null},"r031":{"saturation":0.99,"contrast":0.97,"vibrance":0.05,"shadowCurve":-0.01,"highlightCurve":0.05,"warmth":0.04,"magenta":0.0,"rationale":"Portra 800: protected highlights with gentle warmth","shadowRgb":[0,0,0],"highlightRgb":[0.008,0.004,-0.003],"sectorSat":null,"monoWeights":null},"r032":{"saturation":1.05,"contrast":1.02,"vibrance":0.08,"shadowCurve":0.03,"highlightCurve":0.03,"warmth":0.07,"magenta":0.0,"rationale":"Gold 200: warm bright snapshots and sunny yellows","shadowRgb":[0,0,0],"highlightRgb":[0.02,0.009,-0.018],"sectorSat":[0.03,0.07,-0.01,-0.03,-0.02,0.0],"monoWeights":null},"r035":{"saturation":1.08,"contrast":1.04,"vibrance":0.1,"shadowCurve":0.06,"highlightCurve":0.03,"warmth":0.02,"magenta":0.0,"rationale":"Ektar 100: vivid, detailed greens and blues","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.0,0.04,0.09,0.09,0.1,0.0],"monoWeights":null},"r036":{"saturation":0.97,"contrast":0.99,"vibrance":0.05,"shadowCurve":0.02,"highlightCurve":0.02,"warmth":0.0,"magenta":0.0,"rationale":"Ektachrome E100: cleaner reversal palette","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.01,0.0,0.0,0.0,0.0,-0.02],"monoWeights":null},"r040":{"saturation":1,"contrast":1,"vibrance":0,"shadowCurve":0,"highlightCurve":0,"warmth":0,"magenta":0,"rationale":"Tri-X 400: classic monochrome tonal weights","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":[0.23,0.69,0.08]},"r047":{"saturation":1.0,"contrast":1.0,"vibrance":0.01,"shadowCurve":0.0,"highlightCurve":0.0,"warmth":0,"magenta":0,"rationale":"GR Positive balanced: lightly richer color, deep-but-detailed shadows, clear skin","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.014,-0.012,-0.025,0.025,0.015,0.02],"monoWeights":null,"balancedSaturation":1.085,"balancedContrast":1.105,"skinProtection":0.14,"shadowDepth":0.15,"wbFraction":0.3},"r048":{"saturation":1.02,"contrast":0.98,"vibrance":0.04,"shadowCurve":0.03,"highlightCurve":0.05,"warmth":0.05,"magenta":0.0,"rationale":"GR Negative Film: quieter vintage warmth and gentle fading","shadowRgb":[-0.005,0.004,0.004],"highlightRgb":[0.012,0.005,-0.009],"sectorSat":null,"monoWeights":null},"r049":{"saturation":0.68,"contrast":1.17,"vibrance":-0.06,"shadowCurve":0.2,"highlightCurve":0.0,"warmth":-0.01,"magenta":0.0,"rationale":"GR Bleach Bypass: desaturated color with assertive blacks","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":null},"r051":{"saturation":1.04,"contrast":1.08,"vibrance":0.05,"shadowCurve":0.08,"highlightCurve":0.02,"warmth":-0.01,"magenta":0.01,"rationale":"GR Cross Processing: shifted greens and blues","shadowRgb":[-0.005,0.016,0.015],"highlightRgb":[0.012,-0.007,0.007],"sectorSat":null,"monoWeights":null},"r052":{"saturation":1,"contrast":1,"vibrance":0,"shadowCurve":0,"highlightCurve":0,"warmth":0,"magenta":0,"rationale":"GR high-contrast B&W: neutral panchromatic base","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":[0.21,0.72,0.07]},"r055":{"saturation":0.98,"contrast":0.96,"vibrance":0.03,"shadowCurve":-0.04,"highlightCurve":0.04,"warmth":0.03,"magenta":0.01,"rationale":"Leica Contemporary: open shadows with refined red complexion","shadowRgb":[0.007,0.004,0.002],"highlightRgb":[0.011,0.004,-0.004],"sectorSat":[-0.02,0.0,-0.02,-0.03,-0.05,0.0],"monoWeights":null},"r056":{"saturation":0.92,"contrast":1.1,"vibrance":0.02,"shadowCurve":0.1,"highlightCurve":0.03,"warmth":0.07,"magenta":0.01,"rationale":"Leica Classic: warm muted color with stronger low-end contrast","shadowRgb":[-0.004,-0.002,0.004],"highlightRgb":[0.018,0.009,-0.012],"sectorSat":[-0.05,-0.04,-0.08,-0.08,-0.1,-0.05],"monoWeights":null},"r057":{"saturation":1.4,"contrast":1.18,"vibrance":0.14,"shadowCurve":0.1,"highlightCurve":0.0,"warmth":0.02,"magenta":0.05,"rationale":"Leica Eternal: bold saturation, strong contrast, magenta energy","shadowRgb":[0.013,-0.01,0.013],"highlightRgb":[0.022,-0.014,0.019],"sectorSat":[0.06,0.02,0.02,0.0,0.04,0.08],"monoWeights":null},"r059":{"saturation":1.07,"contrast":1.02,"vibrance":0.04,"shadowCurve":0.03,"highlightCurve":0.03,"warmth":0.0,"magenta":0.0,"rationale":"HNCS neutral intent only; preserve natural color without obvious cast","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.0,0.0,0.01,0.0,0.01,0.0],"monoWeights":null},"r065":{"saturation":1,"contrast":1,"vibrance":0,"shadowCurve":0,"highlightCurve":0,"warmth":0,"magenta":0,"rationale":"Lumix L.Monochrome D: strong monochrome shadow tone","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":[0.24,0.68,0.08]},"r066":{"saturation":0.97,"contrast":0.99,"vibrance":0.01,"shadowCurve":0.02,"highlightCurve":0.03,"warmth":-0.02,"magenta":0.0,"rationale":"Lumix L.ClassicNeo: muted smoky blue character","shadowRgb":[-0.008,0.004,0.01],"highlightRgb":[0.006,0.001,-0.003],"sectorSat":[-0.04,-0.03,-0.02,-0.01,0.02,-0.05],"monoWeights":null}},"group":{"Fuji Sim":{"saturation":1.0,"contrast":1.02,"vibrance":0.05,"shadowCurve":0.05,"highlightCurve":0.03,"warmth":0.01,"magenta":0.01,"rationale":"Fuji default: filmic separation and slightly cooler chroma","shadowRgb":[-0.004,0.003,0.005],"highlightRgb":[0.006,0.002,-0.003],"sectorSat":null,"monoWeights":null},"Fuji Film":{"saturation":0.99,"contrast":0.98,"vibrance":0.04,"shadowCurve":0.02,"highlightCurve":0.04,"warmth":0.02,"magenta":0.0,"rationale":"Fuji film-stock default: calm pastel color with soft roll-off","shadowRgb":[0,0,0],"highlightRgb":[0.006,0.002,-0.003],"sectorSat":null,"monoWeights":null},"Other Stocks":{"saturation":1.0,"contrast":0.99,"vibrance":0.05,"shadowCurve":0.0,"highlightCurve":0.04,"warmth":0.04,"magenta":0.0,"rationale":"Kodak/stock default: warm highlights and natural skin-friendly rendering","shadowRgb":[0,0,0],"highlightRgb":[0.01,0.004,-0.006],"sectorSat":null,"monoWeights":null},"Ricoh GR":{"saturation":1.06,"contrast":1.09,"vibrance":0.09,"shadowCurve":0.12,"highlightCurve":0.02,"warmth":-0.01,"magenta":0.01,"rationale":"Ricoh GR default: deeper blacks, cool neutral base, stronger color-point separation","shadowRgb":[-0.005,0.0,0.01],"highlightRgb":[0.005,0.001,-0.002],"sectorSat":[0.04,0.01,-0.03,0.02,0.03,0.03],"monoWeights":null},"Leica":{"saturation":0.97,"contrast":1.04,"vibrance":0.03,"shadowCurve":0.06,"highlightCurve":0.02,"warmth":0.05,"magenta":0.01,"rationale":"Leica default: restrained warm elegance with stronger blacks","shadowRgb":[-0.002,-0.001,0.002],"highlightRgb":[0.01,0.004,-0.006],"sectorSat":null,"monoWeights":null},"Hasselblad":{"saturation":1.04,"contrast":1.01,"vibrance":0.03,"shadowCurve":0.02,"highlightCurve":0.02,"warmth":0.0,"magenta":0.0,"rationale":"Hasselblad default: clean neutral, modest saturation, low cast","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.0,0.0,0.01,0.0,0.01,0.0],"monoWeights":null},"Canon / Nikon":{"saturation":1.01,"contrast":1.02,"vibrance":0.04,"shadowCurve":0.03,"highlightCurve":0.03,"warmth":0.03,"magenta":0.0,"rationale":"Canon/Nikon default: clean consumer-camera pop with mild warmth","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":null},"Pana / Olympus":{"saturation":0.99,"contrast":1.01,"vibrance":0.03,"shadowCurve":0.03,"highlightCurve":0.03,"warmth":-0.01,"magenta":0.0,"rationale":"Panasonic/Olympus default: slightly cooler modern digital color","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.0,0.0,0.01,0.01,0.02,0.0],"monoWeights":null},"Ilford":{"saturation":1,"contrast":1,"vibrance":0,"shadowCurve":0,"highlightCurve":0,"warmth":0,"magenta":0,"rationale":"Ilford default monochrome weighting","shadowRgb":null,"highlightRgb":null,"sectorSat":null,"monoWeights":[0.24,0.67,0.09]},"Cine":{"saturation":0.94,"contrast":0.99,"vibrance":0.0,"shadowCurve":-0.01,"highlightCurve":0.06,"warmth":-0.01,"magenta":0.0,"rationale":"Cine default: reduced saturation with highlight protection","shadowRgb":[0,0,0],"highlightRgb":[0.004,0.002,-0.004],"sectorSat":null,"monoWeights":null},"Kodak":{"saturation":1.0,"contrast":0.99,"vibrance":0.05,"shadowCurve":0.0,"highlightCurve":0.04,"warmth":0.04,"magenta":0.0,"rationale":"Kodak/stock default: warm highlights and natural skin-friendly rendering","shadowRgb":[0,0,0],"highlightRgb":[0.01,0.004,-0.006],"sectorSat":null,"monoWeights":null}}};

;
/* Photo Recipe Studio Web 0.5.0: port of Android ColorEngine + FilmFx (v0.5.0)
 * Native math retained; JS Float64/Uint8 rounding and browser color management
 * can yield ±1+ channel differences. Calibration against manufacturer LUTs is unavailable.
 */
'use strict';
const PRSEngine = (() => {
  const clamp=(v,low=0,high=1)=>Math.max(low,Math.min(high,v));
  const clInt=(v,low,high)=>Math.max(low,Math.min(high,v|0));
  const toLin = Float64Array.from({length:256},(_,i)=>{let x=i/255;return x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4);});
  const fromLin = Uint8Array.from({length:8193},(_,i)=>{let x=i/8192;return Math.round(clamp((x<=.0031308?x*12.92:1.055*Math.pow(x,1/2.4)-.055))*255);});
  const encode=v=>fromLin[Math.round(clamp(v)*8192)];
  const tone=(v,con)=>{
    v=clamp(v); if(con===1||v===0||v===1)return v;
    let k=clamp((con-1)*.72,-.38,.23);
    return clamp(v+4*k*v*(1-v)*(2*v-1));
  };
  const highKey=v=>clamp(v+.10*v*(1-v));
  function prepare(recipe, look, strength, assist, meta, p0=false) {
    const p=recipe.sony_settings, style=p.creative_style||'Standard';
    let sat=1,con=1,r=1,g=1,b=1,bw=0,sepia=false;
    const effect=p.picture_effect_id||0;
    if (!effect) {
      if(style==='Portrait'){sat=.97;con=.99;r=1.01;}
      else if(style==='Neutral'){sat=.90;con=.96;}
      else if(style==='Vivid'){sat=1.14;con=1.08;}
      else if(style==='Light'){sat=.96;con=.91;}
      else if(style==='Clear'){sat=1;con=1.07;}
      else if(style==='Deep'){sat=.98;con=1.12;}
      else if(style==='B&W')bw=1;
      else if(style==='Sepia'){bw=1;sepia=true;}
    }
    if(effect===4){sat=.80;con=.91;r=1.035;b=.95;}
    else if(effect===5){sat=.91;con=.92;}
    else if(effect===7){bw=1;con=1.27;}
    // v0.5.2: the two balanced looks do not stack Sony Vivid/+3 with brand saturation.
    // Balanced presets defer chroma until after tone mapping, avoiding linear RGB clipping.
    const originalSat=clamp(sat*(1+(effect?0:.105*p.saturation_steps))*(look?look.saturation:1),0,2.5);
    const postSaturation=p0&&bw===0&&!(look?.balancedSaturation>0)?clamp(1+(originalSat-1)*(originalSat>1?.47:.72),.72,1.18):1;
    const saturation=p0?1:look?.balancedSaturation>0?1:originalSat;
    const contrast=look?.balancedContrast>0?look.balancedContrast:clamp(con*(1+(effect?0:.055*p.contrast_steps))*(look?look.contrast:1),.65,1.75);
    const exposure=look?1:Math.pow(2,p.exposure_bias_third_stops/3);
    const creativeExposure=look?p.exposure_bias_third_stops/3*(look?.balancedSaturation>0?.035:.16):0;
    const kelvinShift=p.white_balance_mode_id===14&&p.kelvin>0?clamp((p.kelvin-5500)/5000,-.6,.6):0;
    const wbScale=assist&&meta.wbMode===1&&[3,4,9,15,16].includes(meta.lightSource)?.80:1;
    const recipeWb=wbScale*(look?.balancedSaturation>0?look.wbFraction:1);
    const amber=(p.wb_amber_blue_steps*.018+kelvinShift*.2)*recipeWb;
    const green=p.wb_green_magenta_steps*.018*recipeWb;
    const dro=p.dro_id>=1&&p.dro_id<=5?p.dro_id*.012:0;
    const weights=look?.monoWeights||[.2126,.7152,.0722];
    const ident=!look&&!effect&&style==='Standard'&&p.saturation_steps===0&&p.contrast_steps===0&&p.sharpness_steps===0&&p.wb_amber_blue_steps===0&&p.wb_green_magenta_steps===0&&p.exposure_bias_third_stops===0&&(!p.kelvin||p.white_balance_mode_id!==14)&&(p.dro_id===0||p.dro_id===6);
    return {strength:clamp(strength),look,style,saturation,contrast,exposure,creativeExposure,p0,postSaturation,
      redGain:clamp(r*(1+amber-green*.4),.5,1.5),greenGain:clamp(g*(1+green),.5,1.5),blueGain:clamp(b*(1-amber-green*.4),.5,1.5),
      dro,bw,weights,sepia,effect,effectSub:p.picture_effect_subparameter,sharp:effect?0:clamp(p.sharpness_steps*.15,-.45,.55),ident};
  }
  function creativeFinish(rr,gg,bb,p) {
    if((rr===0&&gg===0&&bb===0)||(rr===255&&gg===255&&bb===255))return (rr<<16)|(gg<<8)|bb;
    const l=p.look;
    let r=rr/255,g=gg/255,b=bb/255;
    let y=clamp(.2126*r+.7152*g+.0722*b);
    if(p.creativeExposure!==0){const shift=p.creativeExposure*4*y*(1-y);r=clamp(r+shift);g=clamp(g+shift);b=clamp(b+shift);y=clamp(.2126*r+.7152*g+.0722*b);}
    let max=Math.max(r,g,b),min=Math.min(r,g,b),delta=max-min;
    if(l.vibrance!==0&&p.bw===0&&delta>.00001){const factor=clamp(1+l.vibrance*(1-clamp(delta*1.6))*(p.p0?.4:1),.7,1.4);
      r=clamp(y+(r-y)*factor);g=clamp(y+(g-y)*factor);b=clamp(y+(b-y)*factor);max=Math.max(r,g,b);min=Math.min(r,g,b);delta=max-min;}
    if(l.sectorSat&&p.bw===0&&delta>.00001){let h=max===r?(g-b)/delta:max===g?2+(b-r)/delta:4+(r-g)/delta;if(h<0)h+=6;
      const first=Math.floor(h),q=h-first,sects=l.sectorSat;
      const factor=clamp(1+(sects[first]*(1-q)+sects[(first+1)%6]*q)*(p.p0?.55:1),.55,1.48);
      r=clamp(y+(r-y)*factor);g=clamp(y+(g-y)*factor);b=clamp(y+(b-y)*factor);
    }
    const taper=4*y*(1-y);
    if(l.warmth!==0||l.magenta!==0){const warm=l.warmth*taper*.08,mag=l.magenta*taper*.06;
      r=clamp(r+warm+mag);g=clamp(g-warm*.16-mag*.30);b=clamp(b-warm+mag);}
    if(l.shadowRgb){const shadow=1-y;
      r+=taper*(shadow*l.shadowRgb[0]+y*l.highlightRgb[0]);
      g+=taper*(shadow*l.shadowRgb[1]+y*l.highlightRgb[1]);
      b+=taper*(shadow*l.shadowRgb[2]+y*l.highlightRgb[2]);}
    r=clamp(r);g=clamp(g);b=clamp(b);
    y=clamp(.2126*r+.7152*g+.0722*b);
    let y2=y;
    if(l.shadowCurve!==0&&y<.5){const t=1-y/.5;y2-=l.shadowCurve*.18*t*t;}
    if(l.highlightCurve!==0&&y>.5){const t=(y-.5)/.5;y2-=l.highlightCurve*.14*t*t;}
    y2=clamp(y2);
    if(y>.00001&&y2!==y){const scale=y2/y;r=clamp(r*scale);g=clamp(g*scale);b=clamp(b*scale);}
    return (Math.round(r*255)<<16)|(Math.round(g*255)<<8)|Math.round(b*255);
  }
  // v0.5.2 soft primary lift + warm-midtone protection. No face segmentation.
  function balancedFinish(rr,gg,bb,p){
    if((rr===0&&gg===0&&bb===0)||(rr===255&&gg===255&&bb===255))return (rr<<16)|(gg<<8)|bb;
    const l=p.look;let r=rr/255,g=gg/255,b=bb/255;
    let y=clamp(.2126*r+.7152*g+.0722*b);
    if(p.creativeExposure!==0){const shift=p.creativeExposure*4*y*(1-y);r=clamp(r+shift);g=clamp(g+shift);b=clamp(b+shift);}
    const max=Math.max(r,g,b),min=Math.min(r,g,b),delta=max-min;
    y=clamp(.2126*r+.7152*g+.0722*b);
    if(delta>.00001&&p.bw===0){
      let hue=max===r?(g-b)/delta:max===g?2+(b-r)/delta:4+(r-g)/delta;
      if(hue<0)hue+=6;
      const first=Math.floor(hue),q=hue-first,sector=l.sectorSat[first]*(1-q)+l.sectorSat[(first+1)%6]*q;
      const chroma=delta/Math.max(max,.00001);
      const warmHue=clamp((hue-.12)/.23)*clamp((1.05-hue)/.25);
      const skin=warmHue*clamp((y-.24)/.20)*clamp((.95-y)/.18)*clamp((chroma-.07)/.08)*clamp((.75-chroma)/.20);
      const mildVibrance=l.vibrance*(1-clamp(delta*1.8));
      let gain=clamp(l.balancedSaturation+sector+mildVibrance-l.skinProtection*skin,.78,1.17);
      if(gain>1)gain=1+(gain-1)*(1-.72*max);
      r=clamp(y+(r-y)*gain);g=clamp(y+(g-y)*gain);b=clamp(y+(b-y)*gain);
    }
    y=clamp(.2126*r+.7152*g+.0722*b);
    if(y>0&&y<.55&&l.shadowDepth>0){
      const lift=l.shadowDepth*.60*y*(1-y)*((.55-y)/.55);
      const scale=clamp((y-lift)/y);
      r*=scale;g*=scale;b*=scale;
    }
    return (Math.round(clamp(r)*255)<<16)|(Math.round(clamp(g)*255)<<8)|Math.round(clamp(b)*255);
  }
  // P0: display-referred gamut-aware chroma shift, matching ColorEngine.java.
  function p0Chroma(rgb,target){
    let r=(rgb>>>16&255)/255,g=(rgb>>>8&255)/255,b=(rgb&255)/255;
    const max=Math.max(r,g,b),min=Math.min(r,g,b);if(max-min<.008)return rgb;
    const y=clamp(.2126*r+.7152*g+.0722*b);let gain=target;
    if(gain>1)gain=1+(gain-1)*(1-.72*max);
    if(gain>1){if(max>y)gain=Math.min(gain,(1-y)/(max-y));if(min<y)gain=Math.min(gain,y/(y-min));}
    return (Math.round(clamp(y+(r-y)*gain)*255)<<16)|(Math.round(clamp(y+(g-y)*gain)*255)<<8)|Math.round(clamp(y+(b-y)*gain)*255);
  }
  // P0: neutral patch and warm-color midtone protection; not face recognition.
  function p0SubjectGuard(rgb,before,r0,g0,b0){
    let r=(rgb>>>16&255)/255,g=(rgb>>>8&255)/255,b=(rgb&255)/255;
    const smx=Math.max(r0,g0,b0),smn=Math.min(r0,g0,b0);
    if(smx-smn<=3){const y=clamp(.2126*r+.7152*g+.0722*b);
      return (Math.round(clamp(y+(r-y)*.32)*255)<<16)|(Math.round(clamp(y+(g-y)*.32)*255)<<8)|Math.round(clamp(y+(b-y)*.32)*255);}
    const mx=smx/255,mn=smn/255,d=mx-mn;if(d<.025)return rgb;
    const rr=r0/255,gg=g0/255,bb=b0/255;
    let h=mx===rr?(gg-bb)/d:mx===gg?2+(bb-rr)/d:4+(rr-gg)/d;
    if(h<0)h+=6;
    const sat=d/Math.max(mx,.0001),lum=.2126*rr+.7152*gg+.0722*bb;
    const skin=clamp((h-.12)/.22)*clamp((1.08-h)/.30)*clamp((lum-.20)/.23)*clamp((.95-lum)/.20)
      *clamp((sat-.06)/.11)*clamp((.72-sat)/.20);
    if(skin<=.0001)return rgb;
    const br=(before>>>16&255)/255,bg=(before>>>8&255)/255,bbl=(before&255)/255,mix=skin*.30;
    return (Math.round(clamp(r*(1-mix)+br*mix)*255)<<16)|(Math.round(clamp(g*(1-mix)+bg*mix)*255)<<8)|Math.round(clamp(b*(1-mix)+bbl*mix)*255);
  }
  // Film-specific P1 profiles are interpretations of published characteristics,
  // NOT official LUTs. P1 is applied ONLY with brand look and P0 enabled.
  const P1_PROFILES = {"r009":{"name":"Fuji Velvia","legacyMix":0.94,"sat":1.05,"toe":0.12,"shoulder":0.02,"highlight":0.03,"warm":0,"magenta":0,"sector":[0.035,0.015,0.04,0.025,0.035,0],"skinProtect":0.18},"r011":{"name":"Fuji Classic Chrome","legacyMix":0.6,"sat":0.91,"toe":0.09,"shoulder":0.045,"highlight":0.055,"warm":-0.008,"magenta":0,"sector":[-0.035,-0.04,-0.055,-0.06,-0.07,-0.05],"skinProtect":0.12},"r012":{"name":"Fuji Classic Negative","legacyMix":0.7,"sat":1.01,"toe":0.14,"shoulder":0.09,"highlight":0.02,"warm":-0.015,"magenta":0.012,"sector":[0.03,0.02,-0.025,0,0,0.02],"skinProtect":0.08},"r013":{"name":"Fuji Nostalgic Negative","legacyMix":0.72,"sat":0.98,"toe":0.025,"shoulder":0.025,"highlight":0.025,"warm":0.018,"magenta":0,"sector":[0.015,0.018,-0.025,-0.02,-0.01,0],"skinProtect":0.12},"r014":{"name":"Fuji Reala Ace","legacyMix":0.54,"sat":0.97,"toe":0.02,"shoulder":-0.025,"highlight":0.075,"warm":0,"magenta":0,"sector":[-0.025,-0.025,-0.045,-0.025,-0.03,-0.03],"skinProtect":0.2},"r017":{"name":"Fuji Eterna","legacyMix":0.55,"sat":0.92,"toe":0.015,"shoulder":-0.03,"highlight":0.11,"warm":-0.007,"magenta":0,"sector":[-0.035,-0.025,-0.025,-0.02,-0.03,-0.04],"skinProtect":0.16},"r018":{"name":"Fuji Eterna Bleach Bypass","legacyMix":0.65,"sat":0.78,"toe":0.16,"shoulder":0.075,"highlight":0.045,"warm":-0.012,"magenta":0,"sector":[-0.04,-0.04,-0.04,-0.035,-0.04,-0.04],"skinProtect":0.09},"r029":{"name":"Kodak Portra 160","legacyMix":0.57,"sat":0.94,"toe":-0.015,"shoulder":-0.055,"highlight":0.075,"warm":0.018,"magenta":0,"sector":[-0.05,-0.04,-0.045,-0.055,-0.055,-0.035],"skinProtect":0.27},"r030":{"name":"Kodak Portra 400","legacyMix":0.6,"sat":0.99,"toe":0.0,"shoulder":-0.025,"highlight":0.075,"warm":0.017,"magenta":0,"sector":[-0.025,-0.025,-0.035,-0.035,-0.035,-0.02],"skinProtect":0.28},"r031":{"name":"Kodak Portra 800","legacyMix":0.63,"sat":0.96,"toe":-0.01,"shoulder":-0.045,"highlight":0.09,"warm":0.024,"magenta":0,"sector":[-0.025,-0.01,-0.025,-0.03,-0.03,-0.025],"skinProtect":0.26},"r032":{"name":"Kodak Gold 200","legacyMix":0.7,"sat":1.035,"toe":0.065,"shoulder":0.03,"highlight":0.065,"warm":0.024,"magenta":0,"sector":[0.035,0.03,-0.03,-0.04,-0.045,-0.005],"skinProtect":0.18},"r035":{"name":"Kodak Ektar 100","legacyMix":0.56,"sat":1.07,"toe":0.06,"shoulder":0.07,"highlight":0.035,"warm":0,"magenta":0,"sector":[0.035,0.0,0.055,0.04,0.055,0.015],"skinProtect":0.2},"r036":{"name":"Kodak Ektachrome E100","legacyMix":0.57,"sat":1.025,"toe":0.04,"shoulder":0.02,"highlight":0.055,"warm":-0.003,"magenta":0,"sector":[0.02,0.005,0.015,0.025,0.035,-0.01],"skinProtect":0.27},"r047":{"name":"Ricoh GR Positive","legacyMix":0.86,"sat":1.01,"toe":0.13,"shoulder":0.04,"highlight":0.035,"warm":0,"magenta":0,"sector":[0.012,-0.01,-0.01,0.02,0.025,0.015],"skinProtect":0.29},"r048":{"name":"Ricoh GR Negative","legacyMix":0.58,"sat":0.96,"toe":-0.025,"shoulder":-0.025,"highlight":0.065,"warm":0.012,"magenta":0,"sector":[-0.035,-0.035,-0.025,-0.03,-0.04,-0.03],"skinProtect":0.18},"r049":{"name":"Ricoh GR Bleach Bypass","legacyMix":0.68,"sat":0.8,"toe":0.17,"shoulder":0.08,"highlight":0.035,"warm":-0.005,"magenta":0,"sector":[-0.05,-0.05,-0.05,-0.045,-0.05,-0.05],"skinProtect":0.12},"r051":{"name":"Ricoh GR Cross Process","legacyMix":0.65,"sat":1.04,"toe":0.07,"shoulder":0.04,"highlight":0.055,"warm":-0.007,"magenta":0.008,"sector":[0.015,-0.03,0.01,0.035,0.05,0.025],"skinProtect":0.13},"r055":{"name":"Leica Contemporary","legacyMix":0.59,"sat":0.98,"toe":-0.015,"shoulder":-0.04,"highlight":0.065,"warm":0.012,"magenta":0.008,"sector":[-0.025,-0.025,-0.025,-0.025,-0.035,-0.01],"skinProtect":0.27},"r056":{"name":"Leica Classic","legacyMix":0.68,"sat":0.92,"toe":0.1,"shoulder":0.04,"highlight":0.055,"warm":0.025,"magenta":0,"sector":[-0.045,-0.04,-0.045,-0.06,-0.055,-0.04],"skinProtect":0.18},"r057":{"name":"Leica Eternal","legacyMix":0.64,"sat":1.065,"toe":0.12,"shoulder":0.095,"highlight":0.025,"warm":0.002,"magenta":0.016,"sector":[0.035,0.01,0.005,0.01,0.03,0.035],"skinProtect":0.14}};
  function p1Finish(rgb,preCreative,sourceRgb,profile){
    if(!profile||rgb===0||rgb===0xffffff)return rgb;
    let r=((rgb>>>16)&255)/255,g=((rgb>>>8)&255)/255,b=(rgb&255)/255;
    const nr=((preCreative>>>16)&255)/255,ng=((preCreative>>>8)&255)/255,nb=(preCreative&255)/255;
    const mix=profile.legacyMix;
    r=nr*(1-mix)+r*mix;g=ng*(1-mix)+g*mix;b=nb*(1-mix)+b*mix;
    let y=clamp(.2126*r+.7152*g+.0722*b);
    // Gentle toe and highlight compression with anchored pure black and pure white.
    let y2=y;
    if(y<.5){const t=(.5-y)/.5;y2-=profile.toe*.24*t*t*y;}
    else{const t=(y-.5)/.5;y2-=profile.shoulder*.18*t*t*(1-y);}
    y2+=profile.highlight*4*y*(1-y)*.032;
    y2=clamp(y2);
    if(y>.0001&&y2!==y){const ratio=y2/y;r*=ratio;g*=ratio;b*=ratio;}
    y=clamp(.2126*r+.7152*g+.0722*b);
    const peak=Math.max(r,g,b),low=Math.min(r,g,b),d=peak-low;
    if(d>.014){
      let h=peak===r?(g-b)/d:peak===g?2+(b-r)/d:4+(r-g)/d;if(h<0)h+=6;
      const k=Math.floor(h),t=h-k;
      const selective=profile.sector[k]*(1-t)+profile.sector[(k+1)%6]*t;
      const inputR=((sourceRgb>>>16)&255)/255,inputG=((sourceRgb>>>8)&255)/255,inputB=(sourceRgb&255)/255;
      const siMax=Math.max(inputR,inputG,inputB),siMin=Math.min(inputR,inputG,inputB),sd=siMax-siMin;
      let sh=siMax===inputR?(inputG-inputB)/Math.max(sd,.00001):siMax===inputG?2+(inputB-inputR)/Math.max(sd,.00001):4+(inputR-inputG)/Math.max(sd,.00001);
      if(sh<0)sh+=6;
      const sy=.2126*inputR+.7152*inputG+.0722*inputB,ss=sd/Math.max(siMax,.0001);
      // broad warm-object protection; not skin/face segmentation.
      const skin=clamp((sh-.12)/.25)*clamp((1.08-sh)/.28)*clamp((sy-.22)/.23)*clamp((.95-sy)/.22)*clamp((ss-.07)/.12)*clamp((.74-ss)/.24);
      let gain=clamp(profile.sat+selective-profile.skinProtect*skin,.74,1.17);
      if(gain>1){gain=1+(gain-1)*(1-.75*peak);
        if(peak>y)gain=Math.min(gain,(1-y)/(peak-y));
        if(low<y)gain=Math.min(gain,y/(y-low));}
      r=clamp(y+(r-y)*gain);g=clamp(y+(g-y)*gain);b=clamp(y+(b-y)*gain);
    }
    const envelope=4*y*(1-y),warm=profile.warm*envelope,magenta=profile.magenta*envelope;
    // Restrict hue cast to non-neutral colors; preserve neutral pavement & whites.
    const chromaMask=clamp(d/.14);
    r=clamp(r+(warm+magenta)*chromaMask*.22);
    g=clamp(g-warm*chromaMask*.04-magenta*chromaMask*.10);
    b=clamp(b-warm*chromaMask*.21+magenta*chromaMask*.14);
    return (Math.round(r*255)<<16)|(Math.round(g*255)<<8)|Math.round(b*255);
  }
  function pixelPacked(r0,g0,b0,p) {
    if(p.strength<=0||p.ident)return (r0<<16)|(g0<<8)|b0;
    let r=toLin[r0]*p.redGain*p.exposure,g=toLin[g0]*p.greenGain*p.exposure,b=toLin[b0]*p.blueGain*p.exposure;
    let lum=r*.2126+g*.7152+b*.0722;
    if(p.dro>0){let y=clamp(lum),lift=p.dro*(1-y)*(1-y)*Math.sqrt(y);r+=lift;g+=lift;b+=lift;lum+=lift;}
    r=lum+(r-lum)*p.saturation;g=lum+(g-lum)*p.saturation;b=lum+(b-lum)*p.saturation;
    if(p.bw>0){const y=r*p.weights[0]+g*p.weights[1]+b*p.weights[2];r=y;g=y;b=y;
      if(p.sepia){r*=1.10;g*=1.035;b*=.80;}}
    if(p.effect===5){r=highKey(r);g=highKey(g);b=highKey(b);}
    if(p.p0){const peak=Math.max(r,g,b);if(peak>1){r/=peak;g/=peak;b/=peak;}}
    let rr=Math.round(tone(encode(r)/255,p.contrast)*255);
    let gg=Math.round(tone(encode(g)/255,p.contrast)*255);
    let bb=Math.round(tone(encode(b)/255,p.contrast)*255);
    if(p.effect===5){const y=.2126*(rr/255)+.7152*(gg/255)+.0722*(bb/255),d=.018*4*y*(1-y),sub=p.effectSub;
      let R=rr/255,G=gg/255,B=bb/255;
      if(sub===1){R+=d;G-=d*.5;B+=d*.4;}
      else if(sub===2){R-=d*.5;G+=d;B-=d*.5;}
      else{R-=d*.3;G+=d*.15;B+=d;}
      rr=Math.round(clamp(R)*255);gg=Math.round(clamp(G)*255);bb=Math.round(clamp(B)*255);}
    let packed=(rr<<16)|(gg<<8)|bb;
    if(p.p0&&p.postSaturation!==1)packed=p0Chroma(packed,p.postSaturation);
    const beforeLook=packed;
    if(p.look&&p.bw===0){packed=p.look.balancedSaturation>0?balancedFinish(packed>>>16&255,packed>>>8&255,packed&255,p):creativeFinish(packed>>>16&255,packed>>>8&255,packed&255,p);}
    if(p.p0)packed=p0SubjectGuard(packed,beforeLook,r0,g0,b0);
    if(p.p0&&p.p1&&p.look&&p.bw===0&&p.profile)packed=p1Finish(packed,beforeLook,(r0<<16)|(g0<<8)|b0,p.profile);
    rr=packed>>>16&255;gg=packed>>>8&255;bb=packed&255;
    if(p.strength>=1)return (rr<<16)|(gg<<8)|bb;
    const inv=1-p.strength;
    return (Math.round(r0*inv+rr*p.strength)<<16)|(Math.round(g0*inv+gg*p.strength)<<8)|Math.round(b0*inv+bb*p.strength);
  }
  function pixel(r,g,b,p){const c=pixelPacked(r,g,b,p);return [c>>>16&255,c>>>8&255,c&255];}
  // Deterministic Java integer hash, same seeds and constants as FilmFx.java.
  function white(ix,iy,seed){let h=(seed^(Math.imul(ix,0x1f123bb5))^(Math.imul(iy,0x5f356495)))|0;
    h^=h>>>16;h=Math.imul(h,0x7feb352d);h^=h>>>15;h=Math.imul(h,0x846ca68b);h^=h>>>16;
    return ((h>>>8)&0xffffff)/8388607.5-1;}
  function noise(x,y,width,height,size,seed){
    const norm=1600/Math.max(1,Math.max(width,height)),cell=.9+size*.046;
    const px=(x+.5)*norm/cell,py=(y+.5)*norm/cell,ix=Math.floor(px),iy=Math.floor(py);
    let fx=px-ix,fy=py-iy;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);
    const a=white(ix,iy,seed),b=white(ix+1,iy,seed),c=white(ix,iy+1,seed),d=white(ix+1,iy+1,seed);
    return (a+(b-a)*fx)*(1-fy)+(c+(d-c)*fx)*fy;
  }
  function boxBlur(input,w,h,r,horizontal){
    const out=new Float32Array(input.length),div=1/(2*r+1);
    if(horizontal){for(let y=0;y<h;y++){const base=y*w;let sum=0;for(let k=-r;k<=r;k++)sum+=input[base+clInt(k,0,w-1)];
      for(let x=0;x<w;x++){out[base+x]=sum*div;sum+=input[base+clInt(x+r+1,0,w-1)]-input[base+clInt(x-r,0,w-1)];}}}
    else{for(let x=0;x<w;x++){let sum=0;for(let k=-r;k<=r;k++)sum+=input[clInt(k,0,h-1)*w+x];
      for(let y=0;y<h;y++){out[y*w+x]=sum*div;sum+=input[clInt(y+r+1,0,h-1)*w+x]-input[clInt(y-r,0,h-1)*w+x];}}}
    return out;
  }
  function haloMap(rgba,w,h,radius){
    const scale=Math.min(1,720/Math.max(w,h)),mw=Math.max(1,Math.round(w*scale)),mh=Math.max(1,Math.round(h*scale));
    const mask=new Float32Array(mw*mh);
    for(let y=0;y<h;y++){const by=Math.min(mh-1,Math.floor(y*mh/h))*mw;
      for(let x=0;x<w;x++){const i=(y*w+x)*4;if(rgba[i+3]===0)continue;
        const bright=(.26*rgba[i]+.66*rgba[i+1]+.08*rgba[i+2])/255;
        let v=clamp((bright-.69)/.27);const value=v*v*(3-2*v)*(rgba[i+3]/255);
        const at=by+Math.min(mw-1,Math.floor(x*mw/w));if(value>mask[at])mask[at]=value;}}
    const r=Math.max(1,Math.round(2+radius*.12)),blurred=boxBlur(boxBlur(mask,mw,mh,r,true),mw,mh,r,false);
    return {mw,mh,mask,blurred};
  }
  function sampleHalo(map,x,y,w,h){const {mw,mh,mask,blurred}=map;
    const fx=clamp((x+.5)*mw/w-.5,0,mw-1),fy=clamp((y+.5)*mh/h-.5,0,mh-1);
    const x0= Math.floor(fx),x1=Math.min(mw-1,x0+1),y0=Math.floor(fy),y1=Math.min(mh-1,y0+1);
    const ax=fx-x0,ay=fy-y0;
    const interp=arr=>{const a=arr[y0*mw+x0]*(1-ax)+arr[y0*mw+x1]*ax;const b=arr[y1*mw+x0]*(1-ax)+arr[y1*mw+x1]*ax;return a*(1-ay)+b*ay;};
    return clamp(interp(blurred)-.6*interp(mask));
  }
  // Offline 3D .cube parser: RED varies fastest, then GREEN, then BLUE.
  // Interprets input/output as display-referred sRGB, not camera RAW data.
  function parseCube(text){
    if(typeof text!=='string'||text.length>8*1024*1024)throw new Error('LUT 크기는 8MB 이하만 지원합니다.');
    let size=0,domainMin=[0,0,0],domainMax=[1,1,1],entries=[],dataStarted=false;
    for(const raw of text.split(/\r?\n/)){
      const line=raw.split('#')[0].trim();if(!line)continue;
      const parts=line.split(/\s+/),name=parts[0].toUpperCase();
      if(name==='TITLE')continue;
      if(name==='LUT_1D_SIZE')throw new Error('1D LUT는 지원하지 않습니다. 3D .cube 파일을 선택하세요.');
      if(name==='LUT_3D_SIZE'){if(dataStarted||size)throw new Error('중복된 LUT 크기');size=Number(parts[1]);if(!Number.isInteger(size)||size<2||size>65)throw new Error('LUT_3D_SIZE는 2~65만 지원합니다.');continue;}
      if(name==='DOMAIN_MIN'||name==='DOMAIN_MAX'){
        if(dataStarted||parts.length!==4)throw new Error('DOMAIN 형식 오류');
        const vals=parts.slice(1).map(Number);if(vals.some(v=>!Number.isFinite(v)))throw new Error('DOMAIN 숫자 오류');
        if(name==='DOMAIN_MIN')domainMin=vals;else domainMax=vals;continue;
      }
      if(!size)throw new Error('LUT_3D_SIZE가 없습니다.');
      if(parts.length!==3||parts.some(v=>!Number.isFinite(Number(v))))throw new Error('LUT 데이터 숫자 오류');
      dataStarted=true;for(const part of parts){const n=Number(part);if(n<-.001||n>1.001)throw new Error('LUT 출력은 0~1 sRGB 범위여야 합니다.');entries.push(Math.min(1,Math.max(0,n)));}
      if(entries.length>size*size*size*3)throw new Error('LUT 데이터가 선언된 크기를 초과합니다.');
    }
    if(!size||entries.length!==size*size*size*3)throw new Error('LUT 항목 수가 LUT_3D_SIZE³과 일치하지 않습니다.');
    if(domainMin.some((v,i)=>v>=domainMax[i]))throw new Error('DOMAIN_MIN은 DOMAIN_MAX보다 작아야 합니다.');
    return {size,data:new Float32Array(entries),domainMin,domainMax};
  }
  // Trilinear .cube evaluation; no per-pixel temporary array allocations.
  function lutPixel(rgb,lut,weight){
    if(!lut||weight<=0)return rgb;
    const rr=(rgb>>>16&255)/255,gg=(rgb>>>8&255)/255,bb=(rgb&255)/255;
    const sz=lut.size,edge=sz-1,dm=lut.domainMin,dxm=lut.domainMax,table=lut.data;
    const cx=clamp((rr-dm[0])/(dxm[0]-dm[0]))*edge;
    const cy=clamp((gg-dm[1])/(dxm[1]-dm[1]))*edge;
    const cz=clamp((bb-dm[2])/(dxm[2]-dm[2]))*edge;
    const x=Math.floor(cx),y=Math.floor(cy),z=Math.floor(cz);
    const xx=Math.min(edge,x+1),yy=Math.min(edge,y+1),zz=Math.min(edge,z+1);
    const tx=cx-x,ty=cy-y,tz=cz-z;
    const a=3*(x+sz*(y+sz*z)),b=3*(xx+sz*(y+sz*z));
    const c=3*(x+sz*(yy+sz*z)),d=3*(xx+sz*(yy+sz*z));
    const e=3*(x+sz*(y+sz*zz)),f=3*(xx+sz*(y+sz*zz));
    const g=3*(x+sz*(yy+sz*zz)),h=3*(xx+sz*(yy+sz*zz));
    const t0=(1-tx),t1=(1-ty),t2=(1-tz),weight0=clamp(weight);
    const v0=(table[a]*t0+table[b]*tx)*t1+(table[c]*t0+table[d]*tx)*ty;
    const v1=(table[e]*t0+table[f]*tx)*t1+(table[g]*t0+table[h]*tx)*ty;
    const r=clamp(rr*(1-weight0)+(v0*t2+v1*tz)*weight0);
    const w0=(table[a+1]*t0+table[b+1]*tx)*t1+(table[c+1]*t0+table[d+1]*tx)*ty;
    const w1=(table[e+1]*t0+table[f+1]*tx)*t1+(table[g+1]*t0+table[h+1]*tx)*ty;
    const green=clamp(gg*(1-weight0)+(w0*t2+w1*tz)*weight0);
    const q0=(table[a+2]*t0+table[b+2]*tx)*t1+(table[c+2]*t0+table[d+2]*tx)*ty;
    const q1=(table[e+2]*t0+table[f+2]*tx)*t1+(table[g+2]*t0+table[h+2]*tx)*ty;
    const blue=clamp(bb*(1-weight0)+(q0*t2+q1*tz)*weight0);
    return (Math.round(r*255)<<16)|(Math.round(green*255)<<8)|Math.round(blue*255);
  }
  const nextFrame=()=>new Promise(resolve=>requestAnimationFrame(resolve));
  async function process(imageData,recipe,look,opts,metadata={},cancel=()=>false,report=()=>{}) {
    const w=imageData.width,h=imageData.height,source=imageData.data;
    const out=new Uint8ClampedArray(source),p=prepare(recipe,look,opts.strength/100,opts.exif,metadata,opts.p0===true);
    p.profile=(opts.p1&&opts.p0&&look)?(P1_PROFILES[recipe.id]||null):null;p.p1=!!p.profile;
    const fx=opts.fx||{grain:0,grainSize:30,grainSharp:0,halation:0,haloRadius:35};
    // Native sharpens pixel from ORIGINAL neighbor data before color mapping.
    if(!p.ident&&p.strength>0){for(let y=0;y<h;y++){
      if(cancel())return null;
      for(let x=0;x<w;x++){const idx=(y*w+x)*4;
        let r=source[idx],g=source[idx+1],b=source[idx+2];
        if(p.sharp!==0){const up=(Math.max(0,y-1)*w+x)*4,down=(Math.min(h-1,y+1)*w+x)*4,
          left=(y*w+Math.max(0,x-1))*4,right=(y*w+Math.min(w-1,x+1))*4;
          const sharper=(v,c)=>clamp(Math.round(v+(v-Math.floor((source[up+c]+source[down+c]+source[left+c]+source[right+c])/4))*p.sharp),0,255);
          r=sharper(r,0);g=sharper(g,1);b=sharper(b,2);}
        const c=pixelPacked(r,g,b,p);out[idx]=c>>>16&255;out[idx+1]=c>>>8&255;out[idx+2]=c&255;
      }
      if(y%48===0){report(.68*y/h);await nextFrame();}
    }}
    // Apply an optional user-calibrated LUT after camera color and before grain/halation.
    const lut=opts.lut,amount=clamp(Number(opts.lutStrength||0)/100);
    if(lut&&amount>0){
      for(let y=0;y<h;y++){
        if(cancel())return null;
        for(let x=0;x<w;x++){
          const i=(y*w+x)*4;if(out[i+3]===0)continue;
          const color=lutPixel((out[i]<<16)|(out[i+1]<<8)|out[i+2],lut,amount);
          out[i]=color>>>16&255;out[i+1]=color>>>8&255;out[i+2]=color&255;
        }
        if(y%64===0){report(.70*y/h);await nextFrame();}
      }
    }
    if(fx.grain>0||fx.halation>0){
      const map=fx.halation>0?haloMap(out,w,h,fx.haloRadius):null;
      const grainScale=opts.exif?(metadata.iso>=3200?.55:metadata.iso>=1600?.68:metadata.iso>=800?.82:1):1;
      const haloScale=opts.exif&&((metadata.flash&1)===1)? .72:1;
      for(let y=0;y<h;y++){
        if(cancel())return null;
        for(let x=0;x<w;x++){const i=(y*w+x)*4;if(out[i+3]===0)continue;
          let r=out[i]/255,g=out[i+1]/255,b=out[i+2]/255;
          if(map){const glow=sampleHalo(map,x,y,w,h)*(fx.halation/100)*haloScale*.5;
            r+=(1-r)*glow;g+=(1-g)*glow*.36;b+=(1-b)*glow*.09;}
          if(fx.grain>0){const yL=clamp(.2126*r+.7152*g+.0722*b),env=.10+.9*Math.sqrt(Math.max(0,4*yL*(1-yL)));
            const amp=.105*(fx.grain/100)*grainScale*env;
            const n=noise(x,y,w,h,fx.grainSize,0x51f0a),hf=noise(x,y,w,h,Math.max(0,Math.floor(fx.grainSize/2)),0x129ab);
            const base=n*.8+hf*.2;
            const edge=(hf-n)*.50*((fx.grainSharp||0)/100);
            const d=amp*(base+edge);r+=d;g+=d;b+=d;}
          out[i]=Math.round(clamp(r)*255);out[i+1]=Math.round(clamp(g)*255);out[i+2]=Math.round(clamp(b)*255);
        }
        if(y%48===0){report(.68+.32*y/h);await nextFrame();}
      }
    }
    report(1);
    return new ImageData(out,w,h);
  }
  return {prepare,pixel,process,tone,noise,haloMap,sampleHalo,p1Profiles:P1_PROFILES,parseCube,lutPixel};
})();
if(typeof module!=='undefined')module.exports=PRSEngine;

;
/* Web app UI: pure client-side, no network calls or external dependencies. */
'use strict';
(() => {
  const byId=id=>document.getElementById(id);
  const processor=PRSEngine;
  if (!processor || typeof processor.process!=='function' || typeof processor.prepare!=='function') {
    throw new Error('컬러 엔진 로딩 실패: 프로세서 초기화가 완료되지 않았습니다.');
  }
  const catalog=PRS_SOURCE;
  const looks=PRS_LOOKS;
  const allRecipes=catalog.recipes;
  const groups=catalog.groups;
  // P2 opt-in qualitative group split; original 77 Sony preset values unchanged.
  const P2_LOOKS={"r024":{"saturation":0.96,"contrast":0.98,"vibrance":0.01,"shadowCurve":-0.015,"highlightCurve":0.035,"warmth":-0.012,"magenta":0,"rationale":"Fuji 400H airy pastel greens · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.015,-0.01,0.005,-0.005,-0.01,-0.01],"monoWeights":null},"r025":{"saturation":1.065,"contrast":1.045,"vibrance":0.04,"shadowCurve":0.05,"highlightCurve":0.015,"warmth":0,"magenta":0,"rationale":"Fuji Fortia 50 vivid reversal · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.035,0.015,0.035,0.02,0.04,0.015],"monoWeights":null},"r026":{"saturation":1.015,"contrast":1.0,"vibrance":0.01,"shadowCurve":0.012,"highlightCurve":0.025,"warmth":0.009,"magenta":0,"rationale":"Fuji Superia 400 compact print · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.01,0,0,0.005,0.01,0],"monoWeights":null},"r027":{"saturation":1.0,"contrast":0.975,"vibrance":0,"shadowCurve":-0.018,"highlightCurve":0.04,"warmth":0.007,"magenta":0,"rationale":"Fuji C200 everyday color negative · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.008,-0.01,0.006,-0.004,-0.003,-0.008],"monoWeights":null},"r028":{"saturation":0.985,"contrast":1.025,"vibrance":0,"shadowCurve":0.025,"highlightCurve":0.03,"warmth":0.004,"magenta":0.006,"rationale":"Fuji Natura 1600 muted night color · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[0,0,0,0.01,0.01,0.01],"monoWeights":null},"r060":{"saturation":1.015,"contrast":1.015,"vibrance":0.013,"shadowCurve":0.012,"highlightCurve":0.02,"warmth":0.012,"magenta":0,"rationale":"Canon Standard balanced skin and color · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.005,0.002,-0.006,0,0.002,0],"monoWeights":null},"r061":{"saturation":0.975,"contrast":0.985,"vibrance":0,"shadowCurve":-0.018,"highlightCurve":0.045,"warmth":0.014,"magenta":0,"rationale":"Canon Portrait gentle warm skin · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.03,-0.012,-0.015,-0.012,-0.025,-0.012],"monoWeights":null},"r062":{"saturation":0.965,"contrast":0.97,"vibrance":0,"shadowCurve":-0.02,"highlightCurve":0.045,"warmth":0,"magenta":0,"rationale":"Canon Faithful restrained neutral intent · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.022,-0.025,-0.022,-0.022,-0.022,-0.022],"monoWeights":null},"r063":{"saturation":0.86,"contrast":0.86,"vibrance":0,"shadowCurve":-0.06,"highlightCurve":0.1,"warmth":0,"magenta":0,"rationale":"Nikon Flat low-contrast grading base · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.03,-0.03,-0.03,-0.03,-0.03,-0.03],"monoWeights":null},"r064":{"saturation":1.055,"contrast":1.055,"vibrance":0.025,"shadowCurve":0.045,"highlightCurve":0.025,"warmth":0,"magenta":0,"rationale":"Nikon Vivid lively primaries · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.025,0.018,0.025,0.018,0.025,0.02],"monoWeights":null},"r066":{"saturation":0.95,"contrast":1.02,"vibrance":0,"shadowCurve":0.035,"highlightCurve":0.04,"warmth":-0.016,"magenta":0,"rationale":"Panasonic L.ClassicNeo muted blue · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.01,-0.012,-0.018,-0.012,0.022,-0.015],"monoWeights":null},"r067":{"saturation":1.1,"contrast":1.08,"vibrance":0.04,"shadowCurve":0.07,"highlightCurve":0.02,"warmth":0.005,"magenta":0.012,"rationale":"Olympus Pop Art amplified vivid color · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.055,0.025,0.04,0.055,0.045,0.048],"monoWeights":null},"r068":{"saturation":0.88,"contrast":0.87,"vibrance":0,"shadowCurve":-0.04,"highlightCurve":0.08,"warmth":0.008,"magenta":0,"rationale":"Olympus Pale Light gentle pastel · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.03,-0.045,-0.045,-0.03,-0.04,-0.03],"monoWeights":null},"r069":{"saturation":0.99,"contrast":0.99,"vibrance":0,"shadowCurve":0.01,"highlightCurve":0.045,"warmth":0.013,"magenta":0,"rationale":"Agfa Vista 200 mild warm consumer film · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[0,-0.015,-0.02,0,-0.01,-0.015],"monoWeights":null},"r070":{"saturation":1.06,"contrast":1.07,"vibrance":0.03,"shadowCurve":0.06,"highlightCurve":0.035,"warmth":0.006,"magenta":0,"rationale":"Agfa Ultra 100 punchy reversal-like look · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[0.045,0.02,0.005,0.015,0.02,0.04],"monoWeights":null},"r071":{"saturation":0.88,"contrast":0.85,"vibrance":0,"shadowCurve":-0.06,"highlightCurve":0.08,"warmth":0.015,"magenta":0.003,"rationale":"Instant soft faded print approximation · P2 실험적","shadowRgb":null,"highlightRgb":null,"sectorSat":[-0.035,-0.035,-0.03,-0.02,-0.04,-0.02],"monoWeights":null}};
  const P2_TEXTURES={"r008":{"grain":0,"grainSize":25,"halation":0,"haloRadius":35,"note":"디지털 필름 시뮬레이션 · 질감 기본 없음"},"r009":{"grain":0,"grainSize":22,"halation":0,"haloRadius":35,"note":"Velvia 컬러 시뮬레이션 · 기본 그레인 없음"},"r011":{"grain":9,"grainSize":24,"halation":0,"haloRadius":35,"note":"Classic Chrome · 약한 선택적 질감"},"r012":{"grain":13,"grainSize":29,"halation":0,"haloRadius":35,"note":"Classic Negative · 약한 거친 질감"},"r017":{"grain":7,"grainSize":24,"halation":0,"haloRadius":35,"note":"Eterna · 절제된 영상 질감"},"r018":{"grain":15,"grainSize":30,"halation":0,"haloRadius":35,"note":"Bleach Bypass · 건조한 질감"},"r019":{"grain":16,"grainSize":28,"halation":0,"haloRadius":35,"note":"ACROS · 미세 흑백 입자"},"r020":{"grain":16,"grainSize":28,"halation":0,"haloRadius":35,"note":"ACROS 황색필터 · 미세 흑백 입자"},"r021":{"grain":16,"grainSize":28,"halation":0,"haloRadius":35,"note":"ACROS 적색필터 · 미세 흑백 입자"},"r022":{"grain":16,"grainSize":28,"halation":0,"haloRadius":35,"note":"ACROS 녹색필터 · 미세 흑백 입자"},"r024":{"grain":9,"grainSize":22,"halation":0,"haloRadius":35,"note":"Fuji 400H · 부드러운 네거티브 질감"},"r025":{"grain":7,"grainSize":16,"halation":0,"haloRadius":35,"note":"Fortia 50 · 가는 입자"},"r026":{"grain":15,"grainSize":33,"halation":0,"haloRadius":35,"note":"Superia 400 · 중간 입자"},"r027":{"grain":9,"grainSize":26,"halation":0,"haloRadius":35,"note":"Fuji C200 · 가는 입자"},"r028":{"grain":26,"grainSize":46,"halation":0,"haloRadius":35,"note":"Natura 1600 · 거친 고감도 입자"},"r029":{"grain":5,"grainSize":16,"halation":0,"haloRadius":35,"note":"Portra 160 · 매우 가는 입자"},"r030":{"grain":10,"grainSize":24,"halation":0,"haloRadius":35,"note":"Portra 400 · 섬세한 중간 입자"},"r031":{"grain":17,"grainSize":35,"halation":0,"haloRadius":35,"note":"Portra 800 · 조금 굵은 입자"},"r032":{"grain":12,"grainSize":30,"halation":0,"haloRadius":35,"note":"Gold 200 · 일상적인 필름 질감"},"r033":{"grain":17,"grainSize":36,"halation":0,"haloRadius":35,"note":"UltraMax 400 · 중간 입자"},"r034":{"grain":12,"grainSize":29,"halation":0,"haloRadius":35,"note":"ColorPlus 200 · 부드러운 입자"},"r035":{"grain":5,"grainSize":16,"halation":0,"haloRadius":35,"note":"Ektar 100 · 가는 입자"},"r036":{"grain":5,"grainSize":15,"halation":0,"haloRadius":35,"note":"E100 슬라이드 · 미세 입자"},"r037":{"grain":8,"grainSize":24,"halation":0,"haloRadius":35,"note":"Kodachrome 64 · 미세 입자 근사"},"r038":{"grain":17,"grainSize":30,"halation":7,"haloRadius":30,"note":"Vision3 500T · 은은한 광원 번짐"},"r039":{"grain":9,"grainSize":22,"halation":6,"haloRadius":28,"note":"Vision 200T · 미세 영상 질감"},"r040":{"grain":22,"grainSize":39,"halation":0,"haloRadius":35,"note":"Tri-X 400 · 클래식 흑백 입자"},"r041":{"grain":10,"grainSize":22,"halation":0,"haloRadius":35,"note":"T-Max · 비교적 매끈한 입자"},"r042":{"grain":34,"grainSize":58,"halation":0,"haloRadius":35,"note":"Tri-X 1600 Push · 굵은 입자"},"r043":{"grain":7,"grainSize":20,"halation":12,"haloRadius":32,"note":"CineStill 50D · 가는 입자와 약한 광원 번짐"},"r044":{"grain":19,"grainSize":40,"halation":36,"haloRadius":42,"note":"CineStill 800T · 광점 주변 적색 할레이션"},"r045":{"grain":13,"grainSize":28,"halation":8,"haloRadius":32,"note":"Classic Cinema · 약한 필름 질감"},"r047":{"grain":0,"grainSize":30,"halation":0,"haloRadius":35,"note":"GR 디지털 Positive · 기본 입자 없음"},"r048":{"grain":0,"grainSize":30,"halation":0,"haloRadius":35,"note":"GR 디지털 Negative · 기본 입자 없음"},"r052":{"grain":13,"grainSize":29,"halation":0,"haloRadius":35,"note":"GR Hi-Contrast B&W · 흑백 입자"},"r053":{"grain":19,"grainSize":37,"halation":0,"haloRadius":35,"note":"GR Hard Monotone · 흑백 입자"},"r054":{"grain":9,"grainSize":23,"halation":0,"haloRadius":35,"note":"GR Soft Monotone · 작은 입자"},"r058":{"grain":6,"grainSize":20,"halation":0,"haloRadius":35,"note":"Leica Monochrom · 미세 흑백 입자"},"r065":{"grain":13,"grainSize":26,"halation":0,"haloRadius":35,"note":"Lumix L.Monochrome D · 흑백 입자"},"r069":{"grain":10,"grainSize":27,"halation":0,"haloRadius":35,"note":"Agfa Vista 200 · 가는 입자"},"r070":{"grain":7,"grainSize":19,"halation":0,"haloRadius":35,"note":"Agfa Ultra 100 · 작은 입자"},"r071":{"grain":20,"grainSize":36,"halation":0,"haloRadius":35,"note":"인스턴트 사진 · 질감/바램 참고값"},"r072":{"grain":19,"grainSize":36,"halation":0,"haloRadius":35,"note":"Ilford HP5 Plus · 전통 입자"},"r073":{"grain":9,"grainSize":19,"halation":0,"haloRadius":35,"note":"Ilford FP4 Plus · 가는 입자"},"r074":{"grain":6,"grainSize":16,"halation":0,"haloRadius":35,"note":"Ilford Delta 100 · 미세 입자"},"r075":{"grain":34,"grainSize":59,"halation":0,"haloRadius":35,"note":"Ilford Delta 3200 · 거친 고감도 질감"},"r076":{"grain":5,"grainSize":13,"halation":0,"haloRadius":35,"note":"Ilford Pan F 50 · 매우 가는 입자"}};
  const clamp=(x,min,max)=>Math.max(min,Math.min(max,x));
  const el={stage:byId('stage'),canvas:byId('photoCanvas'),placeholder:byId('placeholder'),group:byId('groupSelect'),
    list:byId('recipeList'),name:byId('recipeName'),detail:byId('recipeDetail'),reason:byId('recipeReason'),
    strength:byId('strength'),creative:byId('creative'),p0:byId('p0'),p1:byId('p1'),p2:byId('p2'),input:byId('imageInput'),open:byId('openTop'),
    compare:byId('compareBtn'),fit:byId('fitBtn'),save:byId('saveBtn'),reset:byId('resetBtn'),
    fxToggle:byId('fxToggle'),fxBody:byId('fxBody'),fxArrow:byId('fxArrow'),status:byId('status'),
    progress:byId('progressWrap'),fill:byId('progressFill'),dims:byId('imageDims'),zoomLabel:byId('zoomLabel'),
    exifInfo:byId('exifInfo'),exif:byId('exif'),fxPresetApply:byId('fxPresetApply'),fxPresetHint:byId('fxPresetHint'),viewMode:byId('viewMode'),grain:byId('grain'),grainSize:byId('grainSize'),
    halation:byId('halation'),haloRadius:byId('haloRadius'),grainSharp:byId('grainSharp'),lutFile:byId('lutFile'),lutPick:byId('lutPick'),lutClear:byId('lutClear'),lutInfo:byId('lutInfo'),lutStrength:byId('lutStrength'),count:byId('presetCount')};
  const ctx=el.canvas.getContext('2d',{willReadFrequently:true,colorSpace:'srgb'});
  const state={file:null,orig:null,filtered:null,metadata:{},recipe:allRecipes[0],currentGroup:groups[0],
    revision:0,processing:false,saving:false,original:false,debounce:0,lut:null,lutName:null,
    fitW:0,fitH:0,zoom:1,panX:0,panY:0,pointers:new Map(),pinch:null,lastTap:0,lastTapPos:null,lastTouchToggle:0};
  const number=id=>Number(el[id].value);
  const opts=()=>({strength:number('strength'),creative:el.creative.checked,p0:el.p0.checked,p1:el.p1.checked,p2:el.p2.checked,exif:el.exif.checked,
    fx:{grain:number('grain'),grainSize:number('grainSize'),grainSharp:number('grainSharp'),halation:number('halation'),haloRadius:number('haloRadius')},lut:state.lut,lutStrength:number('lutStrength')});
  const getLook=r=>(el.p2.checked&&P2_LOOKS[r.id])||looks.id[r.id]||looks.group[r.group]||null;
  const getTexture=r=>P2_TEXTURES[r.id]||null;
  function updateFxHint(){const t=getTexture(state.recipe);el.fxPresetHint.textContent=t?'추천: '+t.note+' (그레인 '+t.grain+' / 입자 '+t.grainSize+' / 할레이션 '+t.halation+')':'별도 질감 추천 없음 · 현재 수동 값을 유지합니다.';}
  function setStatus(s,error=false){el.status.textContent=s;el.status.classList.toggle('error',error);}
  function viewBadge(){el.viewMode.textContent=!state.orig?'사진 없음':state.original?'원본 표시 중':'보정 미리보기';el.viewMode.style.borderColor=state.original?'#e7b57e':'#488d87';}
  function progress(p){const n=Math.round(clamp(p,0,1)*100);el.fill.style.width=n+'%';el.progress.setAttribute('aria-valuenow',String(n));}
  function signed(v){return v>0?'+'+v:String(v);}
  function displayRecipe(){const r=state.recipe,s=r.sony_settings,l=getLook(r);updateFxHint();
    el.name.textContent=r.name;
    el.detail.textContent=`${s.picture_effect_id?'Picture Effect '+s.picture_effect_id:s.creative_style}  ·  채도 ${signed(s.saturation_steps)}  ·  대비 ${signed(s.contrast_steps)}  ·  WB ${signed(s.wb_amber_blue_steps)} / ${signed(s.wb_green_magenta_steps)}  ·  ${s.kelvin?s.kelvin+'K':'AWB'}`;
    if(el.p1.checked&&el.p0.checked&&el.creative.checked&&PRSEngine.p1Profiles[r.id]){el.reason.textContent='P1 필름 특성 · '+PRSEngine.p1Profiles[r.id].name;}
    else el.reason.textContent=r.id==='r000'?'FACTORY는 원본 유지용 레시피입니다. 색감을 적용하려면 다른 레시피를 선택하세요.':((l&&el.creative.checked)?'브랜드 보정 · '+l.rationale:'Sony 카메라 설정값 기반 근사');
  }
  function renderRecipes(){el.list.replaceChildren();const list=allRecipes.filter(r=>r.group===state.currentGroup);
    el.count.textContent=`${list.length} / ${allRecipes.length}개`;
    for(const r of list){const button=document.createElement('button');button.className='recipe-chip'+(r.id===state.recipe.id?' selected':'');
      button.type='button';button.textContent=r.name;button.setAttribute('aria-pressed',String(r.id===state.recipe.id));
      button.addEventListener('click',()=>{state.recipe=r;state.listChoice=true;renderRecipes();displayRecipe();requestPreview();});el.list.append(button);}
    displayRecipe();
  }
  groups.forEach(g=>{const opt=document.createElement('option');opt.value=g;opt.textContent=g;el.group.append(opt);});
  el.group.value=state.currentGroup;
  el.group.addEventListener('change',()=>{state.currentGroup=el.group.value;state.recipe=allRecipes.find(r=>r.group===state.currentGroup);renderRecipes();requestPreview();});
  renderRecipes();
  function setDisabled(disabled){el.save.disabled=disabled||!state.file;el.compare.disabled=!state.file;el.fit.disabled=!state.file;}
  // File picker must remain reachable even if the previous image was corrupt or too large.
  function present(data,resetZoom=false){if(!data)return;
    if(el.canvas.width!==data.width||el.canvas.height!==data.height){el.canvas.width=data.width;el.canvas.height=data.height;resetZoom=true;}
    ctx.putImageData(data,0,0);el.canvas.style.display='block';
    el.placeholder.classList.add('hidden');
    updateFit(resetZoom);viewBadge();
  }
  function currentData(){return state.original||!state.filtered?state.orig:state.filtered;}
  function updateFit(reset=false){if(!state.orig)return;
    const bounds=el.stage.getBoundingClientRect(),w=state.orig.width,h=state.orig.height;
    if(!bounds.width||!bounds.height)return;
    const s=Math.min(bounds.width/w,bounds.height/h);
    state.fitW=w*s;state.fitH=h*s;
    el.canvas.style.width=state.fitW+'px';el.canvas.style.height=state.fitH+'px';
    if(reset){state.zoom=1;state.panX=0;state.panY=0;}
    constrainPan();applyZoom();
  }
  function constrainPan(){const rw=state.fitW*state.zoom,rh=state.fitH*state.zoom;
    const bx=Math.max(0,(rw-el.stage.clientWidth)/2),by=Math.max(0,(rh-el.stage.clientHeight)/2);
    state.panX=clamp(state.panX,-bx,bx);state.panY=clamp(state.panY,-by,by);
  }
  function applyZoom(){el.canvas.style.transform=`translate(-50%, -50%) translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
    el.zoomLabel.textContent=state.zoom===1?'FIT':Math.round(state.zoom*100)+'%';
  }
  function zoomTo(next,cx=0,cy=0){if(!state.orig)return;
    next=clamp(next,1,8);let factor=next/state.zoom;
    state.panX=cx-(cx-state.panX)*factor;state.panY=cy-(cy-state.panY)*factor;
    state.zoom=next;constrainPan();applyZoom();
  }
  function toggleZoom(x=0,y=0){zoomTo(state.zoom>1.2?1:2.5,x,y);}
  function localPoint(e){const rect=el.stage.getBoundingClientRect();return {x:e.clientX-rect.left-rect.width/2,y:e.clientY-rect.top-rect.height/2};}
  function distance(a,b){return Math.hypot(a.x-b.x,a.y-b.y);}
  function center(a,b){return {x:(a.x+b.x)/2,y:(a.y+b.y)/2};}
  el.stage.addEventListener('pointerdown',e=>{if(e.target.closest('button')||!state.orig)return;
    e.preventDefault();el.stage.setPointerCapture(e.pointerId);
    state.pointers.set(e.pointerId,localPoint(e));
    if(state.pointers.size===2){let [a,b]=[...state.pointers.values()];state.pinch={gap:Math.max(1,distance(a,b)),zoom:state.zoom,center:center(a,b)};}
    el.stage.classList.add('dragging');
  });
  el.stage.addEventListener('pointermove',e=>{if(!state.pointers.has(e.pointerId)||!state.orig)return;
    const prev=state.pointers.get(e.pointerId),pos=localPoint(e);state.pointers.set(e.pointerId,pos);
    if(state.pointers.size>=2&&state.pinch){let [a,b]=[...state.pointers.values()];let gap=Math.max(1,distance(a,b));let c=center(a,b);
      zoomTo(state.pinch.zoom*gap/state.pinch.gap,c.x,c.y);}
    else if(state.pointers.size===1&&state.zoom>1){state.panX+=pos.x-prev.x;state.panY+=pos.y-prev.y;constrainPan();applyZoom();}
  });
  function releasePointer(e){if(!state.pointers.has(e.pointerId))return;
    state.pointers.delete(e.pointerId);
    if(state.pointers.size<2)state.pinch=null;
    if(state.pointers.size===0)el.stage.classList.remove('dragging');
  }
  el.stage.addEventListener('pointerup',releasePointer);el.stage.addEventListener('pointercancel',releasePointer);
  el.stage.addEventListener('wheel',e=>{if(!state.orig)return;e.preventDefault();const p=localPoint(e);zoomTo(state.zoom*(e.deltaY<0?1.16:1/1.16),p.x,p.y);},{passive:false});
  el.stage.addEventListener('dblclick',e=>{if(!state.orig||e.target.closest('button')||Date.now()-state.lastTouchToggle<500)return;e.preventDefault();const p=localPoint(e);toggleZoom(p.x,p.y);});
  // Mobile browsers may not dispatch dblclick after pointer capture reliably.
  el.stage.addEventListener('touchend',e=>{if(!state.orig||e.touches.length>0||e.changedTouches.length!==1)return;
    const now=Date.now(),t=e.changedTouches[0],p=localPoint(t);
    if(now-state.lastTap<310&&state.lastTapPos&&distance(p,state.lastTapPos)<32){toggleZoom(p.x,p.y);state.lastTap=0;state.lastTouchToggle=now;}
    else {state.lastTap=now;state.lastTapPos=p;}
  },{passive:true});
  el.fit.addEventListener('click',()=>updateFit(true));
  if(typeof ResizeObserver==='function'){new ResizeObserver(()=>{if(state.orig)updateFit();}).observe(el.stage);}
  else{window.addEventListener('resize',()=>{if(state.orig)updateFit();});}
  el.compare.addEventListener('click',()=>{if(!state.orig)return;state.original=!state.original;
    el.compare.textContent=state.original?'보정 보기':'원본 보기';el.compare.classList.toggle('active',state.original);present(currentData());
    setStatus(state.original?'원본 표시 중 · 보정 화면으로 돌아가려면 보정 보기를 누르세요.':'보정 미리보기 표시 중');});
  // Native label -> input association avoids lost file-chooser activation on some browsers.
  el.open.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.input.click();}});
  el.input.addEventListener('change',async e=>{const file=e.target.files?.[0];el.input.value='';if(file)await openFile(file);});
  el.stage.addEventListener('dragover',e=>{e.preventDefault();});
  el.stage.addEventListener('drop',async e=>{e.preventDefault();const file=e.dataTransfer?.files?.[0];if(file)await openFile(file);});
  for(const id of ['strength','grain','grainSize','grainSharp','halation','haloRadius','lutStrength']){
    el[id].addEventListener('input',()=>{byId(id+'Value').textContent=el[id].value+'%';requestPreview();});
  }
  el.creative.addEventListener('change',()=>{displayRecipe();requestPreview();});
  el.p0.addEventListener('change',requestPreview);
  el.p1.addEventListener('change',()=>{displayRecipe();requestPreview();});
  el.p2.addEventListener('change',()=>{displayRecipe();requestPreview();});
  el.exif.addEventListener('change',requestPreview);
  el.fxPresetApply.addEventListener('click',()=>{const t=getTexture(state.recipe);if(!t){setStatus('이 레시피에는 추천 질감이 없습니다. 현재 설정은 유지됩니다.');return;}
    for(const key of ['grain','grainSize','halation','haloRadius']){el[key].value=t[key];byId(key+'Value').textContent=t[key]+'%';}
    setStatus('필름 질감 추천 적용 · '+t.note);requestPreview();});
  el.lutPick.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.lutFile.click();}});
  el.lutFile.addEventListener('change',async()=>{
    const file=el.lutFile.files&&el.lutFile.files[0];el.lutFile.value='';if(!file)return;
    try{
      if(file.size>8*1024*1024||!file.name.toLowerCase().endsWith('.cube'))throw new Error('8MB 이하의 .cube 파일만 지원합니다.');
      const lut=processor.parseCube(await file.text());
      state.lut=lut;state.lutName=file.name;el.lutStrength.value=100;byId('lutStrengthValue').textContent='100%';
      el.lutInfo.textContent='적용 중: '+file.name+' / '+lut.size+'³ sRGB 3D LUT · 100%';
      setStatus('P3 LUT 로드 완료 · '+file.name);requestPreview();
    }catch(err){setStatus('LUT 불러오기 실패: '+err.message,true);}
  });
  el.lutClear.addEventListener('click',()=>{state.lut=null;state.lutName=null;el.lutStrength.value=0;byId('lutStrengthValue').textContent='0%';el.lutInfo.textContent='LUT 미적용 · 사용자가 보유한 sRGB용 .cube 파일을 불러오세요.';requestPreview();});
  el.fxToggle.addEventListener('click',()=>{const open=el.fxBody.hidden;el.fxBody.hidden=!open;el.fxArrow.textContent=open?'▴':'▾';el.fxToggle.setAttribute('aria-expanded',String(open));});
  el.reset.addEventListener('click',()=>{el.strength.value=100;el.creative.checked=true;el.p0.checked=true;el.p1.checked=true;el.p2.checked=true;
    for(const [id,v] of Object.entries({grain:0,grainSize:30,grainSharp:0,halation:0,haloRadius:35})){el[id].value=v;byId(id+'Value').textContent=v+'%';}
    state.lut=null;state.lutName=null;el.lutStrength.value=0;byId('lutStrengthValue').textContent='0%';el.lutInfo.textContent='LUT 미적용';
    el.exif.checked=false;byId('strengthValue').textContent='100%';displayRecipe();requestPreview();});
  const emptyMeta=()=>({make:'',model:'',iso:0,wbMode:-1,lightSource:-1,flash:-1,colorSpace:-1,aperture:0,exposureSeconds:0,focalLength:0});
  // Read-only minimal JPEG EXIF TIFF parser. No external dependencies or network calls.
  function parseExif(buffer){const meta=emptyMeta();try{
    const dv=new DataView(buffer),len=dv.byteLength;
    if(len<8||dv.getUint16(0)!==0xffd8)return meta;
    let p=2,base=-1;
    while(p+4<=len){if(dv.getUint8(p)!==255)break;let marker=dv.getUint8(p+1);
      if(marker===0xda||marker===0xd9)break;
      if(marker===0xff){p++;continue;}
      const size=dv.getUint16(p+2,false);if(size<2||p+2+size>len)break;
      if(marker===0xe1&&size>=8&&dv.getUint32(p+4,false)===0x45786966&&dv.getUint16(p+8)===0){base=p+10;break;}
      p+=2+size;
    }
    if(base<0||base+8>len)return meta;
    const mark=dv.getUint16(base),little=mark===0x4949;if(!little&&mark!==0x4d4d)return meta;
    const u16=x=>dv.getUint16(x,little),u32=x=>dv.getUint32(x,little);
    if(u16(base+2)!==42)return meta;
    const sizes={1:1,2:1,3:2,4:4,5:8,7:1,9:4,10:8};
    function val(entry){if(entry+12>len)return null;
      const type=u16(entry+2),count=u32(entry+4),size=sizes[type];if(!size||count>4096)return null;
      const bytes=count*size,off=bytes<=4?entry+8:base+u32(entry+8);if(off<0||off+bytes>len)return null;
      if(type===2){let s='';for(let j=0;j<count;j++){let c=dv.getUint8(off+j);if(c===0)break;s+=String.fromCharCode(c);}return s.trim();}
      if(type===3)return u16(off);
      if(type===4)return u32(off);
      if(type===5){const den=u32(off+4);return den?u32(off)/den:0;}
      if(type===9)return dv.getInt32(off,little);
      if(type===10){const den=dv.getInt32(off+4,little);return den?dv.getInt32(off,little)/den:0;}
      return null;
    }
    function ifd(offset,depth=0){if(depth>2||offset<0)return;
      const q=base+offset;if(q+2>len)return;
      const count=u16(q);if(count>512||q+2+count*12>len)return;
      for(let n=0;n<count;n++){const entry=q+2+n*12,tag=u16(entry),value=val(entry);if(value===null)continue;
        if(tag===0x010f)meta.make=String(value);
        if(tag===0x0110)meta.model=String(value);
        if(tag===0x8827)meta.iso=Number(value);
        if(tag===0xa403)meta.wbMode=Number(value);
        if(tag===0x9208)meta.lightSource=Number(value);
        if(tag===0x9209)meta.flash=Number(value);
        if(tag===0xa001)meta.colorSpace=Number(value);
        if(tag===0x829d)meta.aperture=Number(value);
        if(tag===0x829a)meta.exposureSeconds=Number(value);
        if(tag===0x920a)meta.focalLength=Number(value);
        if(tag===0x8769&&typeof value==='number')ifd(value,depth+1);
      }
    }
    ifd(u32(base+4));
  }catch(e){/* EXIF optional: invalid tags never block an image */}
  return meta;}
  function metaDisplay(m){const a=[];
    if(m.make||m.model)a.push([m.make,m.model].filter(Boolean).join(' '));
    if(m.iso>0)a.push('ISO '+m.iso);
    if(m.aperture>0)a.push('f/'+m.aperture.toFixed(1));
    if(m.exposureSeconds>0)a.push(m.exposureSeconds<1?'1/'+Math.round(1/m.exposureSeconds)+'s':m.exposureSeconds.toFixed(1)+'s');
    if(m.wbMode>=0)a.push('WB '+(m.wbMode===0?'Auto':'Manual'));
    if(m.flash>=0)a.push('Flash '+((m.flash&1)?'ON':'OFF'));
    if(m.colorSpace>=0)a.push('EXIF '+(m.colorSpace===1?'sRGB':'Other/Uncalibrated'));
    return a.length?a.join(' · ')+'\n※ JPEG 디코딩 시 브라우저 색상 관리 사용 / EXIF는 참고 정보만':'EXIF 데이터 없음 또는 JPEG 이외의 형식입니다.\n※ 브라우저가 이미지의 ICC 색상을 처리합니다.';}
  async function extractMetadata(file){try{const slice=await file.slice(0,Math.min(file.size,1024*1024)).arrayBuffer();return parseExif(slice);}catch{return emptyMeta();}}
  function safeImageLimit(desired,exporting=false){
    const gb=Number(navigator.deviceMemory||0);
    // Small mobile devices can run out of memory after full-size RGBA allocations.
    if(gb>0&&gb<=2)return Math.min(desired,exporting?6_000_000:1_400_000);
    if(gb>0&&gb<=4)return Math.min(desired,exporting?10_000_000:2_200_000);
    return desired;
  }
  async function decode(file,maxPixels){
    // Read dimensions first, then prefer a *resized* ImageBitmap. Previous code
    // decoded an entire 45MP image before scaling, risking OOM on phones.
    const url=URL.createObjectURL(file);
    let bmp=null;
    try{
      const img=await new Promise((resolve,reject)=>{
        const im=new Image();let finished=false;
        const timeout=setTimeout(()=>{if(!finished){finished=true;reject(new Error('사진 읽기 시간 초과 · 다른 형식의 JPG/PNG로 다시 시도해주세요.'));}},20000);
        im.onload=()=>{if(!finished){finished=true;clearTimeout(timeout);resolve(im);}};
        im.onerror=()=>{if(!finished){finished=true;clearTimeout(timeout);reject(new Error('이미지를 디코딩할 수 없습니다. 파일 형식 또는 손상 여부를 확인해주세요.'));}};
        im.src=url;
      });
      const ow=img.naturalWidth,oh=img.naturalHeight;
      if(!ow||!oh)throw new Error('사진의 가로·세로 크기를 읽지 못했습니다.');
      const limit=safeImageLimit(maxPixels,maxPixels>4_000_000);
      const scale=Math.min(1,Math.sqrt(limit/(ow*oh)));
      const w=Math.max(1,Math.floor(ow*scale)),h=Math.max(1,Math.floor(oh*scale));
      const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;
      const c=canvas.getContext('2d',{willReadFrequently:true,colorSpace:'srgb'});
      if(!c)throw new Error('브라우저의 Canvas 2D 기능을 사용할 수 없습니다.');
      if(typeof createImageBitmap==='function'){
        try{
          bmp=await createImageBitmap(file,{resizeWidth:w,resizeHeight:h,resizeQuality:'high',imageOrientation:'from-image',colorSpaceConversion:'default'});
        }catch(ignore){bmp=null;}
      }
      c.drawImage(bmp||img,0,0,w,h);
      return {data:c.getImageData(0,0,w,h),originalWidth:ow,originalHeight:oh,limited:(w*h<ow*oh),decodedWidth:w,decodedHeight:h};
    }finally{
      if(bmp&&typeof bmp.close==='function')bmp.close();
      URL.revokeObjectURL(url);
    }
  }
  async function openFile(file){
    if(state.saving){setStatus('저장 처리가 끝난 후 새 사진을 열어주세요.',true);return;}
    if(!file||(!file.type.startsWith('image/')&&!/\.(heic|heif|jpg|jpeg|png|webp|avif)$/i.test(file.name))){
      setStatus('JPG, PNG, WebP 등 이미지 파일을 선택해주세요.',true);return;
    }
    const ticket=++state.revision;
    clearTimeout(state.debounce);
    setDisabled(true);
    setStatus('사진 디코딩 중… '+file.name);progress(.05);
    try{
      const [meta,decoded]=await Promise.all([extractMetadata(file),decode(file,1800*1800)]);
      if(ticket!==state.revision)return;
      state.file=file;state.metadata=meta;state.orig=decoded.data;state.filtered=null;
      state.original=false;state.origDims=[decoded.originalWidth,decoded.originalHeight];
      el.compare.textContent='원본 보기';el.compare.classList.remove('active');
      el.exifInfo.textContent=metaDisplay(meta);
      el.dims.textContent=`${decoded.originalWidth} × ${decoded.originalHeight}`;
      setDisabled(false);
      present(state.orig,true);
      setStatus(`사진 불러오기 완료 · ${decoded.originalWidth}×${decoded.originalHeight} (미리보기 ${decoded.decodedWidth}×${decoded.decodedHeight})`);
      progress(0);requestPreview();
    }catch(e){
      if(ticket===state.revision){
        // Do not discard the previously good image; always allow a retry.
        setDisabled(false);
        setStatus('사진 불러오기 실패: '+(e?.message||String(e))+' · 사진 열기로 다시 시도할 수 있습니다.',true);
        progress(0);
      }
    }
  }
  function requestPreview(){const rev=++state.revision;clearTimeout(state.debounce);
    if(!state.orig)return;
    // Exit original-comparison view on every edit so processed output is actually shown.
    if(state.original){state.original=false;el.compare.textContent='원본 보기';el.compare.classList.remove('active');viewBadge();}
    state.debounce=setTimeout(()=>runPreview(rev),110);
  }
  function comparePixels(original,filtered){
    const a=original.data,b=filtered.data;let total=0,count=0;
    const step=Math.max(1,Math.floor(original.width*original.height/3000));
    for(let p=0;p<a.length/4;p+=step){const i=p*4;total+=Math.abs(a[i]-b[i])+Math.abs(a[i+1]-b[i+1])+Math.abs(a[i+2]-b[i+2]);count++;}
    return count?total/(3*count):0;
  }
  async function runPreview(rev){if(rev!==state.revision||!state.orig)return;
    const recipe=state.recipe,look=opts().creative?getLook(recipe):null,config=opts(),meta={...state.metadata};
    setStatus('미리보기 처리 중…');progress(.03);
    try{const result=await processor.process(state.orig,recipe,look,config,meta,()=>rev!==state.revision,p=>{if(rev===state.revision)progress(p);});
      if(!result||rev!==state.revision)return;
      state.filtered=result;if(!state.original)present(result);
      const delta=comparePixels(state.orig,result);
      const tail=delta<.12?(recipe.id==='r000'?'FACTORY 원본 유지':config.strength===0?'필터 강도 0% · 원본 유지':'원본과 변화가 거의 없음'):'평균 RGB 변화 '+delta.toFixed(1)+'/255';
      setStatus('보정 미리보기 · '+recipe.name+' · '+tail);progress(0);
    }catch(e){if(rev===state.revision){setStatus('미리보기 처리 오류: '+e.message,true);progress(0);}}
  }
  function canvasBlob(c){return new Promise((resolve,reject)=>c.toBlob(blob=>blob?resolve(blob):reject(new Error('JPG 변환 실패')),'image/jpeg',.95));}
  el.save.addEventListener('click',async()=>{if(!state.file||state.saving)return;
    const file=state.file,recipe=state.recipe,config=opts(),look=config.creative?getLook(recipe):null,meta={...state.metadata};
    state.saving=true;setDisabled(true);setStatus('원본 해상도로 JPG 준비 중…');progress(.02);
    try{const decoded=await decode(file,20_000_000);
      const result=await processor.process(decoded.data,recipe,look,config,meta,()=>false,p=>progress(p));
      const temp=document.createElement('canvas');temp.width=result.width;temp.height=result.height;
      temp.getContext('2d',{colorSpace:'srgb'}).putImageData(result,0,0);
      const blob=await canvasBlob(temp),link=document.createElement('a');
      const url=URL.createObjectURL(blob);
      link.href=url;link.download='PRS_'+recipe.name.replace(/[^a-zA-Z0-9가-힣_-]+/g,'_')+'_'+new Date().toISOString().replace(/[:.]/g,'-')+'.jpg';
      document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),15000);
      setStatus(`JPG 저장 요청 완료 · ${result.width}×${result.height} · ${(blob.size/1024/1024).toFixed(1)} MB`);
    }catch(e){setStatus('저장 실패: '+e.message,true);}
    finally{state.saving=false;setDisabled(false);progress(0);}
  });
  // Verify the renderer is live; grayscale and FACTORY identity must be exact.
  const mono=allRecipes.find(r=>r.id==='r052');
  const monoPix=processor.pixel(222,112,41,processor.prepare(mono,getLook(mono),1,false,{},true));
  const identity=allRecipes.find(r=>r.id==='r000');
  const identityPix=processor.pixel(135,118,104,processor.prepare(identity,null,1,false,{},true));
  const healthy=monoPix[0]===monoPix[1]&&monoPix[1]===monoPix[2]&&identityPix.join(',')==='135,118,104';
  window.PRS_DIAGNOSTIC={version:'0.9.0',engineReady:healthy,monoPixel:monoPix,identityPixel:identityPix};
  if (!healthy) throw new Error('컬러 엔진 자가 진단 실패: 흑백 변환 또는 FACTORY 원본 보존');
  setStatus('컬러 엔진 준비 완료 · 77개 레시피 · 사진을 열어주세요.');
  // Internal test hooks, no network / no production automation.
  window.PRS_BOOT={state:'ready',version:'0.9.0',source:'app.js'};
  window.PRS_TEST={state,parseExif,opts,getLook,decode,openFile,P2_LOOKS,P2_TEXTURES,getTexture};
})();

