
function bubbleSort(arr) {
    const arraysColllection = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                // ES6 way of swapping array elements
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                arraysColllection.push([...arr])
            }
        }
    }
    return arraysColllection;
}

function insertionSort(arr) {
    const arraysColllection = [];
    for (let i = 1; i < arr.length; i++) {
        // Start comparing current element with every element before it
        for (let j = i - 1; j > -1; j--) {
          
            // Swap elements as required
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                arraysColllection.push([...arr])
            }
        }
    }
    return arraysColllection;
}

function selectionSort(arr) {
    const arraysColllection = [];
    let min;
    for (let i = 0; i < arr.length; i++) {
        // Assume a minimum value        
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
      
        // Swap if new minimun value found
        if (min !== i) {
          [arr[i], arr[min]] = [arr[min], arr[i]];
          arraysColllection.push([...arr])
        }
    }
    return arraysColllection;
}
//merge Sort iterativly
const mergeSort = (arr) => {
    const arraysColllection = [];
    //Create two arrays for sorting
    let sorted = Array.from(arr);
    let n = sorted.length;
    let buffer = new Array(n);
    
    for (let size = 1; size < n; size *= 2) {
      for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
        
        //Get the two sub arrays
        let left = leftStart,
            right = Math.min(left + size, n),
            leftLimit = right,
            rightLimit = Math.min(right + size, n);
        
        //Merge the sub arrays
        merge(left, right, leftLimit, rightLimit, sorted, buffer);  
      }
      
      //Swap the sorted sub array and merge them
      let temp = sorted;
      sorted = buffer;
      buffer = temp;
      arraysColllection.push([...sorted])
    }
    
    return arraysColllection;
  }

  const merge = (left, right, leftLimit, rightLimit, sorted, buffer) => {
    let i = left;
    
    //Compare the two sub arrays and merge them in the sorted order
    while (left < leftLimit && right < rightLimit) {
      if (sorted[left] <= sorted[right]) {
        buffer[i++] = sorted[left++];
      } else {
        buffer[i++] = sorted[right++];
      }
    }
  
    //If there are elements in the left sub arrray then add it to the result
    while (left < leftLimit) {
      buffer[i++] = sorted[left++];
    }
  
    //If there are elements in the right sub array then add it to the result
    while (right < rightLimit) {
      buffer[i++] = sorted[right++];
    }
  }