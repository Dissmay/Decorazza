$(function(){


	var mobileBtn = $('.mobile-menu');
	var menu = $('.navigation__ul');

	mobileBtn.on('click', function(){
		menu.toggleClass('isOpened');
		mobileBtn.toggleClass('closer');
	});

	menu.on('click', function(){
		menu.removeClass('isOpened');
		mobileBtn.removeClass('closer')

	})


	
})