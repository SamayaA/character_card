import orderByProps from '../index';

test.each([
  [{
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name', 'level'], [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ],
  ],
])(('test order by proporties'), (obj, sortKeys, expected) => {
  const result = orderByProps(obj, sortKeys);
  expect(result).toEqual(expected);
});
