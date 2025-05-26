const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/tasks');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tareas', taskRoutes);

const PORT = process.env.PORT || 3012;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend en marcha en http://localhost:${PORT}`);
});
