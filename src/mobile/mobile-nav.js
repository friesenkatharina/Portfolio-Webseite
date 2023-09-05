const mobileNav = () => {
const headerBtn = document.querySelector('.header__bars');
const mobileNav = document.querySelector('.mobile-nav');

let isMobileNavOpen = false;

 headerBtn.addEventListener('click',() => {
 mobileNav.style.display = 'flex';
document.body.style.overflowY = 'hidden'
 });
 };

 export default mobileNav;