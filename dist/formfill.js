!function(o){var n={data:{},complete:function(t){console.log(t)},parse:function(t){},keyMap:{}};function e(t,e){this.element=t,this.options=o.extend({},n,e),this.init()}e.prototype={init:function(){var a=this;if("function"==typeof this.options.parse&&this.options.parse(this.options.data),!o.isEmptyObject(this.options.data)){if("object"==typeof this.options.keyMap)for(var t in this.options.keyMap)this.options.keyMap.hasOwnProperty(t)&&(this.options.data[this.options.keyMap[t]]=this.options.data[t]);['input[type="checkbox"][name]','input[type="color"][name]','input[type="date"][name]','input[type="datetime"][name]','input[type="datetime-local"][name]','input[type="email"][name]','input[type="hidden"][name]','input[type="month"][name]','input[type="number"][name]','input[type="password"][name]','input[type="radio"][name]','input[type="range"][name]','input[type="tel"][name]','input[type="text"][name]','input[type="time"][name]','input[type="url"][name]','input[type="week"][name]',"select[name]","textarea[name]"].forEach(function(t){o(a.element).find(t).each(function(t,e){var n=o(e).attr("name"),i=o(e).attr("type");i&&"radio"===i.toLowerCase()?o(e).attr("checked",o(e).attr("value")===a.options.data[n]):a.options.data[n]&&o(e).val(a.options.data[n]),o(e).trigger("change")})}),"function"==typeof this.options.complete&&this.options.complete(this.element,this.options.data)}}},o.fn.formFill=function(t){return this.each(function(){o.data(this,"formFill")||o.data(this,"formFill",new e(this,t))})}}(jQuery);