"use client"

import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { createRoot } from 'react-dom/client';  


// REFACTOR ALL pend


function ringStyles() {
  const ringd = document.getElementById('ring');
  ringd.classList.add('active');
  const txtElements = document.getElementsByClassName('txtElement');
  Array.from(txtElements).forEach(element => {
    element.classList.add('active');
  });
}


function Ring({ team, systemBox, updateSphere, closeRing }) {

  const router = useRouter();
  const teamActive = useRef({ ...team, level: 0 });
  const [newData, setNewData] = useState(0);
  const historyTeamsx = useRef([team]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      ringStyles();
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [newData]);

  const elemntClick = (event, indx) => {
    event.stopPropagation();
    if (teamActive.current.team[indx].team) {
      updateSphere(teamActive.current.team[indx].name);
      const i = ++teamActive.current.level;
      teamActive.current = { ...teamActive.current.team[indx], level: i }
      historyTeamsx.current.push(teamActive.current);
      setNewData(teamActive.current.level);
    }
  };

  const ringClick = (event) => {
    event.stopPropagation(); 
    if (teamActive.current.level >= 1) {
      const i = --teamActive.current.level;
      teamActive.current = { ...historyTeamsx.current[i], level: i }
      historyTeamsx.current.pop();
      updateSphere(teamActive.current.name);
      setNewData(i);
    }
    else { return; }
  };

  const handleMouseDown = (event) => {
    event.preventDefault(); 
    if (event.button === 2) {
      closeRing(historyTeamsx.current[0].name);
    }
  };

  const cardTriggerClick = (event, indx) => {
    event.stopPropagation();
    const isCardid = teamActive.current.team[indx].name;
    const elemento = document.getElementById(isCardid);
    if (elemento) { return; }
    const x = event.pageX + 20;
    const y = event.pageY - 30;
    const card = CreateCard(teamActive.current, indx, event, router);
    const cardDiv = document.createElement('div');
    createRoot(cardDiv).render(card);
    document.body.appendChild(cardDiv);
    cardDiv.style.position = 'absolute';
    cardDiv.style.left = `${x}px`;
    cardDiv.style.top = `${y}px`;
  };


  // const radio = systemBox.current.clientWidth / 2;
  const radio = 250;
  const angle = (2 * Math.PI) / historyTeamsx.current[teamActive.current.level].team.length;
  const txtStyle = { transform: ` rotateX(-66deg)`, };

  const elements = historyTeamsx.current[teamActive.current.level].team.map((element, i) => {
    const x = Math.cos(i * angle) * radio;
    const y = Math.sin(i * angle) * radio;
    const elementStyle = { transform: `translate(${x}px, ${y}px)` };

    const elemento = document.getElementById(element.name);
    var ctStyle = {};
    if (elemento) {
      ctStyle = { backgroundColor: '#000000' };
    }
    return (
      <div key={element.name} className="element" style={elementStyle}  >

        <div className='txtElement'
          onClick={(event) => elemntClick(event, i)}
          style={txtStyle}>

          <strong>{element.name}</strong>

          <div className='cardTrigger'
            id={'ct' + element.name}
            onClick={(event) => cardTriggerClick(event, i)}
            style={ctStyle}>
            {i}
          </div>

        </div>

      </div>
    );
  });


  return (
    <div id='ring'
      className='ring'
      onClick={(event) => ringClick(event)}
      onMouseDown={handleMouseDown}
    >
      {elements}
    </div>
  );
}


export default Ring;




function CreateCard(teamActive, index, event, router) {
  const team = teamActive.team[index];
  const teamName = team.name;
  const teamOwner = team.owner;
  const triggerCard = event.target; 
 
  if (triggerCard.id === ('ct' + teamName)) { triggerCard.style.backgroundColor = '#000000'; }

  const linkOwner = async (event) => {
    const data = { teamName, teamOwner };
    router.push(`/sphere/member?team=${data.teamName}&member=${data.teamOwner}`);
    clickCloseCard(event); //must close all cards! or make data popup element 
  };

  const clickCloseCard = (event) => {
    event.stopPropagation();
    const eventID = 'ct' + event.target.id;
    const elemento = document.getElementById(eventID);
    if (elemento) { elemento.style.backgroundColor = '#c58102'; }
    const card = event.target.parentNode;
    card.remove();
  }

  const ownerTeam = () => {
    if (teamActive.team[index].team) {
      const ot = teamActive.team[index].team.map((team, index) => (
        <div key={'ot' + index} style={{ marginLeft: '20px', marginRight: '20px' }}>
          {team.name}
        </div>
      ))
      return ot;
    }
    return "No team";
  }


  return (

    <div  >

      <Draggable    >
        <div className="card">

          <div className="cardFlag"
            id={teamName}
            onClick={(event) => clickCloseCard(event)}
          >
            {index}
          </div>

          <p>Team:</p><strong>{teamName}</strong>
          <p>Owner:</p> <strong className='bLink' onClick={(event) => linkOwner(event)}>{teamOwner}</strong>
          <p>Owner Team:<br /></p><strong>{ownerTeam()}</strong>

        </div>
      </Draggable>
    </div>
  );
}

