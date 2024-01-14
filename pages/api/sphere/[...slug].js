// pages/api/sphere/[...slug].js

export default function handler(req, res) {
    const { method, query } = req;
    const { slug } = query;
  
    switch (method) {
      case 'GET':
        handleGetRequest(slug, res);
        break;
      case 'POST':
        handlePostRequest(slug, req, res);
        break;
      // Puedes agregar más casos según los métodos HTTP que quieras manejar
      default:
        res.status(405).json({ message: 'Método no permitido' });
    }
  }
  
  function handleGetRequest(slug, res) {
    // Lógica para manejar una solicitud GET con el slug
    res.status(200).json({ message: `Manejo de solicitud GET para ${slug}` });
  }
  
  function handlePostRequest(slug, req, res) {
    // Lógica para manejar una solicitud POST con el slug
    res.status(200).json({ message: `Manejo de solicitud POST para ${slug}` });
  }
  