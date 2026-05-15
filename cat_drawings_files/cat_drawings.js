// Created by iWeb 3.0.4 local-build-20110815

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,234),url:'cat_drawings_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'cat_drawings_files/stroke_1.png'},{rect:new IWRect(1,-1,580,2),url:'cat_drawings_files/stroke_2.png'},{rect:new IWRect(581,-1,3,2),url:'cat_drawings_files/stroke_3.png'},{rect:new IWRect(581,1,3,234),url:'cat_drawings_files/stroke_4.png'},{rect:new IWRect(581,235,3,2),url:'cat_drawings_files/stroke_5.png'},{rect:new IWRect(1,235,580,2),url:'cat_drawings_files/stroke_6.png'},{rect:new IWRect(-1,235,2,2),url:'cat_drawings_files/stroke_7.png'}],new IWSize(582,236)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('cat_drawings_files/cat_drawingsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
