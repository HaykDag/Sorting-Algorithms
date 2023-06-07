function generateRandomArray(size){
    const randomArray = [];
    for(let i = 0;i<size;i++){
        const randomNum = Math.floor(Math.random() * maxNum);
        randomArray.push(randomNum);
    }
    return randomArray;
}
function makeChart (arr,ctx,width,height,w){
    ctx.clearRect(0,0,width,height);
    for(let i = 0;i<arr.length;i++){
        const n = arr[i];
        ctx.beginPath();
        ctx.rect(i*w+i*4,10,w,n);
        ctx.fillStyle = `rgb(${i*20+1},${i*10+1},${i*5+1})`;
        ctx.fill();
        if(w>40){
            ctx.font = "20px Arial";
            ctx.fillStyle = "white"
            ctx.fillText(`${n}`,i*w+i*4+w/2-15,27)
        }
    }
}

function randomColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`
}