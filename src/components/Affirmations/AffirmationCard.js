import React from 'react'
import { Col, Card, Media, Image } from 'react-bootstrap'

function AffirmationCard({ affirmation }) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">
            {affirmation.text}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Text>
            <Media>
              <Media.Body>
                {affirmation.displayName}
              </Media.Body>
              <Image
                className="card-image"
                roundedCircle
                width="36"
                height="36"
                src={affirmation.photoUrl}
                alt={affirmation.displayName}
              />
            </Media>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default AffirmationCard



