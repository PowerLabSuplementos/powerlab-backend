const admin = require('../lib/firebase-admin');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  try {
    await runMiddleware(req, res, upload.single('image'));

    if (!req.file) {
      return res.status(400).json({ error: 'Nenhuma imagem enviada' });
    }

    const bucket = admin.storage().bucket();
    const fileName = `produtos/${Date.now()}_${req.file.originalname}`;
    const file = bucket.file(fileName);

    await file.save(req.file.buffer, {
      metadata: { contentType: req.file.mimetype },
      public: true,
    });

    const url = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
    res.status(200).json({ url });

  } catch (error) {
    console.error('Erro ao fazer upload:', error);
    res.status(500).json({ error: 'Erro ao fazer upload da imagem' });
  }
};