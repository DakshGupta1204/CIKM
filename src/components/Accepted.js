import React from 'react'
import '/Users/dakshgupta/Desktop/cikm-2024/src/components/Accepted.css'
function Accepted() {
    const acceptedPapers = [
        {
            id:1,
            name:"Paper1",
            link:"https://google.com",
            Contributors:["A","B","C"]
        },
        {
            id:2,
            name:"Paper2",
            link:"https://linkedin.com",
            Contributors:["D","E","F"]
        },
        {
            id:3,
            name:"Paper3",
            link:"https://youtube.com",
            Contributors:["G","H","I"]
        }
    ]
  return (
    
    <div className='paper-container'>
      <h2>The following papers have been accepted at CIKM 2024</h2>
      <h3>Workshop Papers</h3>
      <div className='papers'>
        {
            acceptedPapers.map((paper)=>(
                <div className='paper-main'>
                    <div className='first'>
                        <b>{paper.id}</b>.&nbsp;&nbsp;<b>{paper.name}</b>&nbsp;&nbsp;<a href={paper.link}>PDF</a>
                    </div>
                    <div className='conti'>
                        {paper.Contributors.map((participant)=>(
                            <div>{participant},&nbsp;&nbsp;</div>
                        ))}
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Accepted;
