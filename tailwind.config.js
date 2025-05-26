/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1e40af",
        },

        // Background Colors
        background: {
          light: "#f7fafc",
          medium: "#edf2f7",
          card: "#ffffff",
        },

        // Text Colors
        text: {
          primary: "#1a202c",
          secondary: "#4a5568",
          muted: "#718096",
        },

        // Border & Neutral Colors
        border: {
          light: "#e2e8f0",
          medium: "#cbd5e0",
        },
        gray: {
          light: "#f7fafc",
          medium: "#e2e8f0",
        },

        // Functional Colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },

      boxShadow: {
        // Shadow Colors
        light: "0 1px 2px 0 rgba(0, 0, 0, 0.08)",
        medium: "0 4px 6px -1px rgba(0, 0, 0, 0.12)",
        strong: "0 4px 10px rgba(37, 99, 235, 0.3)",
      },
    },
  },
  plugins: [],
};
