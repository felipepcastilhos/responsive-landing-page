/* abre e fecha menu pelo click no icone hambuerguer*/
// DOM Document Objetct Model
const nav = document.querySelector('#header nav') // 1° pegar do documento o nav do header e coloca nesta variável para ser manipulada no js
const toggle = document.querySelectorAll('nav .toggle') //2° console.log(toggle) seria um atalho para ser retornado no console o significado desta linha

for (const element of toggle) {
  //3°for para repetir por 2x - abrir - fechar
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //5°função da DOM, show, toggle, classlist(ambas funcionalidades), ve se tem 'show' em 'nav' se tiver, tira, se não, coloca
    // console.log(element) //para verificar como está, o que recebe, o element em cada situação de click
  }) //4°função da DOM, click, addeventlistener, element(ambas funcionalidades), para detectar o click: "estou ouvindo o evento click neste elemento"
}

/* quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a') //6°pesquisou por todos os seletores entre '' no documento, atribuidos a constante links

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  }) //8° remover 'show' para fechar o menu
} //7° para cada um dos 5 titles da tag "nav ul li a"

//9° Só aparece a sombra no header quando der o scroll e "passar da altura"
const header = document.querySelector('#header') //10° nó de #id header dentro da constante header
const navHeight = header.offsetHeight //11° deslocamento da altura do header para o navHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll') //13° se scroll é maior que a altura do header, adiciona a classe ".scroll" na lista de classes do #header
  } else {
    header.classList.remove('scroll') //14° se scroll é menor que a altura do header, remove classe .scroll do #header
  }
} //23° mudar o header da página quando der scroll

// window.addEventListener('scroll', function () {
//   if (window.scrollY >= navHeight) {
//     header.classList.add('scroll') //13° se scroll é maior que a altura do header, adiciona a classe ".scroll" na lista de classes do #header
//   } else {
//     header.classList.remove('scroll') //14° se scroll é menor que a altura do header, remove classe .scroll do #header
//   }
// }) //12° observa evento de scroll na janela inteira para rodar uma funcionalidade

// Testimonials carousel/slider swiper
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination'
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar'
//   }
// })
const swiper = new Swiper('.swiper', {
  slidesPerView: 1, //quantos slides quero ver por vez
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  //estas propriedades a cima vieram de documentação sobre API do site Swiperjs API
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  } //26°após 767 de dimensão vai realizar os ajustes deste breakpoint
}) //15° Initialize Swiper by web

// ScrollReveaL: Mostrar elementos quando der scroll na página de forma suave
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
}) //16°
//estas propriedades a cima vieram de documentação sobre API do site scrollReveal
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  footer, brand, footer .social
  `,
  { interval: 100 }
) //17°strings com crases posso ter quebras de linhas no meio da string

//botão back-top transição
const backTopButton = document.querySelector('.back-top') //18° constante para receber o nó da classe .back-top nesta variável

function backTop() {
  if (window.scrollY >= 560) {
    //20° se scroll na janela for maior que 560
    backTopButton.classList.add('show') //21° adiciona classe .show no nó que foi copiado para a constante backTopButton
  } else {
    backTopButton.classList.remove('show') //22° se não remove a classe .show
  }
} //24° fazendo por chamamento das funções
// window.addEventListener('scroll', function () {
// //19° função para detectar scroll na janela para adicionar um evento
// if (window.scrollY >= 560) {
//   //20° se scroll na janela for maior que 560
//   backTopButton.classList.add('show') //21° adiciona classe .show no nó que foi copiado para a constante backTopButton
// } else {
//   backTopButton.classList.remove('show') //22° se não remove a classe .show
// }
// })

/* menu ativo conforme a seção na visível na página*/
const sections = document.querySelectorAll('main section[id]') //27° seleciona todos nós dentro do main das seções que possuem atributo "id", se precisasse buscar novos elementos sempre que rodasse a função, poderia colocar const.. dentro do {} da function

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 //pega da página deslocamento da página em Y, da janela, somar com, todo tamanho da janela dividido por 8 * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop //deslocamento do topo
    const sectionHeight = section.offsetHeight //deslocamento de altura
    const sectionId = section.getAttribute('id') //pegando ID da seção

    const checkpointStart = checkpoint >= sectionTop //verificar se o id da seção está no checkpoint//verifica quando checkpoint(linha imaginaria fixa) ultrapassa o topo da seção
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight //verifica quando checkpoint(linha imaginaria fixa) não ultrapassou o delta do (topo da seção + a altura da seção)

    if (checkpointStart && checkpointEnd) {
      //se estiver entre as duas linhas fixas imaginárias//se ambos receberem True// se checkpoint(localizado na metade da altura da tela) estiver entre limite superior e inferior da section, ambos serão true
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') //pega o id do menu que tem relação com o id da seção ativa: 'nav ul li a[href*='home']'
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') //pega o id do menu que tem relação com o id da seção ativa: 'nav ul li a[href*='home']'
        .classList.remove('active')
    } //apenas 1 seção pode estar ativa dentro dos limites dos checkpoints, a que for selecionada, receberá classe 'active' e quando não estiver mais ativa será removida a classe
  }
} //28°função para verificar qual seção está ativa

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backTop()
  activateMenuAtCurrentSection()
}) //25° chamando as funções quando realizar scroll
