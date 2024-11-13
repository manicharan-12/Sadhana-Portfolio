import React from "react";

export const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  >
    {children}
  </button>
);

export const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export const Textarea = ({ ...props }) => (
  <textarea
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export const Tabs = ({ children }) => <div className="mb-4">{children}</div>;

export const TabsList = ({ children }) => (
  <div className="flex border-b border-gray-200">{children}</div>
);

export const TabsTrigger = ({ children, isActive, onClick }) => (
  <button
    className={`px-4 py-2 ${
      isActive
        ? "border-b-2 border-blue-500 text-blue-500"
        : "text-gray-500 hover:text-gray-700"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export const TabsContent = ({ children, isActive }) => (
  <div className={isActive ? "block" : "hidden"}>{children}</div>
);
