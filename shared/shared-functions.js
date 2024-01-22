const root=document.documentElement,siteMenuWrap=$("#site-menu-wrap"),siteMenuBtn=$("#site-menu-btn");let scrollPos,isMenuOpen=!1;document.addEventListener("DOMContentLoaded",(function(){function e(){const e=document.querySelector('input[name="colorScheme"]:checked').value;localStorage.setItem("userColorScheme",e),root.setAttribute("data-theme",e)}document.querySelectorAll('input[name="colorScheme"]').forEach((n=>{n.addEventListener("change",e)}));const n=localStorage.getItem("userColorScheme");n||localStorage.setItem("userColorScheme","auto");const t=n||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.querySelector(`input[value="${t}"]`).checked=!0,e()}));const getTransitionEvent=()=>{const e=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(const t in n)if(void 0!==e.style[t])return n[t]},transitionEvent=getTransitionEvent();function updateQueryStringParameter(e,n){var t=new URLSearchParams(window.location.search);if("URLSearchParams"in window){""===n?t.delete(e):t.set(e,n);var o=window.location.pathname+"?"+t.toString();history.pushState(null,"",o)}}function clearQueryStringParameter(){new URLSearchParams(window.location.search);if("URLSearchParams"in window){var e=window.location.pathname;history.pushState(null,"",e)}}function appendSelectboxStateClass(e,n){""!==n?e.addClass("changed"):e.removeClass("changed")}function replaceUnitText(e){var n=flat_view?"譜面":"曲";return e.replace("unit",n)}transitionEndCallback=e=>{root.removeEventListener(transitionEvent,transitionEndCallback),root.classList.remove("transitioning")},$(document).ready((function(){function e(){dataLayer.push(arguments)}function n(){siteMenuWrap.addClass("anim-leave").one("animationend webkitAnimationEnd oAnimationEnd",(function(){siteMenuWrap.removeClass("open").removeClass("anim-leave")})),$("#app-wrapper").removeClass("menu-open").css("top",""),$(window).scrollTop(scrollPos),isMenuOpen=!1,siteMenuBtn.removeClass("active")}"URLSearchParams"in window&&updateChartLevelSelectboxValue(searchParams),$("html").removeClass("page-loading"),window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-141271073-1"),e("config","G-YZ8GJR7QFL"),siteMenuBtn.on("click",(function(){event.preventDefault(),isMenuOpen?n():(siteMenuBtn.addClass("active"),scrollPos=$(window).scrollTop(),$("#app-wrapper").css("top",-1*scrollPos).addClass("menu-open"),$(window).scrollTop(0),siteMenuWrap.addClass("open").addClass("anim-enter").one("animationend webkitAnimationEnd oAnimationEnd",(function(){siteMenuWrap.removeClass("anim-enter"),isMenuOpen=!0})))})),$(document).on("keydown",(function(e){"Escape"===e.key&&isMenuOpen&&n()})),$("#site-menu-backdrop").on("click",(function(){isMenuOpen&&n()})),$("#site-menu-close-btn").on("click",(function(){isMenuOpen&&n()}))}));
var searchParams=new URLSearchParams(window.location.search),localize_strings={emptyTable:"テーブルにデータがありません",info:replaceUnitText(" _TOTAL_unit (_START_〜_END_ 表示中)"),infoEmpty:replaceUnitText(" 0 unit"),infoFiltered:replaceUnitText("（全 _MAX_ unit）"),infoPostFix:"",infoThousands:",",lengthMenu:"1ページ表示 _MENU_",loadingRecords:"読み込み中...",processing:"処理中...",search:"検索",searchPlaceholder:"曲名・アーティスト",zeroRecords:"一致するレコードがありません",paginate:{sFirst:"先頭",sLast:"最終",sNext:"NEXT",sPrevious:"PREV"},aria:{sSortAscending:": 列を昇順に並べ替えるにはアクティブにする",sSortDescending:": 列を降順に並べ替えるにはアクティブにする"}};function hasPropertyAndValue(e,n){return e.hasOwnProperty(n)&&""!==e[n]}function sortLevels(e){return function(n,a,t,r){var i=e+"_i";return"sort"===a?n[i]?addLeadingZero(n[i]):addLeadingZero(n[e]):n[e]}}function addLeadingZero(e){return""!=e?(lev_processed=parseInt(e)<10?"0"+e:e,lev_processed):""}function sortByLeadingZeros(e){return function(n,a){var t=n[e]?n[e]:"",r=a[e]?a[e]:"";return addLeadingZero(t).localeCompare(addLeadingZero(r))}}function lvNumHtmlTemplate(e,n,a=!0){if(e[n]){var t=(n=""+n)+"_i",r=a&&e[t]?`<span class="lv-num-precise">${e[t]}</span>`:"",i=e[n].match(/^([0-9]{1,2})(\+?)(\?)?$/);return`<span class="lv-num-simple">${i?`<span class="num">${i[1]}</span>`:`<span class="num">${e[n]}</span>`}${i&&"+"===i[2]?'<span class="plus">+</span>':""}${i&&"?"===i[3]?'<span class="question">?</span>':""}</span>\n                ${r}`}}function renderLvNum(e){return function(n,a,t){return"display"===a&&t[e]?`\n                <div class="inner-wrap">\n                    ${lvNumHtmlTemplate(t,e)}\n                </div>`:n}}function renderChartDifficultyNameAndLv(e,n,a,t,r){return function(a,i,s){if("display"===i){var o=convertDifficultyNames(s[e],!1,r);if("we_kanji"===s[e])var l="☆"+s[t];else if("lev_utage"===s[e])l="";else l=s[t];return`\n                <div class="inner-wrap">\n                    <span class="diff-name">${o}</span>\n                    <span class="lv-num-wrap">\n                        ${lvNumHtmlTemplate(s,n,!1)}\n                        <span class="lv-num-precise">${l}</span>\n                    </span>\n                </div>`}return a}}function renderChartLinkBtn(e,n){return function(e,a,t){return"display"===a?chartLinkBtn(t.chart_link,n):e}}function chartLinkBtn(e,n){return e&&""!==e?`<a class="btn chartlink" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" href="https://sdvx.in/${n}/${e}.htm">\n                    <span class="img"></span><span>譜面確認</span>\n                </a><span class="chart-provider">sdvx.in 提供</span>`:""}function renderChartDifficultyName(e,n){return function(a,t,r){return"display"===t?'<span class="diff-name">'+convertDifficultyNames(r[e],!1,n)+"</span>":a}}function convertDifficultyNames(e,n,a){const t=a[e];if(n){var r=Object.keys(a).indexOf(e)+1;return e.startsWith("dx_")&&(r-=1),1===r.toString().length&&(r="0"+r),`${r} ${t}`}return t}function sortByDifficultyCategory(e,n){return function(a,t){return convertDifficultyNames(a[e],!0,n).localeCompare(convertDifficultyNames(t[e],!0,n))}}function renderInWrapper(){return function(e,n,a){return"display"===n?'<div class="inner-wrap">'+e+"</div>":e}}function flattenMusicData(e,n,a,t){return n?e.map((e=>Object.keys(a).map((n=>t(e,n))))).flat().filter((e=>!!e)):e}function formatDate(e,n){if(8===e.length)var a=e.slice(0,4),t=e.slice(4,6),r=e.slice(6,8);else{if(6!==e.length)return"?";a="20"+e.slice(0,2),t=e.slice(2,4),r=e.slice(4,6)}var i=`${a}-${t}-${r}`;if("JP"==n)var s=((new Date).getFullYear()==a?"":a+"/")+`${t}/${r}(${["日","月","火","水","木","金","土"][new Date(i).getDay()]})`;else s=i;return s}function getColumnIndexByName(e){return columns_params.findIndex((function(n){return n.name===e}))}function tableInitCompleteFunctions(e){function n(n){if("gameRegionQuickSwitch"===n.target.id)var a=n.target.checked?"intl":"jp";else a=document.querySelector('input[name="gameRegion"]:checked').value;localStorage.setItem("userGameRegion",a),root.setAttribute("data-game-region",a);getDefaultSearchValues(columns_params,"intl"===a);var t=columns_params.findIndex((e=>void 0!==e.defaultSearch));if(-1!==t){var r="intl"===a?columns_params[t].defaultSearch:"";e.api().column(t).search(r).draw()}"gameRegionQuickSwitch"===n.target.id?(document.getElementById("gameRegionIntl").checked=n.target.checked,document.getElementById("gameRegionJP").checked=!n.target.checked):document.getElementById("gameRegionQuickSwitch").checked="intl"===a}generateFilterDropdowns(e),applyFilterFromURLSearchParams(e,searchParams),$("#table").addClass("loading-done"),$("html").removeClass("table-loading"),$("#table").on("column-visibility.dt",(function(){$.fn.dataTable.tables({visible:!0,api:!0}).columns.adjust()})),$("select#chart_lev").on("change",(function(){var n=$(this),a=$(this).val(),t=$.fn.dataTable.util.escapeRegex($(this).val());"filter"==n.data("type")?(e.api().column("chart_lev:name").search(t?"^"+t+"$":"",!0,!1),updateQueryStringParameter("chart_lev",a),e.api().draw()):window.location.href="./lv?chart_lev="+encodeURIComponent(a)})),$("button.reset-search").on("click",(function(){e.api().order(default_order).columns().search("");const n=columns_params.findIndex((e=>void 0!==e.defaultSearch));if(-1!==n){const a=columns_params[n].defaultSearch;e.api().column(n).search(a)}e.api().draw(),clearQueryStringParameter(),$(".toolbar.filters select").prop("selectedIndex",0).removeClass("changed")})),gameRegionChecks.forEach((e=>{e.addEventListener("change",n)})),gameRegionQuickSwitch.addEventListener("change",n)}function generateFilterDropdowns(e){var n=e.api().rows().data();e.api().columns().every((function(){var a=e.api().order(),t=this,r=t.data(),i=columns_params[t.index()];if("filterable"in i&&1==i.filterable){var s=$('<div class="select-wrap '+i.className+'"><span class="label">'+i.displayTitle+"</span></div>").appendTo($(".toolbar.filters")),o=$('<select id="'+i.name+'"><option value="" data-default>——</option></select>');if(o.appendTo(s),o.on("change",(function(){var e=$(this).val(),n=$.fn.dataTable.util.escapeRegex($(this).val());appendSelectboxStateClass($(this),e),t.index()===getColumnIndexByName("date")||""===n&&a[0][0]===getColumnIndexByName("date")?t.rowGroup().enable():t.rowGroup().disable(),updateQueryStringParameter(i.name,e),t.search(n?"^"+n+"$":"",!0,!1).draw()})),r=i.customDropdownSortSource?r.map((function(e,n){return n})).sort((function(e,a){var t=n[e],r=n[a];return"function"==typeof i.customDropdownSortSource?i.customDropdownSortSource(t,r):t[i.customDropdownSortSource].localeCompare(r[i.customDropdownSortSource])})).map((function(e){return r[e]})):r.sort(),i.reverseSortOrder&&r.reverse(),r.unique().each((function(e,n){""!=e&&o.append('<option value="'+e+'">'+e+"</option>")})),"URLSearchParams"in window){var l=searchParams.get(i.name);if(null!==l){var c=unescapeSlashes(l);r.unique().each((function(e){o.val(c)})),appendSelectboxStateClass(o,c)}}}})),$('<button class="btn reset-search">Clear Search</button>').appendTo($(".toolbar.filters"))}function applyFilterFromURLSearchParams(e,n){"URLSearchParams"in window&&(n.forEach((function(a,t){e.api().columns().every((function(){var e=columns_params[this.index()],a=n.get(e.name),t=$.fn.dataTable.util.escapeRegex(decodeURIComponent(a));null!==a&&this.search(a?"^"+t+"$":"",!0,!1)}))})),e.api().draw())}function toggleDateRowGroup(e,n){var a=e.api().order();isSearchActive(e.api().columns().search(),n)||(a[0][0]!==getColumnIndexByName("date")?e.api().rowGroup().disable():e.api().rowGroup().enable())}function isSearchActive(e,n){for(let a=0;a<e.length;a+=1)if(""!==e[a]){if(e[a]===n[a].search)continue;return!0}return!1}function getDefaultSearchValues(e,n=!1){return n?e.map((e=>void 0!==e.defaultSearch?{search:e.defaultSearch}:null)):Array(e.length).fill(null)}function renderModalHeader(e,n,a,t,r="譜面確認"){return function(i){var s=i.data(),o=encodeURIComponent(s.title.replaceAll("&","＆").replaceAll(":","：").replaceAll("[","［").replaceAll("]","］").replaceAll("#","＃").replaceAll('"',"”")),l=s[n],c=`${t}${o}`,u=s[a]?s[a]:c;return`\n            <div class="modal-header" style="--img:url(jacket/${l});">\n                <span class="header-img"></span>\n                <span class="header-img-overlay"></span>\n                <div class="img-wrap">\n                    <img src="jacket/${l}" />\n                </div>\n                <div class="content-wrap">\n                    <span class="title">${s.title}</span>\n                    <span class="artist">${s.artist}</span>\n                    <div class="quicklinks">\n                        <a class="wiki" href="${u}" target="_blank" rel="noopener noreferrer nofollow">Wiki</a>\n                        <a class="youtube" href="https://youtube.com/results?search_query=${e}+${r}+${o}" target="_blank" rel="noopener noreferrer nofollow"></a>\n                    </div>\n                </div>\n            </div>`}}function renderModalFooter(e){return function(n){var a=n.data();return`\n            <div class="modal-footer">\n                <div class="report">\n                    <a class="report-btn" \n                        href="https://twitter.com/intent/tweet?text=@otoge_db%0A%E3%80%90%23${e}_DB%20%E6%83%85%E5%A0%B1%E6%8F%90%E4%BE%9B%E3%80%91%0A%E6%9B%B2%E5%90%8D%EF%BC%9A${encodeURIComponent(a.title)}%0A%E8%AD%9C%E9%9D%A2%EF%BC%9A"\n                        target="_blank" rel="noopener noreferrer nofollow">💬 足りない情報・間違いを報告する （Twitter）</a>\n                </div>\n            </div>`}}
