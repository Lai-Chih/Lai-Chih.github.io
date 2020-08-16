// JavaScript Document

$(function(){
//---驗證-----------------------------------------------------------------------
$('.hint').css({display:'none'});

//validate----------
//宣告驗證預設
var inputformlist=[1,1,1,1,1];

//宣告驗證格式
var valid={
	validphone:/^[-+#()0-9\s]{1,}$/,
	validemail:/^[^\s]+@[^\s]+\.[^\s]{2,}$/
};

//宣告驗證訊息
var msg={
//	msg01:['*請填寫名字'],
//	msg02:['*請填寫電話'],
//	msg03:['*請填寫信箱'],
	msg01:['*必填'],
	msg02:['*必填'],
	msg03:['*必填'],
	msg04:['*請勾選有無自備車輛'],
    msg05:['*請填寫車型'],
    msg06:['*留言上限為 200 字'],
//	msg06:['*請填寫電話','*請填寫正確格式'],
//	msg07:['*請填寫Email','*請填寫正確格式'],
//	msg08:['*請勾選貴公司目前使用的虛擬化平台']
};

    
    
//01姓名
$('.nameBox input').on('blur',test01);
function test01(){
	if($('.nameBox input').val()==""){
		$('.hint01').html(msg.msg01[0]);
		$('.hint01').css({display:'block'});
		inputformlist[0]=1;
	}else{
		$('.hint01').css({display:'none'});
		inputformlist[0]=0;
	}
};


//02電話
$('.telBox input').on('blur',test02);
function test02(){
	if($('.telBox input').val()==""){
		$('.hint02').html(msg.msg02[0]);
		$('.hint02').css({display:'block'});
		inputformlist[1]=1;
	}else if(!$('.telBox input').val().match(valid.validphone)){
		$('.hint02').html(msg.msg02[1]);
		$('.hint02').css({display:'block'});
		inputformlist[1]=1;
	}else{
		$('.hint02').css({display:'none'});
		inputformlist[1]=0;
	};
};

//03email
$('.mailBox input').on('blur',test03);
function test03(){
	if($('.mailBox input').val()==""){
		$('.hint03').html(msg.msg03[0]);
		$('.hint03').css({display:'block'});
		inputformlist[2]=1;
	}else if(!$('.mailBox input').val().match(valid.validemail)){
		$('.hint03').html(msg.msg03[0]);
		$('.hint03').css({display:'block'});
		inputformlist[2]=1;
	}else{
		$('.hint03').css({display:'none'});
		inputformlist[2]=0;
	};
};

	
//04有無自備車輛
$('.inP_radio input').on('click',test04);
$('.inP_radio input').on('click',function(){	
	if($('.inP_radio input:checked').length == 1 && $('.inP_radio input:checked').val() == 'NO'){
		$('.hint04, .hint05').css({display:'none'});
		$('.carType input').val('')
		inputformlist[3]=0;
	}
});
function test04(){
	if($('.inP_radio input:checked').length<=0){
		$('.hint04').html(msg.msg04[0]);
		$('.hint04').css({display:'block'});
		inputformlist[3]=1;
	}else if($('.inP_radio input:checked').length == 1 && $('.inP_radio input:checked').val() == 'NO'){
		$('.hint04').css({display:'none'});
		inputformlist[3]=0;
	}else if($('.inP_radio input:checked').length == 1 && $('.inP_radio input:checked').val() == 'YES'){
		if($('.carType input').val() == ''){
			$('.hint05').html(msg.msg05[0]);
			$('.hint05').css({display:'block'});
			inputformlist[3]=1;
		}else if(!$('.carType input').val() == ''){
			$('.hint04, .hint05').css({display:'none'});
			inputformlist[3]=0;
		}
	}
};

//05 textarea字數限制
function test05(){
	if($('.textAreaBox textarea').val().length>200){
		$('.hint06').html(msg.msg06[0]);
		$('.hint06').css({display:'block'});
		inputformlist[4]=1;
	}else{
		$('.hint06').css({display:'none'});
		inputformlist[4]=0;
	}
}

	

//submit------------------------
$('.submit').on('click',function(){

	test01();
	test02();
	test03();
	test04();
	test05();


	var answertotal=0;
	for(var ansans=0;ansans<inputformlist.length;ansans++){
		answertotal=answertotal+inputformlist[ansans];
	};
	if(answertotal>0){
		alert("請將表單填寫完整");
		return false;
	}else{
		//alert("感謝您的填寫");
		//$('form[name="presentform"]').setAttrib('action','http://mssmbform.azurewebsites.net/Home/Get?');
		$('form.driverForm').submit();
        
	};
});


});
