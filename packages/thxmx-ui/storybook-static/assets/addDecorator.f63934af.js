import{w as s,o as v,a as l,S as c,p as u}from"./vendor.2e27e55e.js";import"./index.fcaa7ff1.js";var k="links",d=s.document,p=s.HTMLElement,L=function(e){return l.getChannel().emit(u,e)},f=function(e){var n=e.target;if(n instanceof p){var m=n,r=m.dataset,i=r.sbKind,o=r.sbStory;(i||o)&&(e.preventDefault(),L({kind:i,story:o}))}},a=!1,h=function(){a||(a=!0,d.addEventListener("click",f))},E=function(){a&&(a=!1,d.removeEventListener("click",f))},w=v({name:"withLinks",parameterName:k,wrapper:function(e,n){return h(),l.getChannel().once(c,E),e(n)}});module&&module.hot&&module.hot.decline&&module.hot.decline();var T=[w];export{T as decorators};
//# sourceMappingURL=addDecorator.f63934af.js.map
