import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class EbookForm extends Component {
    state = { 
        data: {
            name:'',
            price:'',
            desc:''
        }
     }

     handleChange = (e) => {
        e.preventDefault();
        let data = {...this.state.data};
        data[e.target.name] = e.target.value;
        this.setState({data});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        let data = {...this.state.data};
        const response = await axios.post('https://crudcrud.com/api/f67110a200684a1694bf7f7086a8cee7/ebooks', data);
        if(response.status === 200){
            window.location.href = '/';
        }
    }


    render() { 
        return ( 
            <div className="container mt-5">
                <h3>Please fill the form below to add a new book</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="name" placeholder="Iced Mountain" value={this.state.data.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="desc" placeholder="A tale about snowwhite and the seven dwarf" value={this.state.data.desc} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Cost</Form.Label>
                        <Form.Control  onChange={this.handleChange} type="text" name="price" placeholder="100" value={this.state.data.cost}  />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
         );
    }
}
 
export default EbookForm;