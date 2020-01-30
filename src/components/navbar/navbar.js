import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './navbar.css'

export default class NavBar extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	show: false,
	  };
	}
	
	handleShow = () => this.setState({ show: true });

	handleClose = () => this.setState({ show: false });

	handleHide = () => this.setState({ show: false })

	render() {
		return (
			<div>
			<Navbar bsPrefix='navbar' expand="lg">
			  <Navbar.Brand bsPrefix='home' href="#home">SAP</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			    	<Button bsPrefix='button' onClick={this.handleShow}>Entrar</Button>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>

			<Modal show={this.state.show} onHide={this.handleHide}>
	      <Modal.Header closeButton>
	        <Modal.Title>Modal heading</Modal.Title>
	      </Modal.Header>
	      <Modal.Body>
	      	<div>
	      		<input placeholder='Insira sua matrícula do SUAP'/>
	      		<br/>
	      		<input placeholder='Insira sua senha do SUAP'/>
	      	</div>
	      </Modal.Body>
	      <Modal.Footer>
	        <Button variant="secondary" onClick={this.handleClose}>
	          Cancelar
	        </Button>
	        <Button variant="primary" onClick={this.handleClose}>
	          Entrar
	        </Button>
	      </Modal.Footer>
	    </Modal>
	    </div>
		)
	}
}
