(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[71],{1e3:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=r(t(207)),n=r(t(208));function r(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(\xce|D)/i,abbreviated:/^(\xce\.?\s?d\.?\s?C\.?|\xce\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(\xcenainte de Cristos|\xcenaintea erei noastre|Dup\u0103 Cristos|Era noastr\u0103)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\xceC/i,/^DC/i],wide:[/^(\xcenainte de Cristos|\xcenaintea erei noastre)/i,/^(Dup\u0103 Cristos|Era noastr\u0103)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|s\xe2)/i,wide:/^(duminica|luni|mar\u0163i|miercuri|joi|vineri|s\xe2mb\u0103t\u0103)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|mn|a|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nop\u021bii|amiaza|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/diminea\u0163a/i,afternoon:/dup\u0103-amiaza/i,evening:/seara/i,night:/noaptea/i}},defaultParseWidth:"any"})};a.default=u,e.exports=a.default},205:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,i=e.formats[t]||e.formats[e.defaultWidth];return i}},e.exports=a.default},206:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var i,n=t||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,u=n.width?String(n.width):r;i=e.formattingValues[u]||e.formattingValues[r]}else{var o=e.defaultWidth,d=n.width?String(n.width):e.defaultWidth;i=e.values[d]||e.values[o]}return i[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},207:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.match(e.matchPattern);if(!i)return null;var n=i[0],r=a.match(e.parsePattern);if(!r)return null;var u=e.valueCallback?e.valueCallback(r[0]):r[0];u=t.valueCallback?t.valueCallback(u):u;var o=a.slice(n.length);return{value:u,rest:o}}},e.exports=a.default},208:function(e,a,t){"use strict";function i(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function n(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.width,u=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=a.match(u);if(!o)return null;var d,l=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(s)?n(s,(function(e){return e.test(l)})):i(s,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(m):m,d=t.valueCallback?t.valueCallback(d):d;var f=a.slice(l.length);return{value:d,rest:f}}},e.exports=a.default},995:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=d(t(996)),n=d(t(997)),r=d(t(998)),u=d(t(999)),o=d(t(1e3));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"ro",formatDistance:i.default,formatLong:n.default,formatRelative:r.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};a.default=l,e.exports=a.default},996:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t){var n;t=t||{},n="string"===typeof i[e]?i[e]:1===a?i[e].one:i[e].other.replace("{{count}}",a);if(t.addSuffix)return t.comparison>0?"\xeen "+n:n+" \xeen urm\u0103";return n};var i={lessThanXSeconds:{one:"mai pu\u021bin de o secund\u0103",other:"mai pu\u021bin de {{count}} secunde"},xSeconds:{one:"1 secund\u0103",other:"{{count}} secunde"},halfAMinute:"jum\u0103tate de minut",lessThanXMinutes:{one:"mai pu\u021bin de un minut",other:"mai pu\u021bin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 or\u0103",other:"circa {{count}} ore"},xHours:{one:"1 or\u0103",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXWeeks:{one:"circa o s\u0103pt\u0103m\xe2n\u0103",other:"circa {{count}} s\u0103pt\u0103m\xe2ni"},xWeeks:{one:"1 s\u0103pt\u0103m\xe2n\u0103",other:"{{count}} s\u0103pt\u0103m\xe2ni"},aboutXMonths:{one:"circa 1 lun\u0103",other:"circa {{count}} luni"},xMonths:{one:"1 lun\u0103",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};e.exports=a.default},997:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,n=(i=t(205))&&i.__esModule?i:{default:i};var r={date:(0,n.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'la' {{time}}",long:"{{date}} 'la' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},998:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t,n){return i[e]};var i={lastWeek:"eeee 'trecut\u0103 la' p",yesterday:"'ieri la' p",today:"'ast\u0103zi la' p",tomorrow:"'m\xe2ine la' p",nextWeek:"eeee 'viitoare la' p",other:"P"};e.exports=a.default},999:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,n=(i=t(206))&&i.__esModule?i:{default:i};var r={ordinalNumber:function(e){var a=Number(e);return String(a)},era:(0,n.default)({values:{narrow:["\xce","D"],abbreviated:["\xce.d.C.","D.C."],wide:["\xcenainte de Cristos","Dup\u0103 Cristos"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","s\xe2"],abbreviated:["dum","lun","mar","mie","joi","vin","s\xe2m"],wide:["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\xe2mb\u0103t\u0103"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default}}]);
//# sourceMappingURL=df-70.ed4a1f74.chunk.js.map