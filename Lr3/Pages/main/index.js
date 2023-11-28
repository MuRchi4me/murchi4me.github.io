import {ProductCardComponent} from "../../Components/product-card/index.js";

import {ProductPage} from "../products/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
    getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/564x/68/ab/51/68ab51d89db6f0518e8d5d41a2b82028.jpg",
                title: "АКЦИЯ ТОЛЬКО В СУББОТУ" ,
                text: "Съемка свадьб 50% выгода"
            },
            {
                id: 2,
                src: "https://i.pinimg.com/564x/68/b3/a0/68b3a06adb280095277ad7d41ac4d2d4.jpg",
                title: "СРЕДА БЛИЗКО",
                text: "Среда луна макросъемка"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/564x/61/b0/dd/61b0ddde4ef681b8a2a0ef6395d7e8bb.jpg",
                title: "КАЖДЫЙ ПОНЕДЕЛЬНИК",
                text: "Фото животных по цене арбуза"
            },
            
        ]
    }
    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
    
}