import { createContext, useState } from "react";

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
      return { success: false, message: "Email is already registered." };
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

    return { success: true, message: "Registration successful." };
  }

  function login(email, password) {
    const user = users.find(
      (account) =>
        account.email.toLowerCase() === email.toLowerCase() &&
        account.password === password
    );

    if (!user) {
      return { success: false, message: "Invalid email or password." };
    }

    const safeUser = { ...user };
    delete safeUser.password;

    setCurrentUser(safeUser);
    localStorage.setItem("currentUser", JSON.stringify(safeUser));

    return { success: true, user: safeUser };
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  }

  function updateProfile(profileData) {
    if (!currentUser) {
      return { success: false, message: "User is not logged in." };
    }

    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() === profileData.email.toLowerCase() &&
        user.id !== currentUser.id
    );

    if (existingUser) {
      return { success: false, message: "Email is already used by another account." };
    }

    const updatedUser = {
      ...currentUser,
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone,
      nik: profileData.nik
    };

    const updatedUsers = users.map((user) =>
      user.id === currentUser.id
        ? { ...user, ...updatedUser }
        : user
    );

    setUsers(updatedUsers);
    setCurrentUser(updatedUser);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    return { success: true, message: "Profile updated successfully." };
  }

  function changePassword(currentPassword, newPassword) {
    if (!currentUser) {
      return { success: false, message: "User is not logged in." };
    }

    const user = users.find((user) => user.id === currentUser.id);

    if (!user || user.password !== currentPassword) {
      return { success: false, message: "Current password is incorrect." };
    }

    if (currentPassword === newPassword) {
      return { success: false, message: "New password must be different from the current password." };
    }

    const updatedUsers = users.map((user) =>
      user.id === currentUser.id
        ? { ...user, password: newPassword }
        : user
    );

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return { success: true, message: "Password updated successfully." };
  }

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        register,
        login,
        logout,
        updateProfile,
        changePassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;