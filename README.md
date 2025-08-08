# sayHi 👋 - Realtime Chat Application

✨ **Full Stack Realtime Chat App** ✨

---

## 📄 Description

`sayHi` is a robust and feature-rich **real-time chat application** designed to enable seamless communication between users. Built with a modern full-stack approach, it provides a dynamic and interactive messaging experience, complete with user authentication, real-time updates, and an intuitive user interface.

---

## 🌟 Highlights & Features

* **Tech Stack:** Developed using the **MERN Stack** (MongoDB, Express.js, React, Node.js) combined with **Socket.io** for real-time communication, and styled beautifully with **TailwindCSS** and **Daisy UI**.
* **Authentication & Authorization:** Secure user access and permissions managed with **JWT (JSON Web Tokens)**.
* **Real-time Messaging:** Instant message delivery and updates powered by **Socket.io**.
* **Online User Status:** See which users are currently online and available to chat.
* **Global State Management:** Efficient and predictable state handling across the application using **Zustand**.
* **Robust Error Handling:** Comprehensive error management implemented on both the server and client sides for a smooth user experience.
* **Deployment Ready:** Designed with best practices in mind, making it ready for professional and **FREE deployment**.

---

## 🚀 How to Use

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (which comes with Node.js) installed on your system. You'll also need a MongoDB instance running, either locally or a cloud-based service like MongoDB Atlas.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/CJcode6754/sayHi.git
    cd sayHi
    ```

2.  **Install server dependencies:**
    Navigate into the `server` directory and install the required packages.
    ```bash
    cd server
    npm install
    ```

3.  **Install client dependencies:**
    Navigate into the `client` directory and install the required packages.
    ```bash
    cd ../client
    npm install
    ```

### Running the Application

1.  **Configure Environment Variables (Server):**
    Create a `.env` file in the `server` directory and add your MongoDB URI, JWT secret, and any other necessary environment variables.
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=5000 # Or your preferred server port
    CLAUDINARY_CLOUD_NAME=your_claudinary_claude_name
    CLAUDINARY_API_KEY=your_claudinary_api_key
    CLAUDINARY_API_SECRET=your_claudinary_api_secret
    NODE_ENV=development
    ```

2.  **Start the server:**
    From the `server` directory, run the server.
    ```bash
    cd server
    npm run dev
    ```
    (Note: If `npm run dev` doesn't work, check your `server/package.json` for the correct script, e.g., `node index.js` or `node server.js`).

3.  **Start the client:**
    From the `client` directory, run the client application.
    ```bash
    cd ../client
    npm run dev
    ```

4.  **Access the application:**
    Once both the server and client are running, open your web browser and navigate to the address where the client is served (typically `http://localhost:5173`).

---
