export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const value = weakMap.get(endpoint);
  weakMap.set(endpoint, value ? value + 1 : 1);
  if (value >= 4) {
    throw new Error('Endpoint load is high');
  }
}
