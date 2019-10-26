function $(id){
   return typeof id ==='string' ? document.getElementById(id):id;
}

window.onload = function(){
    // 获取鼠标滑过的标签和要切换内容的元素
    var titles = $('title').getElementsByTagName('li'),
        divs = $('con').getElementsByTagName('div');
        
        for(var i=0;i<titles.length;i++){
           titles[i].id = i;
           titles[i].onmouseover= function(){
            for(var j=0;j< titles.length;j++){
                titles[j].className ='';
                divs[j].style.display = 'none';
            }
               this.className = "select";
               console.log(this.id)
               divs[this.id].style.display='block';
           }
           
        }
}

