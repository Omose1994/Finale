import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faBook, faEye} from '@fortawesome/free-solid-svg-icons';
import {
    NavLink
} from "react-router-dom";


class EbookList extends Component {
    state = { 
        ebooks: []
     }

     handleDelete = async(ebook) => {
       const response =  await axios.delete('https://crudcrud.com/api/f67110a200684a1694bf7f7086a8cee7/ebooks/'+ ebook._id);
       if(response.status === 200){
           window.location.reload();
       }
     }

     async componentDidMount (){
        const response =  await axios.get('https://crudcrud.com/api/f67110a200684a1694bf7f7086a8cee7/ebooks');
        console.log(response)
        let ebooks = response.data;
        this.setState({ebooks})
     }
    render() { 
        return ( 
            <div className="row">
                {this.state.ebooks.map(ebook =><div className="col-md-4 mb-2" key={ebook._id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <h1 style={{fontSize: '5rem'}}><FontAwesomeIcon icon={faBook} /></h1>
                        <Card.Title>{ebook.name}</Card.Title>
                        <Card.Text>
                         {ebook.desc}
                        </Card.Text>
                        <Button variant="primary" className="m-2">$ {ebook.price}</Button>
                        <NavLink to={`/book/${ebook._id}`} className="m-2"><FontAwesomeIcon icon={faEye} /></NavLink>
                        <Button onClick={()=>this.handleDelete(ebook)} variant="danger" className="m-2"><FontAwesomeIcon icon={faTrash} /></Button>
                       
                    </Card.Body>
                </Card>
            </div>)}
            </div> 
        );
    }
}
 
export default EbookList;