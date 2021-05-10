import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import { UserAuthContext, AffirmationsContext } from '../../App'
import './modal.css'

function PostNew(props) {
  const [newText, setNewText] = useState('')
  const { user } = useContext(UserAuthContext)
  const { setAffirmationsList } = useContext(AffirmationsContext)
  const handleSubmit = () => {
    const newAffirmation = {
      text: newText,
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
    }
    fetch('https://affirmation-kevin-api.web.app/affirmations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAffirmation)
    })
      .then(response => response.json())
      .then(data => {
        setNewText('')
        props.onHide()
        setAffirmationsList(data)
      })
      .catch(err => console.log(err))
  }
  return (
    <Modal {...props} size="lg" centered backgroundColor>
      <Modal.Header closeButton>
        <Modal.Title>
          Post an affirmation
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          className="modal-text-area"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          rows="6"
          cols="91"
          placeholder="Your affirmation here...">
        </textarea>
      </Modal.Body>
      <Modal.Footer>
        <button className="save-button" onClick={() => handleSubmit()}>Save</button>
      </Modal.Footer>
    </Modal>
  )
}

export default PostNew