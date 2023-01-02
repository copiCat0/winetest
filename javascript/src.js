"use strict";

let num = 1;
let q = {
  1:{"title":"문제 1번", "type":"EI", "A":"E", "B":"I"},
  2:{"title":"문제 2번", "type":"EI", "A":"E", "B":"I"},
  3:{"title":"문제 3번", "type":"EI", "A":"E", "B":"I"}
  5:{"title":"문제 4번", "type":"EI", "A":"S", "B":"N"},
  4:{"title":"문제 5번", "type":"EI", "A":"S", "B":"N"},
  6:{"title":"문제 6번", "type":"EI", "A":"S", "B":"N"}
  7:{"title":"문제 7번", "type":"EI", "A":"T", "B":"F"},
  9:{"title":"문제 8번", "type":"EI", "A":"T", "B":"F"}
  8:{"title":"문제 9번", "type":"EI", "A":"T", "B":"F"},
  10:{"title":"문제 10번", "type":"EI", "A":"J", "B":"P"},
  11:{"title":"문제 11번", "type":"EI", "A":"J", "B":"P"},
  12:{"title":"문제 12번", "type":"EI", "A":"J", "B":"P"}
} 

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
  }
    $(".progress-bar").attr('style', 'width: calc(100/12*'+num+'%)');
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
}; 