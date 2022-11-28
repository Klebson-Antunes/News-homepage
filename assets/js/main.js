const btnMobile = document.getElementById('btn-mobile')

btnMobile.addEventListener('click', toggleMenu => {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')

    //inversao do aria-expanded de false para true e vise versa
    const active = nav.classList.contains('active')
    toggleMenu.currentTarget.setAttribute('aria-expanded', active)
    
     //logica para mudar o aria-label de abrir-menu para fechar
     if(active) {
        toggleMenu.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else{
        toggleMenu.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }

})

