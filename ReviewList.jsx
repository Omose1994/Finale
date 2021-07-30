import React, { Component } from 'react';

class ReviewList extends Component {
    state = { 
        reviews:[]
     }

    data = [

    ];

    componentDidMount() {
        this.setState({reviews: this.data})
    }
    render() { 
        return (
            <div>
            
                <hr/>
                {this.state.reviews.map(review => 
                <div>
                    <h4>{review.name}</h4>
                    <p>{review.review}</p>
                    <hr/>
                </div>
                )}
        </div> 
        );
    }
}
 
export default ReviewList;