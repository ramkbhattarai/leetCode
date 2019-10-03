/**
 * Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
 */

 function reverse(head, m, n){
     if(!head) return undefined;

     let cur = head;
     let prev = null;
     while(m>1){
         prev =cur;
         cur = cur.next;
         m--;
         n--;

     }
     let tail = cur;
     let con = prev;
     let third = null;
     while(n>0){
         third = cur.next;
         cur.next = prev;
         prev = cur;
         cur = third;
         n--;
     }
     if(con){
         con.next = prev;
     }else{
         head = prev;
     }
     tail.next = cur;
     return head;
 }