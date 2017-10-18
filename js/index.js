var top1=document.getElementsByClassName("top1")[0];
var span1=top1.getElementsByTagName("span");
var p1=top1.getElementsByTagName("p")[0];
var rel=document.getElementById("rel");
var ul1=rel.getElementsByTagName("ul");
var btn=document.getElementById("btn");
var bottomUl=btn.firstElementChild;
var btns=btn.getElementsByTagName("li");
var flag=0;
var index=0;
for(var i=0;i<span1.length;i++){
    span1[i].index=i;
    span1[i].onclick=function(){
        for(var j=0;j<span1.length;j++){
        span1[j].removeAttribute("class");
        ul1[j].style.display="none";
        ul1[3].style.display="none";
        }
    span1[this.index].setAttribute("class","current");
    ul1[this.index].style.display="block";
        flag=this.index;

    }
}
 bottomUl.onclick=function(event){
            
            var rels=ul1[flag].getElementsByTagName("li");
            var target=event.target;
            if(target.nodeName=="LI"){
                clearTimeout(id);
                for(var i=0;i<4;i++){
                    btns[i].removeAttribute("class");
                    rels[i].removeAttribute("class");
                }
                target.setAttribute("class","current");
                index=target.getAttribute("var");
                if(index<3){
                    rels[index].setAttribute("class","current");
                    rels[index].parentNode.style.left="14px"
                }
                else{  
                    rels[index].parentNode.style.left="-204px";
                    rels[index].setAttribute("class","current");
                    
                }
            }

        }
     p1.onclick=function(){
  
  
        for(var j=0;j<span1.length;j++){
        span1[j].removeAttribute("class");
        ul1[j].style.display="none";
        }
    ul1[3].style.display="block";
        flag=3;
    }
    
    function move(){
        var rels=ul1[flag].getElementsByTagName("li");
        
                for(var i=0;i<4;i++){
                    btns[i].removeAttribute("class");
                    rels[i].removeAttribute("class");
                }
                btns[index].setAttribute("class","current");
                if(index<3){
                    rels[index].setAttribute("class","current");
                    rels[index].parentNode.style.left="14px";
                    index++;
                    setTimeout(move,1000);
                }
                else{  
                    rels[index].parentNode.style.left="-204px";
                    rels[index].setAttribute("class","current");
                    index=0;
                    setTimeout(move,3000);
                    
                }
            }
    
        var id=setTimeout(move,3000);

    var top2=document.getElementsByClassName("top2")[0];
    var span2=top2.getElementsByTagName("span");
    var p2=top2.getElementsByTagName("p")[0];
    var content2=document.getElementById("content2");
    var divs=content2.getElementsByTagName("div");
    var uls=[]
     for(var z=0;z<divs.length;z++){
        uls[z]=divs[z].getElementsByTagName("ul");
    }
   
    for(var i=0;i<span2.length;i++){
    span2[i].index=i;
    span2[i].onclick=function(){
       
        for(var j=0;j<span2.length;j++){
        span2[j].removeAttribute("class");
        }
     for(var z=0;z<divs.length;z++){
        for(var j=0;j<span2.length;j++){
            uls[z][j].style.display="none";
            uls[z][2].style.display="none";
        }  
    }
    for(var z=0;z<divs.length;z++)
        {
            uls[z][this.index].style.display="block";
        }
        span2[this.index].setAttribute("class","current");
    }
}
p2.onclick=function(){
    for(var j=0;j<span2.length;j++){
        span2[j].removeAttribute("class");
        }
     for(var z=0;z<divs.length;z++){
        for(var j=0;j<span2.length;j++){
            uls[z][j].style.display="none";
        }  
    }
    for(var z=0;z<divs.length;z++)
        {
            uls[z][2].style.display="block";
        }
       
    }
    var top3=document.getElementsByClassName("top3")[0];
    var span3=top3.getElementsByTagName("span");
    var p3=top3.getElementsByTagName("p")[0];
    var content3=document.getElementsByClassName("top3_content")[0];
    var divs2=content3.getElementsByTagName("div");
    var h1s=[];
     for(var z=0;z<divs.length;z++){
        h1s[z]=divs2[z].getElementsByTagName("h1");
    }
    for(var i=0;i<span3.length;i++){
    span3[i].index=i;
    span3[i].onclick=function(){
       
        for(var j=0;j<span3.length;j++){
        span3[j].removeAttribute("class");
        }
     for(var z=0;z<divs2.length;z++){
        for(var j=0;j<span3.length;j++){
            h1s[z][j].style.display="none";
            h1s[z][2].style.display="none";
        }  
    }
    for(var z=0;z<divs2.length;z++)
        {
            h1s[z][this.index].style.display="block";
        }
        span3[this.index].setAttribute("class","current");
    }
}
p3.onclick=function(){
    for(var j=0;j<span3.length;j++){
        span3[j].removeAttribute("class");
        }
     for(var z=0;z<divs2.length;z++){
        for(var j=0;j<span3.length;j++){
            h1s[z][j].style.display="none";
        }  
    }
    for(var z=0;z<divs2.length;z++)
        {
            h1s[z][2].style.display="block";
        }
       
    }

    var bottom=document.getElementsByClassName("bottom")[0];
    var divs3=bottom.getElementsByTagName("div");
    var imgs=[];
     for(var z=0;z<divs3.length;z++){
        imgs[z]=divs3[z].getElementsByTagName("img");
    }
    for(var i=0;i<imgs.length;i++){
        divs3[i].index=i;
        divs3[i].onclick=function(){
                for(var j=0;j<divs3.length;j++){
                    imgs[j][1].style.display="none";
                    imgs[j][0].style.display="block";
                 
                }
                imgs[this.index][1].style.display="block";
                imgs[this.index][0].style.display="none";
            }
        }
    

