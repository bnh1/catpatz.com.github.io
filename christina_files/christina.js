// Created by iWeb 3.0.4 local-build-20110815

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_4:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,99),url:'christina_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'christina_files/stroke_1.png'},{rect:new IWRect(1,-1,133,2),url:'christina_files/stroke_2.png'},{rect:new IWRect(134,-1,2,2),url:'christina_files/stroke_3.png'},{rect:new IWRect(134,1,2,99),url:'christina_files/stroke_4.png'},{rect:new IWRect(134,100,2,3),url:'christina_files/stroke_5.png'},{rect:new IWRect(1,100,133,3),url:'christina_files/stroke_6.png'},{rect:new IWRect(-1,100,2,3),url:'christina_files/stroke_7.png'}],new IWSize(135,101)),shadow_3:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('christina_files/christinaMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
