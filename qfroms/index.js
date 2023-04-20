// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  //Solution 1
  constructor(){
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record){
    this.first.push(record);
  }

  remove(){
    //pop out of stack a into stack b
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    //the record on top
    const record = this.second.pop();

    //return the values to stack a
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek(){
    //pop out of stack a into stack b
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    //the record on top
    const record = this.second.peek();

    //return the values to stack a
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
