class QNode<T> {
    val: T;
    prev: QNode<T> | undefined;
    next: QNode<T> | undefined;

    constructor(value: T) {
        this.val = value
        this.prev = this.next = undefined
    }
}


class Queue {
    private length: number;
    private head: QNOde | undefined;
    private tail: QNode | undefined;

    constructor() {
        this.length = 0
        this.head = this.tail = undefined;
    }
}
