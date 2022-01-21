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
    // 设置函数用于存储遍历结果
    const preorder = function(root) {
        if (!root) return
        // 记录根节点的值
        res.push(root.val)
        // 前序遍历左子树
        preorder(root.left)
        // 前序遍历右子树
        preorder(root.right)
    }
    preorder(root)
    return res
};