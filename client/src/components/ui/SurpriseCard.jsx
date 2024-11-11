import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CoffeeCard({ surprise }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={surprise.image} />
        <Card.Body>
          <Card.Title>{surprise.name}</Card.Title>

          <Card.Title>{surprise.price}</Card.Title>
			{/* {user.id === surprise.userId && `открыто: ${user.name}`} */}
          <Button variant="info">
            <Link to={`/onesurprise/${surprise.id}`}>Подробнее</Link>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
