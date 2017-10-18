var ipt=document.getElementsByTagName("input");
var form=document.forms[0];
var div=form.getElementsByTagName("div");
var check=document.getElementById("check");
var span=document.getElementById("span");
var p1=/^\d{11}$/;
var p2=/^[a-zA-Z]\w{5,17}$/;
form.onsubmit=function(event){
    if(p1.test(ipt[0].value)){
        div[0].style.border="3px solid white";
        if(ipt[1].value){
             div[1].style.border="3px solid white";
             if(p2.test(ipt[2].value)){
                 div[2].style.border="3px solid white";
                 if(ipt[3].value==ipt[2].value){
                     div[3].style.border="3px solid white";
                     if(span.firstChild.style.display=="inline-block"){
                        alert("填写成功,即将注册"); 
                     }
                     else{
                            alert("您还没有同意用户协议")
                           event.preventDefault();
                     }
                 }
                    else{
                        div[3].style.border="3px solid red";
                        event.preventDefault();
                    }
             }
             else{
                 div[2].style.border="3px solid red";
                 event.preventDefault();
             }
        }
            else{
                 div[1].style.border="3px solid red";
                 event.preventDefault();
            }
    }
        else{
                div[0].style.border="3px solid red";
                event.preventDefault();
    }
}//结束form
check.onclick=function(){
    var arr=[];
    for(var i=0;i<4;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    ipt[1].value=arr.join("");

}
span.onclick=function(){
    if(span.firstChild.style.display=="none"){
           span.firstChild.style.display="inline-block";
    }
    else{
        span.firstChild.style.display="none";
    }
      
}

