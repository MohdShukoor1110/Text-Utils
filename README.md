# Text Utils

Text Utils is a dynamic web application built with React that provides a suite of tools for text manipulation. It is designed to be highly responsive and user-friendly, allowing you to easily perform common text operations directly in your browser.

## 🔎 WebSite Preview
![Project Screenshot](https://github.com/MohdShukoor1110/Text-Utils/blob/main/Text%20Utils.png)

## Features

- **Case Conversion:** Convert text to UPPERCASE, lowercase, CamelCase, or Title Case.
- **Text Analytics:** Instantly count words and characters as you type.
- **Text Manipulation:** Reverse text, remove extra whitespace, trim spaces.
- **Clipboard Integration:** Copy processed text to the clipboard.
- **Undo Functionality:** Revert to previous text state.
- **Dark/Light Mode:** Toggle between themes for better readability.

## Technologies Used

- **React:** For building the user interface.
- **React Hooks:** For managing component state.
- **React Router v6:** For client-side routing.
- **Bootstrap 5:** For responsive and modern styling.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

```
public/
  index.html
  manifest.json
  ...
src/
  App.jsx
  Containers/
    NavBar.jsx
    Alert.jsx
    TextArea.jsx
    About.jsx
    Style/
      about.css
  ...
```

## Usage

- Enter your text in the main text area.
- Use the buttons to perform various text operations.
- Switch between light and dark mode using the toggle in the navbar.
- Navigate to the About page for more information about the app.

Made with ❤️ using React.