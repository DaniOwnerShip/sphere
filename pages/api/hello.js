// Definir la función que maneja la solicitud
export default function handler(req, res) {
    // Comprobar el método HTTP
    if (req.method === 'GET') {
      // Enviar una respuesta en formato JSON con el mensaje de "Hola mundo"
      res.status(200).json({ message: 'Hola mundo' });
    } else {
      // Enviar un error si el método no es GET
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  