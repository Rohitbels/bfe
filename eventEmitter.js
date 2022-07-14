
// https://bigfrontend.dev/problem/create-an-Event-Emitter


class EventEmitter {
  constructor(){
    this.hash = {};
  }
  subscribe(eventName, callback) {
  	let callbacks = this.hash[eventName];
    const key = callback.name
    if(callbacks) {
      const registeredCallback = callbacks[key];
      if(registeredCallback) {
        callbacks[key][1] = callbacks[key][1]+1;
      } else {
        callbacks[key] = [callback,1];
      }
    } else {
      this.hash[eventName] = {
        [key]: [callback,1]
      }
    }
    const self = this;
    return {
      release: () => {
            const registeredCallback = self.hash[eventName][key];
            if(registeredCallback) {
               if(registeredCallback[1]===1) {
                 delete self.hash[eventName][key]
               } else {
                 self.hash[eventName][key][1] -=1;
               }  
            }

      }
    }
  }


  emit(eventName, ...args) {
  	const eventCallbackHash = this.hash[eventName] || {};
    const callBackArrays = Object.values(eventCallbackHash);
    callBackArrays.forEach(([callback,count])=>{
      while(count>0) {
              callback(...args)
      count--;
      }

    })
  }
}
