// JavaScript Document

$(function(){
	
//---驗證-----------------------------------------------------------------------
	//$('.hint').css({display:'none'});

	//validate----------
	//宣告驗證預設
	var inputformlist=[1,1,1,1,1,1,1,1,1,1,1,1];

	//宣告驗證格式
	var valid={
		validphone:/^[-+#()0-9\s]{1,}$/,
		validemail:/^[^\s]+@[^\s]+\.[^\s]{2,}$/
	};

	//宣告驗證訊息
	var msg={
		msg01:['請填寫產品名稱'],
//		msg02:['請填寫 S/N 碼', '請填寫正確'],
		msg03:['請輸入購買日期'],
		msg04:['請填寫購買通路'],
		msg05:['請上傳本體上 P/N 碼照片'],
		msg06:['請上傳發票照片'],
		msg07:['請填寫您的姓名'],
		msg08:['請填寫您的 email', '請填寫正確'],
		msg09:['請填寫您的電話', '請填寫正確'],
		msg10:['請填寫您的贈品寄送地址'],
		msg11:['請填寫您的身份證字號', '請填寫正確'],
		msg12:['必填'],
		msg13:['請填寫 Surface 產品序號']
	};


	// 01 產品名稱
	var x
	$('.inpBox01 select').on('change',function(){
		x = $('.inpBox01 select').val()
		test01()
	});
	function test01(){
		if($('.inpBox01 select').val() != ''){
			switch(x){
				case 'Surface系列':
					$('.forXbox').removeClass('show')
					$('.forSurface').addClass('show')
					$('.inpBox13 input').on('blur',test13);
					break;
				case 'Xbox系列':
					$('.inpBox13 input').val('')
					$('.forSurface').removeClass('show')
					$('.forXbox').addClass('show')
					inputformlist[0]=0;
					break;
				default:
					$('.inpBox13 input').val('')
					$('.forSurface, .forXbox').removeClass('show')
					inputformlist[0]=0;
			}
			$('.hint01').css({display:'none'});
		}else{
			$('.hint01').html(msg.msg01[0]);
			$('.hint01').css({display:'block'});
			inputformlist[0]=1;
		}
	};
	function test13(){
		if($('.inpBox13 input').val() != ''){
			$('.hint13').css({display:'none'});
			inputformlist[0]=0;
		}else{
			$('.hint13').html(msg.msg13[0]);
			$('.hint13').css({display:'block'});
			inputformlist[0]=1;
		}
	};


	// 02 包裝 S/N 碼
//	$('.inpBox02 input').on('blur',test02);
//	function test02(){
//		if($('.inpBox02 input').val() != ''){
//			if ($('.inpBox02 input').val().match(/^[0-9]{13}$/) == null) {
//		    	$('.hint02').html(msg.msg02[1]);
//				$('.hint02').css({display:'block'});
//				inputformlist[1]=1;
//            } else {
//			 	$('.hint02').css({display:'none'});
//				inputformlist[1]=0;
//            }
//		}else{
//			$('.hint02').html(msg.msg02[0]);
//			$('.hint02').css({display:'block'});
//			inputformlist[1]=1;
//		}
//	};
	

	// 03 購買日期
	$('[id^="selc0"]').on('blur change',test03);
	
	function test03(){
		if($('[id^="selc0"] option:checked[value=""]').length!=0){
			$('.hint03').html(msg.msg03[0]);
			$('.hint03').css({display:'block'});
			inputformlist[2]=1;
		}
		
		var seleNum = 0;
		$('[id^="selc0"] option:checked').each(function() {
            if ($(this).val() == '') {
				seleNum++
            }
        });		
		if (seleNum > 0) {
			$('.hint03').html(msg.msg03[0]);
			$('.hint03').css({display:'block'});
			inputformlist[2]=1;
		} else {
//			$('.hint03').css({display:'none'});
//			inputformlist[2]=0;
			var $year, $month, $day;
			$year = $('#selc01 option:checked').val();
			$month = $('#selc02 option:checked').val();
			$day = $('#selc03 option:checked').val();

			if (isNaN(new Date($year, $month, $day).getTime())) {
				$('.hint03').html(msg.msg03[0]);
				$('.hint03').css({display:'block'});
				inputformlist[2]=1;
			} else {
				$('.hint03').css({display:'none'});
				inputformlist[2]=0;
			}
		}
//		console.log(seleNum)
	};
	
	var i
	$('#selc02').on('change', function() {
		$('#selc03 option:disabled').prop('disabled', false);

		var $value = $(this).val();
		if ($value == '12') {
			for (i = 4; i <= 30; i++) {
				$('#selc03 option[value="' + i + '"]').prop({ 'disabled': true, 'selected': false });
			}
		} else if ($value == '11') {
			$('#selc03 option[value="31"]').prop({ 'disabled': true, 'selected': false });
		}
	});


	// 04 購買通路
	$('.inpBox04 input').on('blur',test04);
	function test04(){
		if($('.inpBox04 input').val()==''){
			$('.hint04').html(msg.msg04[0]);
			$('.hint04').css({display:'block'});
			inputformlist[3]=1;
		}else{
			$('.hint04').css({display:'none'});
			inputformlist[3]=0;
		}
	};


	
	
	
	// 07 姓名
	$('.inpBox07 input').on('blur',test07);
	function test07(){
		if($('.inpBox07 input').val() != ''){
			$('.hint07').css({display:'none'});
			inputformlist[6]=0;
		}else{
			$('.hint07').html(msg.msg07[0]);
			$('.hint07').css({display:'block'});
			inputformlist[6]=1;
		}
	};
	
	// 08 email
	$('.inpBox08 input').on('blur', test08);
	function test08(){
		if($('.inpBox08 input').val()==''){
			$('.hint08').html(msg.msg08[0]);
			$('.hint08').css({display:'block'});
			inputformlist[7]=1;
		}else if(!$('.inpBox08 input').val().match(valid.validemail)){
			$('.hint08').html(msg.msg08[1]);
			$('.hint08').css({display:'block'});
			inputformlist[7]=1;
		}else{
			$('.hint08').css({display:'none'});
			inputformlist[7]=0;
		};
	};
	
	
	// 09 電話
	$('.inpBox09 input').on('blur', test09);
	function test09(){
		if($('.inpBox09 input').val()==''){
			$('.hint09').html(msg.msg09[0]);
			$('.hint09').css({display:'block'});
			inputformlist[8]=1;
		}else if(!$('.inpBox09 input').val().match(valid.validphone)){
			$('.hint09').html(msg.msg09[1]);
			$('.hint09').css({display:'block'});
			inputformlist[8]=1;
		}else{
			$('.hint09').css({display:'none'});
			inputformlist[8]=0;
		};
	};
	
	
	// 10 地址
	$('.inpBox10 input').on('blur',test10);
	function test10(){
		if($('.inpBox10 input').val() != ''){
			$('.hint10').css({display:'none'});
			inputformlist[9]=0;
		}else{
			$('.hint10').html(msg.msg10[0]);
			$('.hint10').css({display:'block'});
			inputformlist[9]=1;
		}
	};
	
	
	// 11 驗證身分證
	$('.inpBox11 input').on('blur',test11);
	
	function test11(){
        if ($('.inpBox11 input').val() != '') {
            if (checkTwID($('.inpBox11 input').val()) == false) {
                $('.hint11').html(msg.msg11[1]);
				$('.hint11').css({display:'block'});
				inputformlist[10]=1;
            } else {
                $('.hint11').css({display:'none'});
				inputformlist[10]=0;
            }
        }else{
			$('.hint11').html(msg.msg11[0]);
			$('.hint11').css({display:'block'});
			inputformlist[10]=1;
		}
	}
    function checkTwID(id) {
        //建立字母分數陣列(A~Z)
        var city = new Array(
            1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2, 11,
            20, 48, 29, 38, 47, 56, 65, 74, 83, 21, 3, 12, 30
        )
        id = id.toUpperCase();
        // 使用「正規表達式」檢驗格式
        if (id.search(/^[A-Z](1|2)\d{8}$/i) == -1) {
            // alert('基本格式錯誤');
            return false;
        } else {
            //將字串分割為陣列(IE必需這麼做才不會出錯)
            id = id.split('');
            //計算總分
            var total = city[id[0].charCodeAt(0) - 65];
            for (var i = 1; i <= 8; i++) {
                total += eval(id[i]) * (9 - i);
            }
            //補上檢查碼(最後一碼)
            total += eval(id[9]);
            //檢查比對碼(餘數應為0);
            return ((total % 10 == 0));
        }
    }
	
	
	// 12 如何得知
	$('.inpBox12 input').on('click', test12);
	function test12(){
		if($('.inpBox12 input:checked').length == 1){
			$('.hint12').css({display:'none'});
			inputformlist[11]=0;
		}else if($('.inpBox12 input:checked').length<=0){
			$('.hint12').html(msg.msg12[0]);
			$('.hint12').css({display:'block'});
			inputformlist[11]=1;
		}
	};

    
	// 05 P/N碼照片
	$('.picBtn').on('click', function(){
		var idName = $(this).data('btn')		
		if(idName == '#picUp01'){
			$('.hint05').html(msg.msg05[0]);
			$('.hint05').css({display:'block'});
			inputformlist[4]=1;
		}else{
			$('.hint06').html(msg.msg06[0]);
			$('.hint06').css({display:'block'});
			inputformlist[5]=1;
		}
		$(idName).click()
	})	
	
	$('#picUp01').on('change', test05);	
	function test05(){
		if ($('#picUp01').val() == '') {
            $('.hint05').html(msg.msg05[0]);
			$('.hint05').css({display:'block'});
			inputformlist[4]=1;
        }

        var fileReader = new FileReader();
        var img;
        fileReader.readAsDataURL(document.getElementById('picUp01').files[0]); //document.getElementById("userPhoto_1").files[0]
        fileReader.onload = function(data) {
            // 判斷是否小於5M
            if (parseInt(document.getElementById('picUp01').files[0].size) > 1024 * 1024 * 6) {
                $('#picUp01').val('');
                alert('您上傳的檔案大於6MB');
                return false;
            }

            // 改變預覽圖
            $('.inpBox05 .imgBox').prop('style', 'background-image:url(' + data.target.result + ')');
			$('.hint05').css({display:'none'});
			inputformlist[4]=0;
//			console.log(data.target.result)
        };
		
	};


	// 06 發票照片
	$('#picUp02').on('change', test06);	
	function test06(){
		if ($('#picUp02').val() == '') {
            $('.hint06').html(msg.msg06[0]);
			$('.hint06').css({display:'block'});
			inputformlist[5]=1;
        }

        var fileReader = new FileReader();
        var img;
        fileReader.readAsDataURL(document.getElementById('picUp02').files[0]); //document.getElementById("userPhoto_1").files[0]
        fileReader.onload = function(data) {
            // 判斷是否小於5M
            if (parseInt(document.getElementById('picUp02').files[0].size) > 1024 * 1024 * 6) {
                $('#picUp02').val('');
                alert('您上傳的檔案大於6MB');
                return false;
            }

            // 改變預覽圖
            $('.inpBox06 .imgBox').prop('style', 'background-image:url(' + data.target.result + ')');
			$('.hint06').css({display:'none'});
			inputformlist[5]=0;
        };
		
	};







	//submit------------------------
	$('.submit').on('click',function(){

		test01();
		if($('.inpBox01 select').val() == 'surface'){
			test13();
		}
//		test02();
		test03();
		test04();
//		test05();
//		test06();
		if ($('#picUp01').val() == '') {
            $('.hint05').html(msg.msg05[0]);
			$('.hint05').css({display:'block'});
			inputformlist[4]=1;
        }
		if ($('#picUp02').val() == '') {
            $('.hint06').html(msg.msg06[0]);
			$('.hint06').css({display:'block'});
			inputformlist[5]=1;
        }
		
		test07();
		test08();
		test09();
		test10();
		test11();
		test12();
		
//		alert($('[id^="selc0"] option:checked[value=""]').length)
		
		if($('#privacy:checked').length == 1){
			inputformlist[1]=0;
		}else if($('#privacy:checked').length<=0){
			alert('請勾選同意隱私權聲明');
			inputformlist[1]=1;
		}

		var answertotal=0;
		for(var ansans=0;ansans<inputformlist.length;ansans++){
			answertotal=answertotal+inputformlist[ansans];
		};
		console.log(answertotal)
		if(answertotal>0){
			alert('請將表單填寫完整');
			return false;
		}else{
			//alert("感謝您的填寫");
			//$('form[name="presentform"]').setAttrib('action','http://mssmbform.azurewebsites.net/Home/Get?');
			$('form.keymouse').submit();

		};
	});


});
