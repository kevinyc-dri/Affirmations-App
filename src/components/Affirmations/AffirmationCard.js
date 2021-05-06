import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'


function AffirmationCard({ affirmation }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className="text-center">{affirmation.text}</Card.Text>
        <Card.Title className="text-right">{affirmation.displayName}
          <Image src={affirmation.photoUrl} roundedCircle /></Card.Title>
      </Card.Body>
    </Card>
  )
}

export default AffirmationCard



