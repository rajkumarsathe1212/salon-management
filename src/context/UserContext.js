
// src/context/UserContext.js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import LoadingScreen from '@/components/ui/LoadingScreen';

const UserContext = createContext();

export const MOCK_USERS = {
  ADMIN: {
    id: '1',
    name: 'Zara Admin',
    email: 'admin@gmail.com',
    role: 'ADMIN',
    avatar: 'ZA'
  },
  OWNER: {
    id: '2',
    name: 'Ravi Owner',
    email: 'owner@gmail.com',
    role: 'OWNER',
    avatar: 'RO'
  },
  CLIENT: {
    id: '3',
    name: 'Aisha Client',
    email: 'client@gmail.com',
    role: 'CLIENT',
    avatar: 'AC'
  }
};

const COOKIE_NAME = 'auth_user';

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedUser = Cookies.get(COOKIE_NAME);
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setCurrentUser(parsed);
      } catch (e) {
        console.error("Failed to parse user cookie");
      }
    }
    setIsMounted(true);
  }, []);

  const switchRole = (roleKey) => {
    const userData = MOCK_USERS[roleKey];
    setCurrentUser(userData);

    Cookies.set(COOKIE_NAME, JSON.stringify(userData), { expires: 7, path: '/' });
  };

  const logout = () => {
    setCurrentUser(null);
    Cookies.remove(COOKIE_NAME);
  };

  return (
    <UserContext.Provider value={{ user: currentUser, role: currentUser?.role || null, switchRole, logout }}>
      {isMounted ? children : <LoadingScreen />}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
