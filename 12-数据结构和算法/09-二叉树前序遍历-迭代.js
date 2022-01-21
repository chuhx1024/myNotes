/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {

    // 用来存储遍历的结果
    const res = []
    // 定义一个栈 来存储 右子结点
    const stack = []

    while (root || stack.length) {
       while (root) {
            // 右子结点入栈
            stack.push(root.right)

            // 记录根结点
            res.push(root.val)

            // 下一步处理左子结点
            root = root.left
       }
       root = stack.pop()
    }
    return res
};