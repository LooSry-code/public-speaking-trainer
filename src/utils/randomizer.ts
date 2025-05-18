// File: src/utils/randomizer.ts
import { commonPhrases } from '../data/phrases.js';
import { paragraphExamples } from '../data/paragraphs.js';
import { Phrase } from '../models/phrase.js';
import { ParagraphExample } from '../models/paragraph.js';

export function getRandomPhrase(): Phrase {
  const randomIndex = Math.floor(Math.random() * commonPhrases.length);
  return commonPhrases[randomIndex];
}

export function getRandomParagraph(): ParagraphExample {
  const randomIndex = Math.floor(Math.random() * paragraphExamples.length);
  return paragraphExamples[randomIndex];
}