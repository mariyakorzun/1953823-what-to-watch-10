import { Comments } from '../types/comment';

export const comments: Comments = [
  {
    comment: 'Test comment 1.',
    date: 'January 01, 2022',
    id: 0,
    rating: 1.0,
    user: {
      id: 10,
      name: 'Commentator 1',
    },
  }, {
    comment: 'Test comment 2.',
    date: 'February 01, 2022',
    id: 1,
    rating: 2.0,
    user: {
      id: 11,
      name: 'Commentator 2',
    },
  }, {
    comment: 'Test comment 3.',
    date: 'March 01, 2022',
    id: 2,
    rating: 3.0,
    user: {
      id: 12,
      name: 'Commentator 3',
    },
  }, {
    comment: 'Test comment 4.',
    date: 'April 01, 2022',
    id: 3,
    rating: 4.0,
    user: {
      id: 13,
      name: 'Commentator 4',
    },
  },
];
