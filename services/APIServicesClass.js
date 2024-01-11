
class APIServices {


  static async getTeamStructureBy_id(teamId) {
    try {
      const response = await fetch(`http://localhost:3000/api/user/teamStructureBy_id?teamId=${teamId}`);
      const payload = await response.json();
      return payload;
    }
    catch (error) {
      console.error('error getStructuredTeam:', error);
    }
  }



  static async getTeamBy_id(teamId) {
    try {
      const response = await fetch(`http://localhost:3000/api/user/teamBy_id?teamId=${teamId}`);
      const payload = await response.json();
      return payload;
    }
    catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }


  static async getMemberData(data) {

    try {
      const response = await fetch('http://localhost:3000/api/user/memberData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        return responseData;
      } else {
        throw new Error('Error POST');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }


}

export default APIServices;
