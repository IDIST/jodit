!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(self,(function(){return(self.webpackChunkjodit_pro=self.webpackChunkjodit_pro||[]).push([[391],{61509:function(t){t.exports='<?xml version="1.0" ?><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><g id="Upload"><path d="M16,26h8V50a2,2,0,0,0,2,2H38a2,2,0,0,0,2-2V26h8a2,2,0,0,0,1.4946-3.3291l-16-18a2,2,0,0,0-2.9892,0l-16,18A2,2,0,0,0,16,26ZM32,9.0107,43.5464,22H38a2,2,0,0,0-2,2V48H28V24a2,2,0,0,0-2-2H20.4536Z"/><path d="M53,42a2,2,0,0,0-2,2V54a2.0023,2.0023,0,0,1-2,2H15a2.0023,2.0023,0,0,1-2-2V44a2,2,0,0,0-4,0V54a6.0066,6.0066,0,0,0,6,6H49a6.0066,6.0066,0,0,0,6-6V44A2,2,0,0,0,53,42Z"/></g></svg>'},16172:function(t,e,o){"use strict";o.r(e)},34831:function(t,e,o){"use strict";o.r(e)},48436:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.backup=void 0;var n=o(70655);o(98673);var i=o(69942),r=o(51078),a=o(97770),s=o(61708),c=o(33422),u=o(97029),l=function(t){function e(){var e,o=this;return(o=t.apply(this,n.__spreadArray([],n.__read(arguments),!1))||this).requires=["license"],o.hasStyle=!u.Jodit.fatMode,o.buttons=[{name:"backup.restore",group:"history"}],o.__box=new a.UIBackupBox(o.j),o.__dialog=null,o.__storage=null!==(e=o.jodit.o.backup.remoteStore)&&void 0!==e?e:new r.DefaultStorage(o.jodit),o.timeout=0,o}return n.__extends(e,t),e.prototype.afterInit=function(t){var e=this;t.registerCommand("saveBackup",this.onSaveBackup).registerCommand("openBackupDialog",{exec:this.onOpenBackupDialog,hotkeys:t.o.backup.hotkeys});var o=function(){e.timeout=t.async.setTimeout((function(){e.onSaveBackup(),o()}),1e3*t.o.backup.interval)};o(),t.e.on(this.__box,"choose",this.onSelectItem).on(t.ow,"beforeunload.backup",(function(){e.onSaveBackup()}))},e.prototype.prepareDialog=function(){this.__dialog||(this.__dialog=this.j.dlg({minWidth:this.j.o.backup.dialogWidth,buttons:["fullsize","dialog.close"]}).setContent(this.__box.container)),this.__dialog.setHeader(this.jodit.i18n("Restore")),this.addButtonsToDialog()},e.prototype.onSaveBackup=function(){this.__storage.add({created:new Date,html:this.j.value})},e.prototype.onOpenBackupDialog=function(){return n.__awaiter(this,void 0,Promise,(function(){var t,e;return n.__generator(this,(function(o){switch(o.label){case 0:return this.prepareDialog(),(t=this.__dialog)?(t.open().setModal(!0),[4,this.__storage.items()]):[2];case 1:return e=o.sent(),this.__box.build(n.__spreadArray([{created:new Date,html:this.j.value}],n.__read(e),!1)),t.calcAutoSize(),t.setPosition(),[2]}}))}))},e.prototype.onSelectItem=function(t){var e;null===(e=this.__dialog)||void 0===e||e.close(),this.j.value=t.html,this.j.s.focus()},e.prototype.addButtonsToDialog=function(){var t,e=this,o=this.jodit,n=(0,s.Button)(o,{name:"ok",tabIndex:0,variant:"primary",text:"Ok"}),i=(0,s.Button)(o,{variant:"secondary",tabIndex:0,text:"Cancel"}),r=(0,s.Button)(o,{name:"clear",tabIndex:0,variant:"secondary",text:"Remove all"});n.onAction((function(){e.__box.chooseSelected()})),i.onAction((function(){var t;null===(t=e.__dialog)||void 0===t||t.close()})),r.onAction((function(){o.confirm("Are you sure?",void 0,(function(t){var o;t&&(e.__storage.clear(),null===(o=e.__dialog)||void 0===o||o.close())}))}));var a=new s.UIBlock(o,[r,i,n]);a.container.style.margin="0",a.container.style.justifyContent="flex-end",a.container.style.width="100%",null===(t=this.__dialog)||void 0===t||t.setFooter(a)},e.prototype.beforeDestruct=function(){var t,e=this.j;e.async.clearTimeout(this.timeout),e.e.off(this.__box,"choose",this.onSelectItem).off(e.ow,"beforeunload.backup"),this.__box.destruct(),null===(t=this.__dialog)||void 0===t||t.destruct()},n.__decorate([c.autobind],e.prototype,"onSaveBackup",null),n.__decorate([c.autobind],e.prototype,"onOpenBackupDialog",null),n.__decorate([c.autobind],e.prototype,"onSelectItem",null),e}(i.Plugin);e.backup=l,u.Jodit.plugins.add("backup",l)},98673:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(96065),i=o(2282),r=o(91013);n.Config.prototype.backup={interval:30,limit:50,dialogWidth:700,hotkeys:["ctrl+shift+b","cmd+shift+b"]},n.Config.prototype.controls.backup={store:{command:"saveBackup",text:"Save backup now"},restore:{tooltip:"Restore",list:["backup.store"],exec:function(t){t.execCommand("openBackupDialog")}}},i.Icon.set("restore",o(61509)),(0,r.extendLang)(o(27892))},27892:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},51078:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultStorage=void 0;var n=o(70655),i=function(){function t(t){this.jodit=t,this.key="backup.default.storage"}return t.prototype.add=function(t){return n.__awaiter(this,void 0,Promise,(function(){var e;return n.__generator(this,(function(o){return t.html.trim().length?((e=this.jodit.storage.get(this.key)||[]).find((function(e){return e.html===t.html}))||(e.unshift(t),e.length>this.jodit.o.backup.limit&&(e.length=this.jodit.o.backup.limit),this.jodit.storage.set(this.key,e)),[2,!1]):[2,!1]}))}))},t.prototype.items=function(){return Promise.resolve(this.jodit.storage.get(this.key)||[])},t.prototype.clear=function(){return this.jodit.storage.delete(this.key),Promise.resolve(!1)},t}();e.DefaultStorage=i},97770:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UIBackupBox=void 0;var n=o(70655);o(16172);var i=o(33422),r=o(61708),a=o(16307),s=function(t){function e(e){var o=t.call(this,e)||this;return o.list=new a.UIBackupList(o.j),o.preview=o.j.c.div(o.getFullElName("preview")),o.container.appendChild(o.list.container),o.container.appendChild(o.preview),o.list.container.classList.add(o.getFullElName("list")),e.e.on(o.list,"select",o.onSelectItem).on(o.list,"choose",o.onChooseItem),o}return n.__extends(e,t),e.prototype.className=function(){return"UIBackupBox"},e.prototype.build=function(t){this.preview.innerHTML="",this.list.build(t)},e.prototype.destruct=function(){return this.j.e.off(this.list,"select",this.onSelectItem),this.list.destruct(),t.prototype.destruct.call(this)},e.prototype.onSelectItem=function(t){this.latestSelected=t,this.preview.innerHTML=t.html||'<div class="'.concat(this.getFullElName("empty"),'">').concat(this.j.i18n("Empty"),"</div>")},e.prototype.onChooseItem=function(t){this.j.e.fire(this,"choose",t)},e.prototype.chooseSelected=function(){this.onChooseItem(this.latestSelected)},n.__decorate([i.autobind],e.prototype,"onSelectItem",null),n.__decorate([i.autobind],e.prototype,"onChooseItem",null),n.__decorate([i.component],e)}(r.UIElement);e.UIBackupBox=s},86788:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UIBackupItem=void 0;var n=o(70655);o(34831);var i=o(61708),r=o(69056),a=function(t){function e(e,o){var n=t.call(this,e)||this;return n.data=o,n.container.innerHTML=n.formatDate(o.created),(0,r.attr)(n.container,"tabIndex",0),n}return n.__extends(e,t),e.prototype.className=function(){return"UIBackupItem"},e.prototype.formatDate=function(t){var e=new Date,o=(0,r.isString)(t)?new Date(t):t,n=(e.getTime()-o.getTime())/1e3;return(0,r.isFunction)(this.j.o.backup.formatDate)?this.j.o.backup.formatDate(o):.2>n?this.j.i18n("Current"):60>n?this.j.i18n("Less minute"):n>3600?n>86400?"".concat(o.toDateString()," ").concat(o.toLocaleTimeString()):this.j.i18n("%s hours  ago",Math.floor(n/3600)):this.j.i18n("%s minutes ago",Math.floor(n/60))},e.prototype.focus=function(){this.container.focus()},e}(i.UIElement);e.UIBackupItem=a},16307:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UIBackupList=void 0;var n=o(70655),i=o(61708),r=o(33422),a=o(86788),s=o(26937),c=o(69056),u=function(t){function e(e){var o=t.call(this,e)||this;return o.elements=[],o.currentSelection=-1,e.e.on(o.container,"keydown",(function(t){switch(t.key){case s.KEY_ENTER:t.preventDefault(),t.stopPropagation(),o.onChoose(o.currentSelection);break;case s.KEY_DOWN:o.selectNext();break;case s.KEY_UP:o.selectPrevious()}})),o}return n.__extends(e,t),e.prototype.className=function(){return"UIBackupList"},e.prototype.createContainer=function(e){var o=t.prototype.createContainer.call(this,e);return(0,c.attr)(o,"tabIndex","-1"),o},e.prototype.build=function(t){var e=this;this.clear(),t.forEach((function(t,o){var n=new a.UIBackupItem(e.jodit,t);e.append(n),e.j.e.on(n.container,"focus",(function(){return e.onSelect(o)})).on(n.container,"click",(function(){return e.onSelect(o)})).on(n.container,"dblclick",(function(){return e.onChoose(o)}))})),this.currentSelection=0,this.onChangeCurrentSelection(void 0,-1,0)},e.prototype.onChangeCurrentSelection=function(t,e,o){var n,i,r;null===(n=this.elements[e])||void 0===n||n.setMod("active",!1),null===(i=this.elements[o])||void 0===i||i.setMod("active",!0),null===(r=this.elements[o])||void 0===r||r.focus(),this.j.e.fire(this,"select",this.elements[o].data)},e.prototype.onSelect=function(t){this.currentSelection=t},e.prototype.onChoose=function(t){this.j.e.fire(this,"choose",this.elements[null!=t?t:this.currentSelection].data)},e.prototype.selectNext=function(){this.currentSelection+1>this.elements.length-1?this.currentSelection=0:this.currentSelection+=1},e.prototype.selectPrevious=function(){0>this.currentSelection-1?this.currentSelection=this.elements.length-1:this.currentSelection-=1},n.__decorate([(0,r.watch)("currentSelection")],e.prototype,"onChangeCurrentSelection",null),n.__decorate([r.autobind],e.prototype,"onSelect",null),n.__decorate([r.autobind],e.prototype,"onChoose",null),n.__decorate([r.component],e)}(i.UIGroup);e.UIBackupList=u}},function(t){return t(t.s=48436)}])}));