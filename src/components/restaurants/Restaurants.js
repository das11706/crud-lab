// import React, { Component } from 'react';
// import Restaurant from './Restaurant';

// class Restaurants extends Component {

//   // renderRestaurants = () => this.props.restaurants.map((restaurant) => <Restaurant deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />);

//   render() {
     
//     const { restaurants, deleteRestaurant } = this.props;
//     const restaurantList = restaurants.map(restaurant => {
//       return (
//         <Restaurant
//             key={restaurant.id}
//             restaurant={restaurant}
//             deleteRestaurant={deleteRestaurant}
//         />
//       )
//     });

//     return(
//       <ul>
//         Restaurants Component
//         {/* {renderRestaurants()} */}
//         {restaurantList}
//       </ul>
//     );
//   }
// };

// export default Restaurants;




import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    const { restaurants, deleteRestaurant } = this.props;
    const restaurantList = restaurants.map(restaurant => {
      return (
        <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={deleteRestaurant}
        />
      )
    });

    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;