"use client"

// const HOST = process.env.HOST || 'localhost';

class APIServices {



  static async testapiservice() {
    console.log('testapiservice>>>:');
    try {
      const response = await fetch('http://localhost:4000/api/user/test');
      const payload = await response.json();
      console.log('testapiservice>>>:', payload);
      return payload;
    }
    catch (error) {
      console.error('error getStructuredTeam>:', error);
    }
  }


  // const response = await fetch(`https://sphere-iota.vercel.app/api/user/teamStructureBy_id?teamId=${teamId}`);
  // const response = await fetch(`https://sphere-iota.vercel.app/api/user/teamStructureBy_id?teamId=6582315543bcbc56797177aa`);
  // const response = await fetch(`/teamStructureBy_id?teamId=${teamId}`);
  // const response = await fetch(`http://localhost:4000/api/user/teamStructureBy_id?teamId=6582315543bcbc56797177aa`);
  //const response = await fetch(`/test`);

  static async getTeamStructureBy_id(teamId) {

    console.log('getTeamStructureBy_id>>>:', teamId);
    try {
      console.log('URL del fetch:', `https://${process.env.HOST}/api/user/teamStructureBy_id?teamId=6582315543bcbc56797177aa`);
       //const response = await fetch(`https://${process.env.HOST}/api/user/teamStructureBy_id?teamId=6582315543bcbc56797177aa`);
      
      const response = await fetch(`https://sphere-iota.vercel.app/api/user/teamStructureBy_id?teamId=6582315543bcbc56797177aa`);
      console.log('Respuesta de la API antes de JSON.parse:', response);

      const payload = await response.json();
      console.log('payload>>>:', payload);
      return payload;
    }
    catch (error) {
      console.error('error getStructuredTeam>:', error);
    }
  }



  static async getTeamBy_id(teamId) {
    try {
      const response = await fetch(`https://sphere-iota.vercel.app/api/user/teamBy_id?teamId=${teamId}`);
      const payload = await response.json();
      return payload;
    }
    catch (error) {
      console.error('Error getTeamBy_id:', error);
    }
  }


  static async getMemberData(data) {

    try {
      const response = await fetch(`https://sphere-iota.vercel.app/api/user/memberData`, {
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
      console.error('Error getMemberData:', error.message);
    }
  }


}

export default APIServices;
