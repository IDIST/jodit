!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(self,(function(){return(self.webpackChunkjodit_pro=self.webpackChunkjodit_pro||[]).push([[630],{26339:function(e){e.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M19,21H5a2,2,0,0,1-2-2V17a1,1,0,0,1,2,0v2H19V17a1,1,0,0,1,2,0v2A2,2,0,0,1,19,21Z"/> <path d="M18,5H6A1,1,0,0,1,6,3H18a1,1,0,0,1,0,2Z"/> <path d="M15.71,10.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0-.21,1.09A1,1,0,0,0,9,12h2v3a1,1,0,0,0,2,0V12h2a1,1,0,0,0,.92-.62A1,1,0,0,0,15.71,10.29Z"/> </svg>'},46983:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(96065),n=o(45972);r.Config.prototype.exportDocs={css:"",pdf:{allow:!0,options:{format:"A4",page_orientation:"portrait"}}},r.Config.prototype.controls.exportDocs={tooltip:"Export",isDisabled:function(e){return n.Dom.isEmptyContent(e.editor)},icon:o(26339),list:{exportToPdf:"Export to PDF"},command:"exportToPDF"}},93739:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ExportDocs=void 0;var r=o(70655),n=o(69942),s=o(66920),a=o(97029);o(46983);var i=o(85145),c=o(45972),p=o(36591),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.requires=["license"],t.buttons=[{name:"exportDocs",group:"media"}],t}return r.__extends(t,e),t.prototype.afterInit=function(e){var o=this;e.registerCommand("exportToPDF",(function(){return r.__awaiter(o,void 0,void 0,(function(){var o,n,a,p,u,f;return r.__generator(this,(function(l){switch(l.label){case 0:o=(0,i.generateCriticalCSS)(e),n=new s.Ajax(e,r.__assign(r.__assign({},null!==(f=e.o.exportDocs.ajax)&&void 0!==f?f:e.o.filebrowser.ajax),{method:"POST",responseType:"blob",onProgress:function(t){e.progressbar.show().progress(t)},data:{action:"generatePdf",html:"<style>".concat(o+e.o.exportDocs.css,"</style>").concat(t.getValue(e))}})),l.label=1;case 1:return l.trys.push([1,4,5,7]),[4,n.send()];case 2:return[4,l.sent().blob()];case 3:return a=l.sent(),(p=this.j.create.a()).href=URL.createObjectURL(a),p.download="document.pdf",p.click(),c.Dom.safeRemove(p),URL.revokeObjectURL(p.href),[3,7];case 4:return(u=l.sent()).message&&e.alert(u.message),[3,7];case 5:return e.progressbar.progress(100),[4,e.async.delay(200)];case 6:return l.sent(),e.progressbar.hide(),[7];case 7:return[2]}}))}))}))},t.getValue=function(e){return(0,p.previewBox)(e).innerHTML},t.prototype.beforeDestruct=function(){},t}(n.Plugin);t.ExportDocs=u,a.Jodit.plugins.add("exportDocs",u)}},function(e){return e(e.s=93739)}])}));