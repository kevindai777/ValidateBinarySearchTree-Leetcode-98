//Java Solution

class Solution {
    public boolean isValidBST(TreeNode root) {
        return dfs(root, null, null);
    }
    
    public boolean dfs(TreeNode node, Integer lower, Integer upper) {
        if (node == null) {
            return true;
        }
        
        if ((lower != null && node.val <= lower) || (upper != null && node.val >= upper)) {
            return false;
        }
        
        //Everything on the right must be greater than root value
        //Everything on the left must be less than root value
        if (!dfs(node.right, node.val, upper) || !dfs(node.left, lower, node.val)) {
            return false;
        }
        
        return true;
    }
}