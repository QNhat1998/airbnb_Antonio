import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
  ),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // 🔥 Cho phép sử dụng `any`
      "no-var": "off", // 🔥 Cho phép dùng `var`
      "prefer-const": "off", // 🔥 Không bắt buộc dùng `const`
    },
  },
];

export default eslintConfig;
