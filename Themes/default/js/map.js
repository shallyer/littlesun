
$(window).load(function(){
    loadObject();
    _initOver();
});

function loadObject(){  
    window.$hoing = {
        chinamapdd: $("#chinamap dd"),
        chinamapdt: $("#chinamap dt"),
        chinamap: $("#chinamap"),
        centerlist: $("#centerlist")
    };
}


function _initOver(){
    $hoing.chinamapdd.hover(function(){
        obj = $(this);
        $id = obj.attr("id");
		$key = obj.attr("key");
		$class = obj.attr("class");
		$txt = obj.text();
        $hoing.chinamapdt.addClass($id);
    },function(){
        $hoing.chinamapdt.removeClass();
    });
    $hoing.chinamapdd.click(function(){
		 location.href='http://www.littlesun.com.cn/index.php/List/'+$class+'#showmap';
    });
}


function centershow($key,$txt,$class)
{
    $hoing.centerlist.html('');
    /* 显示 */
    $hoing.chinamap.hide()
    $hoing.centerlist.show()
    /* 显示 */
    if ($id != "")
	{ 
        $.get("/cms/templets/qiye/dynamic/getMapList.php?l="+encodeURI($key)+"&province="+encodeURI($txt), function(data){
            $hoing.centerlist.html(data); 
			doPage();
        });
    }
}

function centerclose()
{
    $hoing.centerlist.hide()
    $hoing.chinamap.show();
}

function tzmap(obj,obj1)
{
	//var myweb = $('#'+obj).val();
	var web1 = 'http://www.hoing.net/cms/member/index.php?uid='+obj;
	//alert(myweb);
	//window.open(web1);
	if (obj1!='')
	{
		//window.location.href=web;
		window.open(obj1);
	}
	else{
		window.open(web1);  
	}
}



$('#map_table a').click(function(){
	$id = $(this).text();
	var $key=$(this).attr("key");
	var $txt=$(this).text();	
    centershow($key,$txt);
});
		
function doPage(){

	if($('#map_cns').find("li").length==0){//dede:datalist is null
		
		//判断IE浏览器提示
		if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0))
		{
			$('#map_cns').html("<p class='m30 tcenter' style='padding-top:80px'>地图升级中，请点击地图下方的地区查看地区园所！</p>");
		}
		else{
			$('#map_cns').html("<p class='m30 tcenter' style='padding-top:80px'>暂无数据！</p>");
		}
		$('#map_page').hide();
	}else{
		if($('#map_page').find("a").length==0){
			$('#map_page').hide();
		}else{
			$('#map_page a').click(function(){
				 $hoing.centerlist.load($(this).attr('href'),function(){
					doPage();
				 });
				 return false;
			});
		}
	}
}

$(function() {			
	$(window).scroll(function(){ scro_top();})
	$(window).resize(function(){ scro_top();})
	function scro_top(){
		if($(window).scrollTop()>100){$("#left_top_fixed").css('top','0px')}
		else{$("#left_top_fixed").css('top','142px')}
		}
});