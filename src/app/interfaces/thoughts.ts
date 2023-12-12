export interface Thought {
  id: number;
  content: string;
  author: string;
  model: Model;
}

export type Model = 'modelo1' | 'modelo2' | 'modelo3';
