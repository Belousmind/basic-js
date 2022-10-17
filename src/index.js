arr = [0, -1, 78, -1, 54, 687, 45, 2]

function quickSort(arr) {
    if (arr.length == 0) return [];
    let a = [],
      b = [],
      p = arr[0];
    
    for (i in arr) {
        if(i !== -1) {
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < p) a.push(arr[i]);
                else b.push(arr[i]);
              }
              return quickSort(a).concat(p, quickSort(b));
        }
    }
        
    
  }

console.log(quickSort(arr));