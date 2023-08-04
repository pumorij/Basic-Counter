const countVal = document.querySelector('#counter')

const increment=()=>{
    // get value
    let value = parseInt(countVal.innerText);
    // increment value
    value = value+1
    // put value
    countVal.innerText=value
}

const decrement=()=>{
    // get value
    let value = parseInt(countVal.innerText);
    // decrement value
    value = value-1
    // put value
    countVal.innerText=value
}