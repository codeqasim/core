(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[34],{205:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth,n=a.formats[t]||a.formats[a.defaultWidth];return n}},a.exports=e.default},206:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n,i=t||{};if("formatting"===(i.context?String(i.context):"standalone")&&a.formattingValues){var r=a.defaultFormattingWidth||a.defaultWidth,d=i.width?String(i.width):r;n=a.formattingValues[d]||a.formattingValues[r]}else{var o=a.defaultWidth,u=i.width?String(i.width):a.defaultWidth;n=a.values[u]||a.values[o]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},207:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(a.matchPattern);if(!n)return null;var i=n[0],r=e.match(a.parsePattern);if(!r)return null;var d=a.valueCallback?a.valueCallback(r[0]):r[0];d=t.valueCallback?t.valueCallback(d):d;var o=e.slice(i.length);return{value:d,rest:o}}},a.exports=e.default},208:function(a,e,t){"use strict";function n(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t}function i(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.width,d=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],o=e.match(d);if(!o)return null;var u,h=o[0],l=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(l)?i(l,(function(a){return a.test(h)})):n(l,(function(a){return a.test(h)}));u=a.valueCallback?a.valueCallback(s):s,u=t.valueCallback?t.valueCallback(u):u;var c=e.slice(h.length);return{value:u,rest:c}}},a.exports=e.default},798:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(t(799)),i=u(t(800)),r=u(t(801)),d=u(t(802)),o=u(t(803));function u(a){return a&&a.__esModule?a:{default:a}}var h={code:"gd",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:d.default,match:o.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};e.default=h,a.exports=e.default},799:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a,e,t){var i;t=t||{},i="string"===typeof n[a]?n[a]:1===e?n[a].one:2===e&&n[a].two?n[a].two:9===e&&n[a].nine?n[a].nine:20===e&&n[a].twenty?n[a].twenty:30===e&&n[a].thirty?n[a].thirty:n[a].other.replace("{{count}}",e);if(t.addSuffix)return t.comparison>0?"ann an "+i:"o chionn "+i;return i};var n={lessThanXSeconds:{one:"nas lugha na diog",other:"nas lugha na {{count}} diogan"},xSeconds:{one:"1 diog",two:"2 dhiog",twenty:"20 diog",other:"{{count}} diogan"},halfAMinute:"leth mhionaid",lessThanXMinutes:{one:"nas lugha na mionaid",other:"nas lugha na {{count}} mionaidean"},xMinutes:{one:"1 mionaid",two:"2 mhionaid",twenty:"20 mionaid",other:"{{count}} mionaidean"},aboutXHours:{one:"mu uair de th\xecde",other:"mu {{count}} uairean de th\xecde"},xHours:{one:"1 uair de th\xecde",two:"2 uair de th\xecde",twenty:"20 uair de th\xecde",other:"{{count}} uairean de th\xecde"},xDays:{one:"1 l\xe0",other:"{{count}} l\xe0"},aboutXWeeks:{one:"mu 1 seachdain",other:"mu {{count}} seachdainean"},xWeeks:{one:"1 seachdain",other:"{{count}} seachdainean"},aboutXMonths:{one:"mu mh\xecos",other:"mu {{count}} m\xecosan"},xMonths:{one:"1 m\xecos",other:"{{count}} m\xecosan"},aboutXYears:{one:"mu bhliadhna",other:"mu {{count}} bliadhnaichean"},xYears:{one:"1 bhliadhna",other:"{{count}} bliadhna"},overXYears:{one:"c\xf2rr is bliadhna",other:"c\xf2rr is {{count}} bliadhnaichean"},almostXYears:{one:"cha mh\xf2r bliadhna",other:"cha mh\xf2r {{count}} bliadhnaichean"}};a.exports=e.default},800:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(205))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'aig' {{time}}",long:"{{date}} 'aig' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,a.exports=e.default},801:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a,e,t,i){return n[a]};var n={lastWeek:"'mu dheireadh' eeee 'aig' p",yesterday:"'an-d\xe8 aig' p",today:"'an-diugh aig' p",tomorrow:"'a-m\xe0ireach aig' p",nextWeek:"eeee 'aig' p",other:"P"};a.exports=e.default},802:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=t(206))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(a,e){var t=Number(a),n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"d";case 2:return t+"na"}return 12===n?t+"na":t+"mh"},era:(0,i.default)({values:{narrow:["R","A"],abbreviated:["RC","AD"],wide:["ro Chr\xecosta","anno domini"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["C1","C2","C3","C4"],wide:["a' chiad chairteal","an d\xe0rna cairteal","an treas cairteal","an ceathramh cairteal"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,i.default)({values:{narrow:["F","G","M","G","C","\xd2","I","L","S","D","S","D"],abbreviated:["Faoi","Gear","M\xe0rt","Gibl","C\xe8it","\xd2gmh","Iuch","L\xf9n","Sult","D\xe0mh","Samh","D\xf9bh"],wide:["Am Faoilleach","An Gearran","Am M\xe0rt","An Giblean","An C\xe8itean","An t-\xd2gmhios","An t-Iuchar","An L\xf9nastal","An t-Sultain","An D\xe0mhair","An t-Samhain","An D\xf9bhlachd"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["D","L","M","C","A","H","S"],short:["D\xf2","Lu","M\xe0","Ci","Ar","Ha","Sa"],abbreviated:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],wide:["Did\xf2mhnaich","Diluain","Dim\xe0irt","Diciadain","Diardaoin","Dihaoine","Disathairne"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan l\xe0",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},803:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(t(207)),i=r(t(208));function r(a){return a&&a.__esModule?a:{default:a}}var d={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(d|na|tr|mh)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(r|a)/i,abbreviated:/^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i,wide:/^(ro Chr\xecosta|ron aois choitchinn|anno domini|aois choitcheann)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^c[1234]/i,wide:/^[1234](cd|na|tr|mh)? cairteal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[fgmc\xf2ilsd]/i,abbreviated:/^(faoi|gear|m\xe0rt|gibl|c\xe8it|\xf2gmh|iuch|l\xf9n|sult|d\xe0mh|samh|d\xf9bh)/i,wide:/^(am faoilleach|an gearran|am m\xe0rt|an giblean|an c\xe8itean|an t-\xd2gmhios|an t-Iuchar|an l\xf9nastal|an t-Sultain|an d\xe0mhair|an t-Samhain|an d\xf9bhlachd)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^f/i,/^g/i,/^m/i,/^g/i,/^c/i,/^\xf2/i,/^i/i,/^l/i,/^s/i,/^d/i,/^s/i,/^d/i],any:[/^fa/i,/^ge/i,/^m\xe0/i,/^gi/i,/^c/i,/^\xf2/i,/^i/i,/^l/i,/^su/i,/^d/i,/^sa/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[dlmcahs]/i,short:/^(d\xf2|lu|m\xe0|ci|ar|ha|sa)/i,abbreviated:/^(did|dil|dim|dic|dia|dih|dis)/i,wide:/^(did\xf2mhnaich|diluain|dim\xe0irt|diciadain|diardaoin|dihaoine|disathairne)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^c/i,/^a/i,/^h/i,/^s/i],any:[/^d/i,/^l/i,/^m/i,/^c/i,/^a/i,/^h/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i,any:/^([ap]\.?\s?m\.?|meadhan oidhche|meadhan l\xe0|(san|aig) (madainn|feasgar|feasgar|oidhche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^m/i,pm:/^f/i,midnight:/^meadhan oidhche/i,noon:/^meadhan l\xe0/i,morning:/sa mhadainn/i,afternoon:/feasgar/i,evening:/feasgar/i,night:/air an oidhche/i}},defaultParseWidth:"any"})};e.default=d,a.exports=e.default}}]);
//# sourceMappingURL=df-37.f07fcdcd.chunk.js.map