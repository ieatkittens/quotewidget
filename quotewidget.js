function getQuote() {
  var quotes = [{
'author': 'Rumi', 'quote': 'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.'},
{'author': 'Rumi', 'quote': 'Out beyond ideas of wrongdoing and rightdoing there is a field. I\'ll meet you there.'},
{'author': 'Rumi', 'quote':         'When the soul lies down in that grass the world is too full to talk about.'},
{'author': 'Rumi', 'quote': 'The wound is the place where the Light enters you.'},
{'author': 'Rumi', 'quote':'Stop acting so small. You are the universe in ecstatic motion.'},
{'author': 'Rumi', 'quote': 'What you seek is seeking you.'},
{'author': 'Rumi', 'quote':'The minute I heard my first love story, I started looking for you, not knowing how blind that was.  Lovers don\'t finally meet somewhere.  They\'re in each other all along.'},
{'author': 'Rumi', 'quote':'Don\’t grieve. Anything you lose comes round in another form.'},
{'author': 'Rumi', 'quote':'If you are irritated by every rub, how will your mirror be polished?'},
{'author': 'Rumi', 'quote':'Forget safety.  Live where you fear to live.  Destroy your reputation.  Be notorious.'},
{'author': 'Rumi', 'quote':' Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.'},
{'author': 'Rumi', 'quote':'Travel brings power and love back into your life.'},
{'author': 'Rumi', 'quote':'Set your life on fire. Seek those who fan your flames'},
{'author': 'Rumi', 'quote':'A thousand half-loves must be forsaken to take one whole heart home.'},
{'author': 'Rumi', 'quote':'Suffering is a gift. In it is hidden mercy.'},
{'author': 'Rumi', 'quote':'Two there are who are never satisfied -- the lover of the world and the lover of knowledge.'},
{'author': 'Rumi', 'quote':'I know you\'re tired but come, this is the way.'},
{'author': 'Rumi', 'quote':'Either give me more wine or leave me alone.'}];

  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getColor() {
  var colors = ['#DB6C79', '#C0DF85', '#B084CC', '#5DD9C1', '#665687', '#ACFCD9', '#348AA7', '#BCE784', '#CE84AD', '#CE96A6', '#85BDBF', '#50FFB1', '#A3CEF1'];
  return colors[Math.floor(Math.random() * colors.length)];
 }

function refreshPage(){
  color = getColor();
  quote = getQuote();
  $('.main').css('background-color', color);
  $('.links').css('background-color', color);
  $('.links').css('border-color', color);
  $('.new-button').css('background-color', color);
  $('.new-button').css('border-color', color);
  $('.quote-box').css('color', color);
  $('.quote-text').html(quote.quote);
  $('.quote-attribution').html('-' + quote.author);
}


$(document).ready(function() {
   refreshPage();
   $(".new-button").on("click", function(){
     refreshPage();
   });
   $(".twitter-button").on("click", function(){
     var twitter_url = "https://twitter.com/intent/tweet?text="
      var tweet = document.getElementsByClassName("quote-text")[0].innerHTML
      var attribution = document.getElementsByClassName("quote-attribution")[0].innerHTML
     twitter_url += tweet + " " + attribution
     window.open(twitter_url, "TwitterWindow","menubar=1,resizable=1,width=350,height=250")
   });
});
          
