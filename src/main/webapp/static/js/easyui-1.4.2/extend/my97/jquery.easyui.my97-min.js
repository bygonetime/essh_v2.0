(function(e){(function(){var n=false;var l=e.parser.plugins;for(var m=l.length-1;m>-1;m--){if(l[m]==="my97"){n=true;break}}if(n==false){e.parser.plugins[e.parser.plugins.length]="my97"}})();function k(n){e(n).addClass("my97-text");var l=e('<span class="my97-wrap"></span>').insertBefore(n);l[0].appendChild(n);var m=e('<span class="my97-arrow"></span>').insertAfter(n);return l}function c(q){var p=e.data(q,"my97");var n=p.options;var m=e.data(q,"my97").my97;var l=m.find(".my97-text");var o=m.find(".my97-arrow");l.unbind(".my97");o.unbind(".my97");if(!n.disabled){l.bind("click.my97",function(r){WdatePicker(n)});o.bind("click.my97",function(){WdatePicker(e.extend({},n,{el:n.id}))}).bind("hover.my97",function(r){e(this).addClass("my97-arrow-hover")},function(r){e(this).removeClass("my97-arrow-hover")})}}function j(m){var l=e.data(m,"my97").my97.find("input.my97-text");l.validatebox("destroy");e.data(m,"my97").my97.remove();e(m).remove()}function g(n,o){var m=e.data(n,"my97").options;var l=e.data(n,"my97").my97.find("input.my97-text");l.validatebox(m);if(o){l.validatebox("validate")}}function i(n){var m=e.data(n,"my97").options;var l=e.data(n,"my97").my97.find("input.my97-text");l.val(m.value)}function h(p,m){var l=e.data(p,"my97").options;var n=e.data(p,"my97").my97;var o=n.find(".my97-arrow");if(m){l.disabled=true;e(p).attr("disabled",true);o.unbind("click.my97");o.unbind("hover.my97")}else{l.disabled=false;e(p).removeAttr("disabled");o.unbind("click.my97").bind("click.my97",function(){WdatePicker(opts)});o.unbind("hover.my97").bind("hover.my97",function(q){this.addClass("my97-arrow-hover")},function(q){this.removeClass("my97-arrow-hover")})}}function f(n,l){var m=e.data(n,"my97").options;m.width=l;e(n).width(l)}function b(m,l){e(m).val(l)}function d(l){return e(l).val()}function a(n){var m="_easyui_my97_id_";var l=e.data(n,"my97").options;l.id=m+e.fn.my97.defaults.count;e(n).attr("id",l.id);e.fn.my97.defaults.count++}e.fn.my97=function(l,m){if(typeof l=="string"){return e.fn.my97.methods[l](this,m)}l=l||{};return this.each(function(){var p=e.data(this,"my97");var o;if(p){o=e.extend(p.options,l)}else{o=e.extend({},e.fn.my97.defaults,e.fn.my97.parseOptions(this),l);var n=k(this);p=e.data(this,"my97",{options:o,my97:n})}if(o.id==undefined){a(this)}f(this,p.options.width);h(this,p.options.disabled);c(this);g(this);i(this)})};e.fn.my97.methods={options:function(l){return e.data(l[0],"my97").options},destroy:function(m,l){return m.each(function(){j(this,l)})},setWidth:function(m,l){return m.each(function(){f(this,l)})},setValue:function(m,l){b(m[0],l)},getValue:function(m,l){return d(m[0])}};e.fn.my97.parseOptions=function(m){var l=e(m);return e.extend({},e.fn.validatebox.parseOptions(m),e.parser.parseOptions(m,["width","height","weekMethod","lang","skin","dateFmt","realDateFmt","realTimeFmt","realFullFmt","minDate","maxDate","startDate",{doubleCalendar:"boolean",enableKeyboard:"boolean",enableInputMask:"boolean",isShowWeek:"boolean",highLineWeekDay:"boolean",isShowClear:"boolean",isShowOthers:"boolean",readOnly:"boolean",qsEnabled:"boolean",autoShowQS:"boolean",opposite:"boolean"},{firstDayOfWeek:"number",errDealMode:"number"}]),{value:(l.val()||undefined),disabled:(l.attr("disabled")?true:undefined),id:(l.attr("id")||undefined)})};e.fn.my97.defaults={id:null,count:0,value:"",width:109,height:22,disabled:false,doubleCalendar:false,enableKeyboard:true,enableInputMask:true,weekMethod:"ISO8601",position:{},lang:"auto",skin:"default",dateFmt:"yyyy-MM-dd",realDateFmt:"yyyy-MM-dd",realTimeFmt:"HH:mm:ss",realFullFmt:"%Date %Time",minDate:"1900-01-01 00:00:00",maxDate:"2099-12-31 23:59:59",startDate:"",firstDayOfWeek:0,isShowWeek:false,highLineWeekDay:true,isShowClear:true,isShowOthers:true,readOnly:false,errDealMode:0,qsEnabled:true,autoShowQS:false,opposite:false,quickSel:[],disabledDays:null,disabledDates:null,specialDates:null,specialDays:null,onpicking:function(){},onpicked:function(){},onclearing:function(){},oncleared:function(){}}})(jQuery);