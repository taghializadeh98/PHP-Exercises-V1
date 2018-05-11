
var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

$(window).scroll(function(){
    var scroll_top=$(this).scrollTop();

    if (scroll_top>200){
        $("#to_top").animate({right:"10px"},50);
        $("nav").addClass("sticky");
    }
    else{
        $("#to_top").animate({right:"-100px"},50);
        $("nav").removeClass("sticky");
    }
});


$(document).ready(function(){
    $("#to_top").click(function(){
        $("html").animate({scrollTop:0},1000);
    });

 
});


$(document).ready(function(){
    $("#menu_icon").click(function(){
        $("ul").slideToggle()
    })

    $(window).resize(function(){
        if($(this).width() > 768){
            $("ul").show()
        }else{
            $("ul").hide()
        }
    })
})

$(document).ready(function(){
    $(".dropbtn").click(function(){
        $(".dropdown-content").toggle();
    });
});


function do_register(){
	
	
    var u = document.getElementById('username');
	var p1 = document.getElementById('pass1');
	var p2 = document.getElementById('pass2');
	var e = document.getElementById('email');
	var g1 = document.getElementById('gender1');
	var g2 = document.getElementById('gender2');
	var c = document.getElementById('city');
	var a = document.getElementById('acp');
	
	
	if(u.value==""){
		alert('لطفا نام کاربری را وارد کنید');
		u.focus();
		return false;	
		
	}else if(p1.value==""){
		alert('لطفا کلمه عبور را وارد کنید');
		p1.focus();
		return false;	
		
	}else if(p1.value!=p2.value){
		alert('کلمه عبور باهم تطبیق ندارند');
		p2.focus();
		return false;	
		
	}else if(e.value==""){
		alert('لطفا ایمیل را وارد کنید');
		e.focus();
		return false;	
		
	}else if(filter.test(e.value)==false){
		alert("!آدرس پست الکترونيک معتبر نمی باشد");
		e.focus();
	    return false;	
								
	}else if(!g1.checked && !g2.checked){
		alert('لطفا جنسیت را انتخاب کنید');
		g1.focus();
		return false;	
		
	}else if(c.value==0){
		alert('لطفا شهر را انتخاب کنید');
		c.focus();
		return false;	
		
	}else if(!a.checked){
		alert('لطفا قوانین را انتخاب کنید');
		a.focus();
		return false;	
		
	}
	

	
	
	
	
}//end of func