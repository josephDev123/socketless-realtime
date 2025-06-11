# ⚡ You Might Not Need WebSockets – Build a Real-Time Chat with Server-Sent Events (SSE)

This project shows how to build a real-time chat app **without WebSockets** using **Server-Sent Events (SSE)** — a native, simpler alternative for pushing server updates to the client.

> ✅ No socket errors  
> ✅ No reconnection logic  
> ✅ Native HTTP-based stream

---

## ❓ What Problem Does This Solve?

Most real-time apps default to WebSockets, but that often introduces:

- Extra libraries on both frontend and backend
- Persistent connections and resource management
- Reconnection edge cases and complexity
- Infrastructure scaling challenges

This project solves that by using **Server-Sent Events (SSE)** to stream updates from server to client with less overhead and no third-party dependencies — ideal when only the server needs to push updates (e.g., chat, notifications, live logs).

---

## 🚀 Features

- Real-time message updates using SSE
- Lightweight and works over HTTP/1.1
- Pure JavaScript (no socket libraries)
- Express backend + React frontend

---

## 🧠 How It Works

- Client sends a message to the server
- Server processes and resolves it to all connected clients via SSE
- Clients receive updates in real-time through an EventSource stream

---

## 📦 Getting Started

1. Start the backend (Express + SSE stream endpoint)
2. Start the frontend (React + EventSource)
3. Type a message — it instantly appears for all connected users

---

## 🤯 Why Not WebSockets?

WebSockets are great, but not always necessary. For one-way, real-time updates from server to client, **SSE is simpler and more efficient**. No need for complex connection handling — just plug and stream.

---

## 👨‍💻 Author

Built by Joseph Uzuegbu

## 📜 License

MIT – free to use, modify, and share.
