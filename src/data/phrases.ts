import { Phrase } from '../models/phrase.js';

export const commonPhrases: Phrase[] = [
  {
    id: 'p1',
    category: 'Introduction',
    phrase: 'Let me begin by saying...',
    translation: 'Izinkan saya mulai dengan mengatakan...',
    usage: 'Digunakan saat membuka presentasi atau diskusi.'
  },
  {
    id: 'p2',
    category: 'Honesty',
    phrase: 'To be honest, I believe...',
    translation: 'Sejujurnya, saya percaya bahwa...',
    usage: 'Untuk menyampaikan opini dengan jujur dan terbuka.'
  },
  {
    id: 'p3',
    category: 'Transition',
    phrase: 'Now, moving on to the next point...',
    translation: 'Sekarang, mari kita lanjut ke poin berikutnya...',
    usage: 'Digunakan untuk berpindah topik saat berbicara.'
  },
];
