const mode = document.getElementById('icon-mode');


mode.addEventListener('click',() =>{
   const button = document.getElementById('login-button');
   const container = document.getElementById('container');
   const form = document.getElementById('login-form');
   const forgot = document.getElementById('forgot-password');
    if(mode.classList.contains('fa-moon')){ 
        mode.classList.add('fa-sun');
        mode.classList.remove('fa-moon');
        form.classList.add('darkmode');
        button.classList.add('darkmode');
        container.classList.add('darkmode');
        forgot.classList.add('darkmode');
        return;
    }else{
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        form.classList.remove('darkmode');
        button.classList.remove('darkmode');
        container.classList.remove('darkmode');
        forgot.classList.remove('darkmode');   
    }

});