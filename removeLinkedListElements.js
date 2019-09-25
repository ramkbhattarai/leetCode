/**
 * Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
 */

var removeElements = function (head, val) {
    if (!head) return null;
    let node = head;
    while (node && node.next) {
        if (node.next.val === val) { node.next = node.next.next; }
        else { node = node.next; }
    }
    return head = head.val === val ? head.next : head;
};

 