(function(a){postboxes={add_postbox_toggles:function(c,b){a(".postbox h3, .postbox .handlediv").click(function(){a(a(this).parent().get(0)).toggleClass("closed");postboxes.save_state(c)});a(".postbox h3 a").click(function(d){d.stopPropagation()});a(".hide-postbox-tog").click(function(){var d=jQuery(this).val();if(jQuery(this).attr("checked")){jQuery("#"+d).show();if(a.isFunction(postboxes.pbshow)){postboxes.pbshow(d)}}else{jQuery("#"+d).hide();if(a.isFunction(postboxes.pbhide)){postboxes.pbhide(d)}}postboxes.save_state(c)});this.expandSidebar();this.init(c,b)},expandSidebar:function(b){if(b||a("#side-sortables > .postbox:visible").length){if(!a("#post-body").hasClass("has-sidebar")){a("#post-body").addClass("has-sidebar");var c=Math.min(a("#post-body").height(),300);a("#side-sortables").css({minHeight:c+"px",height:"auto"})}}else{a("#post-body").removeClass("has-sidebar");a("#side-sortables").css({minHeight:"0"});if(a.browser.msie&&a.browser.version.charAt(0)==7){a("#side-sortables").css({height:"0"})}}},init:function(c,b){a.extend(this,b||{});a("#wpbody-content").css("overflow","hidden");a(".meta-box-sortables").sortable({placeholder:"sortable-placeholder",connectWith:[".meta-box-sortables"],items:"> .postbox",handle:".hndle",distance:2,tolerance:"pointer",toleranceMove:"tolerance",sort:function(f,d){if(a(document).width()-f.clientX<300){if(!a("#post-body").hasClass("has-sidebar")){var g=a("#side-sortables").offset();a("#side-sortables").append(d.item);a(d.placeholder).css({top:g.top,left:g.left}).width(a(d.item).width());postboxes.expandSidebar(1)}}},stop:function(){var d={action:"meta-box-order",_ajax_nonce:a("#meta-box-order-nonce").val(),page:c};a(".meta-box-sortables").each(function(){d["order["+this.id.split("-")[0]+"]"]=a(this).sortable("toArray").join(",")});a.post(postboxL10n.requestFile,d,function(){postboxes.expandSidebar()})}})},save_state:function(d){var b=a(".postbox").filter(".closed").map(function(){return this.id}).get().join(","),c=a(".postbox").filter(":hidden").map(function(){return this.id}).get().join(",");a.post(postboxL10n.requestFile,{action:"closed-postboxes",closed:b,hidden:c,closedpostboxesnonce:jQuery("#closedpostboxesnonce").val(),page:d});postboxes.expandSidebar()},pbshow:false,pbhide:false}}(jQuery));