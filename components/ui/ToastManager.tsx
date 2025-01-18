'use client'
import React, { createContext, useContext, useState } from "react";
import { Toast } from "./DaisyToast";

type ToastContextType = {
  addToast: (message: string, variant?: "default" | "destructive") => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<{ id: string; message: string; variant?: "default" | "destructive" }[]>([]);

  const addToast = (message: string, variant?: "default" | "destructive") => {
    const id = Math.random().toString(36).substring(7); // Generate a unique ID
    setToasts((prev) => [...prev, { id, message, variant }]);

    // Remove the toast after 3 seconds
    setTimeout(() => setToasts((prev) => prev.filter((toast) => toast.id !== id)), 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          variant={toast.variant}
          onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
        />
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
