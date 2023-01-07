import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';
// import RestaurantsData from '../types/restaurants.type';

class RestaurantsSource {
  static async restaurantsList() {
    try {
      const response = await axios.get(API_ENDPOINT.LIST);
      return response.data.restaurants;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Axios Error');
      } else if (error instanceof Error) {
        console.error('Error Fetching Data');
      } else {
        console.error('Unknown Error');
      }
      throw error;
    }
  }

  static async detailRestaurant(id: string) {
    try {
      const response = await axios.get(API_ENDPOINT.DETAIL(id));
      return response.data.restaurant;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Axios Error');
      } else if (error instanceof Error) {
        console.error('Error Fetching Data');
      } else {
        console.error('Unknown Error');
      }
      throw error;
    }
  }

  // static async searchRestaurants(query: string) {
  //   try {
  //     const response = await axios.get(API_ENDPOINT.SEARCH(query));
  //     return response.data.restaurants;
  //   } catch (error) {
  //     console.error(error.message);
  //     throw error;
  //   }
  // }

  // static async addNewReview({ id, name, review }: {
  //   id: string;
  //   name: string;
  //   review: string;
  // }) {
  //   try {
  //     const response = await axios.post(API_ENDPOINT.ADD_REVIEW, {
  //       id,
  //       name,
  //       review,
  //     });
  //     return response.data.message;
  //   } catch (error) {
  //     console.error(error.message);
  //     throw error;
  //   }
  // }
}

export default RestaurantsSource;
