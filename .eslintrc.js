module.exports = {
  extends: 'next',
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "react/display-name": "off",
    "@typescript-eslint/ban-ts-ignore": "off"
  },
  settings: {
    next: {
      rootDir: 'apps/next/',
    },
  },
  root: true,
}
