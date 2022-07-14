




/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
constructor(){
  this.stack = new Stack()
  this.peekElement;
}
  enqueue(element) { 
    if(this.peekElement === undefined) {
      this.peekElement = element;
    }
    this.stack.push(element)
  }
  peek() { 
    return this.peekElement;
  }
  size() { 
    return this.stack.size();
  }
  dequeue() {
    this.peekElement = undefined;
    if(this.stack.size() <= 1) {
        return this.stack.pop()
    } else  {
      let temp = new Stack();
      let stackSize = this.stack.size();
      while(stackSize>1) {
        temp.push(this.stack.pop())
        stackSize--;
      }
      const result = this.stack.pop();
      let tempStack = temp.size();
      while(tempStack>0){
        let element = temp.pop();
        this.stack.push(element)
        if(this.peekElement === undefined) {
           this.peekElement = element;
         }
        tempStack--;
      }

      return result;
    }
  }
}




