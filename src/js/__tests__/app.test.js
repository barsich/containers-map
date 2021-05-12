import ErrorRepository from '../app';

test('translate', () => {
  const errors = new ErrorRepository();
  expect(errors.translate(418)).toBe('I’m a teapot');
  expect(errors.translate(1000)).toBe('Unknown error');
});
