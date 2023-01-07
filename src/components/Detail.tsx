import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  BackArrowIcon,
  HeartIcon,
  PointLocationIcon,
  StoreIcon,
} from '../assets/icons/icons';
import RestaurantsSource from '../data/resturants-source';
import AddReview from './details/AddReview';
import Category from './details/Category';
import CustomerReviews from './details/CustomerReviews';
import Menu from './details/Menu';
import Star from './details/Star';

export type RestaurantDetail = {
  id: string;
  name: string;
  description: string;
  city: string;
  address: string;
  pictureId: string;
  categories: Categories[];
  menus: Menus;
  rating: number;
  customerReviews: CustomerReviews[];
};

export type Categories = {
  name: string;
};

export type Menus = {
  foods: Foods[];
  drinks: Drinks[];
};

export type Foods = {
  name: string;
};

export type Drinks = {
  name: string;
};

export type CustomerReviews = {
  name: string;
  review: string;
  date: string;
};

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  const [restaurantDetail, setRestaurantDetail] =
    useState<RestaurantDetail | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const getRestaurantDetail: () => Promise<void> = async () => {
    if (typeof id === 'string') {
      await RestaurantsSource.detailRestaurant(id).then(restaurant =>
        setRestaurantDetail(restaurant)
      );
    } else {
      console.error('id not found');
    }
  };

  useEffect(() => {
    getRestaurantDetail();
  }, [restaurantDetail]);

  if (restaurantDetail) {
    const {
      id,
      name,
      description,
      city,
      address,
      pictureId,
      categories,
      menus,
      rating,
      customerReviews,
    } = restaurantDetail;

    return (
      <div className="detail" id={id}>
        <div className="detail__head flex flex-wrap justify-center items-center relative text-white z-10 px-2 h-[200px] w-auto">
          <img
            className="detail__image lazyload w-full h-full object-cover rounded-2xl brightness-[30%] saturate-50 contrast-75 "
            src={`https://restaurant-api.dicoding.dev/images/medium/${pictureId}`}
            alt={`image of ${name}`}
          />
          <div className="detail__content absolute bottom-8 left-8">
            <h3 className="text-2xl font-bold my-2">{name}</h3>
            <Star rating={Math.floor(rating)} />
          </div>
        </div>
        <div
          id="detailInfo"
          className="detail__info my-[-4rem] mx-[-2.5rem] px-12 py-1 bg-white text-fontPrimary relative"
        >
          <button className="back-button absolute top-10 left-7 h-[45px] w-[45px] z-20 bg-primary border-0 rounded-full text-white font-bold flex items-center justify-center">
            <BackArrowIcon />
          </button>
          <button className="back-button absolute top-10 right-7 h-[45px] w-[45px] z-20 bg-primary border-0 rounded-full text-white font-bold flex items-center justify-center">
            <HeartIcon />
          </button>
          <div className="detail__subhead mt-24 mb-10 flex flex-col gap-3">
            <div className="detail__address flex items-center">
              <div className="text-fontPrimary w-[30px] mr-4">
                <PointLocationIcon />
              </div>
              <div className="address__container">
                <h4 className="city text-lg font-semibold">{city}</h4>
                <p className="text-fontSecondary">{address}</p>
              </div>
            </div>
            <div className="detail__category flex items-center">
              <div className="text-fontPrimary w-[30px] mr-4">
                <StoreIcon />
              </div>
              <ul className="flex">
                {categories.map((category, index) => (
                  <Category name={category.name} index={index} />
                ))}
              </ul>
            </div>
          </div>
          <div className="detail__description py-8 border-t-secondary border-t-2">
            <h5 className="mb-2 text-base font-semibold">About</h5>
            <p>{description}</p>
          </div>
          <div className="detail__reviews py-8 border-t-secondary border-t-2">
            <h5 className="mb-2 text-base font-semibold">Reviews</h5>
            <div className="flex flex-col gap-4">
              {customerReviews.map((review, index) => (
                <CustomerReviews
                  review={review.review}
                  name={review.name}
                  date={review.date}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="detail__new-review py-8 border-t-secondary border-t-2">
            <h5 className="mb-2 text-base font-semibold">Add your review</h5>
            <p>What do you think about this resto?</p>
            <AddReview />
            {/* <add-review restaurant-id={id}></add-review> */}
          </div>
          <div className="detail__foods py-8 border-t-secondary border-t-2">
            <h5 className="mb-2 text-base font-semibold">Food Menu</h5>
            <ul className="ml-2">
              {menus.foods.map((food, index) => (
                <Menu name={food.name} index={index} />
              ))}
            </ul>
          </div>
          <div className="detail__drinks py-8 border-t-secondary border-t-2 mb-8">
            <h5 className="mb-2 text-base font-semibold">Drink Menu</h5>
            <ul className="ml-2">
              {menus.drinks.map((food, index) => (
                <Menu name={food.name} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Data not found</div>;
  }
};

export default Detail;
