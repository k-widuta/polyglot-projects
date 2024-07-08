class AsyncQueue {
    private queCapacity: number;
    private queLength: number;
    private isResolving: boolean;
    private queue: Promise<string | number>[];

    constructor(capacity: number) {
        this.queCapacity = capacity
        this.queLength = 0
        this.isResolving = false
        this.queue = [];
    }

    enque(task: Promise<string | number>): undefined {
        if (this.queLength >= this.queCapacity) {
            throw new Error("Queue is already full!")
        }

        this.queue
    }

}
