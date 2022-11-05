const fabric = require("@umijs/fabric");
module.exports = {
  ...fabric.stylelint,
  root: true,
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  rules: {
    "no-descending-specificity": null,
    "selector-class-pattern": [
      // 命名规范 -
      "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
      {
        message: "Expected class selector to be snake_case",
      },
    ],
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always-single-line",
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["include", "mixin"],
      },
    ],
    "rule-empty-line-before": ["never"],
  },
};
