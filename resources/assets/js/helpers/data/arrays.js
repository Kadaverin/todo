

export  function moveArrEllementUpOrInTail(arr , index){
    let temp;
    if (index === 0) {
             switchHeadToTailArr(arr)
    }else {
        temp = arr[ index - 1 ] 
        arr[ index -1 ] = arr[ index ] 
        arr[ index ]  = temp;
    }
}

export  function moveArrEllementDownOrInHead(arr , index){
    let temp;
    if (index === arr.length - 1) {
            switchHeadToTailArr(arr)
    }else {
        temp = arr[ index + 1 ] 
        arr[ index + 1 ] = arr[ index ] 
        arr[ index ]  = temp;
    }
}

function switchHeadToTailArr(arr){
        let temp = arr[ arr.length - 1 ];
        arr[ arr.length - 1 ] = arr[0];
        arr[0] = temp;
}   