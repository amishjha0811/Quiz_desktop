# Quiz Desktop App

A cross-platform desktop quiz application featuring a modern Electron-based frontend and a robust Flask backend API. Supports user authentication, quiz selection, scoring, and persistent results. Designed for both learning and fun, with a stylish UI and extensible architecture.

---

## Features

- User registration and login (JWT-based authentication)
- Multiple quiz categories (Programming, Science, History, etc.)
- Timed quizzes with scoring and instant feedback
- Persistent user results and quiz history
- Modern, responsive UI with glassmorphism and gradient themes
- Cross-platform desktop support via Electron
- Windows launcher script for easy startup

---

## Directory Structure

```
Quiz_desktop/
  backend/           # Flask API backend
    app/             # Application code (models, routes, utils)
    migrations/      # Alembic database migrations
    requirements.txt # Backend dependencies
    run.py           # Entry point for backend server
  frontend/          # Electron frontend
    public/          # HTML, CSS, JS, and assets
    src/             # Renderer process JS
    main.js          # Electron main process
    preload.js       # Secure context bridge
    package.json     # Frontend dependencies
    launcher.vbs     # Windows launcher script
```

---

## Backend (Flask API)

### Setup

1. **Install dependencies:**
   ```bash
   cd backend
   python -m venv venv
   venv\Scripts\activate  # On Windows
   pip install -r requirements.txt
   ```
2. **Configure environment:**
   - Create a `.env` file in `backend/` with:
     ```env
     DATABASE_URL=postgresql://<user>:<password>@localhost/quizdb
     JWT_SECRET_KEY=your_secret_key
     ```
3. **Run migrations:**
   ```bash
   flask db upgrade
   ```
4. **Start the backend server:**
   ```bash
   python run.py
   ```
   The API will be available at `http://localhost:5000/api`.

### Main Endpoints
- `POST /api/register` — Register a new user
- `POST /api/login` — Login and receive JWT
- `GET /api/quiz` — List available quizzes

---

## Frontend (Electron App)

### Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```
2. **Start the app:**
   ```bash
   npm start
   ```
   The Electron app will launch and connect to the backend API.

#### Windows Launcher
- Double-click `launcher.vbs` to start the frontend without using the terminal.

#### Preload Security
- The `preload.js` script exposes only safe APIs to the renderer for enhanced security.

---

## Database & Migrations
- Uses PostgreSQL (or any SQLAlchemy-supported DB)
- Alembic for migrations (`backend/migrations/`)
- Example migration: adds quiz metadata fields (difficulty, estimated_time, icon, description, author)

---

## Technologies Used
- **Backend:** Flask, Flask_SQLAlchemy, Flask_CORS, PyJWT, psycopg2-binary, python-dotenv
- **Frontend:** Electron, HTML5, CSS3 (glassmorphism, gradients), JavaScript
- **Database:** PostgreSQL (default), SQLAlchemy ORM
- **Migrations:** Alembic

---

## Customization & Extensibility
- Add new quiz categories/questions in `frontend/public/javascript/questions.js`
- Extend backend models/routes for more features
- Style the UI via `frontend/public/style.css` or `quiz2.css`

---

## Contributing
Pull requests and suggestions are welcome! Please open an issue or submit a PR.

---

## License
Specify your license here (e.g., MIT, Apache 2.0, etc.)

---

## Credits
- Quiz questions and UI inspired by open-source quiz apps and educational resources.
- Built with ❤️ using Flask and Electron. 
