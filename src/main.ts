type TreeNode = {
    value: number;
    child: TreeNode | null;
}

const createTree = function (n: number): TreeNode | null {
    if (n >= 1) {
        return {
            value: n,
            child: createTree(n - 1)
        };
    }
    return null;
}

console.log(createTree(2));
