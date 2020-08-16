// JavaScript Document

$(function(){
	$('.upload').click(function(){
		$('input[type="file"]').click();
	});

	
//---驗證-----------------------------------------------------------------------
	$('.hinttxt').css({display:'none'});

	//validate----------
	//宣告驗證預設
	var inputformlist=[1,1,1,1,1,1,1];

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
	$('.sec_04 input[name="Name"]').on('blur',test01);
	function test01(){
		if($('.sec_04 input[name="Name"]').val()==""){
			inputformlist[0]=1;
		}else{
			inputformlist[0]=0;
		}
	};

	//02電話
	$('.sec_04 input[name="Phone"]').on('blur',test02);
	function test02(){
		if($('.sec_04 input[name="Phone"]').val()==""){
			inputformlist[1]=1;
		}else if(!$('.sec_04 input[name="Phone"]').val().match(valid.validphone)){
			inputformlist[1]=1;
		}else{
			inputformlist[1]=0;
		};
	};

	//03email
	$('.sec_04 input[name="Email"]').on('blur',test03);
	function test03(){
		if($('.sec_04 input[name="Email"]').val()==""){
			inputformlist[2]=1;
		}else if(!$('.sec_04 input[name="Email"]').val().match(valid.validemail)){
			inputformlist[2]=1;
		}else{
			inputformlist[2]=0;
		};
	};

    //04住址
    $('.sec_04 input[name="Address"]').on('blur',test04);
    function test04(){
        if($('.sec_04 input[name="Address"]').val()==""){
            inputformlist[3]=1;
        }else{
            inputformlist[3]=0;
        }
    };

    
    //05產品編號
    $('input[name="ProductSNo"]').on('blur',test05);
    function test05(){
        if($('.sec_04 input[name="ProductSNo"]').val()==""){
            inputformlist[4]=1;
        }else{
            inputformlist[4]=0;
        }
    };
	
	
    //06產品合照
    $('.sec_04 input[name="file"]').on('blur',test06);
    function test06(){
        if($('.sec_04 input[name="file"]').val()==""){
            inputformlist[5]=1;
        }else{
            inputformlist[5]=0;
        }
    };

    
    //07機型
    $('input[name="ProductType"]').on('blur',test07);
    function test07(){
        if($('.sec_04 input[name="ProductType"]').val()==""){
            inputformlist[6]=1;
        }else{
            inputformlist[6]=0;
        }
    };


	//submit------------------------
	$('a.submitbtn').on('click',function(){
		test01();
		test02();
		test03();
		test04();
		test05();
		test06();
		test07();


		var answertotal=0;
		for(var ansans=0;ansans<inputformlist.length;ansans++){
			answertotal=answertotal+inputformlist[ansans];
		};
		if(answertotal>0){
			alert("請將表單填寫完整");
			if(!$('.sec_04 input[name="Email"]').val().match(valid.validemail)){ alert(msg.msg07[1]); }
			if(!$('.sec_04 input[name="Phone"]').val().match(valid.validphone)){ alert(msg.msg06[1]); }
			if($('.sec_04 input[name="file"]').val()==""){ alert("請上傳您的照片"); }
			return false;
		}else{
			//alert("感謝您的填寫");

//			$('form[name="presentform"]').attr('action','https://winenergy.azurewebsites.net/admin_login/WindowsData/Get');
			$('form[name="presentform"]').submit();

		};
	//};
	});


});
