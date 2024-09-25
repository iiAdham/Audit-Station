    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('main');
    const navText = document.querySelectorAll('.sidebarNav .nav-item .nav-link span');
    const a = document.querySelectorAll('.sidebarNav .nav-item .nav-link');

document.querySelector('.openMenuBtn').addEventListener('click', function() {
    sidebar.classList.toggle('col-sm-1');
    sidebar.classList.toggle('col-sm-3');
    sidebar.classList.toggle('col-md-4');
    sidebar.classList.toggle('col-lg-3');
    sidebar.classList.toggle('col-xxl-2');
    sidebar.classList.toggle('col-2')
    sidebar.classList.toggle('height-40-576');
    if (window.innerWidth <= 575) {
    sidebar.classList.toggle('col-12');
}

    mainContent.classList.toggle('col-md-8');
    mainContent.classList.toggle('col-lg-9');
    mainContent.classList.toggle('col-sm-11');
    mainContent.classList.toggle('col-xxl-10');
    mainContent.classList.toggle('col-9');
    if (window.innerWidth <= 575) {
        mainContent.classList.toggle('col-12');
    }

    navText.forEach(function(span) {
        span.classList.toggle('d-none-767');
        span.classList.toggle('ms-2');
    });
    a.forEach(function(el) {
        el.classList.toggle('text-start');
        el.classList.toggle('ms-3');
    });
    
});

window.addEventListener('resize', function(){
    sidebar.setAttribute("class","px-0 col-xxl-2 col-lg-3 col-md-4 col-sm-1  d-md-block bg-main sidebar height-40-576");
    navText.forEach(function(span){
        span.setAttribute("class","d-none-767");
    })
    mainContent.setAttribute("class","col-md-8 col-xxl-10 col-lg-9 col-sm-11 p-0");
})