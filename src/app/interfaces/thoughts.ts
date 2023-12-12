export interface Thought {
  id: string;
  content: string;
  author: string;
  model: Model;
}

export type Model = 'modelo1' | 'modelo2' | 'modelo3';
