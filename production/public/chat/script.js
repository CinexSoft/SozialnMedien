const a1_0x5b3f41=a1_0x5cd1;(function(_0x3b94b3,_0x57a354){const _0x2b60b9=a1_0x5cd1,_0x339349=_0x3b94b3();while(!![]){try{const _0xd18f3f=parseInt(_0x2b60b9(0x211))/0x1*(-parseInt(_0x2b60b9(0x20e))/0x2)+parseInt(_0x2b60b9(0x1fa))/0x3+parseInt(_0x2b60b9(0x1d0))/0x4*(-parseInt(_0x2b60b9(0x225))/0x5)+-parseInt(_0x2b60b9(0x1fb))/0x6*(parseInt(_0x2b60b9(0x1fd))/0x7)+parseInt(_0x2b60b9(0x1e3))/0x8*(parseInt(_0x2b60b9(0x1c0))/0x9)+-parseInt(_0x2b60b9(0x1ed))/0xa*(parseInt(_0x2b60b9(0x237))/0xb)+parseInt(_0x2b60b9(0x21c))/0xc*(parseInt(_0x2b60b9(0x1de))/0xd);if(_0xd18f3f===_0x57a354)break;else _0x339349['push'](_0x339349['shift']());}catch(_0xca653d){_0x339349['push'](_0x339349['shift']());}}}(a1_0x3b67,0xb9f6d));import{Database,DB_ROOT}from'/common/js/firebaseinit.js';import{ref as a1_0xac0e28,push as a1_0x27e53e,update as a1_0x373e5f,onValue as a1_0x26619d}from'https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js';import{USER_ID,DEBUG,EXISTS_ANDROID_INTERFACE,Overlay,getTimeStamp,getLongDateTime,log,err,encode,decode,download,copyPlainTxt,getBrowser,$,getChildElement,childHasParent,appendHTMLString,dialog,menu,checkForApkUpdates,smoothScroll,loadTheme}from'/common/js/modules.js';const MDtoHTML=new showdown[(a1_0x5b3f41(0x224))]();MDtoHTML['setFlavor'](a1_0x5b3f41(0x1cc));let PREVIOUS_HEIGHT=document['body'][a1_0x5b3f41(0x220)],PREVIOUS_WIDTH=document[a1_0x5b3f41(0x252)][a1_0x5b3f41(0x20a)],CHATAREA_SCROLL_HEIGHT=$(a1_0x5b3f41(0x20c))[a1_0x5b3f41(0x206)],QUOTE_REPLY_TEXT='',LONG_PRESSED_ELEMENT,SOFTBOARD_OPEN=![];const ChatData=JSON['parse'](localStorage[a1_0x5b3f41(0x21b)](CHAT_ROOT))||{},startDBListener=()=>{a1_0x26619d(a1_0xac0e28(Database,DB_ROOT+CHAT_ROOT),_0x5e7dbc=>{const _0x47ffc0=a1_0x5cd1;$(_0x47ffc0(0x20c))[_0x47ffc0(0x216)]=_0x47ffc0(0x202)+_0x47ffc0(0x22c)+'</div>',_0x5e7dbc[_0x47ffc0(0x1e0)](({key:_0x226a54})=>{const _0x578952=_0x47ffc0,_0x3051b9=_0x226a54,_0x59cdec=_0x5e7dbc[_0x578952(0x1ff)](_0x3051b9)[_0x578952(0x1dd)](),_0x1a3df9=_0x59cdec[_0x578952(0x231)];ChatData[_0x3051b9]={'uid':_0x1a3df9,'pushkey':_0x3051b9,'message':_0x59cdec['message'],'time':_0x59cdec[_0x578952(0x209)]},localStorage['setItem'](CHAT_ROOT,JSON[_0x578952(0x247)](ChatData));const _0x267305=decode(_0x59cdec[_0x578952(0x248)]);if(_0x1a3df9==USER_ID){appendHTMLString($(_0x578952(0x20c)),_0x578952(0x227)+_0x3051b9+_0x578952(0x210)+_0x267305+_0x578952(0x1c5));if(DEBUG)console['log'](_0x578952(0x23e)+_0x3051b9);if(DEBUG)console[_0x578952(0x24a)](_0x578952(0x214)+$(_0x578952(0x20c))[_0x578952(0x216)]);}else{appendHTMLString($(_0x578952(0x20c)),_0x578952(0x227)+_0x3051b9+_0x578952(0x1df)+_0x267305+_0x578952(0x1c5));if(DEBUG)console['log'](_0x578952(0x25f)+_0x3051b9);if(DEBUG)console[_0x578952(0x24a)](_0x578952(0x1cb)+$('#chatarea')[_0x578952(0x216)]);}smoothScroll($('#chatarea'),!![],!![]);}),$('#chatarea')[_0x47ffc0(0x216)][_0x47ffc0(0x1f3)](/pre/i)&&$(_0x47ffc0(0x20c))[_0x47ffc0(0x216)][_0x47ffc0(0x1f3)](/code/i)&&hljs[_0x47ffc0(0x20b)](),dialog['hide'](_0x47ffc0(0x21f),()=>{checkForApkUpdates();}),loadTheme(),log(_0x47ffc0(0x1bf));});};document[a1_0x5b3f41(0x23a)](a1_0x5b3f41(0x24f),_0x29d43f=>{const _0x2717dd=a1_0x5b3f41,_0x395e80=_0x29d43f[_0x2717dd(0x213)]||_0x29d43f[_0x2717dd(0x236)];log(_0x2717dd(0x1d3)+_0x395e80);const _0x37cd2b=QUOTE_REPLY_TEXT+MDtoHTML[_0x2717dd(0x1fc)]($(_0x2717dd(0x1c3))[_0x2717dd(0x1cd)][_0x2717dd(0x20f)]());_0x37cd2b?($(_0x2717dd(0x1c4))[_0x2717dd(0x1ec)][_0x2717dd(0x250)]='block',$(_0x2717dd(0x1c3))['style'][_0x2717dd(0x24d)]=_0x2717dd(0x1c9),$(_0x2717dd(0x1c4))['innerHTML']='<font\x20class=\x22header\x22\x20color=\x22#7d7d7d\x22>Markdown\x20preview</font>'+_0x37cd2b,smoothScroll($(_0x2717dd(0x1c4)))):($(_0x2717dd(0x1c4))[_0x2717dd(0x1ec)][_0x2717dd(0x250)]=_0x2717dd(0x251),$('#txtmsg')[_0x2717dd(0x1ec)][_0x2717dd(0x24d)]=_0x2717dd(0x217),$('#msgpreview')[_0x2717dd(0x216)]=_0x2717dd(0x218));const _0x348b26=0x8,_0x36b09e=0x2e;(_0x395e80==_0x348b26||_0x395e80==_0x36b09e)&&!$('#txtmsg')[_0x2717dd(0x1cd)][_0x2717dd(0x20f)]()&&(QUOTE_REPLY_TEXT='',$(_0x2717dd(0x1c4))[_0x2717dd(0x1ec)][_0x2717dd(0x250)]=_0x2717dd(0x251),$(_0x2717dd(0x1c3))[_0x2717dd(0x1ec)]['borderRadius']=_0x2717dd(0x217),$(_0x2717dd(0x1c4))[_0x2717dd(0x216)]=_0x2717dd(0x218)),_0x37cd2b[_0x2717dd(0x1f3)](/pre/i)&&_0x37cd2b['match'](/code/i)&&hljs[_0x2717dd(0x20b)]();}),window[a1_0x5b3f41(0x23a)](a1_0x5b3f41(0x241),_0xba71cf=>{const _0x2ea996=a1_0x5b3f41;PREVIOUS_HEIGHT!=document[_0x2ea996(0x252)][_0x2ea996(0x220)]&&PREVIOUS_WIDTH==document['body'][_0x2ea996(0x20a)]&&(SOFTBOARD_OPEN=!SOFTBOARD_OPEN,log(_0x2ea996(0x1f5)+(document[_0x2ea996(0x252)][_0x2ea996(0x220)]-PREVIOUS_HEIGHT)));if(document['body']['clientHeight']-PREVIOUS_HEIGHT<0x0)$(_0x2ea996(0x20c))[_0x2ea996(0x239)]+=Math[_0x2ea996(0x1f9)](document[_0x2ea996(0x252)][_0x2ea996(0x220)]-PREVIOUS_HEIGHT);PREVIOUS_WIDTH=document['body'][_0x2ea996(0x20a)],PREVIOUS_HEIGHT=document[_0x2ea996(0x252)][_0x2ea996(0x220)];const _0x1c71a1=QUOTE_REPLY_TEXT+MDtoHTML[_0x2ea996(0x1fc)]($('#txtmsg')[_0x2ea996(0x1cd)][_0x2ea996(0x20f)]());if(_0x1c71a1!=''&&SOFTBOARD_OPEN){$(_0x2ea996(0x1c4))['innerHTML']='<font\x20class=\x22header\x22\x20color=\x22#7d7d7d\x22>Markdown\x20preview</font>'+_0x1c71a1,$('#msgpreview')[_0x2ea996(0x1ec)][_0x2ea996(0x250)]='block',$(_0x2ea996(0x1c3))['style'][_0x2ea996(0x24d)]=_0x2ea996(0x1c9),smoothScroll($(_0x2ea996(0x1c4)));return;}$(_0x2ea996(0x1c4))[_0x2ea996(0x216)]=_0x2ea996(0x218),$(_0x2ea996(0x1c4))[_0x2ea996(0x1ec)][_0x2ea996(0x250)]=_0x2ea996(0x251),$('#txtmsg')[_0x2ea996(0x1ec)][_0x2ea996(0x24d)]=_0x2ea996(0x217);}),$(a1_0x5b3f41(0x20d))[a1_0x5b3f41(0x23a)](a1_0x5b3f41(0x1e4),_0x99171a=>{const _0x9dca5d=a1_0x5b3f41,_0x24462a=$(_0x9dca5d(0x1c3))['value'];if(!_0x24462a[_0x9dca5d(0x20f)]()){$(_0x9dca5d(0x1c3))['value']='',$('#txtmsg')['focus']();return;}const _0x48a6c7=QUOTE_REPLY_TEXT+_0x24462a['trim']();if(_0x48a6c7[_0x9dca5d(0x1ce)]>0x400*0x2){dialog[_0x9dca5d(0x250)](_0x9dca5d(0x21f),_0x9dca5d(0x25d),_0x9dca5d(0x1f1)),$(_0x9dca5d(0x1c3))[_0x9dca5d(0x1cd)]=_0x24462a;return;}QUOTE_REPLY_TEXT='',$(_0x9dca5d(0x1c3))[_0x9dca5d(0x1cd)]='',$(_0x9dca5d(0x1c4))[_0x9dca5d(0x216)]=_0x9dca5d(0x1e6),$(_0x9dca5d(0x1c4))[_0x9dca5d(0x1ec)][_0x9dca5d(0x250)]=_0x9dca5d(0x251),$(_0x9dca5d(0x1c3))[_0x9dca5d(0x1ec)][_0x9dca5d(0x24d)]=_0x9dca5d(0x217),$(_0x9dca5d(0x1c3))[_0x9dca5d(0x223)]();const _0x5baa7a=[_0x9dca5d(0x21e),_0x9dca5d(0x228),_0x9dca5d(0x1f8),_0x9dca5d(0x255),_0x9dca5d(0x1fe),'June',_0x9dca5d(0x1f2),_0x9dca5d(0x1c1),_0x9dca5d(0x256),_0x9dca5d(0x1f4),'November','December'],_0x3cc79e=[_0x9dca5d(0x22d),'Monday',_0x9dca5d(0x1e9),'Wednesday',_0x9dca5d(0x25b),'Friday','Saturday'],_0x7bd561=MDtoHTML['makeHtml'](_0x48a6c7);appendHTMLString($('#chatarea'),_0x9dca5d(0x23b)+_0x7bd561+_0x9dca5d(0x1c5)),smoothScroll($('#chatarea'),!![],!![]),setTimeout(()=>{const _0x23127c=_0x9dca5d,_0x149cd4=getLongDateTime(![]),_0x15db4a={'year':_0x149cd4[_0x23127c(0x230)](),'month':_0x149cd4['getMonth']()+0x1,'monthname':_0x5baa7a[_0x149cd4[_0x23127c(0x21d)]()],'date':_0x149cd4[_0x23127c(0x260)](),'day':_0x149cd4[_0x23127c(0x21a)](),'dayname':_0x3cc79e[_0x149cd4[_0x23127c(0x21a)]()],'stamp':getTimeStamp(),'time':('0'+_0x149cd4['getHours']())[_0x23127c(0x1ca)](-0x2)+':'+('0'+_0x149cd4['getMinutes']())['slice'](-0x2)+':'+('0'+_0x149cd4[_0x23127c(0x242)]())['slice'](-0x2)+'\x20'+Intl[_0x23127c(0x219)]()['resolvedOptions']()['timeZone']},_0x238f22=a1_0x27e53e(a1_0xac0e28(Database,DB_ROOT+CHAT_ROOT))[_0x23127c(0x25e)];a1_0x373e5f(a1_0xac0e28(Database,DB_ROOT+CHAT_ROOT+_0x238f22+'/'),{'time':_0x15db4a,'pushkey':_0x238f22,'message':encode(_0x7bd561),'uid':USER_ID})[_0x23127c(0x1f0)](()=>{log('Chat:\x20data\x20pushed'),loadTheme();})['catch'](_0x5e26ef=>{const _0x11a6a7=_0x23127c;err(_0x5e26ef),$(_0x11a6a7(0x1c3))[_0x11a6a7(0x1cd)]=_0x24462a;});},Overlay['animation_duration']);});let QUOTED_REPLY_HIGHLIGHT_TIMEOUT;function a1_0x5cd1(_0x19d39e,_0x5d56b7){const _0x3b6752=a1_0x3b67();return a1_0x5cd1=function(_0x5cd194,_0x3bcb5d){_0x5cd194=_0x5cd194-0x1bd;let _0x43953d=_0x3b6752[_0x5cd194];return _0x43953d;},a1_0x5cd1(_0x19d39e,_0x5d56b7);}function a1_0x3b67(){const _0x13b616=['stringify','message','Not\x20allowed','log','menu_copy','You','borderRadius','pointerdown','keyup','display','none','body','className','Failed\x20to\x20download\x20file.\x20Click\x20<a\x20href=\x22','April','September','You\x20can\x20only\x20unsend\x20a\x20message\x20within\x201\x20hour\x20of\x20sending\x20it.','hide','</pre></td></tr>','Chat:\x20long\x20press\x20triggered','Thursday','src','Warning','key','Log:\x20Chat:\x20that:\x20pushkey\x20=\x20','getDate','animation_duration','target','Chat:\x20db\x20update\x20fetched','4491369mamaQX','August','year','#txtmsg','#msgpreview','</div></div>','<pre\x20style=\x22overflow:auto;\x20text-align:left;\x22>','</blockquote>\x0a\x0a','catch','0\x200\x2010px\x2010px','slice','Log:\x20Chat:\x20that:\x20html\x20=\x20','github','value','length','Chat:\x20pointerdown:\x20id\x20=\x20','1164ALDGcE','Download\x20image','Chat:\x20pointer\x20up','Chat:\x20keypress:\x20key\x20=\x20','initial','IMG','substring','Download\x20failed','<table\x20style=\x22width:100%;\x20text-align:left\x22>','_sozialnmedien_','date','\x20node\x20=\x20','&gt;','val','13vxVJTR','\x22><div\x20class=\x22that\x22>','forEach','href','Do\x20you\x20wish\x20to\x20download\x20this\x20image?','24VAnjpO','click','<tr><td>Sent\x20on:\x20</td><td>','<font\x20class=\x22header\x22\x20color=\x22#7d7d7d\x22>Markdown\x20preview</font>','</table>','userSelect','Tuesday','pointerup','dayname','style','284710vsbGJL','div','stamp','then','Text\x20exceeds\x20limit\x20of\x202KB','July','match','October','Chat:\x20keyboard:\x20switched?\x20height\x20diff\x20=\x20','highlight\x2010s','menu_reply','March','abs','137712gpvZgg','12BUPoZM','makeHtml','796922UubwCC','May','child','tm_','\x22>here</a>\x20to\x20visit\x20file\x20in\x20browser.','<div\x20class=\x22info\x20noselect\x20sec_bg\x22\x20style=\x22font-family:sans-serif\x22>','back','nodeName','</td></tr>','scrollHeight','scale(0.93)','backarrow','time','clientWidth','highlightAll','#chatarea','#btnsend','94MFMICh','trim','\x22><div\x20class=\x22this\x20chatbubble_bg\x22>','24904TqdTjq','You\x20can\x20unsend\x20a\x20message\x20only\x20if\x20you\x20have\x20sent\x20it.','keyCode','Log:\x20Chat:\x20this:\x20html\x20=\x20','Chat:\x20highlight:\x20bubble\x20target\x20id\x20=\x20#','innerHTML','40px','<font\x20class=\x22header\x22\x20color=\x22#7d7d7d\x22>Markdown\x20preview</font><font\x20color=\x22#7d7d7d\x22>Preview\x20appears\x20here</font>','DateTimeFormat','getDay','getItem','26809296dXpsnN','getMonth','January','alert','clientHeight','showToast','replace','focus','Converter','23385YqwdYn','Advanced','<div\x20class=\x22bubbles\x22\x20id=\x22','February','transform','animation','monthname','<p\x20class=\x22fa\x20fa-info-circle\x22>&ensp;Messages\x20in\x20this\x20chat\x20are\x20only\x20server-to-end\x20encrypted.</p>','Sunday','<blockquote\x20id=\x22tm_','scale(1)','getFullYear','uid','parentNode','Download','Chat:\x20swiped:\x20id\x20=\x20','blockquote','charCode','99OKZioS','<tr><td>Sent\x20at:\x20</td><td><pre\x20style=\x22margin:0;\x20padding:0;\x20font-family:sans-serif;\x20overflow:auto;\x20width:180px;\x22>','scrollTop','addEventListener','<div\x20class=\x22bubbles\x22><div\x20class=\x22this\x20chatbubble_bg\x22>','touchmove','Chat:\x20history:\x20going\x20back','Log:\x20Chat:\x20this:\x20pushkey\x20=\x20','alt','action','resize','getSeconds','bubbles','includes','\x20class\x20=\x20','Chat:\x20generated\x20id\x20=\x20#'];a1_0x3b67=function(){return _0x13b616;};return a1_0x3b67();}document[a1_0x5b3f41(0x252)][a1_0x5b3f41(0x23a)]('click',_0x15d9b9=>{const _0x395a23=a1_0x5b3f41;let _0x3fa9e9;if(_0x15d9b9[_0x395a23(0x1be)][_0x395a23(0x253)]==_0x395a23(0x208))log(_0x395a23(0x23d)),history[_0x395a23(0x203)]();else{if(_0x15d9b9[_0x395a23(0x1be)]['id']==_0x395a23(0x24b))menu['hide'](),copyPlainTxt(LONG_PRESSED_ELEMENT[_0x395a23(0x216)]);else{if(_0x15d9b9[_0x395a23(0x1be)]['id']=='menu_unsend')menu[_0x395a23(0x258)](),setTimeout(()=>{const _0x327e16=_0x395a23;if(ChatData[LONG_PRESSED_ELEMENT['id']][_0x327e16(0x231)]!=USER_ID){dialog['display']('alert','Not\x20allowed',_0x327e16(0x212));return;}if(getTimeStamp()-parseInt(ChatData[LONG_PRESSED_ELEMENT['id']][_0x327e16(0x209)][_0x327e16(0x1ef)])>0x36ee80){dialog[_0x327e16(0x250)](_0x327e16(0x21f),_0x327e16(0x249),_0x327e16(0x257));return;}a1_0x373e5f(a1_0xac0e28(Database,DB_ROOT+CHAT_ROOT),{[LONG_PRESSED_ELEMENT['id']]:null})['then'](()=>{log('Chat:\x20msg\x20deleted,\x20data\x20updated');})[_0x327e16(0x1c8)](_0x454b3a=>{err(_0x454b3a);});},Overlay[_0x395a23(0x1bd)]);else{if(_0x15d9b9['target']['id']==_0x395a23(0x1f7))menu[_0x395a23(0x258)](),QUOTE_REPLY_TEXT=_0x395a23(0x22e)+LONG_PRESSED_ELEMENT['id']+'\x22>'+getChildElement(LONG_PRESSED_ELEMENT,_0x395a23(0x1ee))[0x0]['innerHTML']+_0x395a23(0x1c7),$('#txtmsg')['focus']();else{if(_0x15d9b9[_0x395a23(0x1be)]['id']=='menu_details'){menu[_0x395a23(0x258)]();const _0x4552d3=ChatData[LONG_PRESSED_ELEMENT['id']],_0x5316ee=_0x4552d3[_0x395a23(0x209)],_0x3d5af7=_0x395a23(0x1d8)+('<tr><td>Sent\x20by:\x20</td><td><pre\x20style=\x22margin:0;\x20padding:0;\x20font-family:sans-serif;\x20overflow:auto;\x20width:180px;\x22>'+(ChatData[LONG_PRESSED_ELEMENT['id']]['uid']==USER_ID?_0x395a23(0x24c):ChatData[LONG_PRESSED_ELEMENT['id']][_0x395a23(0x231)])+_0x395a23(0x259))+(_0x395a23(0x1e5)+_0x5316ee[_0x395a23(0x1eb)][_0x395a23(0x1ca)](0x0,0x3)+',\x20'+_0x5316ee[_0x395a23(0x22b)]['slice'](0x0,0x3)+'\x20'+_0x5316ee[_0x395a23(0x1da)]+',\x20'+_0x5316ee[_0x395a23(0x1c2)]+_0x395a23(0x205))+(_0x395a23(0x238)+_0x5316ee['time']+_0x395a23(0x259))+_0x395a23(0x1e7);dialog[_0x395a23(0x250)](_0x395a23(0x240),'Message\x20details',_0x3d5af7,_0x395a23(0x226),()=>{const _0x18b740=_0x395a23;dialog[_0x18b740(0x258)]('action'),dialog['display']('alert','Message\x20details',_0x18b740(0x1c6)+decode(JSON['stringify'](_0x4552d3,null,0x4)['replace'](/\n    /g,'\x0a')['replace'](/"|'|,/g,''))[_0x18b740(0x222)](/</g,'&lt;')[_0x18b740(0x222)](/>/g,_0x18b740(0x1dc))[_0x18b740(0x222)](/\n}/g,'')[_0x18b740(0x222)](/{\n\S/g,'')[_0x18b740(0x222)](/{/g,'')+'</pre>');});}else{if(_0x3fa9e9=(()=>{const _0x465a07=_0x395a23;if(_0x15d9b9['target']['id']['includes'](_0x465a07(0x200)))return $('#'+_0x15d9b9[_0x465a07(0x1be)]['id']['substring'](0x3));for(let _0xfbcda7 of $(_0x465a07(0x235)))if(childHasParent(_0x15d9b9['target'],_0xfbcda7)&&_0xfbcda7['id'][_0x465a07(0x244)]('tm_'))return log(_0x465a07(0x246)+_0xfbcda7['id'][_0x465a07(0x1d6)](0x3)),$('#'+_0xfbcda7['id'][_0x465a07(0x1d6)](0x3));})()){log(_0x395a23(0x215)+_0x3fa9e9['id']);if(QUOTED_REPLY_HIGHLIGHT_TIMEOUT)clearTimeout(QUOTED_REPLY_HIGHLIGHT_TIMEOUT);_0x3fa9e9[_0x395a23(0x1ec)][_0x395a23(0x22a)]='';const _0x11b821=smoothScroll(_0x3fa9e9,![]);_0x3fa9e9['scrollIntoView'](!![],{'behavior':_0x11b821}),_0x3fa9e9[_0x395a23(0x1ec)][_0x395a23(0x22a)]=_0x395a23(0x1f6),QUOTED_REPLY_HIGHLIGHT_TIMEOUT=setTimeout(()=>{const _0x2e2cc3=_0x395a23;_0x3fa9e9[_0x2e2cc3(0x1ec)][_0x2e2cc3(0x22a)]='';},0x2710);}}}}}}});let LONGPRESS_TIMER,LONGPRESS_TIMEOUT;document['body'][a1_0x5b3f41(0x23a)](a1_0x5b3f41(0x24e),_0x53b24e=>{const _0x2b8e34=a1_0x5b3f41;log(_0x2b8e34(0x1cf)+_0x53b24e[_0x2b8e34(0x1be)]['id']+_0x2b8e34(0x1db)+_0x53b24e['target']['nodeName']+_0x2b8e34(0x245)+_0x53b24e[_0x2b8e34(0x1be)][_0x2b8e34(0x253)]);if(_0x53b24e['target'][_0x2b8e34(0x253)]=='bubbles')LONGPRESS_TIMER=setTimeout(()=>{const _0x3373c9=_0x2b8e34;_0x53b24e[_0x3373c9(0x1be)]['style'][_0x3373c9(0x229)]=_0x3373c9(0x207),_0x53b24e[_0x3373c9(0x1be)][_0x3373c9(0x1ec)][_0x3373c9(0x1e8)]=_0x3373c9(0x251);},0xc8),LONGPRESS_TIMEOUT=setTimeout(()=>{const _0x215c62=_0x2b8e34;log('Chat:\x20long\x20press\x20triggered'),LONG_PRESSED_ELEMENT=_0x53b24e[_0x215c62(0x1be)],_0x53b24e[_0x215c62(0x1be)][_0x215c62(0x1ec)]['transform']=_0x215c62(0x22f),clearTimeout(LONGPRESS_TIMER),menu[_0x215c62(0x250)]();},0x258);else{if(_0x53b24e[_0x2b8e34(0x1be)][_0x2b8e34(0x204)]==_0x2b8e34(0x1d5)&&_0x53b24e[_0x2b8e34(0x1be)][_0x2b8e34(0x232)][_0x2b8e34(0x232)][_0x2b8e34(0x232)][_0x2b8e34(0x253)]==_0x2b8e34(0x243)){const _0x33b065=_0x53b24e[_0x2b8e34(0x1be)]['parentNode']['parentNode'][_0x2b8e34(0x232)];LONGPRESS_TIMER=setTimeout(()=>{const _0x1c91e=_0x2b8e34;_0x33b065[_0x1c91e(0x1ec)][_0x1c91e(0x229)]=_0x1c91e(0x207);},0xc8),LONGPRESS_TIMEOUT=setTimeout(()=>{const _0x3a1b4e=_0x2b8e34;log(_0x3a1b4e(0x25a)),LONG_PRESSED_ELEMENT=_0x33b065,_0x33b065[_0x3a1b4e(0x1ec)][_0x3a1b4e(0x229)]=_0x3a1b4e(0x22f),clearTimeout(LONGPRESS_TIMER);if(EXISTS_ANDROID_INTERFACE)dialog[_0x3a1b4e(0x250)](_0x3a1b4e(0x240),_0x3a1b4e(0x1d1),_0x3a1b4e(0x1e2),_0x3a1b4e(0x233),()=>{const _0x48d243=_0x3a1b4e;dialog[_0x48d243(0x258)](_0x48d243(0x240)),setTimeout(()=>{const _0x2397c2=_0x48d243;try{Android[_0x2397c2(0x221)]('Look\x20into\x20your\x20notification\x20panel\x20for\x20download\x20progress'),download(_0x53b24e[_0x2397c2(0x1be)][_0x2397c2(0x25c)],_0x53b24e['target'][_0x2397c2(0x23f)]['trim']()+_0x2397c2(0x1d9)+getTimeStamp()+'.png');}catch(_0x2a6b1f){dialog[_0x2397c2(0x250)](_0x2397c2(0x21f),_0x2397c2(0x1d7),_0x2397c2(0x254)+_0x53b24e[_0x2397c2(0x1be)][_0x2397c2(0x25c)]+_0x2397c2(0x201));return;}},0x3e8);});},0x258);}else{if(_0x53b24e[_0x2b8e34(0x1be)]['nodeName']=='A'){if(EXISTS_ANDROID_INTERFACE)LONGPRESS_TIMEOUT=setTimeout(()=>{const _0x44aab8=_0x2b8e34;log(_0x44aab8(0x25a)),copyPlainTxt(_0x53b24e['target'][_0x44aab8(0x1e1)]);},0x1f4);}}}}),document[a1_0x5b3f41(0x252)][a1_0x5b3f41(0x23a)](a1_0x5b3f41(0x1ea),_0x553711=>{const _0x4e307e=a1_0x5b3f41;log(_0x4e307e(0x1d2));if(LONG_PRESSED_ELEMENT)LONG_PRESSED_ELEMENT[_0x4e307e(0x1ec)]['transform']='scale(1)';_0x553711['target'][_0x4e307e(0x1ec)]['transform']=_0x4e307e(0x22f),_0x553711['target'][_0x4e307e(0x1ec)][_0x4e307e(0x1e8)]='initial',clearTimeout(LONGPRESS_TIMER),clearTimeout(LONGPRESS_TIMEOUT);}),document['body'][a1_0x5b3f41(0x23a)](a1_0x5b3f41(0x23c),_0x239cb1=>{const _0x5afbf2=a1_0x5b3f41;log(_0x5afbf2(0x234)+_0x239cb1[_0x5afbf2(0x1be)]['id']+_0x5afbf2(0x1db)+_0x239cb1[_0x5afbf2(0x1be)][_0x5afbf2(0x204)]+_0x5afbf2(0x245)+_0x239cb1[_0x5afbf2(0x1be)][_0x5afbf2(0x253)]);if(LONG_PRESSED_ELEMENT)LONG_PRESSED_ELEMENT[_0x5afbf2(0x1ec)]['transform']=_0x5afbf2(0x22f);_0x239cb1['target'][_0x5afbf2(0x1ec)][_0x5afbf2(0x229)]=_0x5afbf2(0x22f),_0x239cb1[_0x5afbf2(0x1be)][_0x5afbf2(0x1ec)][_0x5afbf2(0x1e8)]=_0x5afbf2(0x1d4),clearTimeout(LONGPRESS_TIMER),clearTimeout(LONGPRESS_TIMEOUT);}),Overlay['setInstanceOpen'](!![]),startDBListener(),log('Chat:\x20document\x20and\x20script\x20load\x20complete');