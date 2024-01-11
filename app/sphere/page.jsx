"use client"

import '../../styles/sphere.css';
import React, { useState, useRef } from 'react';
import APIServices from '../../services/APIServicesClass';
import SphereSystem from './sphereSystem';
import Draggable from 'react-draggable';

var TEAM1_id = '6582315543bcbc56797177aa';


function getTeam(setter, id) {
  APIServices.getTeamStructureBy_id({ id })
    .then(team => {
      setter(team.team[0]);
    })
    .catch(error => {
      console.error('getTeam error: ', error);
    });
}

 

function TeamStruture() {
 
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


