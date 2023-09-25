import React from 'react'
import { Modal, Button } from 'react-bootstrap'
function ModalDialog() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }
  return (
    <>
      <Button variant="success" onClick={initModal}>
        Add More Names
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Add More Names</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input style={{margin:'2px'}} placeholder='ज्येष्ठताक्रमांक'></input>
          <input style={{margin:'2px'}} placeholder='शासकीयकर्मचाऱ्याचेनाव'></input>
          <input style={{margin:'2px'}}  placeholder='संबंधितपदावरीलनियुक्तीचामार्ग'></input>
          <input style={{margin:'2px'}} placeholder='जन्मतारीख'></input>
          <input style={{margin:'2px'}} placeholder='प्रवर्ग '></input>
          <input style={{margin:'2px'}} placeholder='खात्यातप्रवेशकेल्याचादिनांक'></input>
          <input style={{margin:'2px'}} placeholder='संवर्गातप्रत्यक्षरुजूदिनांक'></input>
          <input style={{margin:'2px'}} placeholder='ज्येष्ठतादिनांक'></input>
          <input style={{margin:'2px'}} placeholder='पदोन्नतीनियमितझाल्याचादिनांक'></input>
          <input style={{margin:'2px'}} placeholder='सेवानिवृत्तीचादिनांक'></input>
          <input style={{margin:'2px'}} placeholder='शैक्षणिकअर्हता'></input>
          <input style={{margin:'2px'}} placeholder='सेवार्थआयडी'></input>
          <input style={{margin:'2px'}} placeholder='संपर्कक्र'></input>
          <input style={{margin:'2px'}} placeholder='ईमेल'></input>
          <input style={{margin:'2px'}} placeholder='Gender'></input>
          <input style={{margin:'2px'}} placeholder='कार्यालयाचेनाव'></input>
          <input style={{margin:'2px'}} placeholder='कार्यालयाचासंपर्कक्र'></input>
          <input style={{margin:'2px'}} placeholder='कार्यालयाचाईमेल'></input>
          <input style={{margin:'2px'}} placeholder='Post'></input>
          <input style={{margin:'2px'}} placeholder='Division'></input>
          <input style={{margin:'2px'}} placeholder='District'></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalDialog