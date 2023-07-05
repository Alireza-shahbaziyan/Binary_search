const listNumber = Array.from(Array(100).keys())


const BinarySearch = (list, num) => {
    var count =  0
    let low = 0
    let hight = list.length - 1
    while (low <= hight) {
        console.log(list);
        count++
        let mid = (list + hight) /2
        let quess = list[mid]
        console.log(quess);
        if (quess == num) {
            console.log( `${mid} count:${count}`);
            break
        }
        if (quess > num) {
            hight = mid -1
            console.log('hight = mid -1');
        }
        else{
            low = mid + 1
        }

    }

}

BinarySearch(listNumber,34)