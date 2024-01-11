

// const HOST = process.env.HOST || 'localhost';

class APIServices {  

  static async getTeamStructureBy_id(teamId) {
    try { 
      const response = await fetch(`https://sphere-iota.vercel.app/api/user/teamStructureBy_id?teamId=${teamId}`);
      const payload = await response.json();
      return payload;
    }
    catch (error) {
      console.error('error getStructuredTeam:', error);
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
