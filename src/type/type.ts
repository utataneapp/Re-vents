export type Event = {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  city: string;
  venue: string;
  hostedBy: string;
  hostPhotoURL: string;
  attendees: {
    id: string;
    name: string;
    photoURL: string;
  }[];
};

export type Attendee = {
  attendee: {
    id: string;
    name: string;
    photoURL: string;
  };
};
