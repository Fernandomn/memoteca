export interface Thought {
  content?: string;
  author?: string;
  id?: string;
  model?: Model;
}

export type Model = 'modelo1' | 'modelo2' | 'modelo3' | '';
