# 📋 PasteSaver

PasteSaver is a modern **React-based paste management application** that allows users to create, save, view, edit, search, copy, delete, and share text or code snippets.

The application provides a clean and responsive dark-themed interface built with **React and Tailwind CSS**, while **Redux Toolkit** is used to manage paste data efficiently.

---

## 🚀 Features

* ✍️ **Create Pastes** – Create and save text or code snippets with a title.
* 📝 **Edit Pastes** – Update existing paste titles and content.
* 👀 **View Pastes** – View the complete content of a saved paste.
* 🔍 **Search Pastes** – Search saved pastes by title.
* 📋 **Copy Content** – Copy paste content directly to the clipboard.
* 🔗 **Share Pastes** – Share paste links using the Web Share API or copy the share link.
* 🗑️ **Delete Pastes** – Remove unwanted pastes.
* ✅ **Form Validation** – Prevents creating a paste without a title or content.
* 🔔 **Toast Notifications** – Provides feedback for actions such as create, update, copy, delete, and share.
* 📱 **Responsive Design** – Works across desktop, tablet, and mobile screens.
* 🌙 **Modern Dark UI** – Clean developer-focused interface using Tailwind CSS.
* 💾 **Redux State Management** – Manages paste data using Redux Toolkit.

---

## 🛠️ Technologies Used

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **React Router DOM**
* **Redux Toolkit**
* **React Redux**
* **React Hot Toast**

### Browser APIs

* Clipboard API
* Web Share API

---

## 📂 Project Structure

```text
paste-app/
│
├── public/
│   └── logo.png
│
├── src/
│   │
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Paste.jsx
│   │   └── ViewPaste.jsx
│   │
│   ├── Redux/
│   │   ├── pasteSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

> The folder structure may vary depending on your project configuration.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/paste-saver.git
```

### 2. Navigate to the project directory

```bash
cd paste-saver
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL provided by Vite, usually:

```text
http://localhost:5173
```

---

## 📖 How to Use

### Create a Paste

1. Open the **Home** page.
2. Enter a title.
3. Enter your text or code.
4. Click **Create My Paste**.
5. The paste will be saved in the application state.

### View Saved Pastes

1. Navigate to the **Paste** page.
2. All saved pastes will be displayed as cards.
3. Use the search bar to find a paste by title.

### Edit a Paste

1. Open the **Paste** page.
2. Select **Edit** on the desired paste.
3. Modify the title or content.
4. Click **Update My Paste**.

### View a Paste

Click **View** on any saved paste to open the complete paste content.

The View page also provides a **Copy** button for copying the entire paste content.

### Delete a Paste

Click the **Delete** button on a paste card to remove it.

### Share a Paste

Click **Share** to generate a shareable URL.

If the browser supports the Web Share API, the native sharing interface will open. Otherwise, the share URL will automatically be copied to the clipboard.

---

## 🧠 Application Flow

```text
                    ┌───────────────┐
                    │     Home      │
                    │ Create Paste  │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ Redux Store   │
                    │  Paste State  │
                    └───────┬───────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        ┌──────────┐  ┌──────────┐  ┌──────────┐
        │   Edit   │  │   View   │  │  Delete  │
        └──────────┘  └──────────┘  └──────────┘
              │             │
              ▼             ▼
        Update Paste    Copy / Share
```

---

## 🔄 Redux State Management

PasteSaver uses **Redux Toolkit** to manage the collection of pastes.

Each paste contains information such as:

```javascript
{
    _id: "unique-id",
    title: "My React Notes",
    content: "React is a JavaScript library...",
    createdAt: "2026-08-10T10:30:00.000Z"
}
```

The application uses Redux actions for operations such as:

```text
addToPastes
updateToPastes
removeFromPastes
```

---

## 🎨 UI Design

PasteSaver uses a modern dark-themed interface with:

* Slate-based dark backgrounds
* Blue primary actions
* Responsive cards
* Rounded components
* Hover animations
* Developer-friendly monospace content areas
* Responsive navigation

The interface is designed to provide a simple experience for managing code snippets and notes.

---

## 🔐 Validation

The application validates paste data before saving.

### Empty title

Users cannot create a paste without entering a title.

```javascript
if (!title.trim()) {
    toast.error("Please enter a title");
    return;
}
```

### Empty content

Users are also prevented from creating an empty paste.

```javascript
if (!value.trim()) {
    toast.error("Please enter some content");
    return;
}
```

---

## 📱 Responsive Design

PasteSaver is designed to work on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

Tailwind CSS responsive utilities are used to adapt the layout to different screen sizes.

---

## 🔮 Future Improvements

Some features that can be added in future versions:

* 🔐 User authentication
* ☁️ Cloud database integration
* 🌐 Public paste sharing
* ⏳ Paste expiration
* 🔒 Private/password-protected pastes
* ⭐ Favorite pastes
* 🏷️ Paste tags and categories
* 🌈 Multiple themes
* 📊 User dashboard
* 📜 Paste history
* 💾 Persistent database storage
* 🔗 Custom shareable URLs

---

## 📸 Screenshots

Add screenshots of your application here:


## Screenshots

### Home Page

screenshots/Home.png

### Pastes Page

screenshots/Pastes.png

### View Paste

screenshots/ViewPaste.png


---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add new feature"
```

5. Push the branch.

```bash
git push origin feature/new-feature
```

6. Open a Pull Request.

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Rushikesh Sonawane**

Computer Engineering Student | React Developer | Data Science & Machine Learning Enthusiast

---

⭐ If you find this project useful, consider giving the repository a star!
