"use client"

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import '../../../styles/member.css';

import { MemberData } from '../../../components/cards';
import APIServices from '../../../services/APIServicesClass';


 
async function fetchData(queryData) {
  try {
    const data = await APIServices.getMemberData(queryData);
    const dataMember = Object.values(data[0])[1];
    const subTeamID = dataMember._teamOwner;
    const subTeam = await APIServices.getTeamBy_id(subTeamID);
    return { dataMember, subTeam }
  } catch (error) {
    console.error(error);
  }
}


function Member() { 

  const [memberData, setmemberData] = useState(null); 
  const searchParams = useSearchParams();
  const team = searchParams.get('team');
  const member = searchParams.get('member');
  const queryData = { team, member };  
  
 
    if (!memberData) { 
      try {
        fetchData(queryData)
          .then(data => {
            setmemberData(data);
          })
      } catch (error) {
        console.error(error);
      }
    }  
 

  return (

    <>
      {memberData && <MemberData dataObj={memberData} />}
    </>

  );

}

export default Member;




