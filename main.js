let stars=document.getElementById('stars')
let moon=document.getElementById('moon')
let mountains3=document.getElementById('mountains3')
let mountains4=document.getElementById('mountains4')
let river5=document.getElementById('river5')
let boat6=document.getElementById('boat6')
let nobel=document.querySelector('.nobel')
window.onscroll=function(){
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value * 4 +'px';
    mountains3.style.top = value * 2 +'px';
    mountains4.style.top = value *1.5 +'px';
    river5.style.top = value +'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    nobel.style.fontSize = value + 'px';
    if(scrollY >=67){
        nobel.style.fontSize = 67 + 'px';
        nobel.style.position = 'fixed';
        if(scrollY >= 392){
            nobel.style.display = 'none';
        }else{
            nobel.style.display = 'block';
        }
        if(scrollY >= 85){
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #52bbda)'

        }else{
             document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }

    }
    
}
