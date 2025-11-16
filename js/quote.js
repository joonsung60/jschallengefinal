const quotes = [
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle",
  },
  {
    quote: "Man is condemned to be free.",
    author: "Jean-Paul Sartre",
  },
  {
    quote: "The only thing I know is that I know nothing.",
    author: "Socrates",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "The greatest happiness of the greatest number is the foundation of morals and legislation.",
    author: "Jeremy Bentham",
  },
  {
    quote: "God is dead. God remains dead. And we have killed him.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
  {
    quote: "The mind is furnished with ideas by experience alone.",
    author: "John Locke",
  },
  {
    quote: "He who thinks great thoughts, often makes great errors.",
    author: "Martin Heidegger",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;