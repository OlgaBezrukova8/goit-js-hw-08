!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return m.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function h(){var e=g();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return m?p(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&r?y(e):(r=i=void 0,u)}function x(){var e=g(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},x.flush=function(){return void 0===f?u:w(g())},x}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||f.test(e)?l(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),input:document.querySelector(".form-input"),textarea:document.querySelector(".form-textarea")};j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(O))),localStorage.removeItem(O),j.form.reset()})),j.input.addEventListener("input",n(h,500)),j.textarea.addEventListener("input",n(h,500));var O="feedback-form-state";function h(){var e={email:j.form.elements.email.value,message:j.form.elements.message.value};localStorage.setItem(O,JSON.stringify(e))}!function(){var e=localStorage.getItem(O);if(null===e)return;var t=JSON.parse(e);j.form.elements.email.value=t.email,j.form.elements.message.value=t.message}()}();
//# sourceMappingURL=03-feedback.05059f98.js.map