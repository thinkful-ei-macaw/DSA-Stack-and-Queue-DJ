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
    console.log(node.data);
    node = node.next;
  }
  console.log(node.data);
  return;
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack;
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  let douglas = '';
  for (let i = 0; i < s.length; i++) {
    douglas += stack.pop();
  }
  if (douglas === s) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

function parens(exp) {
  let stack = new Stack;
  let count = 0;
  let arr = exp.match(/[()]/g);
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  if (stack.top === null) {
    return;
  }
  for(let i =0; i < arr.length; i++) {
    let value = stack.pop();

    if(value === '(') {
      count++;
    } else {
      count--;
    } 
  }
 
  if (count === 0 ) {
    return true;
  } else if (count > 0) {
    return 'You are missing a ")"';
  } else {
    return 'You are missing a "("';
  }
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
is_palindrome('dad');
is_palindrome('A man, a plan, a canal: Panama');
is_palindrome('1001');
is_palindrome('Tauhida');
console.log(parens('()()()('));