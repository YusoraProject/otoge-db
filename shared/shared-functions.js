const root=document.documentElement,toggleSwitch=document.getElementById("themeToggleCheckbox");window.matchMedia("(prefers-color-scheme: dark)").matches&&(toggleSwitch.checked=!1,root.setAttribute("data-theme","dark")),window.matchMedia("(prefers-color-scheme: light)").matches&&(toggleSwitch.checked=!0,root.setAttribute("data-theme","light"));const getTransitionEvent=()=>{const t=document.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(const n in e)if(void 0!==t.style[n])return e[n]},transitionEvent=getTransitionEvent();function switchTheme(t){root.classList.toggle("transitioning"),t.target.checked?root.setAttribute("data-theme","light"):root.setAttribute("data-theme","dark"),root.addEventListener(transitionEvent,transitionEndCallback)}function updateQueryStringParameter(t,e){var n=new URLSearchParams(window.location.search);if("URLSearchParams"in window){""===e?n.delete(t):n.set(t,e);var a=window.location.pathname+"?"+n.toString();history.pushState(null,"",a)}}function clearQueryStringParameter(){new URLSearchParams(window.location.search);if("URLSearchParams"in window){var t=window.location.pathname;history.pushState(null,"",t)}}function appendSelectboxStateClass(t,e){""!==e?t.addClass("changed"):t.removeClass("changed")}function replaceUnitText(t){var e=flat_view?"譜面":"曲";return t.replace("unit",e)}toggleSwitch.addEventListener("change",switchTheme,!1),transitionEndCallback=t=>{root.removeEventListener(transitionEvent,transitionEndCallback),root.classList.remove("transitioning")},$(document).ready((function(){function t(){dataLayer.push(arguments)}"URLSearchParams"in window&&updateChartLevelSelectboxValue(searchParams),$("html").removeClass("page-loading"),window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-141271073-1"),t("config","G-YZ8GJR7QFL")}));
var searchParams=new URLSearchParams(window.location.search),localize_strings={emptyTable:"テーブルにデータがありません",info:replaceUnitText(" _TOTAL_unit (_START_〜_END_ 表示中)"),infoEmpty:replaceUnitText(" 0 unit"),infoFiltered:replaceUnitText("（全 _MAX_ unit）"),infoPostFix:"",infoThousands:",",lengthMenu:"1ページ表示 _MENU_",loadingRecords:"読み込み中...",processing:"処理中...",search:"検索",searchPlaceholder:"曲名・アーティスト",zeroRecords:"一致するレコードがありません",paginate:{sFirst:"先頭",sLast:"最終",sNext:"NEXT",sPrevious:"PREV"},aria:{sSortAscending:": 列を昇順に並べ替えるにはアクティブにする",sSortDescending:": 列を降順に並べ替えるにはアクティブにする"}};function hasPropertyAndValue(e,n){return e.hasOwnProperty(n)&&""!==e[n]}function sortLevels(e){return function(n,a,r,t){var s=e+"_i";return"sort"===a?n[s]?addLeadingZero(n[s]):addLeadingZero(n[e]):n[e]}}function addLeadingZero(e){return""!=e?(lev_processed=parseInt(e)<10?"0"+e:e,lev_processed):""}function sortByLeadingZeros(e){return function(n,a){var r=n[e]?n[e]:"",t=a[e]?a[e]:"";return addLeadingZero(r).localeCompare(addLeadingZero(t))}}function lvNumHtmlTemplate(e,n){if(e[n]){var a=(n=""+n)+"_i",r=e[a]?`<span class="lv-num-precise">${e[a]}</span>`:"",t=e[n].match(/^([0-9]{1,2})(\+)?$/);return`<span class="lv-num-simple">${t?`<span class="num">${t[1]}</span>`:e[n]}${t&&"+"===t[2]?'<span class="plus">+</span>':""}</span>${r}`}}function renderLvNum(e){return function(n,a,r){return"display"===a&&r[e]?`\n                <div class="inner-wrap">\n                    ${lvNumHtmlTemplate(r,e)}\n                </div>`:n}}function renderChartDifficultyNameAndLv(e,n,a,r,t){return function(a,s,i){if("display"===s){var l=convertDifficultyNames(i[e],!1,t),o="we_kanji"===i[e]?"☆"+i[r]:i[r],c=i[n].match(/^([0-9]{1,2})(\+)?$/);if(c){var p=c[1];return"+"===c[2]?`<div class="inner-wrap"><span class="diff-name">${l}</span><span class="lv-num-wrap"><span class="lv-num-simple"><span class="num">${p}</span><span class="plus">+</span></span><span class="lv-num-precise">${o}</span></span></div>`:`<div class="inner-wrap"><span class="diff-name">${l}</span><span class="lv-num-wrap"><span class="lv-num-simple"><span class="num">${p}</span></span><span class="lv-num-precise">${o}</span></span></div>`}return`<div class="inner-wrap"><span class="diff-name">${l}</span><span class="lv-num-wrap"><span class="lv-num-simple"><span class="num">${i[n]}</span></span><span class="lv-num-precise">${o}</span></span></div>`}return a}}function renderChartLinkBtn(e){return function(e,n,a){return"display"===n?chartLinkBtn(a.chart_link):e}}function chartLinkBtn(e){return""!==e?`<a class="btn chartlink" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();" href="https://sdvx.in/chunithm/${e}.htm">\n                    <span class="img"></span><span>譜面確認</span>\n                </a><span class="chart-provider">sdvx.in 提供</span>`:""}function renderChartDifficultyName(e,n){return function(a,r,t){return"display"===r?'<span class="diff-name">'+convertDifficultyNames(t[e],!1,n)+"</span>":a}}function convertDifficultyNames(e,n,a){const r=a[e];if(n){var t=Object.keys(a).indexOf(e)+1;return e.startsWith("dx_")&&(t-=1),1===t.toString().length&&(t="0"+t),`${t} ${r}`}return r}function sortByDifficultyCategory(e,n){return function(a,r){return convertDifficultyNames(a[e],!0,n).localeCompare(convertDifficultyNames(r[e],!0,n))}}function renderInWrapper(){return function(e,n,a){return"display"===n?'<div class="inner-wrap">'+e+"</div>":e}}function flattenMusicData(e,n,a,r){return n?e.map((e=>Object.keys(a).map((n=>r(e,n))))).flat().filter((e=>!!e)):e}function formatDate(e,n){if(8===e.length)var a=e.slice(0,4),r=e.slice(4,6),t=e.slice(6,8);else if(6===e.length)a="20"+e.slice(0,2),r=e.slice(2,4),t=e.slice(4,6);var s=`${a}-${r}-${t}`;if("JP"==n)var i=((new Date).getFullYear()==a?"":a+"/")+`${r}/${t}(${["日","月","火","水","木","金","土"][new Date(s).getDay()]})`;else i=s;return i}function getColumnIndexByName(e){return columns_params.findIndex((function(n){return n.name===e}))}function tableInitCompleteFunctions(e){generateFilterDropdowns(e),applyFilterFromURLSearchParams(e,searchParams),e.on("order.dt",(function(){toggleDateRowGroup(e)})),$("#table").addClass("loading-done"),$("html").removeClass("table-loading"),$("#table").on("column-visibility.dt",(function(){$.fn.dataTable.tables({visible:!0,api:!0}).columns.adjust()})),$("select#chart_lev").on("change",(function(){var n=$(this),a=$(this).val(),r=$.fn.dataTable.util.escapeRegex($(this).val());"filter"==n.data("type")?(e.api().column("chart_lev:name").search(r?"^"+r+"$":"",!0,!1),updateQueryStringParameter("chart_lev",a),e.api().draw()):window.location.href="./lv?chart_lev="+encodeURIComponent(a)})),$("button.reset-search").on("click",(function(){e.api().order(default_order).search("").columns().search("").draw(),clearQueryStringParameter(),toggleDateRowGroup(e),$(".toolbar.filters select").prop("selectedIndex",0).removeClass("changed")}))}function generateFilterDropdowns(e){var n=e.api().rows().data();e.api().columns().every((function(){var a=e.api().order(),r=this,t=r.data(),s=columns_params[r.index()];if("filterable"in s&&1==s.filterable){var i=$('<div class="select-wrap '+s.className+'"><span class="label">'+s.displayTitle+"</span></div>").appendTo($(".toolbar.filters")),l=$('<select id="'+s.name+'"><option value="" data-default>——</option></select>');if(l.appendTo(i),l.on("change",(function(){var e=$(this).val(),n=$.fn.dataTable.util.escapeRegex($(this).val());appendSelectboxStateClass($(this),e),r.index()===getColumnIndexByName("date")||""===n&&a[0][0]===getColumnIndexByName("date")?r.rowGroup().enable():r.rowGroup().disable(),updateQueryStringParameter(s.name,e),r.search(n?"^"+n+"$":"",!0,!1).draw()})),t=s.customDropdownSortSource?t.map((function(e,n){return n})).sort((function(e,a){var r=n[e],t=n[a];return"function"==typeof s.customDropdownSortSource?s.customDropdownSortSource(r,t):r[s.customDropdownSortSource].localeCompare(t[s.customDropdownSortSource])})).map((function(e){return t[e]})):t.sort(),s.reverseSortOrder&&t.reverse(),t.unique().each((function(e,n){""!=e&&l.append('<option value="'+e+'">'+e+"</option>")})),"URLSearchParams"in window){var o=searchParams.get(s.name);if(null!==o){var c=unescapeSlashes(o);t.unique().each((function(e){l.val(c)})),appendSelectboxStateClass(l,c)}}}}))}function applyFilterFromURLSearchParams(e,n){"URLSearchParams"in window&&(n.forEach((function(a,r){e.api().columns().every((function(){var e=columns_params[this.index()],a=n.get(e.name),r=$.fn.dataTable.util.escapeRegex(decodeURIComponent(a));null!==a&&this.search(a?"^"+r+"$":"",!0,!1)}))})),e.api().draw())}function toggleDateRowGroup(e){var n=e.api().order(),a=e.api().columns().search(),r=!1;for(let e=0;e<a.length;e+=1)if(e in a&&""!==a[e]){r=!0;break}return n[0][0]!==getColumnIndexByName("date")?void e.api().rowGroup().disable():n[0][0]!==getColumnIndexByName("date")||r?void 0:void e.api().rowGroup().enable()}function renderModalHeader(e,n,a,r,t="譜面確認"){return function(s){var i=s.data(),l=encodeURIComponent(i.title.replaceAll("&","＆").replaceAll(":","：").replaceAll("[","［").replaceAll("]","］").replaceAll("#","＃").replaceAll('"',"”")),o=i[n],c=`${r}${l}`,p=i[a]?i[a]:c;return`\n            <div class="modal-header" style="--img:url(jacket/${o});">\n                <span class="header-img"></span>\n                <span class="header-img-overlay"></span>\n                <div class="img-wrap">\n                    <img src="jacket/${o}" />\n                </div>\n                <div class="content-wrap">\n                    <span class="title">${i.title}</span>\n                    <span class="artist">${i.artist}</span>\n                    <div class="quicklinks">\n                        <a class="wiki" href="${p}" target="_blank" rel="noopener noreferrer nofollow">Wiki</a>\n                        <a class="youtube" href="https://youtube.com/results?search_query=${e}+${t}+${l}" target="_blank" rel="noopener noreferrer nofollow"></a>\n                    </div>\n                </div>\n            </div>`}}function renderModalFooter(e){return function(n){var a=n.data();return`\n            <div class="modal-footer">\n                <div class="report">\n                    <a class="report-btn" \n                        href="https://twitter.com/intent/tweet?text=@zvuc_%0A%E3%80%90%23${e}_DB%20%E6%83%85%E5%A0%B1%E6%8F%90%E4%BE%9B%E3%80%91%0A%E6%9B%B2%E5%90%8D%EF%BC%9A${encodeURIComponent(a.title)}%0A%E8%AD%9C%E9%9D%A2%EF%BC%9A" \n                        target="_blank" rel="noopener noreferrer nofollow">💬 足りない情報・間違いを報告する （Twitter）</a>\n                </div>\n            </div>`}}
