const assert = require("assert");
require("./index");

describe("Testing translate() prptotype", function() {
  it("should translate characters based on the given translation table", function() {
    const table = { 65: 66, 66: 67 }; // A -> B, B -> C
    const result = "AB".translate(table);
    assert.strictEqual(result, "BC");
  });

  it("should leave characters unchanged if they are not in the translation table", function() {
    const table = { 65: 66 }; // A -> B
    const result = "AC".translate(table);
    assert.strictEqual(result, "BC");
  });

  it("should correctly translate emoji characters", function() {
    const table = {
      0x1F600: 0x1F601,  // 😀 -> 😁
      0x1F602: 0x1F923   // 😂 -> 🤣
    };
    const result = "😀 😂".translate(table);
    assert.strictEqual(result, "😁 🤣");
  });

  it("should correctly handle complex emoji sequences", function() {
    const table = {
      0x1F468: 0x1F469,  // 👨 -> 👩 (single code point characters)
      0x1F469: 0x1F468   // 👩 -> 👨 (reverse)
    };
    const result = "👨‍👩‍👧‍👦".translate(table);
    assert.strictEqual(result, "👩‍👨‍👧‍👦");
  });

  it("should correctly handle characters requiring more than one UTF-16 code unit", function() {
    const table = { 0x1F1E6: 0x1F1E7 }; // 🇦 -> 🇧
    const result = "🇦🇧".translate(table);
    assert.strictEqual(result, "🇧🇧");
  });

  it("should return the original string if the translation table is empty", function() {
    const table = {};
    const result = "HELLO".translate(table);
    assert.strictEqual(result, "HELLO");
  });

  it("should handle non-ASCII characters correctly", function() {
    const table = { 233: 232 }; // é -> è
    const result = "café".translate(table);
    assert.strictEqual(result, "cafè");
  });

  it("should correctly translate a string with repeated characters", function() {
    const table = { 97: 98 }; // a -> b
    const result = "aaa".translate(table);
    assert.strictEqual(result, "bbb");
  });

  it("should correctly translate characters at the beginning, middle, and end of a string", function() {
    const table = { 72: 104, 69: 101, 76: 108, 79: 111 }; // H -> h, E -> e, O -> o
    const result = "HELLO".translate(table);
    assert.strictEqual(result, "hello");
  });

  it("should handle an empty string correctly", function() {
    const table = { 65: 66 }; // A -> B
    const result = "".translate(table);
    assert.strictEqual(result, "");
  });

  it("should translate all characters if all have mappings in the table", function() {
    const table = {
      65: 66,  // A -> B
      66: 67,  // B -> C
      67: 68,  // C -> D
      68: 69,  // D -> E
      69: 70   // E -> F
    };
    const result = "ABCDE".translate(table);
    assert.strictEqual(result, "BCDEF");
  });

  it("should handle large strings efficiently", function() {
    const largeString = "A".repeat(1000000); // 1 million "A"s
    const table = { 65: 66 }; // A -> B
    const result = largeString.translate(table);
    assert.strictEqual(result, "B".repeat(1000000));
  });

  it("should handle complex translation tables", function() {
    const table = {
      65: 90, // A -> Z
      66: 89, // B -> Y
      67: 88  // C -> X
    };
    const result = "ABC".translate(table);
    assert.strictEqual(result, "ZYX");
  });

  it("should not throw an error for characters outside the translation table range", function() {
    const table = { 65: 66 }; // A -> B
    const result = "💖A💖".translate(table);
    assert.strictEqual(result, "💖B💖");
  });
});
