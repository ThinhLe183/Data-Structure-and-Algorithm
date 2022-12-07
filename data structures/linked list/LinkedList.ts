import { ListNode } from "./ListNode";
class LinkedList<T> {
  private size: number = 0;
  private head?: ListNode<T> | undefined;

  addFirst(data: any) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  addLast(data: any) {
    const newNode = new ListNode(data);
    let current;
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insert(data: any, index: number) {
    if (index <= 0 && index > this.size) {
      throw new Error("Index is out of bound");
    }
    const newNode = new ListNode(data);
    if (index == 1) {
      this.addFirst(data);
    } else {
      let previous = this.get(index - 1);
      newNode.next = previous!.next;
      previous!.next = newNode;
    }
    return 1;
  }
  get(index: number) {
    if (index >= 0 && index <= this.size) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  getSize(): number {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }

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
}
