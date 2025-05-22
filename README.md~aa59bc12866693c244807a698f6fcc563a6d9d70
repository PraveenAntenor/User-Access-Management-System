# User Access Management System
A full-stack web app for managing access requests for software tools in an organization.

## 🔧 Tech Stack
- Frontend: React (Vite + TS)
- Backend: Node.js, Express, TypeORM
- DB: PostgreSQL
- Auth: JWT

## 🚀 Features
- User Signup/Login with roles (Admin, Manager, Employee)
- Admin creates software with access levels
- Employees request access
- Managers approve/reject requests

## 📦 Project Setup
### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🌐 Routes
| Path | Role | Description |
|------|------|-------------|
| /signup | All | Register user |
| /login | All | Login form |
| /create-software | Admin | Add software |
| /request-access | Employee | Request access |
| /pending-requests | Manager | Approve/reject requests |

## 🗃️ DB Tables
- User: username, password, role
- Software: name, description, access levels
- Request: user, software, accessType, reason, status

## 🌍 Deployment
### Backend (Render)
1. Push backend code to GitHub
2. Go to [https://render.com](https://render.com)
3. Create new web service
4. Use build command: `npm install && npm run build`
5. Start command: `npm run start`
6. Add env vars from `.env`

### Frontend (Vercel)
1. Push frontend to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import repo
4. Set env: `VITE_API_BASE_URL` to Render backend URL
5. Deploy!
