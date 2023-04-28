type PoemData = {
  id: string;
  datestamp: Date;
  category: 'pop' | 'news';
  content: string[];
  goods: number;
  bads: number;
  sentiment: number;
};
export type { PoemData };
