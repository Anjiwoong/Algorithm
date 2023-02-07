// Node(): data와 point인 next, prev를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

// LinkedList(): head, tail과 length를 가지고 있는 객체
function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// printNode(): 노드 정방향 출력
DoubleLinkedList.prototype.printNode = function () {
  process.stdout.write('head -> ');
  for (let node = this.head; node !== null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log('null');
};

DoubleLinkedList.prototype.printNodeInverse = function () {
  let temp = [];
  process.stdout.write('head <- ');

  for (let node = this.tail; node !== null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <- `);
  }
  console.log('tail');
};

// insert(): position 위치 노드 추가
DoubleLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) return false;

  let node = new Node(value);
  let current = this.head;
  let index = 0;
  let prev;

  if (position === 0) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if (position === this.length) {
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;

    current.prev = node;
    node.prev = prev;
  }

  this.length++;

  return true;
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.printNode();
dll.printNodeInverse();

dll.insert(2, 1);
dll.insert(3, 1);
dll.printNode();
dll.printNodeInverse();
