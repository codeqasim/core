(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[52],{205:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth,n=t.formats[a]||t.formats[t.defaultWidth];return n}},t.exports=e.default},206:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n,i=a||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,u=i.width?String(i.width):r;n=t.formattingValues[u]||t.formattingValues[r]}else{var d=t.defaultWidth,o=i.width?String(i.width):t.defaultWidth;n=t.values[o]||t.values[d]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},207:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var i=n[0],r=e.match(t.parsePattern);if(!r)return null;var u=t.valueCallback?t.valueCallback(r[0]):r[0];u=a.valueCallback?a.valueCallback(u):u;var d=e.slice(i.length);return{value:u,rest:d}}},t.exports=e.default},208:function(t,e,a){"use strict";function n(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}function i(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.width,u=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],d=e.match(u);if(!d)return null;var o,l=d[0],f=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(f)?i(f,(function(t){return t.test(l)})):n(f,(function(t){return t.test(l)}));o=t.valueCallback?t.valueCallback(s):s,o=a.valueCallback?a.valueCallback(o):o;var c=e.slice(l.length);return{value:o,rest:c}}},t.exports=e.default},893:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a(894)),i=o(a(895)),r=o(a(896)),u=o(a(897)),d=o(a(898));function o(t){return t&&t.__esModule?t:{default:t}}var l={code:"km",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:d.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};e.default=l,t.exports=e.default},894:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:"\u178f\u17b7\u1785\u1787\u17b6\u1784 {{count}} \u179c\u17b7\u1793\u17b6\u1791\u17b8",xSeconds:"{{count}} \u179c\u17b7\u1793\u17b6\u1791\u17b8",halfAMinute:"\u1780\u1793\u17d2\u179b\u17c7\u1793\u17b6\u1791\u17b8",lessThanXMinutes:"\u178f\u17b7\u1785\u1787\u17b6\u1784 {{count}} \u1793\u17b6\u1791\u17b8",xMinutes:"{{count}} \u1793\u17b6\u1791\u17b8",aboutXHours:"\u1794\u17d2\u179a\u17a0\u17c2\u179b {{count}} \u1798\u17c9\u17c4\u1784",xHours:"{{count}} \u1798\u17c9\u17c4\u1784",xDays:"{{count}} \u1790\u17d2\u1784\u17c3",aboutXWeeks:"\u1794\u17d2\u179a\u17a0\u17c2\u179b {{count}} \u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd",xWeeks:"{{count}} \u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd",aboutXMonths:"\u1794\u17d2\u179a\u17a0\u17c2\u179b {{count}} \u1781\u17c2",xMonths:"{{count}} \u1781\u17c2",aboutXYears:"\u1794\u17d2\u179a\u17a0\u17c2\u179b {{count}} \u1786\u17d2\u1793\u17b6\u17c6",xYears:"{{count}} \u1786\u17d2\u1793\u17b6\u17c6",overXYears:"\u1787\u17b6\u1784 {{count}} \u1786\u17d2\u1793\u17b6\u17c6",almostXYears:"\u1787\u17b7\u178f {{count}} \u1786\u17d2\u1793\u17b6\u17c6"},i=function(t,e,a){var i=n[t];return"number"===typeof e&&(i=i.replace("{{count}}",e.toString())),null!==a&&void 0!==a&&a.addSuffix?a.comparison&&a.comparison>0?"\u1780\u17d2\u1793\u17bb\u1784\u179a\u1799\u17c8\u1796\u17c1\u179b "+i:i+"\u1798\u17bb\u1793":i};e.default=i,t.exports=e.default},895:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=a(205))&&n.__esModule?n:{default:n};var r={date:(0,i.default)({formats:{full:"EEEE do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"h:mm:ss a",long:"h:mm:ss a",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} '\u1798\u17c9\u17c4\u1784' {{time}}",long:"{{date}} '\u1798\u17c9\u17c4\u1784' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,t.exports=e.default},896:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'\u1790\u17d2\u1784\u17c3'eeee'\u179f\u200b\u1794\u17d2\u178f\u17b6\u200b\u17a0\u17cd\u200b\u1798\u17bb\u1793\u1798\u17c9\u17c4\u1784' p",yesterday:"'\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789\u1793\u17c5\u1798\u17c9\u17c4\u1784' p",today:"'\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7\u1798\u17c9\u17c4\u1784' p",tomorrow:"'\u1790\u17d2\u1784\u17c3\u179f\u17d2\u17a2\u17c2\u1780\u1798\u17c9\u17c4\u1784' p",nextWeek:"'\u1790\u17d2\u1784\u17c3'eeee'\u179f\u200b\u1794\u17d2\u178f\u17b6\u200b\u17a0\u17cd\u200b\u1780\u17d2\u179a\u17c4\u1799\u1798\u17c9\u17c4\u1784' p",other:"P"},i=function(t,e,a,i){return n[t]};e.default=i,t.exports=e.default},897:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=(n=a(206))&&n.__esModule?n:{default:n};var r={ordinalNumber:function(t,e){return Number(t).toString()},era:(0,i.default)({values:{narrow:["\u1798.\u1782\u179f","\u1782\u179f"],abbreviated:["\u1798\u17bb\u1793\u1782.\u179f","\u1782.\u179f"],wide:["\u1798\u17bb\u1793\u1782\u17d2\u179a\u17b7\u179f\u17d2\u178f\u179f\u1780\u179a\u17b6\u1787","\u1793\u17c3\u1782\u17d2\u179a\u17b7\u179f\u17d2\u178f\u179f\u1780\u179a\u17b6\u1787"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 1","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 2","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 3","\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f\u1791\u17b8 4"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,i.default)({values:{narrow:["\u1798.\u1780","\u1780.\u1798","\u1798\u17b7","\u1798.\u179f","\u17a7.\u179f","\u1798.\u1790","\u1780.\u178a","\u179f\u17b8","\u1780\u1789","\u178f\u17bb","\u179c\u17b7","\u1792"],abbreviated:["\u1798\u1780\u179a\u17b6","\u1780\u17bb\u1798\u17d2\u1797\u17c8","\u1798\u17b8\u1793\u17b6","\u1798\u17c1\u179f\u17b6","\u17a7\u179f\u1797\u17b6","\u1798\u17b7\u1790\u17bb\u1793\u17b6","\u1780\u1780\u17d2\u1780\u178a\u17b6","\u179f\u17b8\u17a0\u17b6","\u1780\u1789\u17d2\u1789\u17b6","\u178f\u17bb\u179b\u17b6","\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6","\u1792\u17d2\u1793\u17bc"],wide:["\u1798\u1780\u179a\u17b6","\u1780\u17bb\u1798\u17d2\u1797\u17c8","\u1798\u17b8\u1793\u17b6","\u1798\u17c1\u179f\u17b6","\u17a7\u179f\u1797\u17b6","\u1798\u17b7\u1790\u17bb\u1793\u17b6","\u1780\u1780\u17d2\u1780\u178a\u17b6","\u179f\u17b8\u17a0\u17b6","\u1780\u1789\u17d2\u1789\u17b6","\u178f\u17bb\u179b\u17b6","\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6","\u1792\u17d2\u1793\u17bc"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u17a2\u17b6","\u1785","\u17a2","\u1796","\u1796\u17d2\u179a","\u179f\u17bb","\u179f"],short:["\u17a2\u17b6","\u1785","\u17a2","\u1796","\u1796\u17d2\u179a","\u179f\u17bb","\u179f"],abbreviated:["\u17a2\u17b6","\u1785","\u17a2","\u1796","\u1796\u17d2\u179a","\u179f\u17bb","\u179f"],wide:["\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799","\u1785\u1793\u17d2\u1791","\u17a2\u1784\u17d2\u1782\u17b6\u179a","\u1796\u17bb\u1792","\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd","\u179f\u17bb\u1780\u17d2\u179a","\u179f\u17c5\u179a\u17cd"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"},abbreviated:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"},wide:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"},abbreviated:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"},wide:{am:"\u1796\u17d2\u179a\u17b9\u1780",pm:"\u179b\u17d2\u1784\u17b6\u1785",midnight:"\u200b\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a",noon:"\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb",morning:"\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780",afternoon:"\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b",evening:"\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785",night:"\u1796\u17c1\u179b\u1799\u1794\u17cb"}},defaultFormattingWidth:"wide"})};e.default=r,t.exports=e.default},898:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a(208));function i(t){return t&&t.__esModule?t:{default:t}}var r={ordinalNumber:(0,i(a(207)).default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(\u1798\.)?\u1782\u179f/i,abbreviated:/^(\u1798\u17bb\u1793)?\u1782\.\u179f/i,wide:/^(\u1798\u17bb\u1793|\u1793\u17c3)\u1782\u17d2\u179a\u17b7\u179f\u17d2\u178f\u179f\u1780\u179a\u17b6\u1787/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u1798|\u1798\u17bb\u1793)\u1782\.?\u179f/i,/^(\u1793\u17c3)?\u1782\.?\u179f/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^(\u178f\u17d2\u179a\u17b8\u1798\u17b6\u179f)(\u1791\u17b8)?\s?[1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,n.default)({matchPatterns:{narrow:/^(\u1798\.\u1780|\u1780\.\u1798|\u1798\u17b7|\u1798\.\u179f|\u17a7\.\u179f|\u1798\.\u1790|\u1780\.\u178a|\u179f\u17b8|\u1780\u1789|\u178f\u17bb|\u179c\u17b7|\u1792)/i,abbreviated:/^(\u1798\u1780\u179a\u17b6|\u1780\u17bb\u1798\u17d2\u1797\u17c8|\u1798\u17b8\u1793\u17b6|\u1798\u17c1\u179f\u17b6|\u17a7\u179f\u1797\u17b6|\u1798\u17b7\u1790\u17bb\u1793\u17b6|\u1780\u1780\u17d2\u1780\u178a\u17b6|\u179f\u17b8\u17a0\u17b6|\u1780\u1789\u17d2\u1789\u17b6|\u178f\u17bb\u179b\u17b6|\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6|\u1792\u17d2\u1793\u17bc)/i,wide:/^(\u1798\u1780\u179a\u17b6|\u1780\u17bb\u1798\u17d2\u1797\u17c8|\u1798\u17b8\u1793\u17b6|\u1798\u17c1\u179f\u17b6|\u17a7\u179f\u1797\u17b6|\u1798\u17b7\u1790\u17bb\u1793\u17b6|\u1780\u1780\u17d2\u1780\u178a\u17b6|\u179f\u17b8\u17a0\u17b6|\u1780\u1789\u17d2\u1789\u17b6|\u178f\u17bb\u179b\u17b6|\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6|\u1792\u17d2\u1793\u17bc)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u1798\.\u1780/i,/^\u1780\.\u1798/i,/^\u1798\u17b7/i,/^\u1798\.\u179f/i,/^\u17a7\.\u179f/i,/^\u1798\.\u1790/i,/^\u1780\.\u178a/i,/^\u179f\u17b8/i,/^\u1780\u1789/i,/^\u178f\u17bb/i,/^\u179c\u17b7/i,/^\u1792/i],any:[/^\u1798\u1780/i,/^\u1780\u17bb/i,/^\u1798\u17b8\u1793/i,/^\u1798\u17c1/i,/^\u17a7\u179f/i,/^\u1798\u17b7\u1790/i,/^\u1780\u1780/i,/^\u179f\u17b8/i,/^\u1780\u1789/i,/^\u178f\u17bb/i,/^\u179c\u17b7\u1785/i,/^\u1792/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(\u17a2\u17b6|\u1785|\u17a2|\u1796|\u1796\u17d2\u179a|\u179f\u17bb|\u179f)/i,short:/^(\u17a2\u17b6|\u1785|\u17a2|\u1796|\u1796\u17d2\u179a|\u179f\u17bb|\u179f)/i,abbreviated:/^(\u17a2\u17b6|\u1785|\u17a2|\u1796|\u1796\u17d2\u179a|\u179f\u17bb|\u179f)/i,wide:/^(\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799|\u1785\u1793\u17d2\u1791|\u17a2\u1784\u17d2\u1782\u17b6\u179a|\u1796\u17bb\u1792|\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd|\u179f\u17bb\u1780\u17d2\u179a|\u179f\u17c5\u179a\u17cd)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u17a2\u17b6/i,/^\u1785/i,/^\u17a2/i,/^\u1796/i,/^\u1796\u17d2\u179a/i,/^\u179f\u17bb/i,/^\u179f/i],any:[/^\u17a2\u17b6/i,/^\u1785/i,/^\u17a2/i,/^\u1796/i,/^\u1796\u17d2\u179a/i,/^\u179f\u17bb/i,/^\u179f\u17c5/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785|\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780|\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb|\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785|\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b|\u1796\u17c1\u179b\u1799\u1794\u17cb|\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a)/i,any:/^(\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785|\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780|\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb|\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785|\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b|\u1796\u17c1\u179b\u1799\u1794\u17cb|\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u1796\u17d2\u179a\u17b9\u1780/i,pm:/^\u179b\u17d2\u1784\u17b6\u1785/i,midnight:/^\u1796\u17c1\u179b\u1780\u178e\u17d2\u178a\u17b6\u179b\u17a2\u1792\u17d2\u179a\u17b6\u178f\u17d2\u179a/i,noon:/^\u1796\u17c1\u179b\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb/i,morning:/\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780/i,afternoon:/\u1796\u17c1\u179b\u179a\u179f\u17c0\u179b/i,evening:/\u1796\u17c1\u179b\u179b\u17d2\u1784\u17b6\u1785/i,night:/\u1796\u17c1\u179b\u1799\u1794\u17cb/i}},defaultParseWidth:"any"})};e.default=r,t.exports=e.default}}]);
//# sourceMappingURL=df-53.5ca6b895.chunk.js.map