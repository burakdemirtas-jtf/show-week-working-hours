(function(){

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const isWorkingHoursPanelExist = $('#grid_kesin_giris_cikis');

  if (!isWorkingHoursPanelExist) {
    alert('Open the "PDKS Giriş Çıkış Bilgileri Kartı" panel, then use the bookmarklet');
    return;
  }

  !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs_plugin_customParseFormat=e()}(this,function(){"use strict";function t(e){return function(t){this[e]=+t}}function n(t){return(t=l[t])&&(t.indexOf?t:t.s.concat(t.f))}function e(t,e){var n,r=l.meridiem;if(r){for(var i=1;i<=24;i+=1)if(-1<t.indexOf(r(i,0,e))){n=12<i;break}}else n=t===(e?"pm":"PM");return n}var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},f=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,i=/\d\d?/,o=/\d*[^\s\d-_:/()]+/,l={},s=function(t){return(t=+t)+(68<t?1900:2e3)},u=[/[+-]\d\d:?(\d\d)?|Z/,function(n){(this.zone||(this.zone={})).offset=function(){if(!n)return 0;if("Z"===n)return 0;var t=n.match(/([+-]|\d\d)/g),e=60*t[1]+(+t[2]||0);return 0===e?0:"+"===t[0]?-e:e}()}],c={A:[o,function(t){this.afternoon=e(t,!1)}],a:[o,function(t){this.afternoon=e(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[i,t("seconds")],ss:[i,t("seconds")],m:[i,t("minutes")],mm:[i,t("minutes")],H:[i,t("hours")],h:[i,t("hours")],HH:[i,t("hours")],hh:[i,t("hours")],D:[i,t("day")],DD:[r,t("day")],Do:[o,function(t){var e=l.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[i,t("month")],MM:[r,t("month")],MMM:[o,function(t){var e=n("months"),t=(n("monthsShort")||e.map(function(t){return t.substr(0,3)})).indexOf(t)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[o,function(t){t=n("months").indexOf(t)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,t("year")],YY:[r,function(t){this.year=s(t)}],YYYY:[/\d{4}/,t("year")],Z:u,ZZ:u};function v(t){for(var e=t,i=l&&l.formats,h=(t=e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,e,n){var r=n&&n.toUpperCase();return e||i[n]||a[n]||i[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,n){return e||n.slice(1)})})).match(f),d=h.length,n=0;n<d;n+=1){var r=h[n],o=c[r],s=o&&o[0],o=o&&o[1];h[n]=o?{regex:s,parser:o}:r.replace(/^\[|\]$/g,"")}return function(t){for(var e,n,r,i={},o=0,s=0;o<d;o+=1){var a,f,u=h[o];"string"==typeof u?s+=u.length:(a=u.regex,f=u.parser,u=t.substr(s),u=a.exec(u)[0],f.call(i,u),t=t.replace(u,""))}return void 0!==(r=(e=i).afternoon)&&(n=e.hours,r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon),i}}return function(t,e,c){c.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var e=e.prototype,m=e.parse;e.parse=function(t){var e=t.date,n=t.utc,r=t.args;this.$u=n;var i=r[1];if("string"==typeof i){var o=!0===r[2],s=!0===r[3],a=o||s,f=r[2];s&&(f=r[2]),l=this.$locale(),!o&&f&&(l=c.Ls[f]),this.$d=function(t,e,n){try{if(-1<["x","X"].indexOf(e))return new Date(("X"===e?1e3:1)*t);var r=v(e)(t),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,u=r.seconds,h=r.milliseconds,d=r.zone,c=new Date,m=s||(i||o?1:c.getDate()),l=i||c.getFullYear(),M=0;i&&!o||(M=0<o?o-1:c.getMonth());var Y=a||0,p=f||0,D=u||0,g=h||0;return d?new Date(Date.UTC(l,M,m,Y,p,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(l,M,m,Y,p,D,g)):new Date(l,M,m,Y,p,D,g)}catch(t){return new Date("")}}(e,i,n),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),a&&e!=this.format(i)&&(this.$d=new Date("")),l={}}else if(i instanceof Array)for(var u=i.length,h=1;h<=u;h+=1){r[1]=i[h-1];var d=c.apply(this,r);if(d.isValid()){this.$d=d.$d,this.$L=d.$L,this.init();break}h===u&&(this.$d=new Date(""))}else m.call(this,t)}}});

  !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_plugin_weekOfYear=t()}(this,function(){"use strict";var f="week",s="year";return function(e,t,n){t=t.prototype;t.week=function(e){if(null!==(e=void 0===e?null:e))return this.add(7*(e-this.week()),"day");var t=this.$locale().yearStart||1;if(11===this.month()&&25<this.date()){var i=n(this).startOf(s).add(1,s).date(t),e=n(this).endOf(f);if(i.isBefore(e))return 1}t=n(this).startOf(s).date(t).startOf(f).subtract(1,"millisecond"),t=this.diff(t,f,!0);return t<0?n(this).startOf("week").week():Math.ceil(t)},t.weeks=function(e){return this.week(e=void 0===e?null:e)}}});

  !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e()}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

  dayjs.extend(dayjs_plugin_customParseFormat);
  dayjs.extend(dayjs_plugin_weekOfYear);

  const rows = [...$$('#grid_kesin_giris_cikis tr')].reverse();
  const lastLogEntry = $('.personelPdksGirisCikisListesi .gridContainer tr:last-child td[align="left"]');
  const workedHoursLabel = $('[for="CalismaSuresi"]');
  const logsWrapper = $('.personelPdksGirisCikisListesi');
  const lastWeekHours = [];

  rows.forEach(row => {
    const columns = [...row.querySelectorAll('td')];
    const dateText = columns[2].querySelector('div').innerText;
    const date = dayjs(dateText, 'DD.MM.YYYY');
    const totalHours = columns[5].querySelector('div').innerText;

    if (lastWeekHours.length === 0 || date.isSame(lastWeekHours[0].date, 'week')) {
      lastWeekHours.push({
        dateText,
        date,
        totalHours,
      });
    }
  });

  let totalHours = 0;
  let totalMinutes = 0;
  let isLastLogEntryToday = false;
  let totalHoursWithToday = 0;
  let totalMinutesWithToday = 0;
  let totalRemainingHours = 0;
  let totalRemainingMinutes = 0;

  lastWeekHours.forEach(day => {
    let [hours, minutes] = day.totalHours.split(':');

    if (+hours >= 11) {
      hours = '11';
      minutes = '00';
    }

    console.log('date', day.dateText);
    console.log('totalHours', day.totalHours);
    console.log('=======');

    totalHours += +hours;
    totalMinutes += +minutes;
  });

  if (lastLogEntry) {
    const now = dayjs();
    const [lastLogEntryDate, lastLogEntryTime] = lastLogEntry.innerText.split(' ');
    const lastLogEntryDateObj = dayjs(lastLogEntryDate, 'DD.MM.YYYY');
    isLastLogEntryToday = lastLogEntryDateObj.isSame(now, 'day');

    if (isLastLogEntryToday) {
      const [lastEntryHour, lastEntryMinute] = lastLogEntryTime.split(':');
      const diffMinutes = now.diff(dayjs(`${lastEntryHour}:${lastEntryMinute}`, 'hh:mm'), 'm');
      let diffHours = Math.floor(diffMinutes / 60);
      let remainingDiffMinutes = diffMinutes - diffHours * 60;

      if (diffHours >= 11) {
        diffHours = '11';
        remainingDiffMinutes = '00';
      }

      console.log('date', lastLogEntryDate);
      console.log('todayTotalHours', `${diffHours}:${remainingDiffMinutes}`);
      console.log('=======');

      totalHoursWithToday = totalHours + +diffHours;
      totalMinutesWithToday = totalMinutes + +remainingDiffMinutes;
    }
  }

  const minuteHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes - minuteHours * 60;
  totalHours += minuteHours;
  totalMinutes = remainingMinutes;

  console.log('totalWorkingHours', `${totalHours}:${totalMinutes}`);
  console.log('=======');

  const minuteHoursWithToday = Math.floor(totalMinutesWithToday / 60);
  const remainingMinutesWithToday = totalMinutesWithToday - minuteHoursWithToday * 60;
  totalHoursWithToday += minuteHoursWithToday;
  totalMinutesWithToday = remainingMinutesWithToday;

  console.log('totalWorkingHoursWithToday', `${totalHoursWithToday}:${totalMinutesWithToday}`);
  console.log('=======');

  totalRemainingHours = 44 - totalHoursWithToday;
  totalRemainingMinutes = 60 - totalMinutesWithToday;
  totalRemainingHours += Math.floor(totalRemainingMinutes / 60);
  console.log('totalRemainingHours', `${totalRemainingHours}:${totalRemainingMinutes}`);
  console.log('=======');

  let totalHoursInput = $('#HaftalikCalismaSuresi');
  let totalHoursWithTodayInput = $('#BugunleBirlikteHaftalikCalismaSuresi');
  let totalRemainingHoursInput = $('#KalanSure');

  if (totalHoursInput) {
    totalHoursInput.value = `${totalHours}:${totalMinutes} saat`;
  } else {
    const totalHoursLabel = `
      <label for="HaftalikCalismaSuresi" class="fr" style="width: 11em;">Haftalık Çalışma Süresi:</label>
    `;
    totalHoursInput = `
      <input class="fr" disabled="disabled" id="HaftalikCalismaSuresi" name="HaftalikCalismaSuresi" style="width:100px;margin-right:10px" type="text" value="${totalHours}:${totalMinutes} saat">
    `;

    workedHoursLabel.insertAdjacentHTML('afterend', totalHoursLabel);
    workedHoursLabel.insertAdjacentHTML('afterend', totalHoursInput);
  }

  if (totalHoursWithTodayInput) {
    totalHoursWithTodayInput.value = `${totalHoursWithToday}:${totalMinutesWithToday} saat`;
  } else if (logsWrapper?.parentElement) {
    const withWrapper = (child) => `<p>${child}</p>`;
    const totalHoursWithTodayLabel = `
      <label for="BugunleBirlikteHaftalikCalismaSuresi" style="width: 18.5em;">Bugünle Birlikte Haftalık Çalışma Süresi:</label>
    `;
    totalHoursWithTodayInput = `
      <input disabled="disabled" id="BugunleBirlikteHaftalikCalismaSuresi" name="BugunleBirlikteHaftalikCalismaSuresi" style="width:100px;margin-right:10px" type="text" value="${totalHoursWithToday}:${totalMinutesWithToday} saat">
    `;

    logsWrapper.parentElement.insertAdjacentHTML('afterend', withWrapper(`${totalHoursWithTodayInput}${totalHoursWithTodayLabel}`));
  }

  if (totalRemainingHoursInput) {
    totalRemainingHoursInput.value = `${totalRemainingHours}:${totalRemainingMinutes} saat`;
  } else if (logsWrapper?.parentElement) {
    const withWrapper = (child) => `<p>${child}</p>`;
    const totalRemainingHoursLabel = `
      <label for="KalanSure" style="width: 18.5em;">Kalan Süre:</label>
    `;
    totalRemainingHoursInput = `
      <input disabled="disabled" id="KalanSure" name="KalanSure" style="width:100px;margin-right:10px" type="text" value="${totalRemainingHours}:${totalRemainingMinutes} saat">
    `;

    logsWrapper.parentElement.insertAdjacentHTML('afterend', withWrapper(`${totalRemainingHoursInput}${totalRemainingHoursLabel}`));
  }
})();