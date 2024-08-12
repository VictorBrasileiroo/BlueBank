//FUNÇÃO DE MODIFICAÇÃO DE HEADER 
    function scrollHeader(){
        const nav = document.getElementById('header');

        if(this.scrollY >= 50) nav.classList.add("active_header"); else nav.classList.remove("active_header");
        
    }

    window.addEventListener("scroll", scrollHeader);

//FUNÇÃO DE DROPDOWN MENU NAV DESKTOP
const dropdownMenuItem1 = document.getElementById("dropdown_item_1");
const dropdownMenuItem2 = document.getElementById("dropdown_item_2");
const dropdownMenuItem3 = document.getElementById("dropdown_item_3");

const MenuItem1 = document.getElementById("menu-item-1");
const MenuItem2 = document.getElementById("menu-item-2");
const MenuItem3 = document.getElementById("menu-item-3");

function showDropdown1(event){
    event.preventDefault();
    dropdownMenuItem1.classList.toggle('activeDropdown');
    dropdownMenuItem2.classList.remove('activeDropdown');
    dropdownMenuItem3.classList.remove('activeDropdown');
}

function showDropdown2(event){
    event.preventDefault();
    dropdownMenuItem1.classList.remove('activeDropdown');
    dropdownMenuItem2.classList.toggle('activeDropdown');
    dropdownMenuItem3.classList.remove('activeDropdown');
}

function showDropdown3(event){
    event.preventDefault();
    dropdownMenuItem1.classList.remove('activeDropdown');
    dropdownMenuItem2.classList.remove('activeDropdown');
    dropdownMenuItem3.classList.toggle('activeDropdown');
}

function removeDropdown(event){
    event.preventDefault();
    dropdownMenuItem1.classList.remove('activeDropdown');
    dropdownMenuItem2.classList.remove('activeDropdown');
    dropdownMenuItem3.classList.remove('activeDropdown');
}

MenuItem1.addEventListener("click", showDropdown1);
MenuItem2.addEventListener("click", showDropdown2);
MenuItem3.addEventListener("click", showDropdown3);

MenuItem1.addEventListener("mouseleave", removeDropdown);
MenuItem2.addEventListener("mouseleave", removeDropdown);
MenuItem3.addEventListener("mouseleave", removeDropdown);

//FUNÇÃO DE MENU MOBILE
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.querySelector(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active_bx');
            nav.classList.toggle("active_menu_mobile");
        })
    }
}

showMenu('bx', '.menu_mobile');