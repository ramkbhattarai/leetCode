/**
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

var mergeTwoLists = function (l1, l2) {
    let node = new ListNode(-1);// create a node with random value;
    // we save it in dummy so that we can maniputate dummy but keep our node safe;
    let dummy = node;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }
    dummy.next = l1 === null ? l2 : l1; // if any of the list is remaining then that's the next of dummy;

    return node.next; // here we have to return the "node" the next because dummy.next will be the last node. carefull
}