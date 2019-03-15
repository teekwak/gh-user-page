import React from 'react';
import Card from 'react-bootstrap/Card';
import NavBar from '../common/navbar';

export default function BlogPage() {
  return (
    <div>
      <NavBar />
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card&apos;s content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
