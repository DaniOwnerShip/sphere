"use client"

import '../../styles/sphere.css';
import React, { useState, useRef } from 'react';
import APIServices from '../../services/APIServicesClass';
import SphereSystem from './sphereSystem';
import Draggable from 'react-draggable';

var TEAM1_id = '6582315543bcbc56797177aa';


function getTeam(setter, id) {
  APIServices.getTeamStructureBy_id( id )
    .then(team => {
      console.log('team =>:', team);
      setter(team.team[0]);
    })
    .catch(error => {
      console.error('getTeam error: ', error);
    });
}


// http://localhost:3000/sphere

async function test() {
  APIServices.testapiservice( )
  // APIServices.testapiservice() 
  .then(team => {
    console.log('teamteamteamteamr: ', team); 
  })
  .catch(error => {
    console.error('getTeam error: ', error);
  });
  // try {
  //   // const response = await fetch(`https://sphere-iota.vercel.app/api/user/teamStructureBy_id?teamId=6582315543bcbc56797177aa`);
  //   const response = await fetch(`http://localhost:4000/api/user/test`);
  //   // const response = await fetch(`localhost:4000/test`);
  //   console.log('test response', response);
  //   const payload = await response.json();
  //   console.log('test payload', payload);
  //   return payload;
  // }
  // catch (error) {
  //   console.error('Error test:', error);
  // }
}


const fetchData = async () => {
  console.log('fetchData');
  try {
    const response = await fetch(`https://sphere-iota.vercel.app/api/sphere/testteam`);
     //const response = await fetch('http://localhost:4000/testindex');
    //const response = await fetch('https://sphere-iota.vercel.app/custom-route');
    console.log('fetchData response', response);
    const data = await response.json();
    console.log('fetchData data', data); 
  } catch (error) {
    console.error('Error de red:', error);
  }
};

// Llama a la función para realizar el fetch
  async function getTeamStructureBy_id(teamId) {
  // const teamId = _teamId.id;
  console.log('getTeamStructureBy_id>>>:', teamId);
  const url = `http://localhost:4000/api/${teamId}`;
  try {
    const response = await fetch(url);
    const payload = await response.json();
    console.log('Respuesta de la API antes de JSON.parse:', response);

    console.log('payload>>>:', payload);
    return payload;
  }
  catch (error) {
    console.error('error getStructuredTeam>:', error);
  }
}

function TeamStruture() {
  fetchData();
 return;
  const systemRef = useRef();
  const [systemTeam, setSystemTeam] = useState();


  if (!systemTeam) {
    getTeam(setSystemTeam, TEAM1_id);
     //getTeamStructureBy_id(TEAM1_id);
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


