# Background Color Changer 🎨

This is a beginner-friendly React project where I learned and practiced two core React Hooks: `useState` and `useEffect`.

## 🚀 What It Does

- Changes the background color of the page when a button is clicked.
- Uses `useState` to manage the selected color.
- Uses `useEffect` to apply the color change to the `<body>` element.

## 🧠 What I Learned

- `useState`: To store and update the selected color.
- `useEffect`: To apply side effects — in this case, updating the document’s background color whenever the state changes.

## 📂 Project Structure

```
.
├── dist/               # Parcel build output (ignored in Git)
├── node_modules/       # Node dependencies (ignored in Git)
├── .parcel-cache/      # Parcel cache (ignored in Git)
├── .gitignore
├── package.json
├── package-lock.json
├── index.html
├── style.css
└── index.js            # Main React app file
```

## 🛠 How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx parcel index.html
   ```

3. Click the buttons to change the background color.

## 💡 Future Ideas

- Add more colors
- Add a reset button
- Save selected color in localStorage

---

Made while learning React Hooks 🚀
