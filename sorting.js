//SORTING PART WORKING
//-----------------------------------------------
//1st we have the swap and enable and disable buttons
//in 2nd we have a delay waitfor me function that helps us to take a look for transistion 
//in 3rd we take the array size since we can change it to different  sizes and it will change the create array in later phase
//in 4th we delay the transiition time as the bar value we get from input
//in 5th we create an array of random values and the input size as given add them to div and add classes to it as required
//we have a delete child function that delete the previous bar array that was added and gives a new arry visual as we click on newArray









//swap function to swap the two bars input is two dom elements
function swap(el1,el2){
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height=el2.style.height;
    el2.style.height = temp;
}

//disable other sorting buttons when a sorting is going on
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    // document.querySelector(".mergeSort").disabled = true;
    // document.querySelector(".quickSort").disabled = true;
}

//enable sorting button again after and before the operation

function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    // document.querySelector(".mergeSort").disabled = false;
    // document.querySelector(".quickSort").disabled = false;
}

//disable  size slider used in conjunction with enable ,so that we can disbale during seeding sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled =true;
}
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled =false;
}

//enable and disable new Array btn when a sorting is being executed
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled=true;
}
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled=false;
}
//used in a async function for animation of sorting ,takes input time in ms (1000 = 1s)

function waitforme(milisec){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('')},milisec);
    })
}

//selecting size slider from DOM

let arraySize = document.querySelector('#arr_sz');

//Event listener to update the bars size in the UI

arraySize.addEventListener('input',()=>{
    // console.log(arraySize.value,typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

//default input for waitforme function (260ms)

let delay = 260;//260

//Selecting speed Slider From DOM

let delayElement = document.querySelector('#speed_input');

//Event Listener to Update delay Time

delayElement.addEventListener('input',function(){

// console.log(delayElement.value,typeof(delayElement.value));

delay = 320 -parseInt(delayElement.value);
});

//Creating array to Store randmly generated numbers
let array = [];

//Call to display Bars right when you visit the site
createNewArray();

//To create a new Array input size of Array
function createNewArray(noOfBars = 60){
    //Calling helper function to Delete oldBars from Dom
    deleteChild();

    //creating an array of random numbers 
    array=[];
    for(let i=0; i<noOfBars; i++){
        array.push(Math.floor(Math.random() * 250)+1);
    }
    console.log(array);

    //select the div #bars element
    const bars = document.querySelector("#bars");

    //create multiple element div using loop and adding class 'bar col'
    for(let i=0; i < noOfBars; i++){
        const bar = document.createElement("div");
        bar.style.height =`${array[i]*2}px`;
        // bar.style.width=`30px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        // let c = document.createTextNode(`${array[i]}`);
        // bar.appendChild(c);        
        bars.appendChild(bar);
    }
}
//helper function to delete all the previous bars so that new can be added

function deleteChild(){
    const bar= document.querySelector('#bars');
    bar.innerHTML = '';
}

//Selecting newArray btn from DOM and adding Eventlistener

const newArray = document.querySelector(".newArray");


newArray.addEventListener("click",function(){
    console.log("From newArray" + arraySize.value);
    console.log("From newArray" + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});



