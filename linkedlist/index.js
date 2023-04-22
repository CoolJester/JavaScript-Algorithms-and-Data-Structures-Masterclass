// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }


}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head =  new Node(data, this.head);   
  }

  size(){
    let counter = 0;
    let node = this.head;

    while(node){
      counter++;
      node = node.next;
    }

    return counter;

  }

  getFirst(){
    return this.head;
  }

  getLast(){
    //check if there are node
    if (!this.head) {
      return null;
    }

    //searching through the node
    let node = this.head;

    while(node){
      //if we are at the end
      if (!node.next) {
        return node;
      }
      node = node.next;      
    }     
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    let node = this.head;
    //check if there are nodes first
    if (!node) {
      return;
    }    

    //change the first(head) node so its no longer the first value   
    this.head = node.next;
    
  }

  removeLast(){
    //My Solution 
    //tracker node
    let node = this.head;

    //check if the nodes are there 
    if (!node) {
      return;
    }else if(!node.next){
      this.head = null;
      return;
    }

    //removing the last from nodes
    let previous = node;
    let nextNode = node.next;

    while (nextNode.next) {
      previous = nextNode;
      nextNode = nextNode.next;
    }   
    previous.next = null;
  }

  insertLast(data){
    //check if there are nodes
    if (!this.head) {
      this.insertFirst(data);
    }
    //insert at the end 
    let lastNode = this.getLast();
    //adding the new node
    lastNode.next = new Node(data);
  }

  getAt(index){    
    //helper variables
    let node = this.head;
    let counter = 0; 
    while(node){      
      //check if we are at that index
      if (counter === index) {
        return node;
      }
      //change to next node
      node = node.next;
      counter++;     
    }

    return null;
  }

  removeAt(index){
    //If the list is empty
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;


  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
