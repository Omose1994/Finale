import React, { Component } from 'react';
import Review from '../component/Review/Review'
import TopNav from '../component/TopNav';
import axios from 'axios';

class Book extends Component {
    state = { 
        book:{}
     }


    async componentDidMount() {
        const ebookId = this.props.match.params.id;
        const response =  await axios.get(`https://crudcrud.com/api/f67110a200684a1694bf7f7086a8cee7/ebooks/${ebookId}`);
        console.log(response)
        let book = response.data;
        this.setState({book})
    }
    render() { 
        return ( 
            <>
                <TopNav/>
                <div className="container">
                    <div className="m-4"></div>
                    <h3>Book details</h3>
                    <h5>Title:</h5>
                    <p>{this.state.book.name}</p>
                    <h5>Book Summary:</h5>
                    <p>{this.state.book.desc}</p>
                    <h5>Book Price:</h5>
                    <p>${this.state.book.price}</p>
                </div>
                <Review/>
            </> 
        );
    }
}
 
export default Book;