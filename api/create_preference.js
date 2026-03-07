const { MercadoPagoConfig, Preference } = require('mercadopago');

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN
});

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  try {
    const { cartItems, payerEmail } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: 'Carrinho vazio' });
    }

    const items = cartItems.map(item => ({
      id: String(item.id),
      title: item.name,
      unit_price: parseFloat(item.price),
      quantity: parseInt(item.quantity),
      description: item.description || '',
      picture_url: item.imgurl || '',
      currency_id: 'BRL',
    }));

    const preference = new Preference(client);
    const frontendUrl = process.env.FRONTEND_URL || 'https://powerlab.netlify.app';

    const result = await preference.create({
      body: {
        items,
        payer: { email: payerEmail },
        back_urls: {
          success: `${frontendUrl}/?payment=success`,
          failure: `${frontendUrl}/?payment=failure`,
          pending: `${frontendUrl}/?payment=pending`,
        },
        auto_return: 'approved',
      }
    });

    res.status(200).json({ init_point: result.init_point });

  } catch (error) {
    console.error('Erro ao criar preferência:', error);
    res.status(500).json({ error: 'Erro ao criar preferência de pagamento' });
  }
};