import React from 'react'
import { Row, Col, Form, FormGroup, FormLabel, FormControl, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

const Contact = () => {

  const handleSubmit = (e) => {

  }
  
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <Row>
        <Col>
        <div className='contact-form'>
          <Form onSubmit={handleSubmit}>
            <FormGroup className='mb-3' controlId='validationCustom01'>
              <FormLabel>Name</FormLabel>
              <FormControl required type='text' placeholder='Name'></FormControl>
            </FormGroup>
            <FormGroup className='mb-3' controlId='validationCustom02'>
              <FormLabel>Email</FormLabel>
              <FormControl required type='text' placeholder='Email'></FormControl>
            </FormGroup>
            <FormGroup className='mb-3' controlId='validationCustom01'>
              <FormLabel>Message</FormLabel>
              <FormControl required as='textarea' placeholder='Message'></FormControl>
            </FormGroup>
            <Button type='submit'>Submit</Button>
          </Form>

        </div>

        </Col>
        <Col>
          <div className='contact-data'>
          <p>
              If you want to chat about a project — email me on
              karanpabscit@gmail.com.
            </p>
            <p>
              I can help designing a website, designing a new product, improving
              an existing part of your product, building a strong design system,
              building websites in Webflow, or designing a custom icon set for
              your business.{" "}
            </p>
            <p>
              Currently based in Berlin, Germany — available for remote-friendly
              work from December 2022.
            </p>
          </div>

          
          <p>
            <ListGroup className='mx-5 mt-3' horizontal>
              <ListGroupItem><a href='https://www.linkedin.com/in/karan-pa-2a2a521bb/' target='_blank'>Linkedin</a></ListGroupItem>
              <ListGroupItem><a href=''>Instagram</a></ListGroupItem>
              <ListGroupItem><a href=''>Xinder</a></ListGroupItem>
              <ListGroupItem><a href='https://github.com/karan-dev3591' target='_blank'>Github</a></ListGroupItem>
            </ListGroup>
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Contact