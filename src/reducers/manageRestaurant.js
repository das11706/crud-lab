// import { combineReducers } from 'redux';
// import cuid from 'cuid';
// export const cuidFn = cuid;


// const rootReducer = combineReducers({
//   restaurants: restaurantsReducer,
//   reviews: reviewsReducer
// });

// export default rootReducer;

// function restaurantsReducer(
//   state = {
//   restaurants: [],
// }, action) {
//   // let idx;
//   switch (action.type) {
//     case "ADD_RESTAURANT":
//       const restaurant = { text: action.text, id: cuidFn() };
//       return {
//         ...state,
//         restaurants: [...state.restaurants, restaurant]
//       }
//       // return [...state, action.restaurants];

//     case "DELETE_RESTAURANT":
//       // idx = state.findIndex(restaurant => restaurant.id === action.id);
//       // return [...state.slice(0, idx), ...state.slice(idx + 1)];

//       const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
//       return { ...state, restaurants}

//     default:
//       return state;
//   }
// }

// function reviewsReducer(
//   state = {
//   reviews: [],
// }, action) {
//   switch (action.type) {

//     case "ADD_REVIEW":
//       const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
//       return { ...state,
//         reviews: [...state.reviews, review]
//       }

//       case 'DELETE_REVIEW':
//       const reviews = state.reviews.filter(review => review.id !== action.id);
//       return {...state, reviews }
  
//     default:
//       return state;
//   }
// }
 
// // export default function manageRestaurants(state, action) {

// // }





import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':

      const restaurant = { text: action.text, id: cuidFn() };
      return {
        ...state,
        restaurants: [ ...state.restaurants, restaurant]
      }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants}

    case 'ADD_REVIEW':

      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
      return { ...state,
        reviews: [...state.reviews, review]
      }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }

    default:
      return state;

  }
};