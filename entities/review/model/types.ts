export type TReview = {
  date?: string;
  tags?: string[];
  rating?: number;
  comment?: string;
};

export type TReviewMetods = {
  reset: () => void;
  setDate: (value: string) => void;
  setTags: (value: string[]) => void;
  setComment: (value: string) => void;
  setRating: (value: number) => void;
  getFilledValues: () => TReview;
};

export type TReviewSore = TReviewMetods & TReview;
