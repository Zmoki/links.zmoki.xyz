module.exports = function() {
  return {
    withAnalytics: process.env.WITH_ANALYTICS || "false"
  };
};
