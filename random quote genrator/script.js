const quotes = [
    "Time and Tide wait for None.",
    "Hard work always pays off.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The only way to learn a new programming language is by writing programs in it.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    "Debugging is twice as hard as writing the code in the first place.",
    "If at first you don’t succeed, call it version 1.0.",
    "Programming is the art of telling another human what one wants the computer to do.",
    "The best error message is the one that never shows up.",
    "Don’t comment bad code—rewrite it.",
    "A good programmer is someone who always looks both ways before crossing a one-way street.",
    "It’s not a bug—it’s an undocumented feature.",
    "Software is a gas; it expands to fill its container.",
    "There are two ways to write error-free programs; only the third one works.",
    "The most disastrous thing that you can ever learn is your first programming language.",
    "Make it work, make it right, make it fast.",
    "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    "Before software can be reusable it first has to be usable.",
    "The computer was born to solve problems that did not exist before.",
    "One man’s crappy software is another man’s full-time job.",
    "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    "It works on my machine.",
    "The only person who knows all the answers is the one asking the questions.",
    "Coding is not just code, it’s a mindset.",
    "Your most unhappy customers are your greatest source of learning.",
    "Simplicity is the soul of efficiency.",
    "The function of good software is to make the complex appear simple.",
    "Without requirements or design, programming is the art of adding bugs to an empty text file.",
    "The best way to predict the future is to implement it.",
    "Talk is cheap. Show me the code.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Programming is thinking, not typing."
  ];


  para=document.getElementById("para");
  set_quote=new Set();
  
  function generator(){
    if(set_quote.size ==quotes.length){
        set_quote.clear()
    }



    while (true) {   
        index_r=Math.floor(Math.random()*quotes.length)

        if(set_quote.has(index_r)) continue

        para.innerHTML=`${quotes[index_r]}`;
        set_quote.add(index_r);
        break;
    }
    }
