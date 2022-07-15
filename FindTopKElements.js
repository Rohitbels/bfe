//https://bigfrontend.dev/problem/top-k-elements


/*
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

const sortArray = (arr = [], w) => {
  if(arr.length===0) {
    arr.push(w)
    return arr;
  }

  for(let i=0;i<arr.length;i++) {
      if(arr[i]<w) {
        arr.splice(i,0,w);
        return arr;
      }
  }
  arr.push(w);
  return arr;
}

function topK(arr, k) {
  // your code here
  let result = [];
  let index = 0;
  for(let i=0;i<arr.length;i++) {
    const current = arr[i];
    let small = result[index];
    if(result.length<k) {
      
      if(small && current < small) {
        index = i;
      }
      result = sortArray(result,current)
      index = result.length - 1;
      
    } else {
      if(current>small) {
        console.log(result)
        result.pop();

        sortArray(result, current)
        console.log(result)
        index = result.length - 1;
      }
    }
  }
  return result;
}
