
// This is a JavaScript coding problem from BFE.dev 
// https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  let started = false;
  let param ;
  let timeout;
  const c = (...a) => {
    param = a;
    if(timeout) {
      clearTimeout(timeout);
      started = false;
    }
    if(!started) {
     timeout = setTimeout(()=>{
        func(param);
        started = false;
      },wait)
      started = true;
    }

  }
  return c;
}


