/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html/html",
    "@dreamsicle.io/stylelint-config-tailwindcss",
  ],
  rules: {
    "color-hex-length": null,
  },
};
