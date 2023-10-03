
function average(arr){
    let sum = 0; 
    arr.forEach(num => {
        sum += num; 
    });
    return sum/arr.length;
}

function showData(name, age, phone){
    return {
        name: name,
        age: age,
        phone: phone
    }
}

module.exports = {
    avg: average,
    show : showData,
}