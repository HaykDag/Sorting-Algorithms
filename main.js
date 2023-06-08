const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const bubbleSortBtn = document.getElementById("bubtleSortBtn")
const insertionSortBtn = document.getElementById("insertionSortBtn");
const selectionSortBtn = document.getElementById("selectionSortBtn");
const mergeSortBtn = document.getElementById("mergeSortBtn");
const quickSortBtn = document.getElementById("quickSortBtn");
const sizeBtn = document.getElementById('size'); 
const resetBtn = document.getElementById("resetBtn");


canvas.width = 1000;
canvas.height = 300;
const maxNum = 290;
let size = 50;
//the width of the line
let w = canvas.width/size-4;
let randomArray = generateRandomArray(size);
sizeBtn.addEventListener('change',(event)=>{
    size = event.target.value;
    w = canvas.width/size-4;
    randomArray=generateRandomArray(size);
    makeChart(randomArray,ctx,canvas.width,canvas.height,w);
})


makeChart(randomArray,ctx,canvas.width,canvas.height,w);

resetBtn.addEventListener('click',()=>{
    randomArray = generateRandomArray(size);
    makeChart(randomArray,ctx,canvas.width,canvas.height,w);
});

bubbleSortBtn.addEventListener('click',()=>{
    const arraysColllection = bubbleSort(randomArray);

    for(let i = 0;i<arraysColllection.length;i++){
        setTimeout(()=>{
            makeChart(arraysColllection[i],ctx,canvas.width,canvas.height,w)
        },100*i)
    }
});

insertionSortBtn.addEventListener('click',()=>{
    
    const arraysColllection = insertionSort(randomArray);

    for(let i = 0;i<arraysColllection.length;i++){
        setTimeout(()=>{
            makeChart(arraysColllection[i],ctx,canvas.width,canvas.height,w)
        },100*i)
    }
})
selectionSortBtn.addEventListener("click",()=>{
    const arraysColllection = selectionSort(randomArray);

    for(let i = 0;i<arraysColllection.length;i++){
        setTimeout(()=>{
            makeChart(arraysColllection[i],ctx,canvas.width,canvas.height,w)
        },500*i)
    }
})
mergeSortBtn.addEventListener("click",()=>{
    const arraysColllection = mergeSort(randomArray);

    for(let i = 0;i<arraysColllection.length;i++){
        setTimeout(()=>{
            makeChart(arraysColllection[i],ctx,canvas.width,canvas.height,w)
        },800*i)
    }
})
quickSortBtn.addEventListener("click",()=>{
    const arraysColllection = quickSort(randomArray,0,randomArray.length-1);
    for(let i = 0;i<arraysColllection.length;i++){
        setTimeout(()=>{
            makeChart(arraysColllection[i],ctx,canvas.width,canvas.height,w)
        },100*i)
    }
})
