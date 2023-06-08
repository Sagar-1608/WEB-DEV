
// query selecter is using custom attribute
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");

const copyBtn = document.querySelector("[data-copyBtn]");
const copyMsg = document.querySelector("[copy_msg]");

const upperCheck = document.querySelector('#upper');
const lowerCheck = document.querySelector('#lower');
const numberCheck = document.querySelector('#number');
const symbolCheck = document.querySelector('#symbol');

const indicator = document.querySelector("[dataIndicater]");
const genrateBtn = document.querySelector('.generateBtn');
const allCheckBox = document.querySelectorAll("input[type=checkbox]");




//initial values 
let password = ""; //empty
let passwordLength = 10; // default length 10
let checkCount = 0;

handleSlider()



//set password length 
// it show password length on screen 
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    // for background color of slider cover whem move 

    const min =inputSlider.min;
    const max = inputSlider.max;

    //set color according to cover 
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100 /(max-min)) + "% 100%" ;
}

//set indicator 
function setIndicator(clr) {
     indicator.style.backgroundColor = clr;

     if(clr==="#0f0") indicator.style["boxShadow"] = "0px 0px 10px 0px #0f0";
     else if(clr==="#ff0")  indicator.style["boxShadow"] = "0px 0px 10px 0px #ff0";
     else
        indicator.style["boxShadow"] = "0px 0px 10px 0px #f00";

   
    
   // shadow
}







//for creating random integer to use in below 4 function 
function getRandIntiger(min, max) {
    //  Math.random()  -> 0 to <1 number generate
    //  Math.floor(Math.random()*(max-min)) --> round and genarate ( 0 to min-max)
    //  Math.floor(Math.random()*(max-min)) + min --> round and genarate (min to max)

    return Math.floor(Math.random() * (max - min)) + min;


}

// some note abpout random 
// let min =4;
// let max = 10;
// console.log(Math.floor(Math.random()*(max-min)) + min) ;
// output is between 4 to 10






//integer
function genarateRandomNumber() {

    return getRandIntiger(0, 9);
}

// lowercase
function genarateRandomLowercase() {
    // covert int to char 
    return String.fromCharCode(getRandIntiger(97, 123)); //ascci val
}

// uppercase 
function genarateRandomUppercase() {

    return String.fromCharCode(getRandIntiger(65, 91));
}

// symbol 
// creating symbol string
const symbols = '~`!@#$%^&*()_-=+{}[]|:;"<,>.?/'
function genarateRandomSymbol() {
    const randNum = getRandIntiger(0, symbols.length)
    return symbols.charAt(randNum);
}








// calculating the stringth of password 

function calcStrength() {
    let upper = false;
    let lower = false;
    let number = false;
    let symbol = false
    if (upperCheck.checked) upper = true;
    if (lowerCheck.checked) lower = true;
    if (numberCheck.checked) number = true;
    if (symbolCheck.checked) symbol = true;


    // logic of strength of password 

    if (upper && lower && (number || symbol) && passwordLength >= 8) {
        setIndicator("#0f0"); // sending the color to indicator 
    }
    else if ((lower || upper) && (number || symbol) && passwordLength >= 6) {
        setIndicator("#ff0");
    }
    else {
        setIndicator("#f00");
    }
}






// copy the generated containt 

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
        // navigator.clipboard.writeText() function copy the content 
        // it is asyn 
        // return ppromise 
        // thats why we use async , wait and try catch
    }
    catch (e) {
        copyMsg.innerText = "Failed";
    }

    // to active the copy wala span 
    copyMsg.classList.add("active");

    // to active short time 
    setTimeout(() => {
        copyMsg.classList.remove("active");

    }, 2000);
}







// required event listner 

// slider 
inputSlider.addEventListener('input', (e) => {
    // passwordlen mai slider ki value aayegi
    passwordLength = e.target.value;

    // it display curent slider value on page 
    handleSlider();

});
// copt btn 

copyBtn.addEventListener('click', () => {

    // if value present on that password fild 
    if (passwordDisplay.value)
        copyContent();
});








/// cheaking the number of checkbox are checked 
function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked)
            checkCount++;
    })


    // when password length is less than check count then do it equal to checkpoint 

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}


allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
});







function shufflePassword(arr) {


    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let str = "";
    arr.forEach((el) => (str += el));
    return str;

}


















//genrate password 

genrateBtn.addEventListener('click', () => {


    // none of the check box are clicked


    if (checkCount == 0)
        return;



    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }


    // genarete the real  pasword 

    // remobve old password

    console.log("Starting the Journey");
    password = "";

    // checking checkbox and store in aarray 

    let checkArr = [];

    if (upperCheck.checked)
        checkArr.push(genarateRandomUppercase);


    if (lowerCheck.checked)
        checkArr.push(genarateRandomLowercase);

    if (symbolCheck.checked)
        checkArr.push(genarateRandomSymbol);


    if (numberCheck.checked)
        checkArr.push(genarateRandomNumber);

    //
    console.log("len1 " + checkArr.length)


    // compulsory adition

    for (let i = 0; i < checkArr.length; i++) {
        password += checkArr[i]();
    }
    console.log("COmpulsory adddition done");

    //
    console.log("len2 " + checkArr.length)

    // remmaining addition

    for (let i = 0; i < passwordLength - checkArr.length; i++) {
        let randIndex = getRandIntiger(0, checkArr.length);
        console.log("len 3 " + checkArr.length)
        console.log("randindex" + randIndex);

        password += checkArr[randIndex]();
    }
    console.log("Remaining adddition done");



    // shuffle password 

    password = shufflePassword(Array.from(password));

    console.log("Shuffling done");

    // show in ui 
    passwordDisplay.value = password;
    console.log("UI adddition done");

    calcStrength();

});



