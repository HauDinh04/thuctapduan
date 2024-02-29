var c = ["media/banner.jpg","media/banner1.jpg","media/banner2.jpg"];
var a = ["images/logo.png","images/logo_1.png","images/logo_2.png"]
index=0;
    function prev(){
        index--;
        if(index < 0){
            index = c.length-1
        }
       var hinh = document.getElementById("hinh1");
        hinh.src = c[index];
    }
    function next(){
        index++;
        if(index >= c.length){
            index = 0;
        }
       var hinh = document.getElementById("hinh1");
        hinh.src = c[index];
    }
   
    function dn(){
        let loginform = document.querySelector(".login-form-container");
        loginform.classList.toggle('active');
    }
    function closee(){
        let loginform = document.querySelector(".login-form-container");
        loginform.classList.remove('active');
    }
