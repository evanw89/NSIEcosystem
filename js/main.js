var tl = new TimelineMax({})
	.staggerFrom("svg > g > .bg", 0.25, {opacity: 0, ease:Circ.easeInOut}, 0.05)
	.staggerFrom("#Experts > g:not(.bg), #Private_sector > g:not(.bg), #Funding > g:not(.bg), #media_section > g:not(.bg), #advocacy > g:not(.bg), #Policy_makers > g:not(.bg), svg > g:not(#Arrows)", 0.25, {scale: 0, opacity: "initial", ease:Circ.easeInOut}, 0.05, "-=1")
	// .staggerFrom("#Arrows path", 0.25, {drawSVG: 0}, 0.1)
	.staggerFrom("#Arrows > g", 0.25, {opacity: 0, ease: Circ.easeOut}, 0.025, "-=1")


$("svg > g:not(#arrows)").hover(
	function() {
		$(this).find("*:not(g)").css({"transition": "0.3s ease", "fill": "#2361ad9e"})
		$(this).find(".bg").css({"transition": "0.3s ease", "transform": "translateY(-15px)"});
	},
	function() {
		$(this).find("*:not(g)").css({"fill": ""})
		$(this).find(".bg").css("transform", "");
	}
);
