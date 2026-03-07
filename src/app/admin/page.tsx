"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Dynamically load Decap CMS only on the client side
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
      }}
    />
  );
}
