const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  ListNode
} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.qu = null;
  }

  
  getUnderlyingList() {
    return this.qu;
  }

  // enqueue(val) {
  //   let item = new ListNode(val);
    
  //   if(!this.qu) {this.qu = item; return;}

  //   let tmp = this.qu;

  //   while(tmp.next) { tmp = tmp.next; }
  //   tmp.next = item;
  // }
  enqueue(value) {
    if(!this.qu){
      this.qu = new ListNode(value);
    } 
    else {
      let tmp = this.qu;
      while(tmp.next) {
        tmp = tmp.next;
      }
      tmp.next = new ListNode(value);
    }
  }



  dequeue() {
    let tmp = this.qu.value;
    this.qu = this.qu.next;
    return tmp;
  }

  // enqueue(val) {
  //   this.qu.push(val);
  // }

  // dequeue() {
  //   return this.qu.shift();
  // }

 


}

module.exports = {
  Queue
};