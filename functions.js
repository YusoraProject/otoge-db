const toggleSwitch=document.getElementById("themeToggleCheckbox"),root=document.documentElement;window.matchMedia("(prefers-color-scheme: dark)").matches&&(toggleSwitch.checked=!1,root.setAttribute("data-theme","dark")),window.matchMedia("(prefers-color-scheme: light)").matches&&(toggleSwitch.checked=!0,root.setAttribute("data-theme","light")),whichTransitionEvent=()=>{let t,e=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in n)if(void 0!==e.style[t])return n[t]};let transitionEvent=whichTransitionEvent(),item=document.querySelector(".circle"),message=document.querySelector(".footer"),counter=1;function switchTheme(t){root.classList.toggle("transitioning"),t.target.checked?root.setAttribute("data-theme","light"):root.setAttribute("data-theme","dark"),root.addEventListener(transitionEvent,transitionEndCallback)}toggleSwitch.addEventListener("change",switchTheme,!1),transitionEndCallback=t=>{root.removeEventListener(transitionEvent,transitionEndCallback),root.classList.remove("transitioning")},$(document).ready((function(){$("html").removeClass("page-loading")}));
$(document).ready((function(){var a,e,t,l=[{displayTitle:"ID (system)",data:"id",className:"id",visible:!1},{displayTitle:"#",data:"image_url",className:"id",data:function(a){return a.image_url.split(".")[0]},render:function(a,e,t){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},width:"20px",searchable:!1},{displayTitle:"アルバムアート",data:"image_url",className:"jacket",render:function(a){return'<span class="img-wrap"><img src="jacket/'+a.split(".")[0]+'.jpg"/></span><span class="index">'+a.split(".")[0]+"</span>"},width:"50px",orderable:!1,searchable:!1},{displayTitle:"曲名",data:"title",className:"song-title",render:function(a,e,t){return"display"===e?'<div class="inner-wrap"><span class="title">'+a+'</span><span class="artist-display hidden">'+t.artist+"</span></div>":"filter"===e?a:t.title_sort},width:"80vw"},{displayTitle:"曲名 (読み)",data:"title_sort",className:"title-sort",visible:!1,searchable:!1},{displayTitle:"曲名・アーティスト",data:"title",className:"artist",render:function(a,e,t){return"display"===e?'<div class="inner-wrap"><span class="artist-display hidden">'+t.artist+"</span></div>":t.title_sort},searchable:!1},{displayTitle:"ジャンル",data:"category",className:"category",render:function(a,e,t){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},customDropdownSortSource:"category_id",filterable:!0},{displayTitle:"ジャンルID",data:"category_id",width:"90px",visible:!1},{displayTitle:"チャプターID",data:"chap_id",className:"chapter-id",visible:!1},{displayTitle:"チャプター",data:function(a,e,t,l){return"sort"===e?a.chap_id:(a.chap_chapter=a.chap_id.substr(3,2),"0"==a.chap_id.substr(0,1)?"1"==a.chap_id.substr(1,1)?(a.chap_book="1",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):"2"==a.chap_id.substr(1,1)?(a.chap_book="2",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):"3"==a.chap_id.substr(1,1)?"0308"==a.chap_id.substr(0,4)?(a.chap_book="3",a.chap_chapter=a.chap_id.substr(4,1),a.chap_display=a.chap_book+"-S"+a.chap_chapter+" "+a.chapter,a.chap_display):(a.chap_book="3",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):(a.chap_display=a.chapter,a.chap_display):"80"==a.chap_id.substr(0,2)?(a.chap_book="SP2",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):"99"==a.chap_id.substr(0,2)?(a.chap_book="SP",a.chap_display=a.chap_book+"-"+a.chap_chapter+" "+a.chapter,a.chap_display):(a.chap_display=a.chap_id+" "+a.chapter,a.chap_display))},className:"chapter",width:"15em",render:function(a,e,t){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},filterable:!0},{displayTitle:"属性",data:"enemy_type",className:"type",render:function(a,e,t){return"display"===e?'<div class="inner-wrap"><span class="type-icon '+a.toLowerCase()+'"><span>'+a+"</span></span></div>":a},width:"40px",filterable:!0},{displayTitle:"キャラID",data:"chara_id",visible:!1},{displayTitle:"相手キャラ",data:"character",className:"character",render:function(a,e,t){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},customDropdownSortSource:"chara_id",width:"10em",filterable:!0},{displayTitle:"相手レベル",data:"enemy_lv",className:"enemy-lv",render:function(a,e,t){return"display"===e?'<div class="inner-wrap">Lv.'+a+"</div>":a},customDropdownSortSource:n("enemy_lv"),width:"4em"},{displayTitle:"BASIC",data:r("lev_bas","lev_bas_i"),className:"lv lv-bsc",render:c("lev_bas","lev_bas_i"),customDropdownSortSource:n("lev_bas"),width:"3rem",filterable:!flat_view},{displayTitle:"ADVANCED",data:r("lev_adv","lev_adv_i"),className:"lv lv-adv",render:c("lev_adv","lev_adv_i"),customDropdownSortSource:n("lev_adv"),width:"3rem",filterable:!flat_view},{displayTitle:"EXPERT",data:r("lev_exc","lev_exc_i"),className:"lv lv-exp",render:c("lev_exc","lev_exc_i"),customDropdownSortSource:n("lev_exc"),width:"3rem",filterable:!flat_view},{displayTitle:"MASTER",data:r("lev_mas","lev_mas_i"),className:"lv lv-mas",render:c("lev_mas","lev_mas_i"),customDropdownSortSource:n("lev_mas"),width:"3rem",filterable:!flat_view},{displayTitle:"LUNATIC",data:r("lev_lnt","lev_lnt_i"),className:"lv lv-lnt",render:c("lev_lnt","lev_lnt_i"),customDropdownSortSource:n("lev_lnt"),width:"3rem",filterable:!flat_view},{displayTitle:"譜面",data:flat_view?"chart_diff":null,className:"lv-name",width:"3rem",createdCell:flat_view?function(a,e,t,l,s){$(a).addClass(t.chart_diff)}:null,searchable:!1,visible:!1},{displayTitle:"難易度グループ",data:flat_view?"chart_lev":null,className:"lv",width:"4rem",customDropdownSortSource:n("chart_lev"),filterable:flat_view,visible:!1},{displayTitle:"難易度",data:flat_view?"chart_lev_i":null,className:"lv lv-name",render:flat_view?(a="chart_diff",e="chart_lev",t="chart_lev_i_display",function(l,s,r){if("display"===s){switch(r[a]){case"lev_bas":var i="BASIC";break;case"lev_adv":i="ADVANCED";break;case"lev_exc":i="EXPERT";break;case"lev_mas":i="MASTER";break;case"lev_lnt":i="LUNATIC"}return'<div class="inner-wrap"><span class="diff-name">'+i+'</span><span class="lv-num-wrap"><span class="lv-num-simple">'+r[e]+'</span><span class="lv-num-precise">'+r[t]+"</span></span></div>"}return l}):null,width:"4rem",createdCell:flat_view?function(a,e,t,l,s){$(a).addClass(t.chart_diff)}:null,filterable:!1,searchable:!1,visible:flat_view},{displayTitle:"NEW",data:"new",searchable:!1,visible:!1},{displayTitle:"追加日",data:"date",className:"date",filterable:!0,render:function(a,e,t){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},width:"4em"}],s=flat_view?[[21,"desc"]]:[[23,"desc"],[9,"asc"],[0,"asc"]];function r(a,e){return function(t,l,s,r){return"sort"===l?""===t[e]?i(t[a]):i(t[e]):t[a]}}function i(a){return""!=a?(lev_processed=parseInt(a)<10?"0"+a:a,lev_processed):""}function n(a){return function(e,t){return i(e[a]).localeCompare(i(t[a]))}}function c(a,e){return function(t,l,s){return"display"===l?'<div class="inner-wrap"><span class="lv-num-simple">'+s[a]+'</span><span class="lv-num-precise">'+s[e]+"</span></div>":t}}$.getJSON("data/music-ex.json",(a=>{const e=flat_view?a.map((a=>["lev_bas","lev_adv","lev_exc","lev_mas","lev_lnt"].map((e=>a[e]?{...a,chart_diff:e,chart_lev:a[e],chart_lev_i:parseFloat(a[e+"_i"]||a[e].replace("+",".7")),chart_lev_i_display:a[e+"_i"]||'<span class="approx">'+parseFloat(a[e].replace("+",".7")).toFixed(1)+"</span>"}:null)))).flat().filter((a=>!!a)):a;$("#table").DataTable({data:e,buttons:[{extend:"colvisRestore",text:"全カラムON"},{extend:"colvisGroup",text:"譜面レベルのみ",hide:[6,8,9,10,12,13,23],show:[14,15,16,17,18]},{extend:"colvisGroup",text:"EXPERT以上のみ",hide:[6,8,9,10,12,13,14,15,23],show:[16,17,18]},{extend:"colvisGroup",className:"asdf",text:"属性・Lv ON",show:[10,13]},{extend:"colvis",className:"config-btn",columns:".toggle",text:"カスタム設定",collectionTitle:"表示・隠すカラムを選択",collectionLayout:"fixed",fade:150}],columns:l,deferRender:!0,dom:'<"column-toggle-bar"B><"toolbar-group"<"toolbar filters"><"toolbar search"f>><"toolbar secondary"<"info"il>><"table-inner"rt><"paging"p>',language:{sEmptyTable:"テーブルにデータがありません",sInfo:" _TOTAL_項目 (_START_〜_END_ 表示中)",sInfoEmpty:" 0 項目",sInfoFiltered:"（全 _MAX_ 項目）",sInfoPostFix:"",sInfoThousands:",",sLengthMenu:"1ページ表示 _MENU_",sLoadingRecords:"読み込み中...",sProcessing:"処理中...",sSearch:"キーワード検索",sZeroRecords:"一致するレコードがありません",oPaginate:{sFirst:"先頭",sLast:"最終",sNext:"次",sPrevious:"前"},oAria:{sSortAscending:": 列を昇順に並べ替えるにはアクティブにする",sSortDescending:": 列を降順に並べ替えるにはアクティブにする"}},lengthMenu:[[25,50,100,-1],[25,50,100,"All"]],order:s,responsive:{details:{type:"column",target:"tr",display:$.fn.dataTable.Responsive.display.modal({header:function(a){var e=a.data();return e.title+'<br><span class="artist">'+e.artist+"</span>"}}),renderer:$.fn.dataTable.Responsive.renderer.tableAll()}},rowGroup:{dataSrc:"date",startRender:flat_view?null:function(a,e){return"<div>"+e+" 追加</div>"}},scrollX:!0,initComplete:function(){var a=this.api().rows().data(),e=this.api();e.columns().every((function(){var t=e.order(),s=this,r=s.data(),i=l[s.index()];if("filterable"in i&&1==i.filterable){var n=$('<div class="select-wrap"><span class="label">'+i.displayTitle+"</span></div>").appendTo($(".toolbar.filters")),c=$('<select><option value="" selected data-default>——</option></select>').appendTo(n).on("change",(function(){var a=$.fn.dataTable.util.escapeRegex($(this).val());23===s.index()||""===a&&23===t[0][0]?s.rowGroup().enable():s.rowGroup().disable(),s.search(a?"^"+a+"$":"",!0,!1).draw()}));r=i.customDropdownSortSource?r.map((function(a,e){return e})).sort((function(e,t){var l=a[e],s=a[t];return"function"==typeof i.customDropdownSortSource?i.customDropdownSortSource(l,s):l[i.customDropdownSortSource].localeCompare(s[i.customDropdownSortSource])})).map((function(a){return r[a]})):r.sort(),"date"==i.data&&r.reverse(),r.unique().each((function(a,e){""!=a&&c.append('<option value="'+a+'">'+a+"</option>")}))}})),e.on("order.dt",(function(){var a=e.order(),t=e.columns().search(),l=!1;for(let a=0;a<t.length;a+=1)if(a in t&&""!==t[a]){l=!0;break}return 23!==a[0][0]?void e.rowGroup().disable():23!==a[0][0]||l?void 0:void e.rowGroup().enable()})),$("#table").addClass("loading-done"),$("html").removeClass("table-loading"),$(".column-toggle-bar").prepend('<span class="label">カラムON/OFF</span>')}})})),$("a.reset-search").on("click",(function(){table.order([[23,"desc"],[9,"asc"],[0,"asc"]]).search("").columns().search("").draw(),$(".toolbar.filters select").prop("selectedIndex",0),console.log("search reset")}))}));
