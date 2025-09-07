export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ 
      message: 'API is working', 
      timestamp: new Date().toISOString() 
    });
  }

  if (req.method === 'POST') {
    try {
      return res.status(200).json({ 
        message: 'API POST is working', 
        receivedData: req.body,
        timestamp: new Date().toISOString() 
      });
    } catch (error) {
      return res.status(400).json({
        error: 'Failed to parse JSON', 
        message: error.message
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
