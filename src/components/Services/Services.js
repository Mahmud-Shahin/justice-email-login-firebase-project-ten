import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import img from './legal protection.jpg'
import img1 from './concept-law-justice-legal-service-services-lawyer-notary-men-against-backdrop-city-discuss-issues-woman-works-laptop-183989862.jpg'
import img2 from './Legal-Services---mobile-page.jpg'
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h2>My Services</h2>
            <div className='container mt-4'>
                <CardGroup>
                    <Card>
                        <Card.Img className='h-100 w-100' variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>legal Protection</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Button variant="warning" type="submit" >
                            more detail
                        </Button>

                    </Card>
                    <Card>
                        <Card.Img className='h-100 w-100' variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Divorce problem Solution</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Button variant="warning" type="submit" >
                            more detail
                        </Button>

                    </Card>
                    <Card>
                        <Card.Img className='h-100 w-100' variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>legal justice</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Button variant="warning" type="submit"  >
                            more detail
                        </Button>

                    </Card>
                </CardGroup>
            </div>


        </div>
    );
};

export default Services;