"use strict";

let num = 1;
let q = {
  1:{"title":"문제 1번", "type":"EI", "A":"E", "B":"I"},
  2:{"title":"문제 2번", "type":"EI", "A":"E", "B":"I"},
  3:{"title":"문제 3번", "type":"EI", "A":"E", "B":"I"},
  4:{"title":"문제 4번", "type":"SN", "A":"S", "B":"N"},
  5:{"title":"문제 5번", "type":"SN", "A":"S", "B":"N"},
  6:{"title":"문제 6번", "type":"SN", "A":"S", "B":"N"},
  7:{"title":"문제 7번", "type":"TF", "A":"T", "B":"F"},
  9:{"title":"문제 8번", "type":"TF", "A":"T", "B":"F"},
  8:{"title":"문제 9번", "type":"TF", "A":"T", "B":"F"},
  10:{"title":"문제 10번", "type":"JP", "A":"J", "B":"P"},
  11:{"title":"문제 11번", "type":"JP", "A":"J", "B":"P"},
  12:{"title":"문제 12번", "type":"JP", "A":"J", "B":"P"}
};
let result = {
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ENTP":{"wine":"말벡", "explain":"야생마 같은 말백", "img":"./images/champagne.jpg"},
  "ENTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
  "ISTJ":{"wine":"샴페인", "explain":"톡톡튀는 샴페인에 대한 설명", "img":"./images/champagne.jpg"},
};

function start(){
  $(".start").hide();
  $(".question").show();
};

$("#A").click(function(){
  let type = $("#type").val();
  let preValue = $("#"+type).val();
  console.log(parseInt(preValue)+1);
  next();
});

function next() {
  if (num == 13){
    $(".question").hide();
    $(".result").show();
    let mbti = "";
    ($("EI").val()<2) ? mbti = mbti +"I" : mbti = mbti + "E";
    ($("SN").val()<2) ? mbti = mbti +"N" : mbti = mbti + "S";
    ($("TF").val()<2) ? mbti = mbti +"F" : mbti = mbti + "T";
    ($("JP").val()<2) ? mbti = mbti +"P" : mbti = mbti + "J";
    alert(mbti);

    $("#img").attr("src", result(mbti)[img]);
    $("#wine").attr(result(mbti)[wine]);
    $("#explain").attr(result(mbti)[explain]);

  }else{
    $(".progress-bar").attr('style', 'width: calc(100/12*'+num+'%)');
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
  
  }
    
}; 