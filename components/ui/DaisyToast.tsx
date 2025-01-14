'use client'
import React, { useEffect } from "react";
import { X } from "lucide-react";

type ToastProps = {
  message: string;
  variant?: "default" | "destructive";
  onClose: () => void;
};

export const Toast: React.FC<ToastProps> = ({ message, variant = "default", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Auto-close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgClass = variant === "destructive" ? "bg-error text-error-content" : "bg-success text-success-content";

  return (
    <div className={`toast toast-top toast-center fixed z-[1000]`}>
      <div className={`alert ${bgClass} shadow-lg`}>
        <div>
          <span>{message}</span>
        </div>
        <button className="btn btn-ghost" onClick={onClose}>
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
