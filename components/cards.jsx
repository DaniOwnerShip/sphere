


// DEV
export function MemberData({ dataObj }) {
    const data = dataObj.dataMember; 
    const subteamKey = Object.keys(dataObj.subTeam)[1];
    console.log('data.skills', data.skills);


    const linkbtn = () => {
        //   navigate('/technicians' ); 
    };

    return (

        <div className='Container'>

            <div className='memberContainer header'>
                <h1>Member Data </h1>
            </div>

            <div className='memberContainer data'>
                <p>TEAM:  </p><h3> {data.team} </h3>
                <p>ROL:  </p><h3> {data.rol} </h3>
                <p>OWNER:  </p><h3> {data.name} </h3>
            </div>

            <div className='memberContainer skillsdata'>
                <p>SKILSS:  </p>
                <h3>  {Object.entries(data.skills).map(([skill, value]) => (
                    <li key={skill}>
                        {skill}: {value}
                    </li>
                ))}  </h3>
                {/* <h3>Electrical:  {data.skills.electrical}  </h3>
           <h3>Mechanical: {data.skills.mechanical} </h3>
           <h3>Chemical: {data.skills.chemical} </h3>  */}
            </div>

            <div className='memberContainer team'>
                <p>subTeam:</p>
                <h3> {subteamKey} </h3>
                {/* <button onClick={( ) => getTeamOwner( data._teamOwner)}>  getTeamOwner</button>  */}
            </div>

            <button onClick={() => linkbtn()}>back</button>
        </div>

    );
}

