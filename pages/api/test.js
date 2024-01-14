
 
export default function handler(req, res) {
    console.log(`function handler`); 
    if (req.method === 'GET') { 
      res.status(200).json({ message: 'Hola mundo' });
    } else { 
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  
