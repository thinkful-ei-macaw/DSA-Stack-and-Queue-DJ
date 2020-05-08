class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  console.log(stack.top);
  return stack.top;
}

function isEmpty(stack) {
  if (stack.top === null) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
}

function display(stack) {
  if (stack.top === null) {
    return console.log('Stack is empty');
  }

  let node = stack.top;

  while (node.next !== null) {
    console.log(node.data)
    node = node.next;
  }
  console.log(node.data)
  return;
}

function main() {
  let starTrek = new Stack;
  let emptyTrek = new Stack;

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  peek(starTrek);

  isEmpty(starTrek);
  isEmpty(emptyTrek);

  display(starTrek);

  starTrek.pop();
  starTrek.pop();
  starTrek.push('Scotty');

  display(starTrek);

  return starTrek;
}

console.log(main());