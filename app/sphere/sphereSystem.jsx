"use client"

import React, { useState, useRef } from 'react';
import Ring from './ring';

import '../../styles/sphere.css';


function SphereSystem({ systemTeam }) { 

  const [showRing, setShowRing] = useState(false);
  const [sphereText, setSphereText] = useState(systemTeam.name);  
  const systemBox = useRef(null);
  const sphere = useRef(null);

  const sphereClick = (event) => {
    sphere.current.classList.add('active');
    systemBox.current.classList.add('active');
    setShowRing(true);
  };

  const updateSphere = (txt) => {
    setSphereText(txt); 
  }

  const closeRing = (txt) => {
    sphere.current.classList.remove('active');
    systemBox.current.classList.remove('active');
    setSphereText(txt);
    setShowRing(false);
  }  

  return (

    <div className="systemBox" ref={systemBox}>

      <div className='sphere' ref={sphere} onClick={(event) => sphereClick(event)}>

        <strong>{sphereText}</strong>

      </div>

      {showRing && <Ring team={systemTeam} systemBox={systemBox} updateSphere={updateSphere} closeRing={closeRing} />}

    </div>

  );

}


export default SphereSystem;