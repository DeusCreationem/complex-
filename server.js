require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-domain.com' 
    : 'http://localhost:5173',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Application Schema
const ApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  source: { type: String, default: 'landing-page' },
  date: { type: Date, default: Date.now }
});

const Application = mongoose.model('Application', ApplicationSchema);

// Telegram Notification Function
async function sendTelegramNotification(application) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  if (!token || !chatId) {
    console.warn('⚠️ Telegram credentials missing. Skipping notification.');
    return;
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
  const message = `
📬 *Новая заявка с лендинга!*

👤 *Имя:* ${application.name}
📞 *Телефон:* [${application.phone}](tel:${application.phone})
📧 *Email:* [${application.email}](mailto:${application.email})
⏱ *Время:* ${application.date.toLocaleString('ru-RU')}
🌐 *Источник:* ${application.source}

_Не забудь перезвонить в течение 15 минут!_`;

  try {
    await axios.post(url, {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown'
    });
    console.log('✅ Telegram notification sent');
  } catch (error) {
    console.error('❌ Telegram send error:', error.response?.data || error.message);
  }
}

// Application Submission Endpoint
app.post('/submit-application', async (req, res) => {
  try {
    // Валидация данных
    const { name, phone, email } = req.body;
    if (!name || !phone || !email) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    // Создание заявки
    const newApplication = new Application({ 
      name, 
      phone, 
      email,
      source: req.body.source || 'landing-page'
    });

    // Сохранение в базу данных
    await newApplication.save();
    console.log('📥 Application saved to DB:', newApplication);

    // Отправка в Telegram (асинхронно, без ожидания)
    sendTelegramNotification(newApplication);

    // Успешный ответ
    res.status(200).json({ success: true });
    
  } catch (error) {
    console.error('❌ Application processing error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    version: '1.0.0',
    dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`🔗 Endpoint: http://localhost:${port}/submit-application`);
});