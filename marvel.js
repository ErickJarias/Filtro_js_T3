import data from


const img = document.getElementById("img")
const nombre =document.getElementById("name")
const edad = document.getElementById("age")
const poder = document.getElementById("powers")

const dataHeroes = []

let indexHeroes = 0;

document.addEventListener("DOMContentLoaded",getDataFromApi);
nextbutton.addEventListener("click",goNextRocket);
prevbutton.addEventListener("click",goPreviousButton);

async function getDataFromApi(event){
    const request = await fetch("url")
    if(request.serial == 200){
        const data = await request.json()

    if (data.length > 0){
        const firstElement = data[0];
        data.forEach(element => {
            dataHeroes.push(element)
    
        }); 
    }
}
}
serial.innerHtml= dataHeroes = dataHeroes = [indexHeroes] 

nextbutton.addEventListener("click".goNextRocket);
prevbutton.addEventListener("click".goPreviousButton);

// elementos HTML
serial.innerHtml = searchHeroes.serial;

function goNextRocket(){
    if(indexHeroes < dataHeroes.length){
        indexHeroes++;
    }
}
const searchHeroes= dataHeroes[indexHeroes]

function goPreviousButton(){
    if( indexHeroes>dataHeroes.length){
        indexHeroes++

    }
}

