export interface Prefecture {
  id: string;
  name: string;
  code: number;
  cards: Card[];
}

export interface Card {
  id: string;
  name: string;
  url: string;
  image: string;
  sales: string[];
  notes?: string;
  ended?: boolean;
  endedAt?: Date;
  minPrice?: number;
  availableAreas?: string[];
  suicaCompatible?: boolean;
  sharing?: boolean;
}
