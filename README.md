#  XTDAuthGuard – Authentication System 

XTDAuthGuard is a full-stack authentication system built using **Next.js, **MongoDB**, and **JWT-based**, 
This project demonstrates **protected routes, login/logout flow, middleware-based auth guard**, and a clean, responsive UI using **shadcn/ui**.

---

##  Live Demo

🔗 **Live URL:**  


---

##  UI Overview

- Login Page with card-based layout
- Dashboard with user list table
- Navbar with logo and conditional Logout button
- Fully responsive UI (mobile & desktop)

---

##  Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Axios

### Backend
- Next.js API Routes
- MongoDB
- Mongoose
- JWT

### Authentication & Security
- JWT stored in HTTP-only cookies
- Token expiry (30 minutes)
- Middleware-based route protection

---

##  Features

- User login with username, email and password
- JWT token generation and secure cookie storage
- Auto redirect based on authentication state
- Protected dashboard route
- Middleware-based auth guard
- Logout functionality
- Conditional Navbar
- Clean and scalable folder structure
- Industry-standard architecture

---

##  Authentication Flow

### Login
1. User enters username, email and password
2. Backend:
   - Saves user in MongoDB
   - Generates JWT token
   - Stores token in HTTP-only cookie (30 min expiry)
3. User is redirected to `/dashboard`

---

### Route Protection

| Scenario | Result |
|--------|--------|
| Logged-in user visits `/login` | Redirect to `/dashboard` |
| Non-logged user visits `/dashboard` | Redirect to `/login` |
| User visits `/` | Redirect based on token |

All route protection is handled using **Next.js Middleware**.

---

### Logout
1. `/api/logout` clears the authentication cookie
2. User is redirected to `/login`
3. Dashboard access is blocked

---

##  Folder Structure
authguard/
│
├── app/
│ ├── api/
│ │ ├── login/
│ │ └── logout/
│ ├── dashboard/
│ ├── login/
│ ├── layout.tsx
│ └── page.tsx
│
├── components/
│ ├── navbar/
│ └── ui/ (shadcn/ui components)
│
├── lib/
│ ├── auth.ts
│ ├── axios.ts
│ └── db.ts
│
├── models/
│ └── AdminUser.ts
│
├── middleware.ts
└── README.md

