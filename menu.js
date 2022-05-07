function menu(){
//Карточки внизу/

class MenuCard{
    constructor (src, alt,title, descr,price, parentSelector, ...classes){
    this.src=src;
    this.alt=alt;
    this.title=title;
    this.descr=descr;
    this.price=price;
    this.parent=document.querySelector(parentSelector);
    this.transfer=34;
    this.classes=classes;
    this.changeToUAH();
    
    }
    changeToUAH(){
    this.price=this.price*this.transfer;
    }
    render(){
    const element=document.createElement('div');
    if(this.classes.length===0){
    element.classList.add('menu__item');
    } else{
    this.classes.forEach(cn=> element.classList.add(cn));
    }
    
    element.innerHTML=`<div>
    <img src=${this.src} alt=${this.alt}>
    <h3 class="menu__item-subtitle">${this.title}</h3>
    <div class="menu__item-descr">${this.descr}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
    <div class="menu__item-cost">Цена:</div>
    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    </div>
    </div>`;
    this.parent.append(element);
    
    }
    
    
    }
    
    /* const gR=async(url)=>{
    const res = await fetch(url);
    if (!res.ok){
    throw new Error(`Хуйня не сработала ${url}и вот почему ${res.status}`);
    }
    return await res.json();
    }; */
    
    /* gR('http://localhost:3000/menu')
    .then(d=>{
    d.forEach(({img,altimg,title,descr,price})=> {
    new MenuCard(img,altimg,title,descr,price,'.menu .container').render();
    });
    }); */
    axios.get('http://localhost:3000/menu')
    .then(d=>{
    console.log(d.data);
    return d;
    }
    )
    .then(d=>{
    d.data.forEach(({img,altimg,title,descr,price})=> {
    new MenuCard(img,altimg,title,descr,price,'.menu .container').render();
    });
    });
    
    
    /* const div= new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    8,
    ".menu .container",
    "menu__item"
    );
    div.render ();
    const div1 = new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    26,
    ".menu .container"
    );
    div1.render();
    const div2= new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    17,
    '.menu .container'
    );
    div2.render();
    */

}

export default menu;