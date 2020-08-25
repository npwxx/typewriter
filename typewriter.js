const sentence = "hello there from lighthouse labs";

const scrollSentence = function(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
      if (i === sentence.length - 1) {
        process.stdout.write("\n");
      }
    }, i * 50);
  }
};
scrollSentence(sentence);
