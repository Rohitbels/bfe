
// This is a JavaScript coding problem from BFE.dev 
// https://bigfrontend.dev/problem/implement-basic-throttle
/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */

function throttle(func, wait) {
  let first = true;
 let setNextCall = true;
 let params;
 let lastparam;
 const setTimeoutFunc = (func, wait) => {
    
    if(setNextCall) {
      setTimeout(()=>{
        if(params !== lastparam) {
          lastparam = params;
          func(params)
          setNextCall = true;
          setTimeoutFunc(func, wait)
        } else {
          first = true;
        }       
      },wait);
      setNextCall = false;
    } 
}
 const c = (...a) => {
   if(first) {
     func(a);
     first = false;
     lastparam = a;
     setNextCall = true; 
   }
  setTimeoutFunc(func, wait); 
  params = a; 
 }
 return c;
}



