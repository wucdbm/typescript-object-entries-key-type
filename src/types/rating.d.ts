declare type RatingFields =
    'flights' |
    'forms' |
    'easeOfUse' |
    'translation' |
    'overall';

declare type RatingValues = 0 | 1 | 2 | 3 | 4 | 5;

declare type RatingWithLabel = {
    rating: RatingValues
    label: string
}

declare type RatingStarsCollection = {
    [K in RatingFields]: RatingWithLabel;
}

declare type Rating = {
    stars: RatingStarsCollection
    feedback: string
}

declare type BackendStars = {
    [K in RatingFields]: RatingValues;
}

declare type BackendRatingRequest = {
    stars: BackendStars
    feedback: string
}


