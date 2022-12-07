import { DLLNode } from "./DLLnode";

export class DoublyinkedList<T> {
  private size;
  private head: DLLNode<T> | undefined;
  private tail: DLLNode<T> | undefined;

  isEmpty(): boolean {
    return this.size === 0;
  }
  addFirst(data: T) {
    const newNode = new DLLNode(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.previous = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  addLast(data: T) {
    const newNode = new DLLNode(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }
    {
      this.tail!.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  insert(data: T, index: number) {
    const newNode = new DLLNode(data);
    if (index <= 0 || index > this.size) {
      throw new Error("Index is out of bound");
    }
    if ((index = 1)) {
      this.addFirst(data);
      return;
    } else if (index == this.size) {
      this.addLast(data);
      return;
    } else {
      const previous = this.get(index - 1);
      const current = previous?.next;
      previous!.next = newNode;
      newNode.previous = previous;
      newNode.next = current;
      current!.previous = newNode;
    }
    this.size++;
  }
  // Can be inherited from LinkedList
  remove(index: number) {
    if (this.isEmpty()) {
      throw new Error("This list is empty");
    }
    if (index === 1) {
      let temp = this.head;
      this.head = this.head!.next;
      //Dispose temporary node
    } else {
      const previous = this.get(index - 1);
      const current = previous!.next;
      previous!.next = current!.next;
      //dispose current Node
    }
    this.size--;
  }

  clear() {
    let temp;
    while (this.head != null) {
      temp = this.head;
      //Dispose temporary node
      this.head = this.head.next;
      this.size--;
    }
  }

  get(index: number): DLLNode<T> | undefined {
    if (index >= 0 && index <= this.size) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
}
