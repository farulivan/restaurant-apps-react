import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RestaurantsSource from './data/resturants-source';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import Detail from './components/Detail';
// import Favorite from './components/Favorite';
import ErrorPage from './ErrorPage';
import { Restaurant } from './types/restaurants.type';

const App = () => {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState<Restaurant[]>(
    []
  );

  const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  const getAllRestaurants: () => Promise<void> = async () => {
    await RestaurantsSource.restaurantsList().then(listRestaurant =>
      setAllRestaurants(listRestaurant)
    );
  };

  const addFavoriteRestaurantHandler = (restaurant: Restaurant) => {
    setFavoriteRestaurants(prev => [...prev, restaurant]);
  };

  const removeFavoriteRestaurantHandler = (id: string) => {
    setFavoriteRestaurants(prev =>
      prev.filter(restaurant => restaurant.id !== id)
    );
  };

  const checkFavoriteHandler = (id: string) => {
    if (!favoriteRestaurants) {
      return false;
    }

    favoriteRestaurants.map(restaurant => {
      if (restaurant.id === id) {
        console.log(true)
        return true;
      }
    });

    return false;
  };

  useEffect(() => {
    getAllRestaurants();
    setIsLoading(false);
  }, [allRestaurants]);

  return (
    <BrowserRouter>
      <div className="root-container text-xs text-fontPrimary bg-secondary min-h-screen max-h-full flex flex-col justify-between items-center">
        <Header />
        <main id="mainContent" className="main p-7 w-full" tabIndex={0}>
          <Routes>
            <Route
              path="/"
              element={
                <RestaurantList
                  restaurants={allRestaurants}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="detail/:id"
              element={
                <Detail
                  addFavorite={addFavoriteRestaurantHandler}
                  removeFavorite={removeFavoriteRestaurantHandler}
                  checkFavorite={checkFavoriteHandler}
                />
              }
            />
            <Route
              path="favorite"
              element={
                <RestaurantList
                  restaurants={favoriteRestaurants}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
