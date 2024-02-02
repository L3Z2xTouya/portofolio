function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if (user == 'admin' && password == 'admin') {
        alert("Selamat Anda Berhasil Login!");
        window.location = "https://l3z2xtouya.github.io/formtugashtml/portofolio/";
    } else {
        alert("User dan Password Salah!");
    }
}   
// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
    hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('muncul');
});
window.onscroll = function() {
    const header = document.querySelector('#about');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');


    if(window.pageYOffset > fixedNav) {
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}
const mengetik = new Typed(".typing",{
    strings: ["Network Engineer", "FrontEnd Web Developer"],
    typeSpeed: 120,
    backSpeed: 45,
    loop: true,
});
