

setInterval(() => {
    let backgroundColor = document.querySelector("body");
    
    // making random colors
    let randomColor = Math.round((Math.random() * 9) + 1);
    switch (randomColor) {
        case 1:
            backgroundColor.style.backgroundColor = "red";
            backgroundColor.style.color = "cyan";
            break;
        case 2:
            backgroundColor.style.backgroundColor = "orange";
            backgroundColor.style.color = "blue";
            break;
        case 3:
            backgroundColor.style.backgroundColor = "yellow";
            backgroundColor.style.color = "purple";
            break;
        case 4:
            backgroundColor.style.backgroundColor = "chartreuse";
            backgroundColor.style.color= "red";
            break;
        case 5:
            backgroundColor.style.backgroundColor = "cyan";
            backgroundColor.style.color= "orange";
            break;
        case 6:
            backgroundColor.style.backgroundColor = "lightblue";
            backgroundColor.style.color= "gold";
            break;
        case 7:
            backgroundColor.style.backgroundColor = "blue";
            backgroundColor.style.color= "orange";
            break;
        case 8:
            backgroundColor.style.backgroundColor = "indigo";
            backgroundColor.style.color = "yellow";
            break;
        case 9:
            backgroundColor.style.backgroundColor = "violet";
            backgroundColor.style.color = "gray";
            break;
        case 10:
            backgroundColor.style.backgroundColor = "pink";
            backgroundColor.style.color = "green";
            break;
    
        default:
            console.log("Please check your code")
            break;
    }
    console.log(randomColor);
    
}, 1000);