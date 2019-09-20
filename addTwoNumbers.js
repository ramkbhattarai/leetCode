/**You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 *  Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807. */



class Node{  // Linked List consists of the nodes so we make the node class
    constructor(val){ // every node in the linked list should have a value
        this.value = val; // and a pointer for the next node.
        this.next = null;
       
    }
}

class LinkedList{
    constructor(){ // every linkedlist should have a head, tail and info about length
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

   
}
// time = O(n) space = O(n)
function addTwoNumbersRecursive(l1, l2){
    let node = null;
    const carry = arguments[2]; // arguments is an Array-like object accessible
                                // inside functions that contains the values of the
                                // arguments passed to that function.
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const next1 = l1 ? l1.next : null;
        const next2 = l2 ? l2.next : null;
        const val = carry ? val1 + val2 + 1 : val1 + val2;
        node = new ListNode(val % 10);
        node.next = addTwoNumbersRecursive(next1, next2, val >= 10);
    } else if (carry) {
        node = new ListNode(1);
        node.next = null;
    }
    return node
}
// time= O(n) space = O(n)
var addTwoNumbersIterative = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let first = l1;
    let second = l2;
    let current = dummyHead;
    let carry = 0;
    while (first !== null || second !== null) {
        let x = (first !== null) ? first.val : 0;
        let y = (second !== null) ? second.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (first !== null) first = first.next;
        if (second !== null) second = second.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};