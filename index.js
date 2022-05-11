
var nums = [0,0];
var i=0;
var mode = 0;
var b = false;
var operator = "none";
document.querySelector(".btn0").addEventListener("click",function(){
  numupdate(0);
});
document.querySelector(".btn1").addEventListener("click",function(){
  numupdate(1);
});
document.querySelector(".btn2").addEventListener("click",function(){
  numupdate(2);
});
document.querySelector(".btn3").addEventListener("click",function(){
  numupdate(3);
});
document.querySelector(".btn4").addEventListener("click",function(){
  numupdate(4);
});
document.querySelector(".btn5").addEventListener("click",function(){
  numupdate(5);
});
document.querySelector(".btn6").addEventListener("click",function(){
  numupdate(6);
});
document.querySelector(".btn7").addEventListener("click",function(){
  numupdate(7);
});
document.querySelector(".btn8").addEventListener("click",function(){
  numupdate(8);
});
document.querySelector(".btn9").addEventListener("click",function(){
  numupdate(9);
});
document.querySelector(".btn10").addEventListener("click",function(){
  setOperator("+");
});
document.querySelector(".btn11").addEventListener("click",function(){
  setOperator("-");
});
document.querySelector(".btn12").addEventListener("click",function(){
  setOperator("X");
});
document.querySelector(".btn13").addEventListener("click",function(){
  setOperator("/");
});
document.querySelector(".btneql").addEventListener("click",function(){
  displans();
});
document.querySelector(".btnac").addEventListener("click",function(){
  nums[0] =0;
  nums[1]=0;
  i=0;
  b=false;
  document.querySelector(".dispscreen").innerHTML = "0";
});
document.querySelector(".btnM").addEventListener("click",changemode);
function numupdate(x){
  nums[i] = nums[i]*10+x;
  display();
}
function setOperator(op){
  if(b==false){
    operator = op;
    b = true;
    display();
    i++;
  }
  else{
    alert("invalid input");
    location.reload();
  }
}
function display(){
  if(b){
    document.querySelector(".dispscreen").innerHTML = nums[0]+" "+operator+" "+nums[1];
  }
  else{
    document.querySelector(".dispscreen").innerHTML = nums[0];
  }
}
function displans(){
  if(b==false){
    alert("invalid input");
    location.reload();
  }
  else{
    var s="";
    if(operator == "+"){
      s=nums[0]+nums[1];
    }
    if(operator == "-"){
      s=nums[0]-nums[1];
    }
    if(operator == "X"){
      s=nums[0]*nums[1];
    }
    if(operator == "/"){
      if(nums[1]==0){
        alert("cannot divide by zero");
        location.relaod();
      }
      s = nums[0]/nums[1];
    }
    document.querySelector(".dispscreen").innerHTML = s;
    nums[0] = s;
    nums[1]=0;
    i=0;
    b = false;
  }
}
function changemode(){
  if(mode==0){
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";
    var btns = document.querySelectorAll(".btn");
    for(var j=0;j<btns.length;j++){
      btns[j].style.color = "white";
    }
    mode = 1;
  }
  else if(mode==1){
    location.reload();
  }
}
