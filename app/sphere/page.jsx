"use client"

import '../../styles/sphere.css'; 
import React, { useState, useRef } from 'react';
import APIServices from '../../services/APIServicesClass';
import SphereSystem from './sphereSystem'; 
import Draggable from 'react-draggable';

var TEAM1_id = '6582315543bcbc56797177aa';


function getTeam(setter, id) {
  APIServices.getTeamStructureBy_id({id})
    .then(team => {
      setter(team.team[0]);
    })
    .catch(error => {
      console.error('getTeam error: ', error);
    });
}

 async function test() {
  
  console.log('test');
  try {
    const response = await fetch(`https://sphere-iota.vercel.app/test`);
    console.log('test response', response);
    const payload = await response.json();
    console.log('test payload', payload);
    return payload;
  }
  catch (error) {
    console.error('Error getTeamBy_id:', error);
  }
}

function TeamStruture() {
  test();
  return;
  const systemRef = useRef();
  const [systemTeam, setSystemTeam] = useState();


  if (!systemTeam) {
    getTeam(setSystemTeam, TEAM1_id);
  }

  return (

    <div className="sistemsContainer" >

      <Draggable nodeRef={systemRef}   >

        <div ref={systemRef}>

          {systemTeam && <SphereSystem systemTeam={systemTeam} />}

        </div>

      </Draggable>

    </div>
  );

}


export default TeamStruture;



