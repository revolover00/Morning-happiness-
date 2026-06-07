export interface BookingInquiry {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  serviceType: 'private_dinner' | 'event_catering' | 'personal_chef' | '';
  guestsCount: string;
  specialRequests: string;
}

export interface Dish {
  id: string;
  name: string;
  category: string;
  description: string;
  tag?: string;
  prepDetails?: string;
  ingredients: string[];
}
