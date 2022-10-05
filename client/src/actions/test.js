export function amountListBalance(arr){
    let newArr=arr
    let arrLen=arr.length
    console.log(arr.length)
    for(i=0; i<(12-arrLen); i++){
        newArr.push(0)
        console.log("hai")
    }
    console.log(newArr)
}

var months=['jan', 'feb', 'mar','apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
export function monthListBalance(arr){
    let replaced =[]
    arr.forEach(str=>{
        replaced.push(str.replace(/[0-9]/g, ''));
    })
    let lastEl=arr[arr.length-1]
    let lastIndex=months.indexOf(arr[arr.length-1])
    let count=lastIndex
    let newArr=replaced
    let arrLen=arr.length
    for(i=0; i<(12-arrLen); i++){
        count++;
        if(count>11){
            count=0
        }
        newArr.push(months[count])
    }
    console.log(newArr)
}