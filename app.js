addEventListener('DOMContentLoaded',()=>{
    const btnMenu = document.querySelector('.btn_menu')
    if(btnMenu){
        btnMenu.addEventListener('click',()=>{
            const menuItems = document.querySelector('.menu_items')
            menuItems.classList.toggle('show')
        })
    }
})