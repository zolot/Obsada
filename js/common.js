$(document).ready(function() {
    $(".advantage").animated("zoomIn", "zoomIn");
    
	$(".tabs-wrap .tab").click(function() {
		$(".tabs-wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-wrap .tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	var owl = $("#owl-demo");
     
      owl.owlCarousel({
        navigation : true,
        singleItem : true,
        /*autoPlay: 5000,*/
        transitionStyle : "fade"
      });


    $('#request .close').click(function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

	$('form').submit(function(e) {
        e.preventDefault();
        var $form = $(this);
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize(),
            success: function(data) {
                console.log('data')
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        type: 'inline',
                        src: '#request',
                    }
                });
                $form.find("input[type=text], textarea").val("");
            },
            error: function(data) {
                alert('Извините, данные не были переданы');
            }
        });
    });

});

// $(window).load(function() {
//     $(".advantage").animated("zoomIn", "zoomIn");
// });