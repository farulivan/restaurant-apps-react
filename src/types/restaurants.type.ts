export default interface RestaurantsData {
  error: boolean;
  message: string;
  count: number;
  restaurants: [
    {
      id: string;
      name: string;
      description: string;
      pictureId: string;
      city: string;
      rating: number;
    },
  ];
}
