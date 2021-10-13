var lengthOfLongestSubstring = function(s) {
  // if (s.length === 0) return 0;
  // const hash = {};
  // let l = r = max = len = 0;
  // for (let i = 0; i <= s.length; i++) {
  //   if (hash[s[i]] === undefined) {
  //     len = i - l + 1;
  //     // r = i;
  //   } else {
  //     len = i - l;
  //     l = hash[s[i]] + 1;
  //   }
  //   // r = i;
  //   hash[s[i]] = i;
  //   max = Math.max(max, len);
  // }

  // return max;

  let n = s.length;
  let l = ret = 0;
  const hash = {};
  for (let r = 0; r < n; r++) {
    hash[s[r]] = hash[s[r]] ?  hash[s[r]] + 1 : 1;
    while (hash[s[r]] >= 2) {
      hash[s[l++]]--;
    }

    ret = Math.max(ret, r - l + 1);
  }
  return ret;
};


console.log(lengthOfLongestSubstring("aabaab!bb"))
