const cache = require('../lib/cache');

describe('cache', () => {
  beforeEach(() => cache.clear());

  test('sets and gets value', async () => {
    await cache.set('foo', 'bar');
    expect(await cache.get('foo')).toEqual('bar');
  });

  test('returns null for unset keys', async () => {
    expect(await cache.get('nope')).toBe(undefined);
  });
});
