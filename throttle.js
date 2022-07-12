
// This is a JavaScript coding problem from BFE.dev 
// https://bigfrontend.dev/problem/implement-basic-throttle
/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  
  let params;
  let t;
  let flag = true;
  const callback=(...a) => {
    if(flag ) {
      func(a);
      flag = false;
    } else {
      params = a;
    }
    if(!t) {
      t = setTimeout(()=>{
        if(params!== undefined)
        func(params);
      },wait);
    }
  }
  return callback;
  
}


