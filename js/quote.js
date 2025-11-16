const quotes = [
  {
    quote: "성찰하지 않는 삶은 살 가치가 없다.",
    author: "소크라테스",
  },
  {
    quote: "행복은 우리 자신에게 달려 있다.",
    author: "아리스토텔레스",
  },
    {
    quote: "인간은 자유를 선고받은 존재다.",
    author: "장 폴 사르트르",
  },
  {
    quote: "내가 아는 유일한 것은, 내가 아무것도 모른다는 사실이다.",
    author: "소크라테스",
  },
  {
    quote: "우리를 죽이지 못하는 것은 우리를 더 강하게 한다.",
    author: "프리드리히 니체",
  },
  {
    quote: "최대 다수의 최대 행복이 도덕과 입법의 기초다.",
    author: "제러미 벤담",
  },
  {
    quote: "신은 죽었다. 우리는 신을 죽였다.",
    author: "프리드리히 니체",
  },
  {
    quote: "우리가 반복해서 하는 일이 우리 자신을 만든다.",
    author: "아리스토텔레스",
  },
  {
    quote: "마음은 오직 경험에 의해서만 채워진다.",
    author: "존 로크",
  },
  {
    quote: "위대한 생각에는 언제나 큰 위험이 따른다.",
    author: "마르틴 하이데거",
  },
  {
  quote: "젠더는 반복되는 행위를 통해 구성된다.",
  author: "주디스 버틀러",
},
{
  quote: "자유란 두려움으로부터의 해방이다.",
  author: "한나 아렌트",
},
{
  quote: "사랑은 판단을 보류하는 능력이다.",
  author: "한나 아렌트",
},
{
  quote: "우리는 우리가 반복적으로 하는 것에 의해 규정된다.",
  author: "시몬 드 보부아르",
},
{
  quote: "여자는 태어나는 것이 아니라, 만들어지는 것이다.",
  author: "시몬 드 보부아르",
},
{
  quote: "우리는 서로의 생존 조건이 된다.",
  author: "주디스 버틀러",
},
  {
  quote: "배우고 때때로 익히면 또한 기쁘지 아니한가.",
  author: "공자",
},
{
  quote: "큰 일을 이루려면 조용한 마음이 필요하다.",
  author: "장자",
},
{
  quote: "도는 말로 설명될 수 없다.",
  author: "노자",
},
{
  quote: "모든 것은 변한다. 변하지 않는 것은 변화 자체뿐이다.",
  author: "헤라클레이토스",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;

author.innerText = `- ${todaysQuote.author}`;
