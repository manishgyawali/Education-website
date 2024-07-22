import React from 'react'
import Banner from '../UI/Banner'
import { teamData } from './../../team';

const Team = () => {
  return (
    <div>
      <Banner />
     <div className='bg-red-400'>

      {teamData.map((val,i)=>{

       <div>
         <h1 key={i}>{val.imageTeam}</h1>
         <h1 key={i}>{val.nameTm}</h1>

         <h1 key={i}>{val.jonTm}</h1>
         <h1 key={i}>{val.positionTm}</h1>


       </div>
        
    
      })
      }
     </div>
    </div>
  )
}

export default Team