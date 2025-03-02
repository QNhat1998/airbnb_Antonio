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
      "@typescript-eslint/no-explicit-any": "off", // ✅ Cho phép sử dụng `any`
      "no-var": "off", // ✅ Cho phép dùng `var`
      "prefer-const": "off", // ✅ Không bắt buộc dùng `const`
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // ✅ Không báo lỗi nếu biến bắt đầu bằng `_`
      "@typescript-eslint/no-non-null-assertion":
        "off", // ✅ Cho phép sử dụng `!`
      "@typescript-eslint/no-unsafe-assignment":
        "off", // ✅ Không cảnh báo khi gán kiểu dữ liệu không an toàn
    },
  },
];

export default eslintConfig;
