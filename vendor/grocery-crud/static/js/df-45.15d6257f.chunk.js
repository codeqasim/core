(this["webpackJsonpgrocery-crud-3-frontend"]=this["webpackJsonpgrocery-crud-3-frontend"]||[]).push([[43],{205:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}},e.exports=t.default},206:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},207:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;var u=t.slice(r.length);return{value:o,rest:u}}},e.exports=t.default},208:function(e,t,a){"use strict";function n(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function r(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=t.match(o);if(!u)return null;var d,l=u[0],f=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(f)?r(f,(function(e){return e.test(l)})):n(f,(function(e){return e.test(l)}));d=e.valueCallback?e.valueCallback(s):s,d=a.valueCallback?a.valueCallback(d):d;var c=t.slice(l.length);return{value:d,rest:c}}},e.exports=t.default},845:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(846)),r=d(a(847)),i=d(a(848)),o=d(a(849)),u=d(a(850));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"hy",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=l,e.exports=t.default},846:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var r;a=a||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?r+" \u0570\u0565\u057f\u0578":r+" \u0561\u057c\u0561\u057b";return r};var n={lessThanXSeconds:{one:"\u0561\u057e\u0565\u056c\u056b \u0584\u056b\u0579 \u0584\u0561\u0576 1 \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",other:"\u0561\u057e\u0565\u056c\u056b \u0584\u056b\u0579 \u0584\u0561\u0576 {{count}} \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576"},xSeconds:{one:"1 \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",other:"{{count}} \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576"},halfAMinute:"\u056f\u0565\u057d \u0580\u0578\u057a\u0565",lessThanXMinutes:{one:"\u0561\u057e\u0565\u056c\u056b \u0584\u056b\u0579 \u0584\u0561\u0576 1 \u0580\u0578\u057a\u0565",other:"\u0561\u057e\u0565\u056c\u056b \u0584\u056b\u0579 \u0584\u0561\u0576 {{count}} \u0580\u0578\u057a\u0565"},xMinutes:{one:"1 \u0580\u0578\u057a\u0565",other:"{{count}} \u0580\u0578\u057a\u0565"},aboutXHours:{one:"\u0574\u0578\u057f 1 \u056a\u0561\u0574",other:"\u0574\u0578\u057f {{count}} \u056a\u0561\u0574"},xHours:{one:"1 \u056a\u0561\u0574",other:"{{count}} \u056a\u0561\u0574"},xDays:{one:"1 \u0585\u0580",other:"{{count}} \u0585\u0580"},aboutXWeeks:{one:"\u0574\u0578\u057f 1 \u0577\u0561\u0562\u0561\u0569",other:"\u0574\u0578\u057f {{count}} \u0577\u0561\u0562\u0561\u0569"},xWeeks:{one:"1 \u0577\u0561\u0562\u0561\u0569",other:"{{count}} \u0577\u0561\u0562\u0561\u0569"},aboutXMonths:{one:"\u0574\u0578\u057f 1 \u0561\u0574\u056b\u057d",other:"\u0574\u0578\u057f {{count}} \u0561\u0574\u056b\u057d"},xMonths:{one:"1 \u0561\u0574\u056b\u057d",other:"{{count}} \u0561\u0574\u056b\u057d"},aboutXYears:{one:"\u0574\u0578\u057f 1 \u057f\u0561\u0580\u056b",other:"\u0574\u0578\u057f {{count}} \u057f\u0561\u0580\u056b"},xYears:{one:"1 \u057f\u0561\u0580\u056b",other:"{{count}} \u057f\u0561\u0580\u056b"},overXYears:{one:"\u0561\u057e\u0565\u056c\u056b \u0584\u0561\u0576 1 \u057f\u0561\u0580\u056b",other:"\u0561\u057e\u0565\u056c\u056b \u0584\u0561\u0576 {{count}} \u057f\u0561\u0580\u056b"},almostXYears:{one:"\u0570\u0561\u0574\u0561\u0580\u0575\u0561 1 \u057f\u0561\u0580\u056b",other:"\u0570\u0561\u0574\u0561\u0580\u0575\u0561 {{count}} \u057f\u0561\u0580\u056b"}};e.exports=t.default},847:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(205))&&n.__esModule?n:{default:n};var i={date:(0,r.default)({formats:{full:"d MMMM, y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} '\u056a\u2024'{{time}}",long:"{{date}} '\u056a\u2024'{{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},848:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,r){return n[e]};var n={lastWeek:"'\u0576\u0561\u056d\u0578\u0580\u0564' eeee p'\u058a\u056b\u0576'",yesterday:"'\u0565\u0580\u0565\u056f' p'\u058a\u056b\u0576'",today:"'\u0561\u0575\u057d\u0585\u0580' p'\u058a\u056b\u0576'",tomorrow:"'\u057e\u0561\u0572\u0568' p'\u058a\u056b\u0576'",nextWeek:"'\u0570\u0561\u057b\u0578\u0580\u0564' eeee p'\u058a\u056b\u0576'",other:"P"};e.exports=t.default},849:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(206))&&n.__esModule?n:{default:n};var i={ordinalNumber:function(e,t){var a=Number(e),n=a%100;return n<10&&n%10===1?a+"\u058a\u056b\u0576":a+"\u058a\u0580\u0564"},era:(0,r.default)({values:{narrow:["\u0554","\u0544"],abbreviated:["\u0554\u0531","\u0544\u0539"],wide:["\u0554\u0580\u056b\u057d\u057f\u0578\u057d\u056b\u0581 \u0561\u057c\u0561\u057b","\u0544\u0565\u0580 \u0569\u057e\u0561\u0580\u056f\u0578\u0582\u0569\u0575\u0561\u0576"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u05541","\u05542","\u05543","\u05544"],wide:["1\u058a\u056b\u0576 \u0584\u0561\u057c\u0578\u0580\u0564","2\u058a\u0580\u0564 \u0584\u0561\u057c\u0578\u0580\u0564","3\u058a\u0580\u0564 \u0584\u0561\u057c\u0578\u0580\u0564","4\u058a\u0580\u0564 \u0584\u0561\u057c\u0578\u0580\u0564"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["\u0540","\u0553","\u0544","\u0531","\u0544","\u0540","\u0540","\u0555","\u054d","\u0540","\u0546","\u0534"],abbreviated:["\u0570\u0578\u0582\u0576","\u0583\u0565\u057f","\u0574\u0561\u0580","\u0561\u057a\u0580","\u0574\u0561\u0575","\u0570\u0578\u0582\u0576","\u0570\u0578\u0582\u056c","\u0585\u0563\u057d","\u057d\u0565\u057a","\u0570\u0578\u056f","\u0576\u0578\u0575","\u0564\u0565\u056f"],wide:["\u0570\u0578\u0582\u0576\u057e\u0561\u0580","\u0583\u0565\u057f\u0580\u057e\u0561\u0580","\u0574\u0561\u0580\u057f","\u0561\u057a\u0580\u056b\u056c","\u0574\u0561\u0575\u056b\u057d","\u0570\u0578\u0582\u0576\u056b\u057d","\u0570\u0578\u0582\u056c\u056b\u057d","\u0585\u0563\u0578\u057d\u057f\u0578\u057d","\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580","\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580","\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580","\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["\u053f","\u0535","\u0535","\u0549","\u0540","\u0548","\u0547"],short:["\u056f\u0580","\u0565\u0580","\u0565\u0584","\u0579\u0584","\u0570\u0563","\u0578\u0582\u0580","\u0577\u0562"],abbreviated:["\u056f\u056b\u0580","\u0565\u0580\u056f","\u0565\u0580\u0584","\u0579\u0578\u0580","\u0570\u0576\u0563","\u0578\u0582\u0580\u0562","\u0577\u0561\u0562"],wide:["\u056f\u056b\u0580\u0561\u056f\u056b","\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b","\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b","\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b","\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b","\u0578\u0582\u0580\u0562\u0561\u0569","\u0577\u0561\u0562\u0561\u0569"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"\u056f\u0565\u057d\u0563\u0577",noon:"\u056f\u0565\u057d\u0585\u0580",morning:"\u0561\u057c\u0561\u057e\u0578\u057f",afternoon:"\u0581\u0565\u0580\u0565\u056f",evening:"\u0565\u0580\u0565\u056f\u0578",night:"\u0563\u056b\u0577\u0565\u0580"},abbreviated:{am:"AM",pm:"PM",midnight:"\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580",noon:"\u056f\u0565\u057d\u0585\u0580",morning:"\u0561\u057c\u0561\u057e\u0578\u057f",afternoon:"\u0581\u0565\u0580\u0565\u056f",evening:"\u0565\u0580\u0565\u056f\u0578",night:"\u0563\u056b\u0577\u0565\u0580"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580",noon:"\u056f\u0565\u057d\u0585\u0580",morning:"\u0561\u057c\u0561\u057e\u0578\u057f",afternoon:"\u0581\u0565\u0580\u0565\u056f",evening:"\u0565\u0580\u0565\u056f\u0578",night:"\u0563\u056b\u0577\u0565\u0580"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"\u056f\u0565\u057d\u0563\u0577",noon:"\u056f\u0565\u057d\u0585\u0580",morning:"\u0561\u057c\u0561\u057e\u0578\u057f\u0568",afternoon:"\u0581\u0565\u0580\u0565\u056f\u0568",evening:"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576",night:"\u0563\u056b\u0577\u0565\u0580\u0568"},abbreviated:{am:"AM",pm:"PM",midnight:"\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580\u056b\u0576",noon:"\u056f\u0565\u057d\u0585\u0580\u056b\u0576",morning:"\u0561\u057c\u0561\u057e\u0578\u057f\u0568",afternoon:"\u0581\u0565\u0580\u0565\u056f\u0568",evening:"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576",night:"\u0563\u056b\u0577\u0565\u0580\u0568"},wide:{am:"a.m.",pm:"p.m.",midnight:"\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580\u056b\u0576",noon:"\u056f\u0565\u057d\u0585\u0580\u056b\u0576",morning:"\u0561\u057c\u0561\u057e\u0578\u057f\u0568",afternoon:"\u0581\u0565\u0580\u0565\u056f\u0568",evening:"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576",night:"\u0563\u056b\u0577\u0565\u0580\u0568"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},850:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(207)),r=i(a(208));function i(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)((-|\u058a)?(\u056b\u0576|\u0580\u0564))?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(\u0554|\u0544)/i,abbreviated:/^(\u0554\.?\s?\u0531\.?|\u0544\.?\s?\u0539\.?\s?\u0531\.?|\u0544\.?\s?\u0539\.?|\u0554\.?\s?\u0540\.?)/i,wide:/^(\u0584\u0580\u056b\u057d\u057f\u0578\u057d\u056b\u0581 \u0561\u057c\u0561\u057b|\u0574\u0565\u0580 \u0569\u057e\u0561\u0580\u056f\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u056b\u0581 \u0561\u057c\u0561\u057b|\u0574\u0565\u0580 \u0569\u057e\u0561\u0580\u056f\u0578\u0582\u0569\u0575\u0561\u0576|\u0584\u0580\u056b\u057d\u057f\u0578\u057d\u056b\u0581 \u0570\u0565\u057f\u0578)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u0584|\u0574)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0584[1234]/i,wide:/^[1234]((-|\u058a)?(\u056b\u0576|\u0580\u0564)) \u0584\u0561\u057c\u0578\u0580\u0564/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[\u0570\u0583\u0574\u0561\u0585\u057d\u0576\u0564]/i,abbreviated:/^(\u0570\u0578\u0582\u0576|\u0583\u0565\u057f|\u0574\u0561\u0580|\u0561\u057a\u0580|\u0574\u0561\u0575|\u0570\u0578\u0582\u0576|\u0570\u0578\u0582\u056c|\u0585\u0563\u057d|\u057d\u0565\u057a|\u0570\u0578\u056f|\u0576\u0578\u0575|\u0564\u0565\u056f)/i,wide:/^(\u0570\u0578\u0582\u0576\u057e\u0561\u0580|\u0583\u0565\u057f\u0580\u057e\u0561\u0580|\u0574\u0561\u0580\u057f|\u0561\u057a\u0580\u056b\u056c|\u0574\u0561\u0575\u056b\u057d|\u0570\u0578\u0582\u0576\u056b\u057d|\u0570\u0578\u0582\u056c\u056b\u057d|\u0585\u0563\u0578\u057d\u057f\u0578\u057d|\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580|\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580|\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580|\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0570/i,/^\u0583/i,/^\u0574/i,/^\u0561/i,/^\u0574/i,/^\u0570/i,/^\u0570/i,/^\u0585/i,/^\u057d/i,/^\u0570/i,/^\u0576/i,/^\u0564/i],any:[/^\u0570\u0578\u0582/i,/^\u0583/i,/^\u0574\u0561\u0580/i,/^\u0561/i,/^\u0574\u0561\u0575/i,/^\u0570\u0578\u0582\u0576/i,/^\u0570\u0578\u0582\u056c/i,/^\u0585/i,/^\u057d/i,/^\u0570\u0578\u056f/i,/^\u0576/i,/^\u0564/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[\u0565\u0579\u0570\u0578\u0577\u056f]/i,short:/^(\u056f\u0580|\u0565\u0580|\u0565\u0584|\u0579\u0584|\u0570\u0563|\u0578\u0582\u0580|\u0577\u0562)/i,abbreviated:/^(\u056f\u056b\u0580|\u0565\u0580\u056f|\u0565\u0580\u0584|\u0579\u0578\u0580|\u0570\u0576\u0563|\u0578\u0582\u0580\u0562|\u0577\u0561\u0562)/i,wide:/^(\u056f\u056b\u0580\u0561\u056f\u056b|\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b|\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b|\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b|\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b|\u0578\u0582\u0580\u0562\u0561\u0569|\u0577\u0561\u0562\u0561\u0569)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u056f/i,/^\u0565/i,/^\u0565/i,/^\u0579/i,/^\u0570/i,/^(\u0578|\u0548)/,/^\u0577/i],short:[/^\u056f/i,/^\u0565\u0580/i,/^\u0565\u0584/i,/^\u0579/i,/^\u0570/i,/^(\u0578|\u0548)/,/^\u0577/i],abbreviated:[/^\u056f/i,/^\u0565\u0580\u056f/i,/^\u0565\u0580\u0584/i,/^\u0579/i,/^\u0570/i,/^(\u0578|\u0548)/,/^\u0577/i],wide:[/^\u056f/i,/^\u0565\u0580\u056f/i,/^\u0565\u0580\u0565/i,/^\u0579/i,/^\u0570/i,/^(\u0578|\u0548)/,/^\u0577/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^([ap]|\u056f\u0565\u057d\u0563\u0577|\u056f\u0565\u057d\u0585\u0580|(\u0561\u057c\u0561\u057e\u0578\u057f\u0568?|\u0581\u0565\u0580\u0565\u056f\u0568?|\u0565\u0580\u0565\u056f\u0578(\u0575\u0561\u0576)?|\u0563\u056b\u0577\u0565\u0580\u0568?))/i,any:/^([ap]\.?\s?m\.?|\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580(\u056b\u0576)?|\u056f\u0565\u057d\u0585\u0580(\u056b\u0576)?|(\u0561\u057c\u0561\u057e\u0578\u057f\u0568?|\u0581\u0565\u0580\u0565\u056f\u0568?|\u0565\u0580\u0565\u056f\u0578(\u0575\u0561\u0576)?|\u0563\u056b\u0577\u0565\u0580\u0568?))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/\u056f\u0565\u057d\u0563\u056b\u0577\u0565\u0580/i,noon:/\u056f\u0565\u057d\u0585\u0580/i,morning:/\u0561\u057c\u0561\u057e\u0578\u057f/i,afternoon:/\u0581\u0565\u0580\u0565\u056f/i,evening:/\u0565\u0580\u0565\u056f\u0578/i,night:/\u0563\u056b\u0577\u0565\u0580/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default}}]);
//# sourceMappingURL=df-45.15d6257f.chunk.js.map