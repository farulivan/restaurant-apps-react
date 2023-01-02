// import CONFIG from '../globals/config';
import { useEffect, useState } from 'react';
import RestaurantsSource from '../data/resturants-source';
import CONFIG from '../globals/config';

export type Restaurant = {
  id: string;
  name: string;
  description: string;
  pictureId: string;
  city: string;
  rating: number;
};

function RestaurantList() {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const getRestaurants: () => Promise<void> = async () => {
    await RestaurantsSource.restaurantsList().then(listRestaurant =>
      setRestaurants(listRestaurant)
    );
  };

  useEffect(() => {
    getRestaurants();
  }, [restaurants]);

  return (
    <div>
      {restaurants
        ? restaurants.map(
            ({ id, name, pictureId, city, description, rating }) => {
              return (
                <a
                  className="restaurant__item flex p-4 mt-4 rounded-xl bg-white cursor-pointer text-fontPrimary shadow-md shadow-zinc-500 hover:bg-slate-300"
                  id={id}
                  href="/#/detail/${id}"
                >
                  <div className="restaurant__image w-1/3">
                    <img
                      className="lazyload w-full h-full object-cover bg-skeleton1 rounded-md"
                      src={`${CONFIG.BASE_IMAGE_URL}small/${pictureId}`}
                      alt={`picture of ${name}`}
                    />
                  </div>
                  <div className="restaurant__info pl-3 w-2/3">
                    <p className="restaurant__name text-base font-semibold">{name}</p>
                    <p className="restaurant__city text-fontSecondary font-normal">{city}</p>
                    <p className="restaurant__description text-fontSecondary mt-3 text-sm w-full line-clamp-4">{description}</p>
                    <p className="restaurant__rating mt-3 font-light">
                      ⭐ <span className="text-base font-semibold">{rating}</span>/5
                    </p>
                  </div>
                </a>
              );
            }
          )
        : null}
    </div>
  );
}

export default RestaurantList;
