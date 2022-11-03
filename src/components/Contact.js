import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = () => {
    return (
        <div className='contact-page' id="contact">
            <h1>Contact Details</h1>
            <h6>Want to get in touch. Drop me a note below</h6>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='form' type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='form' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control className='form' type="password" placeholder="Type your message" />
                </Form.Group>
                <Button className='submit-btn' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}