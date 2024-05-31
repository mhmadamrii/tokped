export type TRating = {
  rate: number;
  count: number;
};

export type TProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: TRating;
};
