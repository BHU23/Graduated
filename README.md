# web Graduted Go เว็บคำนวนเกรด เกรดพ้อย
- สามารถเลือกแผนการเรียนได้
- เปรียบเทียบเกรดพ้อยที่คาดว่าจะได้ กลับสถิติเก่า (พ.ศ. 2562-2565)
web Graduted Go เว็บคำนวนเกรด เกรดพ้อย เว็บนี้ไม่มีการแสวงหาผลประโยชน์ใด ๆ ข้อมูลทั้งหมดได้มาจากการสืบค้นโดยผู้จัดทำเองหากผิดพลาดประการใดจึงขออภัยไว้ ณ ที่นี้

You can visit web on:

- https://graduatedgo.onrender.com/

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
