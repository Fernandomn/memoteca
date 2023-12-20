export interface Thought {
  id: string;
  content: string;
  author: string;
  model: Model;
  favorite: boolean;
}

export type Model = 'modelo1' | 'modelo2' | 'modelo3';
