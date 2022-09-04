export type Comment = {
   comment: string;
   date: string;
   id: number;
   rating: number;
   user: {
     id: number;
     name: string;
   }
 };

export type Comments = Comment[];

export type UserComment = {
  comment: string;
  rating: number;
};
