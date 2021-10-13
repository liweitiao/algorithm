var groupAnagrams = function(strs) {
  const map = {};
  for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
          count[c.charCodeAt() - 'a'.charCodeAt()]++;
      }
      map[count] ? map[count].push(s) : map[count] = [s];
  }
  return Object.values(map);
};

console.log(groupAnagrams(['dfg', 'gfd', 'grg', 'grgr', 'gewg', 'grrg', 'gwge', 'fgd']))