$(document).ready(function(){
	$('#couponcode-btn').click(function(){
		console.log('The couponcode button was clicked!');
		alert('Congratulations! You have just earned 20% off. Just mention the coupon code: NETWINNING20, to one of our sales associates and a 20% discount will be applied to a future purchase.');
	}); //end couponcode click
	
	$('#downloadables-btn').hover(function(){
		console.log('The downloadables button was hovered over!');
		$('#downloadables-btn').css({ 
		backgroundColor:'black'
		});// end css
	},function(){
		console.log('The downloadables button was left behind!');
		$('#downloadables-btn').css({ 
		backgroundColor:'green'
		});// end css
	}); //end hover

	$('#qrcode-btn-off').click(function(){
    $('#qrcode-img').hide(500);
    }); //end qrcode-off click

    $('#qrcode-btn-on').click(function(){
    	$('#qrcode-img').show(1000);
    }); //end qrcode-on click


    $('#hero-btn').click(function(){
    	$('#hero-img').animate({
    		opacity: '0.65',
    		height: 'toggle'
    	}, 5000, 'swing', function(){
    		$('#hero-img').css({
    			opacity: '1'
    		}); //end hero img css
    		$('#hero-btn').css({
    			backgroundColor: 'green'
    		}); //end hero button css
    	}); //end hero animate
    }); //end hero click

    $('#jumbotron-btn').click(function(){
    	$('#jumbotron-btn').replaceWith('<p><span class="label label-success">Our Coupons Never Expire!</span></p>');
    }); //end jumbotron click

    $('#clientschoice').change(function(){
        if ($('#clientschoice').val()=='kjs')
        {
            $('.designer-group .help-block').text('Kourtnie J. Sanders specializes in Web Development and Maintenance')
        }
       else if ($('#clientschoice').val()=='jv')
        {
            $('.designer-group .help-block').text('Jumal Vaughn specializes in Content Managmenet System Development')
        }
        else if ($('#clientschoice').val()=='dw')
        {
            $('.designer-group .help-block').text('Dallis Williams specializes in Graphic Design')
        }

    });//end of clientchoice

$('#name').focusout(function(){
        if($('#name').val().length == 0) {
            $('.name-group .help-block').text('Opps, you forgot to tell us your name');
            $('.name-group').attr({
                class: 'col-sm-6 form-group name-group has-error'
            }); // end attr
        } else {
            $('.name-group .help-block').text('');
            $('.name-group').attr({
                class: 'col-sm-6 form-group name-group'
            }); //end attr
        }
    }); //end focus out

$('button').click(function(submit){
        if($('#name').val().length == 0) {
            $('.name-group .help-block').text('Opps, you forgot to tell us your name');
            $('.name-group').attr({
                class: 'col-sm-6 form-group name-group has-error'
            }); // end of attr
            submit.preventDefault();
        } else {
            $('#myModal').modal();
            submit.preventDefault();
        }

});//end submit click

}); //end ready
