(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[63],{205:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,r=e.formats[a]||e.formats[e.defaultWidth];return r}},e.exports=t.default},206:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=n.width?String(n.width):i;r=e.formattingValues[u]||e.formattingValues[i]}else{var d=e.defaultWidth,l=n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[d]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},207:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var n=r[0],i=t.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];u=a.valueCallback?a.valueCallback(u):u;var d=t.slice(n.length);return{value:u,rest:d}}},e.exports=t.default},208:function(e,t,a){"use strict";function r(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function n(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,u=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=t.match(u);if(!d)return null;var l,o=d[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(s)?n(s,(function(e){return e.test(o)})):r(s,(function(e){return e.test(o)}));l=e.valueCallback?e.valueCallback(f):f,l=a.valueCallback?a.valueCallback(l):l;var m=t.slice(o.length);return{value:l,rest:m}}},e.exports=t.default},953:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(954)),n=l(a(955)),i=l(a(956)),u=l(a(957)),d=l(a(958));function l(e){return e&&e.__esModule?e:{default:e}}var o={code:"nb",formatDistance:r.default,formatLong:n.default,formatRelative:i.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=o,e.exports=t.default},954:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){a=a||{};var n,i=r[e];n="string"===typeof i?i:0===t||t>1?i.plural.replace("{{count}}",t):i.singular;if(a.addSuffix)return a.comparison>0?"om "+n:n+" siden";return n};var r={lessThanXSeconds:{singular:"mindre enn ett sekund",plural:"mindre enn {{count}} sekunder"},xSeconds:{singular:"ett sekund",plural:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{singular:"mindre enn ett minutt",plural:"mindre enn {{count}} minutter"},xMinutes:{singular:"ett minutt",plural:"{{count}} minutter"},aboutXHours:{singular:"omtrent en time",plural:"omtrent {{count}} timer"},xHours:{singular:"en time",plural:"{{count}} timer"},xDays:{singular:"en dag",plural:"{{count}} dager"},aboutXWeeks:{singular:"omtrent en uke",plural:"omtrent {{count}} uker"},xWeeks:{singular:"en uke",plural:"{{count}} uker"},aboutXMonths:{singular:"omtrent en m\xe5ned",plural:"omtrent {{count}} m\xe5neder"},xMonths:{singular:"en m\xe5ned",plural:"{{count}} m\xe5neder"},aboutXYears:{singular:"omtrent ett \xe5r",plural:"omtrent {{count}} \xe5r"},xYears:{singular:"ett \xe5r",plural:"{{count}} \xe5r"},overXYears:{singular:"over ett \xe5r",plural:"over {{count}} \xe5r"},almostXYears:{singular:"nesten ett \xe5r",plural:"nesten {{count}} \xe5r"}};e.exports=t.default},955:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(205))&&r.__esModule?r:{default:r};var i={date:(0,n.default)({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},956:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){return r[e]};var r={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i g\xe5r kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};e.exports=t.default},957:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(206))&&r.__esModule?r:{default:r};var i={ordinalNumber:function(e){return Number(e)+"."},era:(0,n.default)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xf8r Kristus","etter Kristus"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["S","M","T","O","T","F","L"],short:["s\xf8","ma","ti","on","to","fr","l\xf8"],abbreviated:["s\xf8n","man","tir","ons","tor","fre","l\xf8r"],wide:["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morgenen",afternoon:"p\xe5 ettermiddagen",evening:"p\xe5 kvelden",night:"p\xe5 natten"}},defaultWidth:"wide"})};t.default=i,e.exports=t.default},958:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(207)),n=i(a(208));function i(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(f\xf8r Kristus|f\xf8r v\xe5r tid|etter Kristus|v\xe5r tid)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^e/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(s\xf8|ma|ti|on|to|fr|l\xf8)/i,abbreviated:/^(s\xf8n|man|tir|ons|tor|fre|l\xf8r)/i,wide:/^(s\xf8ndag|mandag|tirsdag|onsdag|torsdag|fredag|l\xf8rdag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(midnatt|middag|(p\xe5) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(p\xe5) (morgenen|ettermiddagen|kvelden|natten))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=df-63.35e89039.chunk.js.map