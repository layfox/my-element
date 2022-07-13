module.exports = {
  env: {
    browser: true,
    es2021: true,
    // 新增
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "no-var": "error",
    "vue/no-multiple-template-root": "off",
    semi: ["error", "never"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  parser: "vue-eslint-parser",
}
