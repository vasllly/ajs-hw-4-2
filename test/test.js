import sortHeroes from '../src/js/script';

test('sorted heroes', () => {
  const input = [
    { name: 'врач', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'врач', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const received = sortHeroes(input);
  expect(received).toEqual(expected);
});
