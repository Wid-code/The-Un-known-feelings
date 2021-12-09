
// Header one - typing effect on name, director and date

var letterCountOne = 0;
var letterCountTwo = 0;
var letterCountThree = 0;
var textOne = "The (Un)known feelings";
var textTwo = "Kinga Nowak";
var textThree = "22/01/2022";

function typing(){

    if(letterCountOne<textOne.length){
        document.querySelector(".typing--name").innerHTML += textOne.charAt(letterCountOne);
        letterCountOne++;
        setTimeout(typing,200);
    }
    else if(letterCountTwo<textTwo.length){
        document.querySelector(".typing--director").innerHTML += textTwo.charAt(letterCountTwo);
        letterCountTwo++;
        setTimeout(typing,200);
    }
    else if(letterCountThree<textThree.length){
        document.querySelector(".typing--date").innerHTML += textThree.charAt(letterCountThree);
        letterCountThree++;
        setTimeout(typing,200);
    }
}

typing();

// Header two - image appearing after scrolling down

document.querySelector(".header__two").onmousemove = () => {
    document.querySelector(".header__imgWrapper").classList.add("imgSlideIn");
}


