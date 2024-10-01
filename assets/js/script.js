//back to top btn
function userScroll(){
    const navbar = document.querySelector('.main-part');
    const backtoTop = document.querySelector('#back-to-top');
    window.addEventListener('scroll', () =>{
      if(window.scrollY > 50){
        backtoTop.classList.add('show');
      }else{
        backtoTop.classList.remove('show');
      }
    });
    }
    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
    //eventlistener
    document.addEventListener('DOMContentLoaded', userScroll);
    document.querySelector('#back-to-top'), addEventListener('click',scrollToTop);
    