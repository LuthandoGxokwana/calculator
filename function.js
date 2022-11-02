
$(function(){
    $("#7").click(function(){
        $(".answer").attr("value", $(".answer").val()+"7");
    });
    $("#8").click(function(){
        $(".answer").attr("value",$(".answer").val()+ "8");
    });
    $("#9").click(function(){
        $(".answer").attr("value",$(".answer").val()+ "9");
    });
    $("#6").click(function(){
        $(".answer").attr("value",$(".answer").val()+ "6");
    });
    $("#5").click(function(){
        $(".answer").attr("value",$(".answer").val()+ "5");
    });
    $("#4").click(function(){
        $(".answer").attr("value",$(".answer").val()+ "4");
    });
    $("#3").click(function(){
        $(".answer").attr("value",$(".answer").val()+ "3");
    });
    $("#2").click(function(){
        $(".answer").attr("value",$(".answer").val()+ "2");
    });
    $("#1").click(function(){
        $(".answer").attr("value",$(".answer").val()+ "1");
    });
    $("#0").click(function(){
        $(".answer").attr("value",$(".answer").val()+ "0");
    });
    $("#ce").click(function(){
        $(".answer").attr("value", "");
    });
    $("#dot").click(function(){
        $(".answer").attr("value", $(".answer").val()+".");
    });
    $("#del").click(function(){
       var input = $(".answer").val();
       var toStringArray = input.toString().split("");
       var newArray =[];
       for(let i=0;i<=toStringArray.length-2;i++){
            newArray.push(toStringArray[i]);
       }
       var toNumber = Number(newArray.join(""));

        $(".answer").attr("value", toNumber);
    });
    $("#multiply").click(function(){
        $(".answer").attr("value", $(".answer").val()+"*");
    });
    $("#subtract").click(function(){
        $(".answer").attr("value", $(".answer").val()+"-");
    });
    $("#divide").click(function(){
        $(".answer").attr("value", $(".answer").val()+"/");
    });
    $("#add").click(function(){
        $(".answer").attr("value", $(".answer").val()+"+");
    });
    $("#equal").click(function(){
        $(".answer").attr("value", eval($(".answer").val()));
    });
});
