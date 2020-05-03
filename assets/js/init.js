// Instantiate MDC Drawer
const drawerEl = document.querySelector('.mdc-drawer');
const drawer = new mdc.drawer.MDCDrawer.attachTo(drawerEl);

// Instantiate MDC Top App Bar (required)
const topAppBarEl = document.querySelector('.mdc-top-app-bar');
const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);

topAppBar.setScrollTarget(document.querySelector('.main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});


// Tab bar
var tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));
var contentEls = document.querySelectorAll('.content');

tabBar.listen('MDCTabBar:activated', function(event) {
    // Hide currently-active content
    document.querySelector('.content--active').classList.remove('content--active');
    // Show content for newly-activated tab
    contentEls[event.detail.index].classList.add('content--active');
});

// Input
const textField = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field'));

// menu 
const menuElements = document.querySelector('.mdc-menu');
const menu = mdc.menu.MDCMenu.attachTo(menuElements);
menu.setAbsolutePosition(100, 100);

document.getElementById('account').addEventListener('click', () => {
  menu.open = !menu.open;
});


const select1 = new mdc.select.MDCSelect(document.querySelector('.mdc-select'));

// select1.listen('MDCSelect:change', () => {
//   alert(`changed to ${select1.value}`);
// });

// function selectFruits() {
//   select1.value = "fruit";
// }



window.mdc.autoInit();
