const register = async app => {
  await require('@react-ssr-withLess/core/lib/register')(app);
};

module.exports = register;
module.exports.default = register;
