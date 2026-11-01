# Little Lemon — Restaurant Reservation Capstone

A responsive React restaurant website concept with a table reservation form, client-side validation, confirmation screen, and automated tests.

## Requirements
- Node.js 18 or newer
- npm
- Visual Studio Code (recommended)

## Run locally
1. Extract the ZIP file.
2. Open the extracted `little-lemon-capstone` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Run tests
```bash
npm test
```

## Create a production build
```bash
npm run build
```

## Features
- Responsive home page with restaurant introduction and sample menu.
- Reservation form with date, time, guest count, occasion, name, email and optional notes.
- Client-side validation and clear field-level error messages.
- Confirmation page showing submitted reservation details.
- Semantic landmarks, form labels, keyboard focus styling and skip link.
- Unit tests for validation and booking form behaviour.

## Important project note
This is a front-end demonstration. Reservation details are held in React state only. There is no live restaurant API, database, email delivery, or real booking inventory. Connect the course-provided booking API / `fetchAPI` and `submitAPI` functions if your official assignment brief requires them.

## GitHub
Create a new empty repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Build Little Lemon reservation capstone"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your own repository URL.
