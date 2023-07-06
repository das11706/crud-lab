// import React, { Component } from 'react';
// import Review from './Review';

// class Reviews extends Component {

//   renderReviews = () => this.props.reviews.map((review) => <Review deleteReview={this.props.deleteReview} key={review.id} review={review} />);
//   render() {

//     return (
//       <ul>
//         Reviews
//         {this.renderReviews()}
//       </ul>
//     );
//   }
// };

// export default Reviews;



import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;