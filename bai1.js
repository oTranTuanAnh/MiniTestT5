function deleteNum(arr,n) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!==n){
            result.push(arr[i]);
        }
    }
    return result.join();

}

let arr1 = [1,3,15,23,4,3,6,8,12,2];
document.write(deleteNum(arr1,3));
