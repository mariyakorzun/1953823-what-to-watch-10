import RatingInput from '../rating-input/rating-input';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';
import { UserComment } from '../../types/comment';
import { useParams } from 'react-router-dom';
import { ReviewTextLength } from '../../const';
import { getCommentStatus } from '../../store/films-data/selectors';

const RATING_STARS_NUMBER = 10;
const INITIAL_RATING = 8;

function AddReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const isCommentBeingPosted = useAppSelector(getCommentStatus);
  const ratingStarsArray = [...Array(RATING_STARS_NUMBER).keys()].map((i) => ++i).reverse();
  const [currentRating, setRating] = useState(INITIAL_RATING);
  const [reviewText, setReviewText] = useState('');
  const handleRatingChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(target.value));
  };
  const handleTextChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(target.value);
  };
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (id) {
      const userComment: UserComment = {
        comment: reviewText,
        rating: currentRating,
      };
      dispatch(postCommentAction({filmId: id, comment: userComment}));
    }
  };
  return (
    <div className="add-review">
      <form action="" className="add-review__form" onSubmit={handleSubmit}>
        <fieldset disabled={isCommentBeingPosted}>
          <div className="rating">
            <div className="rating__stars">
              {ratingStarsArray.map((rating) =>
                (
                  <RatingInput
                    key={rating}
                    rating={rating}
                    onChange={handleRatingChange}
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
              onChange={handleTextChange}
              value={reviewText}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={reviewText.length < ReviewTextLength.Min || reviewText.length > ReviewTextLength.Max}
              >
                Post
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
export default AddReviewForm;
