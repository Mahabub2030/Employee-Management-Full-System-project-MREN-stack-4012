

# 🧑‍💼 Employee Management System (MREN Stack)

A full-featured Employee Management System built using the **MREN stack**: MongoDB, React.js, Express.js, and Node.js. This system helps companies manage employee data efficiently — with full CRUD operations, search, filtering, and optional features like file upload and PDF/Excel export.

---

## 🚀 Features

- ✅ Add new employees
- 📋 View a list of all employees
- ✏️ Update employee details
- ❌ Delete employees
- 🔍 Search and filter employee data
- 📅 Calculate expiry date (e.g. ID/Iqama)
- 📄 Download data as Excel or PDF (optional)
- 📸 Upload photo (via imgbb API) (optional)
- 🔐 Admin login (optional)

---

## 🧱 Tech Stack

| Tech        | Use                  |
|-------------|----------------------|
| MongoDB     | Database             |
| Express.js  | REST API backend     |
| React.js    | Frontend UI          |
| Node.js     | Runtime              |
| Mongoose    | MongoDB ORM          |
| Axios       | HTTP requests        |
| Tailwind CSS / Daisy UI | Styling  |

---

## 🗃️ Project Structure

```
├── client/             # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.jsx
└── server/             # Node + Express backend
    ├── models/
    ├── routes/
    ├── controllers/
    └── server.js
```

---

## 📦 Installation & Setup

### ⚙️ Backend Setup

```bash
cd server
npm install
npm run dev
```

Make sure MongoDB is running on `mongodb://localhost:27017/employeesDB` or set up a `.env` for your custom DB URI.

### 🌐 Frontend Setup

```bash
cd client
npm install
npm start
```

This will start the React app on `http://localhost:3000`.

---

## 📂 API Endpoints (Sample)

| Method | Endpoint             | Description        |
|--------|----------------------|--------------------|
| GET    | `/api/employees`     | Get all employees  |
| POST   | `/api/employees`     | Create employee    |
| GET    | `/api/employees/:id` | Get one employee   |
| PUT    | `/api/employees/:id` | Update employee    |
| DELETE | `/api/employees/:id` | Delete employee    |

---

## 🔐 Environment Variables (Backend)

Create a `.env` file in the `server/` folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/employeesDB
IMGBB_API_KEY=your_imgbb_api_key_here
```

---

## 🧪 Future Enhancements

- 👥 Role-based admin access
- 📊 Dashboard with statistics and charts
- 📧 Email reminders for expiring IDs
- 🌐 Multi-language support

---

## 📸 Screenshot (optional)

_Add a screenshot of the UI here._

---

## 🧑‍💻 Author

- **Your Name**
- GitHub: [your-github-username](https://github.com/your-github-username)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
