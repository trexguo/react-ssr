const register = async app => {
  await require('@react-ssr-with-less/core/lib/register')(app);
};

module.exports = register;
module.exports.default = register;
