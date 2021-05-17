function mergeSort(arr) {
    if (arr.length <= 1) return arr;
        //   console.log(arr)
    var mid = (arr.length / 2) | 0;

    var arr1 = mergeSort(arr.splice(0, mid));
    var arr2 = mergeSort(arr);

    return merge(arr1, arr2);

    function merge(arr1, arr2) {

        if (!arr1.length) return arr2;
        if (!arr2.length) return arr1;
    
        var sortedArr = [];
    
        var i = 0;
        var j = 0;
        var len = Math.max(arr1.length, arr2.length) - 1;
        while (i <= len && j <= len) {
            if (arr1[i] < arr2[j]) {
                sortedArr.push(arr1[i++]);
            } else {
                sortedArr.push(arr2[j++]);
            }
    
        }
        while (i < arr1.length) {
            sortedArr.push(arr1[i++])
        }
    
        while (j < arr2.length) {
            sortedArr.push(arr2[j++])
        }
    
        return sortedArr
    
    }


}

function bubbleSort (arr) {
    for (let i = arr.length-1; i >=1; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j-1] > arr[j]) {

                // let temp = arr[j-1];
                // arr[j-1] = arr[j]
                // arr[j] = temp
                // simple trick for conversion
                [ arr[j], arr[j-1] ] = [ arr[j-1], arr[j] ]
            }
        }
    }
    return arr
}

function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = minIndex +1; j < arr.length; j++) {
            if ( arr[j] < arr[minIndex] ) {
                minIndex = j
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr
}

function insertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {

        let el = arr[i];
        let j = i;
        // finding the position to insert
        while (j > 0 && arr[j-1] > el) {
            arr[j] = arr[j-1];
            j--;
        }

        arr[j] = el;

    }
    return arr;
}


function quickSort(arr, left, right) {

    let partitionIndex;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }

    return arr;

    function partition (arr, left, right) {
        const pivot = arr[right];
        let partitionIndex = left;

        for (let i = left; i < right; i++) {
            if (arr[i] < pivot) {
                [ arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
                partitionIndex++
            }
        }

        [ arr[partitionIndex], arr[right] ] = [arr[right], arr[partitionIndex]]

        return partitionIndex;
    }

}




console.log(quickSort([3, 2, 45,7,0,1,6,10], 0, 7))


