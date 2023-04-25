import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const CONTACT = () => {
    const nameRef=useRef()
    const emailRef=useRef()
    const phoneRef=useRef()
    async function addData(e){
        e.preventDefault();
        const details={Name:nameRef.current.value,Email:emailRef.current.value,Phone:phoneRef.current.value}
        const response=await fetch(`https://contact-us-2693d-default-rtdb.firebaseio.com/Users.json`,{
            method:'POST',
            body:JSON.stringify(details)
        })
        console.log(response.json())
        nameRef.current.value=''
        emailRef.current.value=''
        phoneRef.current.value=''
    }
  return (
    <Form className='container d-grid m-auto p-auto' style={{top:'8rem',position:'absolute'}} onSubmit={addData}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name" ref={nameRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter phone number" ref={phoneRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Above details are correct" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CONTACT;
