var tab=document.querySelectorAll(".tab");
for(var i=0;i<tab.length;i++){
    tabs(tab[i]);
}
function tabs(tab){
 //   第一步：做dom
 // var tab=document.querySelector(".tab");
 var tt=tab.querySelector(".tt");
 // 找到第一个.tt
 var span=tt.querySelectorAll("span");
 var tc=tab.querySelectorAll(".tc");
 console.log(tab,tt,span,tc);
  for(var i=0;i<span.length;i++){
     span[i].index=i;/* index是自定义属性 */
     span[i].onmouseover=function(){
        for(var j=0;j<tc.length;j++) {
          tc[j].style.display="none"
          span[j].classList.remove("cur");
        }
        tc[this.index].style.display="block";
        this.classList.add("cur");
     }
  }

}