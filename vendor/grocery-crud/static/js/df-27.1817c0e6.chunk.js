(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[23],{205:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,o=e.formats[a]||e.formats[e.defaultWidth];return o}},e.exports=t.default},206:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var o,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):n;o=e.formattingValues[i]||e.formattingValues[n]}else{var u=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;o=e.values[d]||e.values[u]}return o[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},207:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.match(e.matchPattern);if(!o)return null;var r=o[0],n=t.match(e.parsePattern);if(!n)return null;var i=e.valueCallback?e.valueCallback(n[0]):n[0];i=a.valueCallback?a.valueCallback(i):i;var u=t.slice(r.length);return{value:i,rest:u}}},e.exports=t.default},208:function(e,t,a){"use strict";function o(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function r(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],u=t.match(i);if(!u)return null;var d,l=u[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(s)?r(s,(function(e){return e.test(l)})):o(s,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(m):m,d=a.valueCallback?a.valueCallback(d):d;var f=t.slice(l.length);return{value:d,rest:f}}},e.exports=t.default},749:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(a(750)),r=d(a(751)),n=d(a(752)),i=d(a(753)),u=d(a(754));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"eo",formatDistance:o.default,formatLong:r.default,formatRelative:n.default,localize:i.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},750:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={lessThanXSeconds:{one:"malpli ol sekundo",other:"malpli ol {{count}} sekundoj"},xSeconds:{one:"1 sekundo",other:"{{count}} sekundoj"},halfAMinute:"duonminuto",lessThanXMinutes:{one:"malpli ol minuto",other:"malpli ol {{count}} minutoj"},xMinutes:{one:"1 minuto",other:"{{count}} minutoj"},aboutXHours:{one:"proksimume 1 horo",other:"proksimume {{count}} horoj"},xHours:{one:"1 horo",other:"{{count}} horoj"},xDays:{one:"1 tago",other:"{{count}} tagoj"},aboutXMonths:{one:"proksimume 1 monato",other:"proksimume {{count}} monatoj"},xWeeks:{one:"1 semajno",other:"{{count}} semajnoj"},aboutXWeeks:{one:"proksimume 1 semajno",other:"proksimume {{count}} semajnoj"},xMonths:{one:"1 monato",other:"{{count}} monatoj"},aboutXYears:{one:"proksimume 1 jaro",other:"proksimume {{count}} jaroj"},xYears:{one:"1 jaro",other:"{{count}} jaroj"},overXYears:{one:"pli ol 1 jaro",other:"pli ol {{count}} jaroj"},almostXYears:{one:"preska\u016d 1 jaro",other:"preska\u016d {{count}} jaroj"}},r=function(e,t,a){var r,n=o[e];return r="string"===typeof n?n:1===t?n.one:n.other.replace("{{count}}",String(t)),null!==a&&void 0!==a&&a.addSuffix?null!==a&&void 0!==a&&a.comparison&&a.comparison>0?"post "+r:"anta\u016d "+r:r};t.default=r,e.exports=t.default},751:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=a(205))&&o.__esModule?o:{default:o};var n={date:(0,r.default)({formats:{full:"EEEE, do 'de' MMMM y",long:"y-MMMM-dd",medium:"y-MMM-dd",short:"yyyy-MM-dd"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"Ho 'horo kaj' m:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})};t.default=n,e.exports=t.default},752:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={lastWeek:"'pasinta' eeee 'je' p",yesterday:"'hiera\u016d je' p",today:"'hodia\u016d je' p",tomorrow:"'morga\u016d je' p",nextWeek:"eeee 'je' p",other:"P"},r=function(e,t,a,r){return o[e]};t.default=r,e.exports=t.default},753:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=a(206))&&o.__esModule?o:{default:o};var n={ordinalNumber:function(e){return Number(e)+"-a"},era:(0,r.default)({values:{narrow:["aK","pK"],abbreviated:["a.K.E.","p.K.E."],wide:["anta\u016d Komuna Erao","Komuna Erao"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1-a kvaronjaro","2-a kvaronjaro","3-a kvaronjaro","4-a kvaronjaro"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan","feb","mar","apr","maj","jun","jul","a\u016dg","sep","okt","nov","dec"],wide:["januaro","februaro","marto","aprilo","majo","junio","julio","a\u016dgusto","septembro","oktobro","novembro","decembro"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["D","L","M","M","\u0134","V","S"],short:["di","lu","ma","me","\u0135a","ve","sa"],abbreviated:["dim","lun","mar","mer","\u0135a\u016d","ven","sab"],wide:["diman\u0109o","lundo","mardo","merkredo","\u0135a\u016ddo","vendredo","sabato"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},abbreviated:{am:"a.t.m.",pm:"p.t.m.",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},wide:{am:"anta\u016dtagmeze",pm:"posttagmeze",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"}},defaultWidth:"wide"})};t.default=n,e.exports=t.default},754:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(207)),r=n(a(208));function n(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,o.default)({matchPattern:/^(\d+)(-?a)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^([ap]k)/i,abbreviated:/^([ap]\.?\s?k\.?\s?e\.?)/i,wide:/^((anta\u01d4 |post )?komuna erao)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^a/i,/^[kp]/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](-?a)? kvaronjaro/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|a(\u016d|ux|uh|u)g|sep|okt|nov|dec)/i,wide:/^(januaro|februaro|marto|aprilo|majo|junio|julio|a(\u016d|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^a(u|\u016d)/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[dlm\u0135jvs]/i,short:/^(di|lu|ma|me|(\u0135|jx|jh|j)a|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|(\u0135|jx|jh|j)a(\u016d|ux|uh|u)|ven|sab)/i,wide:/^(diman(\u0109|cx|ch|c)o|lundo|mardo|merkredo|(\u0135|jx|jh|j)a(\u016d|ux|uh|u)do|vendredo|sabato)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^(j|\u0135)/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^(j|\u0135)/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,abbreviated:/^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,wide:/^(anta(\u016d|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^noktom/i,noon:/^t/i,morning:/^m/i,afternoon:/^posttagmeze/i,evening:/^v/i,night:/^n/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default}}]);
//# sourceMappingURL=df-27.1817c0e6.chunk.js.map