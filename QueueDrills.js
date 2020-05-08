class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data)
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null
    }
    return node.value
  }
}

class _DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _DoubleNode(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    node.previous = this.last;
    this.last = node;
  }
  
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    this.first.previous = null;
    if (node === this.last) {
      this.last = null
    }
    return node.value
  }
}
function peek(queue) {
  return queue.first;
}

function isEmpty(queue) {
  if (queue.first === null) {
    return true;
  } else {
    return false;
  }
}

function display(queue) {

  if (queue.first === null) {
    return console.log('Queue is empty');
  }

  let node = queue.first;

  let previousNode = null

  while (node.next !== null) {
    previousNode = node.value;
    node = node.next;
    console.log(previousNode);
  }
  
  return console.log(node.value);
}
function main() {
  let starTrekQ = new Queue;

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  display(starTrekQ)

  starTrekQ.dequeue()
  starTrekQ.dequeue()

  display(starTrekQ)
}



function doubleMain() {
  let starTrekQ = new DoubleQueue;

  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  display(starTrekQ)

  console.log(starTrekQ);

  starTrekQ.dequeue()
  starTrekQ.dequeue()

  display(starTrekQ)

  console.log(starTrekQ)
}


// main();
doubleMain()
