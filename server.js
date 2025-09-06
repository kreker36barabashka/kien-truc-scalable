const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kien-truc-scalable', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối thành công đến MongoDB!'))
  .catch(err => console.error('Không thể kết nối đến MongoDB:', err));

// Định nghĩa một dịch vụ mẫu
app.get('/api/test', (req, res) => {
  res.send('API hoạt động bình thường!');
});

app.listen(port, () => {
  console.log(`Máy chủ đang chạy trên http://localhost:${port}`);
});