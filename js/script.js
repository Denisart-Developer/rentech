//================== Header-Menu =================//
let itemSubs = document.querySelectorAll('[data-sub]'); //пункты меню с выпадающим списком
let menuLinks = document.querySelectorAll('.menu-catalog__link');//все пункты меню
let menuSubs = document.querySelectorAll('.dropmenu-catalog');//выпадающее меню

// Выпадающее меню
const mediaQuery = window.matchMedia('(min-width: 1024px)'); 
if (mediaQuery.matches) { //если разрешения экрана больше 1024px
  if(itemSubs.length > 0){
    for (let index = 0; index < itemSubs.length; index++) {
      const itemSub = itemSubs[index];
      const menuSub = menuSubs[index];
      const menuLink = menuLinks[index];
      // при наведении навешиваем класс
      itemSub.addEventListener("mouseover", function(){
        menuSub.classList.add("active");
        menuLink.classList.add("active");
      })
      // удаляем класс когда курсор покидает область элемента
      itemSub.addEventListener("mouseout", function(){
        menuSub.classList.remove("active");
         menuLink.classList.remove("active");
        
      })
    }
  }
}

let navHeader = document.querySelector('.navigation-header');
let navItems = document.querySelectorAll('.menu-catalog__item')
const mediaQuerys = window.matchMedia('(max-width: 1400px)'); 
if (mediaQuerys.matches) {
  navHeader.addEventListener('mouseover', function(){
    navHeader.classList.add('expand');
    for (let index = 0; index < navItems.length; index++) {
      const navItem = navItems[index];
      navItem.classList.add('expand');
    }
  })
  navHeader.addEventListener('mouseout', function(){
    navHeader.classList.remove('expand');
    for (let index = 0; index < navItems.length; index++) {
      const navItem = navItems[index];
      navItem.classList.remove('expand');
    }
  })
  
}
//================== Animation-block-header =================//
let items = document.querySelectorAll('.animation-block-header__mouseover'); //невидимые эелементы для срабатывания анимации
let backgroundItems = document.querySelectorAll('.animation-block-header__background'); //закрывающий background
let imageitems = document.querySelectorAll('.animation-block-header__image'); // элементы с изображением
let imageBuldozer = document.querySelector('.animation-block-header__buldozer-image');
let imageKatok = document.querySelector('.animation-block-header__katok-image');
let imagePogruzchik = document.querySelector('.animation-block-header__pogruzchik-image');

if(items.length > 0){
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    const backgroundItem = backgroundItems[index];
    const imageitem = imageitems[index];
    //при наведении
    item.addEventListener("mouseover", function(){
      removeBackground();
      backgroundItem.classList.add("active");
      imageitem.classList.add("active");
      if(item == items[1]){
        remove();
        imageKatok.classList.add("active");
      }
      if(item == items[2]){
        remove();
        imagePogruzchik.classList.add("active");
      }
      if(item == items[0]){
        remove();
        imageBuldozer.classList.add("active");
      }
      
    })
    item.addEventListener("mouseout", function(){
      imageitem.classList.remove("active");
    })
  }
  //Возвращает background в исходное пложение
  function removeBackground(){
    for (let index = 0; index < backgroundItems.length; index++) {
      const backgroundItem = backgroundItems[index];
      backgroundItem.classList.remove("active");
    }
  }
  function remove (){
    imageBuldozer.classList.remove("active");
    imageKatok.classList.remove("active");
    imagePogruzchik.classList.remove("active");
  }
}

//================== Buttons-double =================//
let TwoButtons = document.querySelectorAll('.buttons-double__button-two');//Вторая часть кнопки
let OneButtons = document.querySelectorAll('.buttons-double__button-one');//Первая часть кнопки

for (let index = 0; index < TwoButtons.length; index++) {
  const TwoButton = TwoButtons[index];
  const OneButton = OneButtons[index];
  
  TwoButton.addEventListener('mouseover', function(){
    OneButton.classList.add("no-active");
  })
  OneButton.addEventListener('mouseover', function(){
    OneButton.classList.remove("no-active");
  })
  //анимация при нажатии
  TwoButton.addEventListener("click", function(){
    OneButton.classList.add("focus");
    setTimeout(remove,200);
    function remove(){
      OneButton.classList.remove("focus");
    }
  })
}

