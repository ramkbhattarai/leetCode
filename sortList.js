/**
 * Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
 */

var sortList = function (head) {
    if (head === null || head.next === null) return head;
    // we are implementing merge sort algorithm here
    // for this we need to split list into two parts
    // since this is list we have to go to the half to it with a loop
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // when this loop is over we are half way through via slow
    let node2 = slow.next; // we set second half to slow.next
    slow.next = null;// we set slow.next to null so that node2 becomes
    // independent and we can get first half too.
    let node1 = head;
    return merge(sortList(node1), sortList(node2));// we apply recursive
    // function of the obtained two lists these calls will break each node
    // in half till it has 1 or no elements and return them.
};



function merge(list1, list2) {
    let dummy = new ListNode();
    let node = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next;
    }
    if (list1) node.next = list1;
    if (list2) node.next = list2;
    return dummy.next;
}