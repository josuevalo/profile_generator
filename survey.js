const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (nickName) => {
  
  rl.question('What\'s an activity you like doing? ', (activity) => {
    
    rl.question('What do you listen to while doing that? ', (music) => {
 
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
  
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
 
          rl.question('Which sport is your absolute favourite? ', (sport) => {
  
            rl.question('Tell us what you are amazing at! ', (amazing) => {
              console.log(`${nickName} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${amazing}`);
  
              rl.close();
            });
          });
        });
      });
    });
  });
});
