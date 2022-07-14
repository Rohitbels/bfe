
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
 let flag = true;
 let interval = true;
 let params;
 let lastparam;
 const setTimeoutFunc = (func, wait) => {
    
    if(interval) {
      setTimeout(()=>{
        if(params !== lastparam) {
          lastparam = params;
          func(params)
          interval = true;
          setTimeoutFunc(func, wait)
        } 
        
              
      },wait);
    } 
}
 const c = (...a) => {
   if(flag) {
     func(a);
     flag = false;
     lastparam = a;
      
   }
  setTimeoutFunc(func, wait); 
  params = a; 
 }
 return c;
}




