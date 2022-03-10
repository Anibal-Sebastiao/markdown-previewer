import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinimize, faMaximize} from "@fortawesome/free-solid-svg-icons"
const Toolbar = ({title, icon ,  onClick, editorMaximized} ) => {
    return (
      <>
          <Navbar bg="dark" variant="dark" className="p-0">
            <Container>
            <Navbar.Brand href="#home"><FontAwesomeIcon icon={icon} /> {title}</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#" onClick={onClick}> 
              { editorMaximized  
                ? <FontAwesomeIcon icon={faMinimize} /> 
                : <FontAwesomeIcon icon={faMaximize} />
              }
              </Nav.Link>
            </Nav>
            </Container>
          </Navbar>
      </>
    )
}

export default Toolbar;
