export interface ParagraphExample {
  id: string;
  topic: string;
  context: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  paragraph: string;
  notes?: string;
}