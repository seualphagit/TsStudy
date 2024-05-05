const express = require('express');
const cors = require('cors');
const fs = require('fs').promises; // 引入用于读取文件的 fs 模块，使用 promises 版本

const app = express();

// 使用 CORS 中间件
app.use(cors());

// 其他路由和中间件定义
app.get('/data', async (req, res) => {
  try {
    const data = await fs.readFile('data.json', 'utf8');
    res.json(JSON.parse(data)); // 将读取的 JSON 字符串解析为 JavaScript 对象，并以 JSON 格式发送给客户端
  } catch (error) {
    console.error('Error reading data.json:', error);
    res.status(500).json({ error: 'Internal server error' }); // 如果发生错误，返回 500 状态码和错误信息给客户端
  }
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
