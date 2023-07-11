import React from 'react'
import project1 from '../Images/brainstorm.gif'
import project2 from '../Images/download.jpg'
import project3 from '../Images/img2.jpg'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'


export const Project = () => {

  const ProjectList = [   //make sure the mapping value is in array 
     
    {
      id:1,
      name:"Project1",
      imageUrl:project1,
    },
    {
      id:1,
      name:"Project1",
      imageUrl:project2,
    },
    {
      id:1,
      name:"Project1",
      imageUrl:project3,
    },

  ]

  return (
    <div className='projects'>
      <h2><font>Projects</font></h2>
      <div className='wrapper'>
        {ProjectList.map((item) => {
          return(
          <motion.div 
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          >
            <Card>
              <Card.Img variant='top' src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </motion.div>
          )
        }) }
      </div>
    </div>
  )
}
