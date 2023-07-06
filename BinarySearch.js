export default BinarySearch = (list, num) => {
    let count =  0
    var low = list[0]
    var hight =  list.length -1 
    while (low <= hight) {
        count+=1
        let mid = Math.round((low + hight)/2)
        if (list[mid] == num) {
            console.log(`your number is ${list[mid]}`);
            break
        }
        if (list[mid] < num) {
            low = mid + 1
        }
        else{
            hight = mid + 1
        }
    }
    console.log(count);
}
