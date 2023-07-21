(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[7],{205:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,i=e.formats[a]||e.formats[e.defaultWidth];return i}},e.exports=t.default},206:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var i,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):n;i=e.formattingValues[d]||e.formattingValues[n]}else{var o=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;i=e.values[s]||e.values[o]}return i[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},207:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(e.matchPattern);if(!i)return null;var r=i[0],n=t.match(e.parsePattern);if(!n)return null;var d=e.valueCallback?e.valueCallback(n[0]):n[0];d=a.valueCallback?a.valueCallback(d):d;var o=t.slice(r.length);return{value:d,rest:o}}},e.exports=t.default},208:function(e,t,a){"use strict";function i(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function r(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,d=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=t.match(d);if(!o)return null;var s,u=o[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(l)?r(l,(function(e){return e.test(u)})):i(l,(function(e){return e.test(u)}));s=e.valueCallback?e.valueCallback(m):m,s=a.valueCallback?a.valueCallback(s):s;var f=t.slice(u.length);return{value:s,rest:f}}},e.exports=t.default},702:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a(703)),r=s(a(704)),n=s(a(705)),d=s(a(706)),o=s(a(707));function s(e){return e&&e.__esModule?e:{default:e}}var u={code:"ca",formatDistance:i.default,formatLong:r.default,formatRelative:n.default,localize:d.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=u,e.exports=t.default},703:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var r;a=a||{},r="string"===typeof i[e]?i[e]:1===t?i[e].one:11===t&&i[e].eleven?i[e].eleven:i[e].other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?"en "+r:"fa "+r;return r};var i={lessThanXSeconds:{one:"menys d'un segon",eleven:"menys d'onze segons",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",eleven:"menys d'onze minuts",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXWeeks:{one:"aproximadament una setmana",other:"aproximadament {{count}} setmanes"},xWeeks:{one:"1 setmana",other:"{{count}} setmanes"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"m\xe9s d'un any",eleven:"m\xe9s d'onze anys",other:"m\xe9s de {{count}} anys"},almostXYears:{one:"gaireb\xe9 un any",other:"gaireb\xe9 {{count}} anys"}};e.exports=t.default},704:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=(i=a(205))&&i.__esModule?i:{default:i};var n={date:(0,r.default)({formats:{full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'a les' {{time}}",long:"{{date}} 'a les' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=n,e.exports=t.default},705:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){if(1!==t.getUTCHours())return r[e];return i[e]};var i={lastWeek:"'el' eeee 'passat a la' LT",yesterday:"'ahir a la' p",today:"'avui a la' p",tomorrow:"'dem\xe0 a la' p",nextWeek:"eeee 'a la' p",other:"P"},r={lastWeek:"'el' eeee 'passat a les' p",yesterday:"'ahir a les' p",today:"'avui a les' p",tomorrow:"'dem\xe0 a les' p",nextWeek:"eeee 'a les' p",other:"P"};e.exports=t.default},706:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=(i=a(206))&&i.__esModule?i:{default:i};var n={ordinalNumber:function(e,t){var a=Number(e),i=a%100;if(i>20||i<10)switch(i%10){case 1:case 3:return a+"r";case 2:return a+"n";case 4:return a+"t"}return a+"\xe8"},era:(0,r.default)({values:{narrow:["aC","dC"],abbreviated:["a. de C.","d. de C."],wide:["abans de Crist","despr\xe9s de Crist"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1r trimestre","2n trimestre","3r trimestre","4t trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["GN","FB","M\xc7","AB","MG","JN","JL","AG","ST","OC","NV","DS"],abbreviated:["gen.","febr.","mar\xe7","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],wide:["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],short:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],wide:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"am",pm:"pm",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},abbreviated:{am:"AM",pm:"PM",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"}},defaultFormattingWidth:"wide"})};t.default=n,e.exports=t.default},707:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(208));function r(e){return e&&e.__esModule?e:{default:e}}var n={ordinalNumber:(0,r(a(207)).default)({matchPattern:/^(\d+)(\xe8|r|n|r|t)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(aC|dC)/i,abbreviated:/^(a. de C.|d. de C.)/i,wide:/^(abans de Crist|despr[e\xe9]s de Crist)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^aC/i,/^dC/i],abbreviated:[/^(a. de C.)/i,/^(d. de C.)/i],wide:[/^(abans de Crist)/i,/^(despr[e\xe9]s de Crist)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xe8|r|n|r|t)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^(GN|FB|M\xc7|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,abbreviated:/^(gen.|febr.|mar\xe7|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,wide:/^(gener|febrer|mar\xe7|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^GN/i,/^FB/i,/^M\xc7/i,/^AB/i,/^MG/i,/^JN/i,/^JL/i,/^AG/i,/^ST/i,/^OC/i,/^NV/i,/^DS/i],abbreviated:[/^gen./i,/^febr./i,/^mar\xe7/i,/^abr./i,/^maig/i,/^juny/i,/^jul./i,/^ag./i,/^set./i,/^oct./i,/^nov./i,/^des./i],wide:[/^gener/i,/^febrer/i,/^mar\xe7/i,/^abril/i,/^maig/i,/^juny/i,/^juliol/i,/^agost/i,/^setembre/i,/^octubre/i,/^novembre/i,/^desembre/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,short:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,abbreviated:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,wide:/^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],abbreviated:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],wide:[/^diumenge/i,/^dilluns/i,/^dimarts/i,/^dimecres/i,/^dijous/i,/^divendres/i,/^disssabte/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|mn|md|(del|de la) (mat\xed|tarda|vespre|nit))/i,abbreviated:/^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (mat\xed|tarda|vespre|nit))/i,wide:/^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (mat\xed|tarda|vespre|nit))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mitjanit/i,noon:/^migdia/i,morning:/mat\xed/i,afternoon:/tarda/i,evening:/vespre/i,night:/nit/i}},defaultParseWidth:"any"})};t.default=n,e.exports=t.default}}]);
//# sourceMappingURL=df-12.008ae6dd.chunk.js.map