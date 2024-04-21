// Impor express
const express = require('express');
const path = require('path');

// Inisialisasi aplikasi express
const app = express();

// Definisikan port tempat server akan berjalan
const port = 3000;

// Tentukan lokasi dari file index.html
const indexPath = path.join(__dirname, 'index.html');

app.use(express.static(path.join(__dirname)));

// Layan index.html saat ada permintaan ke root endpoint (/)
app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

// Jalankan server pada port yang telah ditentukan
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
