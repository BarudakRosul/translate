/**
 * Interface for a translation table where the key is a character's Unicode code point (as a number)
 * and the value is the translated character's Unicode code point (also as a number).
 */
interface Table {
  [code: number]: number;
}

/**
 * Translates each character in the string based on a provided translation table.
 *
 * @param {Table} table - A translation table where the key is a character's Unicode code point (as a number) and the value is the translated character's Unicode code point (as a number).
 * @returns {string} - The translated string based on the provided table.
 */
interface String {
  translate(table: Table): string;
}
