import RatingInput from '../rating-input/rating-input';
import { useState, ChangeEvent } from 'react';

function AddReviewForm(): JSX.Element {
  const ratingStarsArray = [...Array(10).keys()].map((i) => ++i).reverse();
  const [currentRating, setRating] = useState(8);
  const [reviewText, setReviewText] = useState('');

  const onChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(target.value));
  };

  const onTextChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(target.value);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratingStarsArray.map((rating) =>
              (
                <RatingInput
                  key={rating}
                  rating={rating}
                  onChange={onChange}
                  checked={currentRating === rating}
                />
              )
            )}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={onTextChange}
            value={reviewText}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
