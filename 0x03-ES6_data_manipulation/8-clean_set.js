export default function cleanSet(set, startString) {
  /*
   * let str = '';
   * set.forEach((element) => {
   *   if (element.startsWith(startString)) {
   *     str = str.concat('-', element.slice(startString.length));
   *   }
   * });
   * return str.slice(1);
   */
  return [...set]
    .filter((element) => startString.length > 0 && element.startsWith(startString))
    .map((element) => element.slice(startString.length))
    .join('-');
}
