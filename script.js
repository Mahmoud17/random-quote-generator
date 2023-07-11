const quotes = [
 
"“Be yourself; everyone else is already taken.”\n― Oscar Wilde",

 
"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”\n― Marilyn Monroe",

 
"“Two things are infinite the universe and human stupidity; and I'm not sure about the universe.”\n― Albert Einstein",

 
"“So many books, so little time.”\n― Frank Zappa",

 
"“A room without books is like a body without a soul.”\n― Marcus Tullius Cicero"
,
 
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”\n― Bernard M. Baruch"
,
 
"“You've gotta dance like there's nobody watching,\nLove like you'll never be hurt,\nSing like there's nobody listening,\nAnd live like it's heaven on earth.”\n― William W. Purkey"
,
 
"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”\n― Dr. Seuss"
,
 
"“You only live once, but if you do it right, once is enough.”\n― Mae West"
,
 
"“Be the change that you wish to see in the world.”\n― Mahatma Gandhi"
,
 
"“In three words I can sum up everything I've learned about life it goes on.”\n― Robert Frost"
,
 
"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”\n― J.K. Rowling, Harry Potter and the Goblet of Fire"
,
 
"“Don’t walk in front of me… I may not follow\nDon’t walk behind me… I may not lead\nWalk beside me… just be my friend”\n― Albert Camus"
,
 
"“If you tell the truth, you don't have to remember anything.”\n― Mark Twain"
,
 
"“Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .”\n― C.S. Lewis, The Four Loves"
,
 
"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”\n― Maya Angelou"
,
 
"“A friend is someone who knows all about you and still loves you.”\n― Elbert Hubbard"
,
 
"“To live is the rarest thing in the world. Most people exist, that is all.”\n― Oscar Wilde"
,
 
"“Always forgive your enemies; nothing annoys them so much.”\n― Oscar Wilde",

 
"“Darkness cannot drive out darkness only light can do that. Hate cannot drive out hate only love can do that.”\n― Martin Luther King Jr., A Testament of Hope The Essential Writings and Speeches",

 
"“Live as if you were to die tomorrow. Learn as if you were to live forever.”\n― Mahatma Gandhi"
,
 
"“We accept the love we think we deserve.”\n― Stephen Chbosky, The Perks of Being a Wallflower"
,
 
"“Without music, life would be a mistake.”\n― Friedrich Nietzsche, Twilight of the Idols"
,
 
"“I am so clever that sometimes I don't understand a single word of what I am saying.”\n― Oscar Wilde, The Happy Prince and Other Stories"
,
 
"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”\n― Ralph Waldo Emerson"
,
 
"“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”\n― Steve Jobs"
,
 
"“Insanity is doing the same thing, over and over again, but expecting different results.”\n― Narcotics Anonymous"
,
"“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”\n― Marilyn Monroe"
,
"“It is better to be hated for what you are than to be loved for what you are not.”\n― Andre Gide, Autumn Leaves"
,
"“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”\n― H. Jackson Brown Jr., P.S. I Love You"
]

const quoteHeading = document.querySelector("#quote")
const authorHeading = document.querySelector("#author")

function random() {
    let randNum = Math.floor(Math.random() * quotes.length);
    return randNum
}

let randNum = random()

document.querySelector('button').addEventListener('click', () => {
    let newRandNum = random()
    while (newRandNum === randNum) {
        newRandNum = random()
    }
    randNum = newRandNum
    let item = quotes[randNum]
    let [quote, author] = item.split('\n')
    quoteHeading.innerText = quote
    authorHeading.innerText = author
    
})