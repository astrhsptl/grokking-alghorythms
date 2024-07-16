class Node<T> {
  constructor(private v: T, private next: Node<T> | null) {}

  get value() {
    return this.v;
  }

  set value(v: T) {
    this.v = v;
  }

  get nextNode() {
    return this.next;
  }

  set nextNode(node: Node<T> | null) {
    this.next = node;
  }
}

export class LinkedList<T = unknown> {
  private head: Node<T> | null = null;

  constructor(private initial: T[] = []) {
    this.constructList();
    return new Proxy(this, {
      get(target, prop) {
        const origMethod = target[prop];

        if (!origMethod) {
          return target.accessByIndex(prop);
        }

        if (typeof origMethod == "function") {
          return function (...args) {
            return origMethod.apply(target, args);
          };
        }
        return origMethod;
      }
    });
  }

  private constructList() {
    if (this.initial.length === 0) return;

    this.head = new Node<T>(this.initial[0], null);
    let previousNode = this.head;

    for (const element of this.initial.slice(1)) {
      const currentNode = new Node<T>(element, null);
      previousNode.nextNode = currentNode;
      previousNode = currentNode;
    }
  }

  public printNode() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.nextNode;
    }
  }

  [Symbol.iterator]() {
    let currentNode = this.head;
    return {
      next: () => {
        const data = { value: currentNode, done: currentNode === null };
        currentNode = currentNode ? currentNode.nextNode : null;
        return data;
      }
    };
  }

  private accessByIndex(accessor: string) {
    let index = Number.parseInt(accessor);
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }

      counter++;
      currentNode = currentNode.nextNode;
    }

    return null;
  }
}
