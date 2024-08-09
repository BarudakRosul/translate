/**
 * Translates each character in the string based on a provided translation table.
 *
 * @param {Table} table - A translation table where the key is a character's Unicode code point (as a number) and the value is the translated character's Unicode code point (as a number).
 * @returns {string} - The translated string based on the provided table.
 */
String.prototype.translate = function (table) {
  let translated = "";
  for (let char of this) {
    const code = char.codePointAt(0);
    translated += String.fromCodePoint(table[code] || code);
  }
  return translated;
}
