/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // Empty list or single node
    if (head === null || head.next === null) {
        return head;
    }

    // Find middle
    let slow = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Split list
    let mid = slow.next;
    slow.next = null;

    // Sort both halves
    let left = sortList(head);
    let right = sortList(mid);

    // Merge sorted lists
    return merge(left, right);
};

function merge(left, right) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (left !== null && right !== null) {
        if (left.val <= right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }

        current = current.next;
    }

    current.next = left !== null ? left : right;

    return dummy.next;
}