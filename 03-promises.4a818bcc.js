!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){return i.default(e)||a.default(e,t)||f.default(e,t)||l.default()};var i=s(o("8slrw")),a=s(o("7AJDX")),l=s(o("ifqQW")),f=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return c.default(e)||p.default(e)||v.default(e)||y.default()};var c=m(o("kMC0W")),p=m(o("7AJDX")),y=m(o("8CtQK")),v=m(o("auk6i"));function m(e){return e&&e.__esModule?e:{default:e}}var _=o("h6c0i");function b(e,t){return new Promise((function(r,n){var o=Math.random()>.3;setTimeout((function(){o?r({position:e,delay:t}):n({position:e,delay:t})}),t)}))}function x(e){var t=e.position,r=e.delay;_.Notify.success("Fulfilled promise ".concat(t," in ").concat(r,"ms"))}function M(e){var t=e.position,r=e.delay;_.Notify.failure("Rejected promise ".concat(t," in ").concat(r,"ms"))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var r=e(u)((a=t.target.elements,e(d)(a).map((function(e){return Number(e.value)}))),3),n=r[0],o=r[1],i=r[2];var a;i<=0&&_.Notify.failure("Put amount more than 0!");for(var l=n,f=1;f<=i;f+=1)b(f,l).then(x).catch(M),l+=o}))}();
//# sourceMappingURL=03-promises.4a818bcc.js.map
