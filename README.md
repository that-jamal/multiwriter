---

# MultiWriter

Multi Writer is a collaborative writing application that allows multiple users to write and view the same document in real-time. This application includes a live server and a database for persistent storage, ensuring that all changes are saved and synchronized across all users.

## Features

- **Real-time Collaboration**: Multiple users can write and edit the document simultaneously with changes reflected in real-time.
- **Persistent Storage**: All changes are saved to a database, ensuring that no data is lost and users can access their documents anytime.
- **Live Server**: A live server handles all client requests and updates, providing a seamless collaborative experience.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Next.js, React.js, Tailwind CSS
- **Database**: PostgreSQL
- **Real-time Updates**: Socket.io
- **Languages**: TypeScript
- **Build Tools**: TSX, PostCSS

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repo**
   ```sh
   git clone https://github.com/your-username/multi-writer.git
   ```

2. **Navigate to the project directory**
   ```sh
   cd multi-writer
   ```

3. **Install dependencies**
   ```sh
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL=your_postgresql_database_url
   NEXT_PUBLIC_SOCKET_URL=your_socket_io_server_url
   ```

5. **Start the development server**
   ```sh
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Create or join a document.
3. Start collaborating in real-time!

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs linting on the project files.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
