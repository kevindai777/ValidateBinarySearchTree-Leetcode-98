//Objective is to validate whether a tree is a proper binary search tree

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(200)
tree.addLeftNode(tree.root, 500)
tree.addRightNode(tree.root, 700)
tree.addLeftNode(tree.root.left, 600)
tree.addRightNode(tree.root.right, 800)
tree.addLeftNode(tree.root.left.left, 1000)
tree.addRightNode(tree.root.left, 950)
tree.addLeftNode(tree.root.right, 720)
tree.addRightNode(tree.root.right.right, 440)
tree.addLeftNode(tree.root.left.left.left, 560)
tree.addRightNode(tree.root.right.right.right, 810)


//O(n) solution that does a simple inorder search through the tree
//If a previously found node has a greater value than the current,
//it is an improper binary search tree

let previousNode = null 
let result = true 

function inorder(node) {
    if (node.left) {
        inorder(node.left)
    }

    if (previousNode !== null && previousNode.val >= node.val) {
        result = false
    }

    if (node.right) {
        inorder(node.right)
    }
}

return result