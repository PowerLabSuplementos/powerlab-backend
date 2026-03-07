const admin = require('../lib/firebase');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const db = admin.firestore();

    if (req.method === 'GET') {
      const snapshot = await db.collection('produtos').get();
      const produtos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return res.status(200).json(produtos);
    }

    if (req.method === 'POST') {
      const produto = req.body;
      const ref = await db.collection('produtos').add(produto);
      return res.status(201).json({ id: ref.id, ...produto });
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      await db.collection('produtos').doc(id).delete();
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Método não permitido' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
