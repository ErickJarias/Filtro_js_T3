const serial = document.getElementById("heroesmarvel")

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

    const dataHeroes =[]

    let indexHeroes= 0;

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
