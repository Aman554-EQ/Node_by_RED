import dotenv from 'dotenv';
import connectDB from './config/database.js';
import app from './app.js';

dotenv.config({ path: './.env' });

const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });

    app.on("error", (error) => {
      console.log("Error in server setup:", error);
    });
  } catch (error) {
    console.log("Error starting server:", error);
  }
};

startServer();
