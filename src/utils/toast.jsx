import { useState, useEffect } from "react";

const Toast = ({ type, message, isVisible, onClose }) => {
  const [color, setColor] = useState("bg-green-500");

  useEffect(() => {
    switch (type) {
      case "success":
        setColor("bg-green-500");
        break;
      case "notify":
        setColor("bg-blue-500");
        break;
      case "warning":
        setColor("bg-orange-500");
        break;
      case "error":
        setColor("bg-red-500");
        break;

      default:
        break;
    }
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Hide the toast after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 ${color} text-white px-4 py-2 rounded-lg shadow-lg`}
    >
      {message}
    </div>
  );
};

export default Toast;
