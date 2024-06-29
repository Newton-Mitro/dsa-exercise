// Iterative
export const linkedListValuesIterative = (head) => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};

// recursive
export const linkedListValuesRecursive = (head) => {
  const values = [];
  _linkedListValues(head, values);
  return values;
};

const _linkedListValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  _linkedListValues(head.next, values);
};
