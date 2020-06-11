/** @public */
const getConfig = () => ({
  allowStringConcatenation: !!process.env.ALLOW_STRING_CONCATENATION,
  errorOnDivideByZero: !!process.env.ERROR_ON_DIVIDE_BY_ZERO,
});

module.exports = getConfig;
