import { ChangeEvent } from 'react';

type RatingInputProps = {
    rating: number;
    onChange: ({target}: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
};

function RatingInput(props: RatingInputProps): JSX.Element {
  const { rating, onChange, checked } = props;

  return (
    <>
      <input
        className="rating__input"
        id={`star-${rating}`}
        type="radio"
        name="rating"
        value={rating}
        onChange={onChange}
        checked={checked}
      />
      <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
    </>
  );
}

export default RatingInput;
