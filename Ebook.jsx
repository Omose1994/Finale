import React, { Component } from 'react';
import EbookList from './EbookList';

class Ebook extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container mt-4">
                <EbookList/> 
            </div>
        );
    }
}
 
export default Ebook;