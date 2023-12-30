$(document).ready((function(){var a,e,s=new URLSearchParams(window.location.search),l=[{displayTitle:"ID (system)",name:"id",data:"id",className:"id detail-hidden",visible:!1,searchable:!1},{displayTitle:"#",name:"index",data:"id",className:"id detail-hidden",data:function(a){return a.id},render:function(a,e,s){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},width:"20px",searchable:!1,visible:!1},{displayTitle:"アルバムアート",name:"jacket",data:"image_url",className:"jacket detail-hidden",render:function(a){return'<span class="img-wrap"><img src="jacket/'+a+'"/></span>'},width:"50px",orderable:!1,searchable:!1},{displayTitle:"曲名",name:"title",data:"title",className:"title-artist detail-hidden",render:function(a,e,s){return"display"===e?'<div class="inner-wrap">'+("1"==s.bonus?'<span class="bonus">BONUS</span>':"")+'<span class="title">'+a+'</span><span class="dash hidden"> - </span><span class="artist-display hidden">'+s.artist+"</span></div>":"filter"===e?a:s.title_sort},width:"80vw"},{displayTitle:"曲名 (読み)",name:"title_sort",data:"title_sort",className:"title-sort",visible:!1,searchable:!1},{displayTitle:"アーティスト",name:"title_merged",data:"title",className:"artist detail-hidden",render:function(a,e,s){return"display"===e?'<div class="inner-wrap"><span class="artist-display hidden">'+s.artist+"</span></div>":s.title_sort}},{displayTitle:"アーティスト",name:"artist",data:"artist",className:"artist detail-hidden",visible:!1},{displayTitle:"BPM",name:"bpm",data:"bpm",className:"details bpm",searchable:!1,visible:!1},{displayTitle:"バージョン",name:"version",data:"version",className:"details version",filterable:!0,render:function(a,e,s){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},customDropdownSortSource:"date",width:"12em"},{displayTitle:"ジャンル",name:"category",data:"category",className:"details category",render:function(a,e,s){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},customDropdownSortSource:"category_id",filterable:!0},{displayTitle:"ジャンルID",name:"category_id",data:"category_id",width:"90px",visible:!1,searchable:!1},{displayTitle:"チャプターID",name:"chap_id",data:"chap_id",className:"chapter-id",visible:!1,searchable:!1},{displayTitle:"チャプター",name:"chap",data:function(a,e,s,l){return"sort"===e||"meta"===e?a.chap_id:v(a,!0)+a.chapter},className:"chapter",width:"15em",render:function(a,e,s){return"display"===e?'<div class="inner-wrap"><span class="chap-id-badge">'+v(s,!0)+'</span><span class="chap-name">'+s.chapter+"</span></div>":a},filterable:!0,visible:!1},{displayTitle:"属性",name:"enemy_type",data:"enemy_type",className:"chara type",render:function(a,e,s){return"display"===e?'<div class="inner-wrap"><span class="element-type-icon '+a.toLowerCase()+'"><span class="icon"></span><span class="label-text">'+a+"</span></span></div>":a},width:"40px",filterable:!0},{displayTitle:"キャラID",name:"chara_id",data:"chara_id",visible:!1,searchable:!1},{displayTitle:"相手キャラ",name:"character",data:"character",className:"chara character",render:function(a,e,s){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},customDropdownSortSource:"chara_id",width:"10em",filterable:!0},{displayTitle:"相手レベル",name:"enemy_lv",data:"enemy_lv",className:"chara enemy-lv",render:function(a,e,s){return"display"===e?'<div class="inner-wrap">Lv.'+a+"</div>":a},customDropdownSortSource:c("enemy_lv"),width:"4em",searchable:!1},{displayTitle:"BASIC",name:"lev_bas",data:r("lev_bas","lev_bas_i"),className:"lv lv-bsc",render:d("lev_bas","lev_bas_i"),customDropdownSortSource:c("lev_bas"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"ADVANCED",name:"lev_adv",data:r("lev_adv","lev_adv_i"),className:"lv lv-adv",render:d("lev_adv","lev_adv_i"),customDropdownSortSource:c("lev_adv"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"EXPERT",name:"lev_exc",data:r("lev_exc","lev_exc_i"),className:"lv lv-exp",render:d("lev_exc","lev_exc_i"),customDropdownSortSource:c("lev_exc"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"MASTER",name:"lev_mas",data:r("lev_mas","lev_mas_i"),className:"lv lv-mas",render:d("lev_mas","lev_mas_i"),customDropdownSortSource:c("lev_mas"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"LUNATIC",name:"lev_lnt",data:r("lev_lnt","lev_lnt_i"),className:"lv lv-lnt",render:d("lev_lnt","lev_lnt_i"),customDropdownSortSource:c("lev_lnt"),reverseSortOrder:!0,width:"3rem",filterable:!flat_view},{displayTitle:"譜面",name:"chart_diff",data:function(a,e,s,l){return 1==flat_view?"sort"===e||"meta"===e?a.chart_diff:o(a.chart_diff):null},className:"lv-name detail-hidden",width:"3rem",createdCell:flat_view?function(a,e,s,l,n){$(a).addClass(s.chart_diff)}:null,render:flat_view?(e="chart_diff",function(a,s,l){return"display"===s?'<span class="diff-name">'+o(l[e])+"</span>":a}):null,customDropdownSortSource:flat_view?(a="chart_diff",function(e,s){return o(e[a],!0).localeCompare(o(s[a],!0))}):null,filterable:flat_view,visible:!1},{displayTitle:"難易度グループ",name:"chart_lev",data:flat_view?"chart_lev":null,className:"lv detail-hidden",width:"4rem",customDropdownSortSource:c("chart_lev"),reverseSortOrder:!0,searchable:!1,visible:!1},{displayTitle:"譜面レベル",name:"chart_lev_i",data:flat_view?"chart_lev_i":null,className:"lv lv-name detail-hidden",render:flat_view?function(a,e,s,l){return function(s,n,t){if("display"===n){var r=o(t[a]),i="we_kanji"===t[a]?"☆"+t[l]:t[l],c=t[e].match(/^([0-9]{1,2})(\+)?$/);if(c){var d=c[1];return"+"===c[2]?`<div class="inner-wrap"><span class="diff-name">${r}</span><span class="lv-num-wrap"><span class="lv-num-simple"><span class="num">${d}</span><span class="plus">+</span></span><span class="lv-num-precise">${i}</span></span></div>`:`<div class="inner-wrap"><span class="diff-name">${r}</span><span class="lv-num-wrap"><span class="lv-num-simple"><span class="num">${d}</span></span><span class="lv-num-precise">${i}</span></span></div>`}return`<div class="inner-wrap"><span class="diff-name">${r}</span><span class="lv-num-wrap"><span class="lv-num-simple"><span class="num">${t[e]}</span></span><span class="lv-num-precise">${i}</span></span></div>`}return s}}("chart_diff","chart_lev",0,"chart_lev_i_display"):null,width:"4rem",createdCell:flat_view?function(a,e,s,l,n){$(a).addClass(s.chart_diff)}:null,searchable:!1,visible:flat_view},{displayTitle:"NEW",name:"new",data:"new",searchable:!1,visible:!1},{displayTitle:"ノート数",name:"chart_notes",data:flat_view?"chart_notes":null,className:"details notecount detail-hidden",width:"6em",searchable:!1,visible:!1},{displayTitle:"ベル",name:"chart_bells",data:flat_view?"chart_bells":null,className:"details notecount detail-hidden",width:"5em",searchable:!1,visible:!1},{displayTitle:"譜面作者",name:"chart_designer",data:flat_view?"chart_designer":null,width:"15em",className:"details detail-hidden",filterable:flat_view,searchable:flat_view,visible:!1},{displayTitle:"追加日",name:"date",data:function(a,e,s,l){return u(a.date)},className:"date",filterable:!0,render:function(a,e,s){return"display"===e?'<div class="inner-wrap">'+a+"</div>":a},reverseSortOrder:!0,width:"4em"},{displayTitle:"BONUS",name:"bonus",data:"bonus",className:"details detail-hidden",width:"10px",searchable:!1}],n=flat_view?[[24,"desc"],[16,"desc"],[29,"desc"]]:[[29,"desc"],[11,"asc"],[0,"asc"]];function t(a,e){return!!a.hasOwnProperty(e)&&""!==a[e]}function r(a,e){return function(s,l,n,t){return"sort"===l?""===s[e]?i(s[a]):i(s[e]):s[a]}}function i(a){return""!=a?(lev_processed=parseInt(a)<10?"0"+a:a,lev_processed):""}function c(a){return function(e,s){return i(e[a]).localeCompare(i(s[a]))}}function d(a,e){return function(s,l,n){if("display"===l){var t=n[a].match(/^([0-9]{1,2})(\+)?$/);if(t){var r=t[1];return"+"===t[2]?`<div class="inner-wrap"><span class="lv-num-simple"><span class="num">${r}</span><span class="plus">+</span></span><span class="lv-num-precise">${n[e]}</span></div>`:`<div class="inner-wrap"><span class="lv-num-simple"><span class="num">${r}</span></span><span class="lv-num-precise">${n[e]}</span></div>`}return`<div class="inner-wrap"><span class="lv-num-simple"><span class="num">${n[a]}</span></span><span class="lv-num-precise">${n[e]}</span></div>`}return s}}function o(a,e){if(e)switch(a){case"lev_bas":s="1 BASIC";break;case"lev_adv":s="2 ADVANCED";break;case"lev_exc":s="3 EXPERT";break;case"lev_mas":s="4 MASTER";break;case"lev_lnt":s="5 LUNATIC"}else switch(a){case"lev_bas":var s="BASIC";break;case"lev_adv":var s="ADVANCED";break;case"lev_exc":var s="EXPERT";break;case"lev_mas":var s="MASTER";break;case"lev_lnt":var s="LUNATIC"}return s}function p(a,e){return e?a.map((a=>["lev_bas","lev_adv","lev_exc","lev_mas","lev_lnt"].map((e=>function(a,e){if(a[e])return{...a,chart_diff:e,chart_lev:a[e],chart_lev_i:parseFloat(a[e+"_i"]||a[e].replace("+",".7")),chart_lev_i_display:a[e+"_i"]||`<span class="approx">${parseFloat(a[e].replace("+",".7")).toFixed(1)}</span>`,chart_notes:a[e+"_notes"],chart_bells:a[e+"_bells"],chart_designer:a[e+"_designer"]};return null}(a,e))))).flat().filter((a=>!!a)):a}function v(a,e){var s=a.chap_id,l=s.substr(3,2);if("0"==s.substr(0,1)){var n=s.substr(1,1);if("8"==s.substr(3,1)){var n=s.substr(1,1);l="S"+s.substr(4,1)}return n>"0"?n+"-"+l+(e?" ":""):""}return"70"==s.substr(0,2)?(n="M")+"-"+l+(e?" ":""):"80"==s.substr(0,2)?(n="SP2")+"-"+l+(e?" ":""):"99"==s.substr(0,2)?(n="SP")+"-"+l+(e?" ":""):s+(e?" ":"")}function u(a,e){var s=a.slice(0,4),l=a.slice(4,6),n=a.slice(6,8),t=`${s}-${l}-${n}`;if("JP"==e)var r=((new Date).getFullYear()==s?"":s+"/")+`${l}/${n}(${["日","月","火","水","木","金","土"][new Date(t).getDay()]})`;else r=t;return r}if($.getJSON("data/music-ex.json",(a=>{$("#table").DataTable({data:p(a,flat_view),buttons:[{extend:"colvis",className:"config-btn",columns:".toggle",text:"カラムON/OFF",collectionTitle:"表示するカラムを選択",collectionLayout:"fixed",fade:150}],columns:l,deferRender:!0,dom:'<"toolbar-group"<"toolbar filters"><"toolbar search"f>><"toolbar secondary"<"info"ilB>><"table-inner"rt><"paging"p>',language:{emptyTable:"テーブルにデータがありません",info:replaceUnitText(" _TOTAL_unit (_START_〜_END_ 表示中)"),infoEmpty:replaceUnitText(" 0 unit"),infoFiltered:replaceUnitText("（全 _MAX_ unit）"),infoPostFix:"",infoThousands:",",lengthMenu:"1ページ表示 _MENU_",loadingRecords:"読み込み中...",processing:"処理中...",search:"検索",searchPlaceholder:"曲名・アーティスト・キャラ",zeroRecords:"一致するレコードがありません",paginate:{sFirst:"先頭",sLast:"最終",sNext:"NEXT",sPrevious:"PREV"},aria:{sSortAscending:": 列を昇順に並べ替えるにはアクティブにする",sSortDescending:": 列を降順に並べ替えるにはアクティブにする"}},lengthMenu:[[25,50,100,-1],[25,50,100,"All"]],order:n,responsive:{details:{type:"column",target:"tr",display:$.fn.dataTable.Responsive.display.modal({header:function(a){var e=a.data(),s=encodeURIComponent(e.title.replaceAll("&","＆").replaceAll(":","：").replaceAll("[","［").replaceAll("]","］").replaceAll("#","＃").replaceAll('"',"”")),l="https://wikiwiki.jp/gameongeki/"+s,n=e.wikiwiki_url?e.wikiwiki_url:l;return'<div class="modal-header" style="--img:url(jacket/'+e.image_url+');"><span class="header-img"></span><span class="header-img-overlay"></span><div class="img-wrap"><img src="jacket/'+e.image_url+'"/></div><div class="content-wrap">'+("1"==e.bonus?'<span class="bonus">BONUS</span>':"")+'<span class="title">'+e.title+'</span><span class="artist">'+e.artist+"</span>"+("-"!==e.copyright1?'<span class="copyright">'+e.copyright1.replace(/\s+ピアプロロゴ/,'<span class="piapro">piapro</span>')+"</span>":"")+'<div class="quicklinks"><a class="wiki" href="'+n+'" target="_blank" rel="noopener noreferer nofollow">Wiki</a><a class="youtube" href="https://youtube.com/results?search_query=オンゲキ+譜面確認+'+s+'" target="_blank" rel="noopener noreferer nofollow"></a></div></div></div>'},footer:function(a){var e=a.data();return'<div class="modal-footer"><div class="report"><a class="report-btn" href="https://twitter.com/intent/tweet?text=@zvuc_%0A%E3%80%90%23%E3%82%AA%E3%83%B3%E3%82%B2%E3%82%ADDB%20%E6%83%85%E5%A0%B1%E6%8F%90%E4%BE%9B%E3%80%91%0A%E6%9B%B2%E5%90%8D%EF%BC%9A'+encodeURIComponent(e.title)+'%0A%E8%AD%9C%E9%9D%A2%EF%BC%9A" target="_blank" rel="noopener noreferer nofollow">💬 足りない情報・間違いを報告する （Twitter）</a></div></div>'}}),renderer:function(a,e,s){var n=a.row(e).data(),r=n.chara_id,i=n.enemy_type,c=""!==n.lev_lnt?"lunatic":"",d=$.map(s,(function(a,e){a.columnIndex;if(!a.className.includes("detail-hidden")&&!a.className.includes("lv ")&&!a.className.includes("chara "))return'<div class="row '+a.className+'" data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><span class="row-label">'+a.title+"</span> <span>"+a.data+"</span></div>"})).join(""),o=$.map(s,(function(a,e){var s=l[a.columnIndex];if(!a.className.includes("detail-hidden")&&a.className.includes("chara "))return'<div class="row '+a.className+'" data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><span class="row-label">'+s.displayTitle+"</span> <span>"+a.data+"</span></div>"})).join(""),p=$.map(s,(function(a,e){var s=l[a.columnIndex];if(!a.className.includes("detail-hidden")&&a.className.includes("lv ")){var r=s.name,i=r.concat("_notes"),c=r.concat("_bells"),d=r.concat("_designer"),o=r.concat("_chart_link");return'<div class="row '+a.className+'" data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><span class="row-label"><span>'+s.displayTitle+'</span></span> <span class="content-col"><span class="main-info-wrap">'+a.data+'</span><span class="sub-info-wrap">'+(t(n,i)?'<span class="notes"><span class="label">Chain</span><span>'+n[i]+"</span></span>":"")+(t(n,c)?'<span class="bells"><span class="label">Bell</span><span>'+n[c]+"</span></span>":"")+(t(n,d)?'<span class="designer"><span class="label">Designer</span><span>'+n[d]+"</span></span>":"")+"</span></span>"+(t(n,o)?'<span class="chart-link"><a class="btn chartlink" target="_blank" rel="noopener noreferrer" href="https://sdvx.in/ongeki/'+n[o]+'.htm"><span class="img"></span><span>譜面確認</span></a><span class="chart-provider">sdvx.in 提供</span></span>':"")+"</div>"}})).join(""),v=$('<div class="table-wrapper"/>').append($('<div class="details-table chara-details"/>').append('<div class="table-header"><span class="th-label">CHARACTER</span></div>').append(o).append("1"==r.substr(0,1)?'<span class="chara-img '+i.toLowerCase()+'" style="--chara-img: url(\'./img/chara/'+r+".png');\"></span>":"")).append($('<div class="details-table chart-details '+c+'"/>').append('<div class="table-header"><span class="th-label">CHART</span></div>').append(p)).append($('<div class="details-table misc-details"/>').append('<div class="table-header"><span class="th-label">SONG METADATA</span></div>').append(d));return v||!1}}},rowGroup:{dataSrc:"date",startRender:flat_view||""!=s?null:function(a,e){return"<div>"+u(e,"JP")+" 追加</div>"}},scrollX:!0,initComplete:function(){var a=this.api().rows().data(),e=this.api();e.columns().every((function(){var n=e.order(),t=this,r=t.data(),i=l[t.index()];if("filterable"in i&&1==i.filterable){var c=$('<div class="select-wrap '+i.className+'"><span class="label">'+i.displayTitle+"</span></div>").appendTo($(".toolbar.filters")),d=$('<select id="'+i.name+'"><option value="" data-default>——</option></select>');if(d.appendTo(c),d.on("change",(function(){var a=$(this).val(),e=$.fn.dataTable.util.escapeRegex($(this).val());appendSelectboxStateClass($(this),a),28===t.index()||""===e&&28===n[0][0]?t.rowGroup().enable():t.rowGroup().disable(),updateQueryStringParameter(i.name,a),t.search(e?"^"+e+"$":"",!0,!1).draw()})),r=i.customDropdownSortSource?r.map((function(a,e){return e})).sort((function(e,s){var l=a[e],n=a[s];return"function"==typeof i.customDropdownSortSource?i.customDropdownSortSource(l,n):l[i.customDropdownSortSource].localeCompare(n[i.customDropdownSortSource])})).map((function(a){return r[a]})):r.sort(),i.reverseSortOrder&&r.reverse(),r.unique().each((function(a,e){""!=a&&d.append('<option value="'+a+'">'+a+"</option>")})),"URLSearchParams"in window){var o=s.get(i.name);if(null!==o){var p=unescapeSlashes(o);r.unique().each((function(a){d.val(p)})),appendSelectboxStateClass(d,p)}}}})),"URLSearchParams"in window&&(s.forEach((function(a,n){e.columns().every((function(){var a=l[this.index()],e=s.get(a.name),n=$.fn.dataTable.util.escapeRegex(decodeURIComponent(e));null!==e&&this.search(e?"^"+n+"$":"",!0,!1)}))})),e.draw()),e.on("order.dt",(function(){var a=e.order(),s=e.columns().search(),l=!1;for(let a=0;a<s.length;a+=1)if(a in s&&""!==s[a]){l=!0;break}return 27!==a[0][0]?void e.rowGroup().disable():27!==a[0][0]||l?void 0:void e.rowGroup().enable()})),$("#table").addClass("loading-done"),$("html").removeClass("table-loading")}})})),$("#table").on("column-visibility.dt",(function(){$.fn.dataTable.tables({visible:!0,api:!0}).columns.adjust()})),$("select#chart_lev").on("change",(function(){var a=$("#table").DataTable(),e=$(this),s=$(this).val(),l=$.fn.dataTable.util.escapeRegex($(this).val());"filter"==e.data("type")?(a.column("chart_lev:name").search(l?"^"+l+"$":"",!0,!1),updateQueryStringParameter("chart_lev",s),a.draw()):window.location.href="./lv?chart_lev="+encodeURIComponent(s)})),"URLSearchParams"in window){var m=s.get("chart_lev");if(null!==m){var h=unescapeSlashes(m);$("select#chart_lev").val(h)}}$("button.reset-search").on("click",(function(){$("#table").DataTable().order(n).search("").columns().search("").draw(),clearQueryStringParameter(),$(".toolbar.filters select").prop("selectedIndex",0).removeClass("changed"),console.log("search reset")}))}));
