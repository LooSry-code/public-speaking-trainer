import { getRandomPhrase, getRandomParagraph } from './utils/randomizer.js';

function startSpeakingPractice() {
  console.log("===== Public Speaking Practice Trainer =====\n");

  const phrase = getRandomPhrase();
  console.log("\n[Practice Phrase]");
  console.log(`> Category: ${phrase.category}`);
  console.log(`> English: ${phrase.phrase}`);
  console.log(`> Indonesian: ${phrase.translation}`);
  console.log(`> Usage: ${phrase.usage}\n`);

  const para = getRandomParagraph();
  console.log("[Practice Paragraph]");
  console.log(`> Topic: ${para.topic}`);
  console.log(`> Context: ${para.context}`);
  console.log(`> Level: ${para.level}`);
  console.log(`${para.paragraph}`);
  if (para.notes) console.log(`> Notes: ${para.notes}`);
}

startSpeakingPractice();