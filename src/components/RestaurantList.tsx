import { useEffect, useState } from 'react';
import { Restaurant } from '../types/restaurants.type';
import RestaurantsSource from '../data/resturants-source';
import CONFIG from '../globals/config';
import { StarIcon } from '../assets/icons/icons';
import { Link } from 'react-router-dom';

import { SpinningWheel } from '../assets/icons/animation';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const getRestaurants: () => Promise<void> = async () => {
    await RestaurantsSource.restaurantsList().then(listRestaurant =>
      setRestaurants(listRestaurant)
    );
  };

  useEffect(() => {
    getRestaurants();

    if (restaurants) {
      setIsLoading(false);
    }
  }, [restaurants]);

  return (
    <section
      className={
        isLoading
          ? 'restaurant w-full flex flex-col justify-center items-center'
          : 'restaurant w-full'
      }
    >
      <h3 className="restaurant__label font-semibold text-base">
        {isLoading ? <SpinningWheel /> : 'Explore Restaurants'}
      </h3>
      {restaurants
        ? restaurants.map(
            ({ id, name, pictureId, city, description, rating }) => {
              return (
                <Link
                  className="restaurant__item flex p-4 mt-4 rounded-xl bg-white cursor-pointer text-fontPrimary shadow-md shadow-zinc-500 hover:bg-slate-300"
                  key={id}
                  id={id}
                  to={`/detail/${id}`}
                >
                  <div className="restaurant__image w-1/3">
                    <img
                      className="lazyload w-full h-full object-cover bg-skeleton1 rounded-md"
                      src={`${CONFIG.BASE_IMAGE_URL}small/${pictureId}`}
                      alt={`picture of ${name}`}
                    />
                  </div>
                  <div className="restaurant__info pl-3 w-2/3">
                    <p className="restaurant__name text-base font-semibold">
                      {name}
                    </p>
                    <p className="restaurant__city text-fontSecondary font-normal">
                      {city}
                    </p>
                    <p className="restaurant__description text-fontSecondary mt-3 text-sm w-full line-clamp-4">
                      {description}
                    </p>
                    <div className="restaurant__rating mt-3 font-light flex items-center gap-1">
                      <StarIcon />
                      <span className="text-base font-semibold">{rating}</span>
                      /5
                    </div>
                  </div>
                </Link>
              );
            }
          )
        : null}
    </section>
  );
}

export default RestaurantList;
