!function(){for(var o,e=["assert","assert","cd","clear","count","countReset","debug","dir","dirxml","dirxml","dirxml","error","error","exception","group","group","groupCollapsed","groupCollapsed","groupEnd","info","info","log","log","markTimeline","profile","profileEnd","profileEnd","select","table","table","time","time","timeEnd","timeEnd","timeEnd","timeEnd","timeEnd","timeStamp","timeline","timelineEnd","trace","trace","trace","trace","trace","warn"],n=e.length,t=window.console=window.console||{},i=function(){};n--;)t[o=e[n]]||(t[o]=i)}(),$(window).load(function(){$(".player-loader").length&&($(".player-loader").hide(),$(".play-button .fa").css("visibility","visible"))}),$(document).ready(function(){$("#reg_form").length&&$("#subreg").click(function(){$(".onload,.onerror").hide(),$(".onload").fadeIn().delay(3e3),$(".onload").fadeOut(),setTimeout(function(){$(".onerror").fadeIn(),$("#userid, #password").val(""),$("#userid").focus()},3500)}),$("#modal-watch").length&&$("#submov").click(function(){$(".onload,.onerror").hide(),$(".onload").fadeIn().delay(3e3),$(".onload").fadeOut(),setTimeout(function(){$(".onerror").fadeIn(),$("#userid, #password").val(""),$("#userid").focus()},3500)}),$(".cfull").on("click",function(){screenfull.request(document.getElementById("player"))}),$(".cvolu,.cset").on("click",function(){$("#modal-watch").modal({show:!0,backdrop:"static"})}),$("a.play").on("click",function(){screenfull.exit()}),$(".player-loader").delay(9e3).fadeOut(),$(".movie-cover").hover(function(){$(this).find(".caption").slideDown(250)},function(){$(this).find(".caption").slideUp(250)}),$(".play-button .fa,.cplay").on("click",function(){var o="http://"+window.location.hostname+"/include/images/opening.jpg";window.location.hostname;$(".play-button .fa").hide(),$(".player-loader").show(),setTimeout(function(){$(".img-backdrop").attr("src",o),$(".player-loader").fadeOut(2e3),$(".progressbar").animate({width:"3%"},{queue:!1,duration:3e3,complete:function(){console.log("ok"),$("#control").hide(),$("#modal-watch").modal({show:!0,backdrop:"static"})}})},2e3)})}),$(function(){$('[data-toggle="tooltip"]').tooltip()});

!function(e,n){"use strict";var l="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,r=function(){for(var e,l,r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],t=0,u=r.length,c={};u>t;t++)if((e=r[t])&&e[1]in n){for(t=0,l=e.length;l>t;t++)c[r[0][t]]=e[t];return c}return!1}(),t={request:function(e){var t=r.requestFullscreen;e=e||n.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?e[t]():e[t](l&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){n[r.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(){},onerror:function(){},raw:r};r?(Object.defineProperties(t,{isFullscreen:{get:function(){return!!n[r.fullscreenElement]}},element:{enumerable:!0,get:function(){return n[r.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!n[r.fullscreenEnabled]}}}),n.addEventListener(r.fullscreenchange,function(e){t.onchange.call(t,e)}),n.addEventListener(r.fullscreenerror,function(e){t.onerror.call(t,e)}),e.screenfull=t):e.screenfull=!1}(window,document);
