import React, { useState, useEffect } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import AffirmationCard from './AffirmationCard'

function Affirmations() {
  const [affirmationsList, setAffirmationsList] = useState(null)
  useEffect(() => {
    fetch('https://affirm-bc-api.web.app/affirmations')
      .then(response => response.json())
      .then(data => setAffirmationsList(data))
      .catch(err => console.log({ err }))
  }, [])
  return (
    <CardColumns>
      {!affirmationsList ? <h2>Loading...</h2> : affirmationsList.map(one => {
        return <AffirmationCard affirmation={one} />
      })}
    </CardColumns>
  )
}

export default Affirmations

// rfc emmet shortcut

