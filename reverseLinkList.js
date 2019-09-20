/**
 * Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

var reverseList = function (head) {
    if (!head || !head.next) return head;
    let curr = head;
    let pre = null
    let next = curr.next;
    while (next) {
        curr.next = pre;
        pre = curr;
        curr = next;
        next = next.next;

    }
    curr.next = pre
    return curr;
};


// revised and better
// var reverseList = function (head) {
//     let prev = null;
//     let node = head;

//     while (node !== null) {
//         const next = node.next;
//         node.next = prev;
//         prev = node;
//         node = next;
//     }

//     return prev;
// };