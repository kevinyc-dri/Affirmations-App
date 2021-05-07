import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

function PostNew(props) {
  const [newText, setNewText] = useState('')
  const handleSubmit = () => {
    fetch()
  }
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Post an affirmation
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          rows="3"
          cols="40"
          placeholder="Your affirmation here...">
        </textarea>
      </Modal.Body>
    </Modal>
  )
}

export default PostNew