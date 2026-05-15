// Created by iWeb 3.0.4 local-build-20110815

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,211),url:'pregnant_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'pregnant_files/stroke_1.png'},{rect:new IWRect(1,-1,309,2),url:'pregnant_files/stroke_2.png'},{rect:new IWRect(310,-1,3,2),url:'pregnant_files/stroke_3.png'},{rect:new IWRect(310,1,3,211),url:'pregnant_files/stroke_4.png'},{rect:new IWRect(310,212,3,2),url:'pregnant_files/stroke_5.png'},{rect:new IWRect(1,212,309,2),url:'pregnant_files/stroke_6.png'},{rect:new IWRect(-1,212,2,2),url:'pregnant_files/stroke_7.png'}],new IWSize(311,213)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_3:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('pregnant_files/pregnantMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
