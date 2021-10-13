var letterCombinations = function (digits) {
  const CHAR_MAP = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'].map((s) => s.split(''));
  console.log(CHAR_MAP)
  return digits.length === 0 ? [] : digits
      .split('')
      .map((d) => CHAR_MAP[d])
      .reduce(
          (as, bs) => as.reduce(
              (arr, a) => arr.concat(
                  bs.map((b) => `${a}${b}`)
              ),
              []
          )
      );
};

console.log(letterCombinations('2'));