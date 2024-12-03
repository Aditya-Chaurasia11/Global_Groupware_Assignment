# EmployWise Assignment

A modern React application for user management built with TypeScript, React Router, and Tailwind CSS. This application demonstrates authentication, user listing, editing, and deletion using the Reqres API.

### Demo - https://global-groupware-assignment-phi.vercel.app/login
### Resume - https://drive.google.com/file/d/1gzNzpLq2HnZJPnLcmKoZhqvuaa1n_cD5/view?usp=drive_link


## Features

- 🔐 Authentication
  - Login with email/password
  - Protected routes
  - Token-based authentication
  - Automatic redirect to login for unauthenticated users

- 👥 User Management
  - View all users in a responsive card layout
  - Edit user details (first name, last name, email)
  - Delete users
  - Pagination support

- 🎨 UI/UX
  - Modern, responsive design
  - Loading states and animations
  - Clean and intuitive interface

## Tech Stack

- React 
- TypeScript
- React Router 
- Axios for API requests
- Tailwind CSS for styling
- React Hot Toast for notifications
- Lucide React for icons
- Vite as build tool

## Getting Started


### Installation

1. Clone the repository:
```bash
git clone https://github.com/Aditya-Chaurasia11/Global_Groupware_Assignment.git
cd Global_Groupware_Assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

### Authentication

To log in, use the following credentials:
- Email: `eve.holt@reqres.in`
- Password: `cityslicka`

### Features

1. **Login**
   - Enter your email and password
   - Click "Sign in"
   - You'll be redirected to the users list upon successful login

2. **View Users**
   - After logging in, you'll see a list of users
   - Users are displayed in a card format with their avatar and details
   - Navigate through pages using the pagination controls

3. **Edit User**
   - Update the user's details in the modal
   - Click "Save Changes" to update

4. **Delete User**
   - Click the trash icon on a user card
   - The user will be removed from the list

5. **Logout**
   - Click the "Logout" button in the top-right corner
   - You'll be redirected to the login page

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── EditUserModal.tsx
│   ├── ProtectedRoute.tsx
│   └── UserCard.tsx
├── pages/              # Main page components
│   ├── Login.tsx
│   └── Users.tsx
├── services/           # API integration
│   └── api.ts
├── types/              # TypeScript interfaces
│   └── user.ts
├── utils/              # Helper functions
│   └── auth.ts
└── App.tsx            # Main application component
```

## API Integration

This application uses the [Reqres](https://reqres.in/) API for demonstration purposes. The following endpoints are utilized:

- `POST /api/login` - Authentication
- `GET /api/users?page={page}` - Fetch users
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user
