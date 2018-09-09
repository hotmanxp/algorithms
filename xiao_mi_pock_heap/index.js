const mkHeap = n => {
  if(n === 1) return [1]
  const n_1_heap = mkHeap(n - 1).map(s => s + 1)
  const last = n_1_heap[n - 2]
  return [
    1,
    last,
    ...n_1_heap.slice(0, -1)
  ]
}

console.log(mkHeap(10))
