async function selection() {
    console.log('In selection()');
    //the .bar class is added to inside bars where we form an //arrays and that how we can target and manipulate it

    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        console.log('In the loop');
        let min_index = i;
        //Change color of the position to swap with the next min
        ele[i].style.background = 'blue';

        for (let j = i + 1; j < ele.length; j++) {
            console.log('in th Jth Loop');
            //Change The color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'red';

            await waitforme(delay);

            if(parseInt(ele[j].style.height)<parseInt(ele[min_index].style.height)){
                console.log("In if Condition height Comparision");
                if(min_index !== i){
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            }
            else{
                //if the current comparision is more tham min_index change is back to normal
                ele[j].style.background = 'cyan';
            }
        }
        await waitforme(delay);
        swap(ele[min_index],ele[i]);
        ele[min_index].style.background ='cyan';
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click',async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})