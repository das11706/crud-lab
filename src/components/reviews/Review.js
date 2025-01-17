// import React, { Component } from 'react';

// class Review extends Component {

//   handleOnClick() {
//     this.props.deleteReview(this.props.review.id);
//   }

//   render() {
//     const {review} = this.props;

//     return (
//       <div>
//         <li>
//           {review.text}
//           <button onClick={() => this.handleOnClick()}> X </button>
//         </li>
//       </div>
//     );
//   }

// };

// export default Review;



import React, { Component } from 'react';

class Review extends Component {


  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Review;



