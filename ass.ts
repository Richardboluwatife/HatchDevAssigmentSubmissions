class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(item: T) {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Insertion logic would go here

    levelOrderTraversal() {
        if (!this.root) {
            return;
        }

        const queue = new Queue<TreeNode>();
        queue.enqueue(this.root);

        while (!queue.isEmpty()) {
            const currentNode = queue.dequeue();
            if (currentNode) {
                console.log(currentNode.data);

                if (currentNode.left) {
                    queue.enqueue(currentNode.left);
                }

                if (currentNode.right) {
                    queue.enqueue(currentNode.right);
                }
            }
        }
    }
}

// Example usage
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

tree.levelOrderTraversal();