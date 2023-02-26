const countVal = document.querySelector('#counter')

const increment=()=>{
    let value = parseInt(countVal.innerText);
    value = value+1
    countVal.innerText=value
}

const decrement=()=>{
    let value = parseInt(countVal.innerText);
    value = value-1
    countVal.innerText=value
}