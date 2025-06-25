//DECLARAÇÃO DE VARIAVEIS CHAMANDO AS CLASSES COM DOM  
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.menu-header');

//CRIANDO A FUNÇÃO QUE VAI MOSTRAR OU OCULTAR O MENU
function toggleMenu(){
    hamburguer.classList.toggle('active'); //CRIA A CLASSE ACTIVE SE NÃO EXISTIR
    headerMenu.classList.toggle('active');  //CRIA A CLASSE ACTIVE SE NÃO EXISTIR
}

//EVENTO AO CLICAR NA BARRINHA  E MOSTRA OS ITEMS DO MENU
hamburguer.addEventListener('click', toggleMenu);
headerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});