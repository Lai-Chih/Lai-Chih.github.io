// JavaScript Document

$(function(){
//---驗證-----------------------------------------------------------------------
$('.hinttxt').css({display:'none'});

//validate----------
//宣告驗證預設
var inputformlist=[1,1,1,1,1,1];

//宣告驗證格式
var valid={
	validphone:/^[-+#()0-9\s]{1,}$/,
	validemail:/^[^\s]+@[^\s]+\.[^\s]{2,}$/
};

//宣告驗證訊息
var msg={
	msg01:['*請填寫姓名'],
	msg02:['*請填寫公司名稱'],
	msg03:['*請填寫您所屬部門'],
	msg04:['*請勾您的公司規模'],
    msg05:['*請填寫您的職稱'],
	msg06:['*請填寫電話','請填寫正確電話號碼格式'],
	msg07:['*請填寫Email','請填寫正確 Email 格式'],
	msg08:['*請勾選貴公司目前使用的虛擬化平台']
};

    
    
//01姓名
$('.sec_08 input[name="Name"]').on('blur',test01);
function test01(){
	if($('.sec_08 input[name="Name"]').val()==""){
//		$('.hint01').html(msg.msg01[0]);
//		$('.hint01').css({display:'block'});
		inputformlist[0]=1;
	}else{
//		$('.hint01').css({display:'none'});
		inputformlist[0]=0;
	}
};

//
////02公司名稱
//$('input[name="Company"]').on('blur',test02);
//function test02(){
//	if($('input[name="company"]').val()==""){
//		$('.hint02').html(msg.msg02[0]);
//		$('.hint02').css({display:'block'});
//		inputformlist[1]=1;
//	}else{
//		$('.hint02').css({display:'none'});
//		inputformlist[1]=0;
//	}
//};
    
////03部門
//$('input[name="Department"]').on('blur',test03);
//function test03(){
//	if($('input[name="department"]').val()==""){
//		$('.hint03').html(msg.msg03[0]);
//		$('.hint03').css({display:'block'});
//		inputformlist[2]=1;
//	}else{
//		$('.hint03').css({display:'none'});
//		inputformlist[2]=0;
//	}
//};

////04公司規模
//$('input[name="scale"]').on('click',test04);
//function test04(){
//	if($('input[name="scale"]:checked').length<=0){
//		$('.hint04').html(msg.msg04[0]);
//		$('.hint04').css({display:'block'});
//		inputformlist[3]=1;
//	}else{
//		$('.hint04').css({display:'none'});
//		inputformlist[3]=0;
//	}
//};
//
////05職稱
//$('input[name="title"]').on('blur',test05);
//function test05(){
//	if($('input[name="title"]').val()==""){
//		$('.hint05').html(msg.msg05[0]);
//		$('.hint05').css({display:'block'});
//		inputformlist[4]=1;
//	}else{
//		$('.hint05').css({display:'none'});
//		inputformlist[4]=0;
//	}
//};

//06電話
$('.sec_08 input[name="Phone"]').on('blur',test06);
function test06(){
	if($('.sec_08 input[name="Phone"]').val()==""){
//		$('.hint06').html(msg.msg06[0]);
//		$('.hint06').css({display:'block'});
		inputformlist[1]=1;
	}else if(!$('.sec_08 input[name="Phone"]').val().match(valid.validphone)){
//		$('.hint06').html(msg.msg06[1]);
//		$('.hint06').css({display:'block'});
		inputformlist[1]=1;
	}else{
//		$('.hint06').css({display:'none'});
		inputformlist[1]=0;
	};
};

//07email
$('.sec_08 input[name="Email"]').on('blur',test07);
function test07(){
	if($('.sec_08 input[name="Email"]').val()==""){
//		$('.hint07').html(msg.msg07[0]);
//		$('.hint07').css({display:'block'});
		inputformlist[2]=1;
	}else if(!$('.sec_08 input[name="Email"]').val().match(valid.validemail)){
//		$('.hint07').html(msg.msg07[1]);
//		$('.hint07').css({display:'block'});
		inputformlist[2]=1;
	}else{
//		$('.hint07').css({display:'none'});
		inputformlist[2]=0;
	};
};
//
////08使用的虛擬化平台
//$('input[name="plat"]').on('click',test08);
//function test08(){
//	if($('input[name="plat"]:checked').length<=0){
//		$('.hint08').html(msg.msg08[0]);
//		$('.hint08').css({display:'block'});
//		inputformlist[7]=1;
//	}else{
//		$('.hint08').css({display:'none'});
//		inputformlist[7]=0;
//	}
//};
//

    //09住址
    $('.sec_08 input[name="Address"]').on('blur',test09);
    function test09(){
        if($('.sec_08 input[name="Address"]').val()==""){
    //		$('.hint01').html(msg.msg01[0]);
    //		$('.hint01').css({display:'block'});
            inputformlist[3]=1;
        }else{
    //		$('.hint01').css({display:'none'});
            inputformlist[3]=0;
        }
    };

    
    //10產品編號
    $('input[name="ProductSNo"]').on('blur',test10);
    function test10(){
        if($('.sec_08 input[name="ProductSNo"]').val()==""){
    //		$('.hint01').html(msg.msg01[0]);
    //		$('.hint01').css({display:'block'});
            inputformlist[4]=1;
        }else{
    //		$('.hint01').css({display:'none'});
            inputformlist[4]=0;
        }
    };
    //11產品編號
    $('.sec_08 input[name="file"]').on('blur',test11);
    function test11(){
        if($('.sec_08 input[name="file"]').val()==""){
    //		$('.hint01').html(msg.msg01[0]);
    //		$('.hint01').css({display:'block'});
            inputformlist[5]=1;
        }else{
    //		$('.hint01').css({display:'none'});
            inputformlist[5]=0;
        }
    };


//submit------------------------
$('.submitbtn').on('click',function(){
//$('.submitbtn').submit(function(){
//function checkform(){	
	test01();
//	test02();
//	test03();
//	test04();
//	test05();
	test06();
	test07();
//	test08();
    test09();
    test10();
    test11();


	//checkbox
//	var selected=[];
//    $('[name="plat"]:checkbox:checked').each(function(){
//    	selected.push($(this).val());
//    });
////	selected.push($('.othertext').val());
//	$('input[name="platform"]').val(selected);


	var answertotal=0;
	for(var ansans=0;ansans<inputformlist.length;ansans++){
		answertotal=answertotal+inputformlist[ansans];
	};
	if(answertotal>0){
		alert("請將表單填寫完整");
        if(!$('.sec_08 input[name="Email"]').val().match(valid.validemail)){ alert(msg.msg07[1]); }
        if(!$('.sec_08 input[name="Phone"]').val().match(valid.validphone)){ alert(msg.msg06[1]); }
        if($('.sec_08 input[name="file"]').val()==""){ alert("請上傳您的照片"); }
		return false;
	}else{
		//alert("感謝您的填寫");
		
		$('form[name="presentform"]').submit();
        
	};
//};
});


});
