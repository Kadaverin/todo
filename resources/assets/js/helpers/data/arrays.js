

export  function moveArrEllementUpOrInTail(arr , index){
    let temp;
    if (index === 0) {
            arr.push(arr[index]);
            arr.shift();
    }else {
        temp = arr[ index - 1 ] 
        arr[ index -1 ] = arr[ index ] 
        arr[ index ]  = temp;
    }
}

export  function moveArrEllementDownOrInHead(arr , index){
    let temp;
    if (index === arr.length - 1) {
          arr.unshift(arr[index]);
          arr.pop();

    }else {
        temp = arr[ index + 1 ] 
        arr[ index + 1 ] = arr[ index ] 
        arr[ index ]  = temp;
    }
}
