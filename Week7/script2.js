
function cumpteSumOfArrayElement (arr) {
    var sum = 0;
    var i = 0;
    
    while (i < arr.length) {
        sum = sum + arr[i];
        i++;
    }
    console.log(sum);
}


cumpteSumOfArrayElement([]);
cumpteSumOfArrayElement([1, 2, 3, 4]);