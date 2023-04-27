test('should output "utils"', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  require('./index');
  expect(consoleSpy).toHaveBeenCalledWith('utils');
});
