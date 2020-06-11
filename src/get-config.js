/** @public */
const getConfig = () => ({
  recognizeColonAsDivision: !!process.env.RECOGNIZE_COLON_AS_DIVISION,
});

module.exports = getConfig;
