const rating: Rating = {
    stars: {
        flights: {
            rating: 5,
            label: 'Some Label'
        },
        forms: {
            rating: 5,
            label: 'Some Label'
        },
        easeOfUse: {
            rating: 5,
            label: 'Some Label'
        },
        translation: {
            rating: 5,
            label: 'Some Label'
        },
        overall: {
            rating: 5,
            label: 'Some Label'
        },
    },
    feedback: 'some free text feedback'
};

const requestData: BackendRatingRequest = {
    stars: Object.fromEntries(
        Object.entries(rating.stars).map((v: [RatingFields, RatingWithLabel]) => {
            return [v[0], v[1].rating]
        })
    ),
    feedback: rating.feedback
};

// send axios request with mutated data, etc
