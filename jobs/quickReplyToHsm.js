"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[109],{700:function(e,t,s){s.r(t);var r=s(88),n=s(39),a=s(16),o=s(22);t.default=(0,r.c)().step("markButtonPressed",e=>{var t=e.msgId,s=e.selectedButtonIndex;return(0,o.Eb)(t,s)}).finalStep("quickReplyToHsm",(e,t)=>{if(e){var s=e.content;if("rich_hsm"===s.type){var r=s.buttons;if(r){var u=t.selectedButtonIndex;if(!(u<0||u>r.length))return(0,o.z)(e.chatId).then(e=>{if(null!=e){var s=r[u];if("quick_reply"===s.type){var o={type:"hsm_button_reply",selectedButtonIndex:u,selectedDisplayText:s.displayText,payload:s.payload},d={msgId:t.msgId,remoteJid:null};return(0,n.b)().waitUntilPersisted(a.e.sendMsg(e,o,d))}__LOG__(4)`Message returned by markHsmButtonPressed does not have a quick reply button at the specified selectedButtonIndex`}else __LOG__(4)`Message returned by markHsmButtonPressed came to a non-existing chat`});__LOG__(4)`Message returned by markHsmButtonPressed does not have enough buttons to cover the passed selectedButtonIndex`}else __LOG__(4)`Message returned by markHsmButtonPressed does not have any buttons`}else __LOG__(4)`Message returned by markHsmButtonPressed isn't of the rich_hsm type`}}).end()}}]);