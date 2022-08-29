import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
export const durationTime = (timeLeft: number) => {
  const time = dayjs.duration(timeLeft, 'seconds');
  if (time.hours() > 0) {
    return time.format('-HH:mm:ss');
  }
  return time.format('-mm:ss');
};

export const dateFormat = (dateReview: string) => {
  const date = dayjs(dateReview).format('MMMM DD, YYYY ');
  return date;
};
