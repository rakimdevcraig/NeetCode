class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let s of strs) {
      res += s.length + "#" + s;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      res.push(str.substring(i, i + length));
      i += length;
    }

    return res;
  }
}

// Example usage:
const sol = new Solution();
const encoded = sol.encode(["lint", "code", "love", "you"]);
console.log("Encoded:", encoded); // "4#lint4#code4#love3#you"
console.log("Decoded:", sol.decode(encoded)); // ["lint", "code", "love", "you"]