//================== Burger =================//
let menu = document.querySelector('.icon-menu');
let navMenu = document.querySelector('.navigation-header');

menu.addEventListener("click", function (e) {
  navMenu.classList.toggle('active');
  menu.classList.toggle('active');
});

//================== Swiper(Слайдер) =================//
const swiper = new Swiper('.slider-services__container', {
  // Optional parameters
  direction: 'horizontal',
  //freeMode: true,
  loop: true,
  //slidesPerGroup: 2,
  slidesPerView: 1,
  //freeModeMomentum: true,
  //loopedSlides: 4,
  spaceBetween: -35,
  //centerSlidesBounds: true,
  observer: true,
  observeParents: true,
  navigation: {
  nextEl: '.slider-services__button-next',
  prevEl: '.slider-services__button-prev',
  },
  breakpoints: {
    390:{
        slidesPerView: 1, //количество слайдов
        spaceBetween: -90, //отступ между слайдами
          
    },
    440:{
      slidesPerView: 1,
      spaceBetween: 2,
        
    },
    700:{
      slidesPerView: 2,
      spaceBetween: 50,
        
    },
    992:{
      slidesPerView: 3,
      spaceBetween:40,
        
    },
    1250:{
      slidesPerView: 4,
      spaceBetween:20,
        
    },
    
      1601:{
        slidesPerView: 5,
        spaceBetween: 20
        
    },
  },
});

//================= Placeholder =======================//
let inputs = document.querySelectorAll('[data-input]'); // все поля ввода с анимацией
let placeholders = document.querySelectorAll('[data-placeholder]'); 
let placeinputs = document.querySelectorAll('.form__placeinput');
let selectForm = document.querySelector('.form__input-select'); 
let selectList = document.querySelector('.form__select-list'); //выпадающий список техники
let selectItems = document.querySelectorAll('.form__select-item'); // элементы выпадающиего списка

//Анимация уменьшения текста в поле ввода
for (let index = 0; index < inputs.length; index++) {
  const input = inputs[index];
  const placeholder = placeholders[index];
  input.addEventListener('focus', function(){
    placeholder.classList.add('focus');
  })
  input.addEventListener('focusout', function () {
    if(input.value == 0){
      placeholder.classList.remove('focus');
    }
  })
}
//выпадающий список
selectForm.addEventListener('click', function(){
    for (let index = 0; index < placeinputs.length; index++) {
      const placeinput = placeinputs[index];
      placeinput.classList.toggle("active");
    }
    selectList.classList.toggle('open');
})
//Изменение значения селекта выбранным пунктом.
for (let index = 0; index < selectItems.length; index++) {
  const selectItem = selectItems[index];
  selectItem.addEventListener("click", function(){
    selectForm.value = selectItem.innerHTML;
    selectList.classList.remove("open");
    for (let index = 0; index < placeinputs.length; index++) {
      const placeinput = placeinputs[index];
      placeinput.classList.remove("active");
    }
  })
}

//================= Check =======================//
let checks = document.querySelectorAll('.check-form__icon');
// галочка в форме
if(checks.length > 0){
  for (let index = 0; index < checks.length; index++) {
    const check = checks[index];
    check.addEventListener("click", function(){
      check.classList.toggle('active');
    })
  }
}
//================= Анимация при скролле ====================//
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');

      } else {
        //animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  setTimeout(() => {
    animOnScroll();
  }, 500);
  
}

let footerLists = document.querySelectorAll('.footer__list');
let buttonLists = document.querySelectorAll(".footer__title");

for (let index = 0; index < buttonLists.length; index++) {
  const buttonList = buttonLists[index];
  const footerList = footerLists[index];
  buttonList.addEventListener('click', function(){
    buttonList.classList.toggle("active");
    footerList.classList.toggle('active');
  })
}

//==================== Плавный скролл ====================//
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

