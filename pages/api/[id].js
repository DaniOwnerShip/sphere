// Definir la función que maneja la solicitud
export default function handler(req, res) {
  // Comprobar el método HTTP
  if (req.method === 'GET') {
    // Acceder al parámetro dinámico id
    const { id } = req.query;
    // Buscar los datos del usuario con ese id
    const user = findUserById(id);
    // Enviar una respuesta en formato JSON con los datos del usuario
    res.status(200).json(user);
  } else {
    // Enviar un error si el método no es GET
    res.status(405).json({ message: 'Método no permitido' });
  }
}
