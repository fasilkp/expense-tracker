export function amountListBalance(arr){
    let newArr=arr
    let arrLen=arr.length
    var i;
    for(i=0; i<(12-arrLen); i++){
        newArr.push(0)
    }
    return newArr
}

var months=['jan', 'feb', 'mar','apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
export function monthListBalance(arr){
    let replaced =[]
    arr.slice(0,12).forEach(str=>{
        replaced.push(str.replace(/[0-9]/g, '').toLowerCase());
    })
    let lastEl=arr[arr.length-1].replace(/[0-9]/g, '').toLowerCase()
    let lastIndex=months.indexOf(lastEl)
    let count=lastIndex
    let newArr=replaced
    let arrLen=arr.length
    var i;
    for(i=0; i<(12-arrLen); i++){
        count++;
        if(count>11){
            count=0
        }
        newArr.push(months[count])
    }
    return newArr

}