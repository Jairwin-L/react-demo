module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "perf",
        "feat",
        "fix",
        "refactor",
        "docs",
        "chore",
        "style",
        "revert",
        "test",
      ],
    ],
    "type-case": ["lowerCase", "always"],
    "type-empty": [2, "never"],
    "scope-empty": [2, "always"],
    // "scope-case": [2, "always"],
    "subject-full-stop": [2],
    "subject-case": [2, "never"],
    "header-max-length": [2, "always", 72],
  },
};
