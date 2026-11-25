import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const adminAccount = {
  id: 1,
  name: "Administrator",
  email: "admin@mail.com",
  phone: "",
  nik: "",
  password: "Admin123!",
  role: "admin"
};

function getInitialUsers() {
  const savedUsers = localStorage.getItem("users");

  if (savedUsers) {
    const users = JSON.parse(savedUsers);
    const adminExists = users.some((user) => user.email === adminAccount.email);

    if (!adminExists) {
      users.push(adminAccount);
      localStorage.setItem("users", JSON.stringify(users));
    }

    return users;
  }

  localStorage.setItem("users", JSON.stringify([adminAccount]));
  return [adminAccount];
}

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(getInitialUsers);
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  function register(userData) {
    const existingUser = users.find(
      (user) => user.email.toLowerCase() === userData.email.toLowerCase()
    );

    if (existingUser) {
      return { success: false, message: "Email sudah terdaftar." };
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      nik: userData.nik,
      password: userData.password,
      role: "user"
    };

    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return { success: true, message: "Registrasi berhasil." };
  }

  function login(email, password) {
    const user = users.find(
      (account) =>
        account.email.toLowerCase() === email.toLowerCase() &&
        account.password === password
    );

    if (!user) {
      return { success: false, message: "Email atau password salah." };
    }

    const { password: userPassword, ...safeUser } = user;

    setCurrentUser(safeUser);
    localStorage.setItem("currentUser", JSON.stringify(safeUser));

    return { success: true, user: safeUser };
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  }

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}