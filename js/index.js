$(function() {
	var height = $(window).height();
	var width = $(window).width();
	$('.banner').css('height', parseInt(height));
	$('.item').css('height', parseInt(height));
	$('.item img').css('height', parseInt(height));

	$("img").lazyload({threshold : 100,failurelimit : 10});
	//联系我们地图
	dataMap();

	$('.briefCon .hd span').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		var index = $('.hd span').index(this);
		$('.bd .bdList').eq(index).addClass('active').siblings().removeClass('active');
	})

	var date = new Date,
		year = date.getFullYear();
	$(".beizhu span").text(year);


	$('.pageCon').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	})

	//滚动条


	$('.hove').not('.bdList .bgText').hover(function() {
		$(this).next('.bgText').addClass('active');
		$('.hoveImg').css('padding-left','202px');
	}, function() {
		$(this).next('.bgText').removeClass('active');
		$('.hoveImg').css('padding-left','50px');
	})

	$(".nav li a").click(function() {
		scrTop($(this).attr("_href"));
	});

	function scrTop(tag) {
		$("html,body").animate({
			scrollTop: $(tag).offset().top
		}, 700)
	}

});

function dataMap() {
	var map = new BMap.Map("allmap"),
		point = new BMap.Point(114.0888644392, 22.5412995234);
	map.centerAndZoom(point, 16);
	var myIcon = new BMap.Icon("img/PI.png", new BMap.Size(30, 30), {
			anchor: new BMap.Size(13, 15),
			imageOffset: new BMap.Size(0, 0)
		}),
		marker = new BMap.Marker(point, {
			icon: myIcon
		});
	map.addOverlay(marker);
	marker.setAnimation(BMAP_ANIMATION_BOUNCE);
}

