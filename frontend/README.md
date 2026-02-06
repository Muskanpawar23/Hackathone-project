# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# प्रोजेक्ट कैसे चलाएं (How to Run)

इस प्रोजेक्ट को अपने कंप्यूटर पर चलाने के लिए नीचे दिए गए स्टेप्स को फॉलो करें:

1. **Install Dependencies (डिपेंडेंसी इंस्टॉल करें)**
   सबसे पहले अपने टर्मिनल में नीचे दी गई कमांड चलाएं:
   ```bash
   npm install
   ```
   इससे प्रोजेक्ट के लिए जरूरी सभी फाइल्स डाउनलोड हो जाएंगी। It will install all the necessary files for the project.

2. **Run the Project (प्रोजेक्ट रन करें)**
   इंस्टॉलेशन पूरा होने के बाद, प्रोजेक्ट को स्टार्ट करने के लिए यह कमांड लिखें:
   ```bash
   npm run dev
   ```

3. **Open in Browser (ब्राउज़र में खोलें)**
   कमांड चलाने के बाद आपको टर्मिनल में एक लिंक (जैसे `http://localhost:5173/`) दिखाई देगा। उस पर क्लिक करके आप अपना प्रोजेक्ट देख सकते हैं।

🎉 अब आपका प्रोजेक्ट सफलतापूर्वक चल रहा है! (Now your project is running successfully!)
