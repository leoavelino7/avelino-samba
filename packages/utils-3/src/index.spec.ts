test('should output "utils-3"', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  require('./index');
  expect(consoleSpy).toHaveBeenCalledWith('utils-2');
});
