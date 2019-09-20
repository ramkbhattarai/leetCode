/**
 * Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:





Example 1:

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
Example 2:

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
 */

var deleteNode = function (node) { // we want to delete given node and to delete it
    // we need reference to its prev and next nodes but we don't have the assess to 
    // prev. so we make the value of node to value of next node then set the pointer
    // of node next to the node next next to the next node; this is quivalent to deleting.
    node.val = node.next.val;
    node.next = node.next.next;
};