def append(left_list_head, right_list_head):
    left_tail = left_list_head.left
    right_tail = right_list_head.left
    left_tail.right = right_list_head
    right_list_head.left = left_tail
    right_tail.right = left_list_head
    left_list_head.left = right_tail
    

def in_order_traverse(head):
    # base case
    if head is None:
        return None

    # traverse left leaves
    left_leaves = in_order_traverse(head.left)

    # traverse current node
    right = head.right
    head.left = head
    head.right = head
    if left_leaves is None:
        list_head = head
    else:
        list_head = left_leaves
        append(list_head, head)

    # traverse right leaves
    right_leaves = in_order_traverse(right)
    if right_leaves:
        append(list_head, right_leaves)

    return list_hea
