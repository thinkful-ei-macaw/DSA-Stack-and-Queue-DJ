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
  for (let i = 0; i < arr.length; i++) {
    let value = stack.pop();

    if (value === '(') {
      count++;
    } else {
      count--;
    }
  }

  if (count === 0) {
    return true;
  } else if (count > 0) {
    return 'You are missing a ")"';
  } else {
    return 'You are missing a "("';
  }
}

function sortStack(stack) {
  let newStack = new Stack;

  while (stack.top !== null) {
    let temp = stack.pop();
    if (newStack.top === null) {
      newStack.push(temp);
    } else if (newStack.top.data > temp) {
      newStack.push(temp)
    }
    else if (newStack.top.data < temp) {
      while (newStack.top.next !== null && newStack.top.data < temp) {
        stack.push(newStack.pop());
      }
      stack.push(newStack.pop())
      newStack.push(temp)
      break;
    }
  }

  while (newStack.top.next !== null) {
    stack.push(newStack.pop());
  }

  stack.push(newStack.pop())

  return stack;
}

// 1, 2, 3, 4, 5 -> (5,4,3,2,1) return sorted peek() top stack.top.peek()

// function main() {
//   let starTrek = new Stack;
//   let emptyTrek = new Stack;

//   starTrek.push('Kirk');
//   starTrek.push('Spock');
//   starTrek.push('McCoy');
//   starTrek.push('Scotty');

//   peek(starTrek);

//   isEmpty(starTrek);
//   isEmpty(emptyTrek);

//   display(starTrek);

//   starTrek.pop();
//   starTrek.pop();
//   starTrek.push('Scotty');

//   display(starTrek);

//   return starTrek;
// }

// console.log(main());
// is_palindrome('dad');
// is_palindrome('A man, a plan, a canal: Panama');
// is_palindrome('1001');
// is_palindrome('Tauhida');
// console.log(parens('()()()('));

function stackMain() {
  let stack = new Stack;
  //  3     1      4
  //  2     2      3
  //  1     3      2
  //  4     4      1
  //input  temp  output
  stack.push(4)
  stack.push(1)
  stack.push(2)
  stack.push(3)

  display(stack)

  sortStack(stack);

  display(stack)

  return stack;
}

console.log(stackMain())
