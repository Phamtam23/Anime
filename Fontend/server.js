const express = require('express');
const path = require('path');
const app = express();

// Phục vụ các tệp tĩnh trong thư mục hiện tại
app.use(express.static(__dirname));

// Điều hướng tất cả các yêu cầu khác đến anime.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'anime.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




