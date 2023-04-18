//Exemplos de funções

//Recupera apenas um elemento
//const liElements = document.querySelector("li");
//console.log(liElements);

//Recupera todos os elementos
//const liElements = document.querySelectorAll("li")

//Convertendo node list em array com spread
//const arrayElements = [...liElements]

//console.log(arrayElements);

//Simplificando o codigo acima poderiamos arruma-lo assim
const arrayElements = [...document.querySelectorAll("li")];

arrayElements.map((el,key)=>{
    if (el.textContent == "item-24") {
        el.textContent = `${key+1}[ item-24 ]`;
    }
});
