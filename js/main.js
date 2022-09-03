
const Main = {
    init: function() {
        this.cacheSelector()
        this.bindEvents()
    },

    cacheSelector: function() {
        this.$botaoHamburguer = document.querySelector('#botaoHamburguer')
    },

    bindEvents: function() {
        this.$botaoHamburguer.onclick = this.Events.aparecerMenuResponsivo
    },
    
    Events: {
        aparecerMenuResponsivo: function(e) {
            ul = e.path[2].children[1]

            if (ul.classList.contains('listaHamburguer')) {
                e.target.outerHTML = `<img src="./images/icon-hamburger.svg" alt="">`
                ul.classList.remove('listaHamburguer')
                return
            }
            e.target.outerHTML = `<img src="./images/icon-close.svg" alt="" id="botaoHamburguer">`
            
            ul.classList.add('listaHamburguer')

        Main.init()
        }
    }
}

Main.init()