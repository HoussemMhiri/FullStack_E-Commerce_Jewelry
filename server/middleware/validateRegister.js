const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("username", "this field is required").notEmpty(),
  check("email", "this field should be valid ").isEmail().notEmpty(),
  check("password", "the passwrod should be at least 6 characters").isLength({
    min: 6,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(405).json({ errors: errors.array() });
};
