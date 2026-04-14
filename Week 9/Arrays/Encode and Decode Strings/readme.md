# Problem

**Encode and Decode Strings**

Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

```cpp
string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
```

Machine 2 (receiver) has the function:

```cpp
vector<string> decode(string s) {
  //... your code
  return strs;
}
```

So Machine 1 does:

```cpp
string encoded_string = encode(strs);
```

and Machine 2 does:

```cpp
vector<string> strs2 = decode(encoded_string);
```

`strs2` in Machine 2 should be the same as `strs` in Machine 1.

Implement the encode and decode methods.

**Example 1:**

- **Input:** `dummy_input = ["Hello","World"]`
- **Output:** `["Hello","World"]`
- **Explanation:**
  - Machine 1:
    ```cpp
    Codec encoder = new Codec();
    String msg = encoder.encode(strs);
    ```
    Machine 1 ---msg---> Machine 2
  - Machine 2:
    ```cpp
    Codec decoder = new Codec();
    String[] strs = decoder.decode(msg);
    ```

**Example 2:**

- **Input:** `dummy_input = [""]`
- **Output:** `[""]`

**Constraints:**

- \( 0 \leq \text{strs.length} < 100 \)
- \( 0 \leq \text{strs[i].length} < 200 \)
- `strs[i]` contains any possible characters out of 256 valid ASCII characters.

---

# Approach

Use the length of the word and `#` when encoding the string so we know how many characters we have to go in front of the `#` when decoding the string.

For example, encoding `["Hello","World"]` would produce `5#Hello5#World`. When decoding, we read the number before `#` to know how many characters to consume next, then repeat until the entire string is processed.
