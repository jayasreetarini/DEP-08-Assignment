function topKFrequent(nums, k) {
    const countMap = new Map();
    nums.forEach(num => countMap.set(num, (countMap.get(num) || 0) + 1));
    
    const sortedElements = [...countMap.keys()].sort((a, b) => countMap.get(b) - countMap.get(a));
    
    return sortedElements.slice(0, k);
}
