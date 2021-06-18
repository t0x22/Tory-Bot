const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

"= "
client.once('ready', () =>  {
   console.log("It's about to go down")
   console.log('4')
   console.log('3')
   console.log('2')
   console.log('1')
})

client.on('message', message =>{
   if(!message.content.startsWith(prefix) || message.author.bot) return;


const args = message.content.slice(prefix.length).split(/ +/g);
const command = args.shift().toLowerCase();
const msg = args.join(" ")
if(command === 'ping'){
   message.channel.send('pong!');
}else if (command == 'info'){
   message.channel.send("I am Tory Bot, God Save The Queen. I believe Boris is an imbecile but still better than Labour. Use -help to see commands you can use.")
}else if (command == 'help'){
   message.channel.send('-info (What I am here for) \n-reddit (Random post from reddit that you may or may not find funny in any way shaper or form)"\n-pol (Political opinion)"\n-rick (Never wanna give you up)"\n-indeed (You know if you know)"\n-bloo (veGANs)"\n-marco (polo) \n-clear (clear a specified amount of messages) \n-say (echo command) \n-shrug (sends a shrug emoticon) "')
}else if (command == 'reddit') {
   const reddit = [
      'https://www.reddit.com/r/teenagers/comments/o0bpoy/its_all_downhill_from_here/',
      'https://www.reddit.com/r/teenagers/comments/o0an1y/taste_gone/',
      'https://www.reddit.com/r/teenagers/comments/o0cbff/i_always_see_a_sad_pig_also_in_mirrors/',
      'https://www.reddit.com/r/teenagers/comments/o0ce2o/i_hate_my_life/',
      'https://www.reddit.com/r/teenagers/comments/o0gd1u/just_bi_myself/',
      'https://www.reddit.com/r/teenagers/comments/o111cy/had_to_do_here_becaude_not_enough_katma/',
      'https://www.reddit.com/r/teenagers/comments/o12v9c/swipes_aggressively/',
      'https://www.reddit.com/r/teenagers/comments/o0zfh7/and_the_award_for_the_first_clickbait_goes_to/',
      'https://www.reddit.com/r/teenagers/comments/o0ztbb/my_everyday_story/',
      'https://www.reddit.com/r/teenagers/comments/o0z653/didnt_see_my_notification_till_now/'
     ];
     const response = reddit[Math.floor(Math.random(10) * reddit.length)];
     message.channel.send(response);
    }else if (command == 'pol'){
       message.channel.send('Well, I would have to say that I vote Conservatives as they are not as bad as Labour');
   }else if (command == 'rick'){
       message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
   }else if (command == 'marco'){
     message.channel.send('polo!')
   }else if (command == 'indeed'){
     message.channel.send('Indeed')
   }else if (command == 'bloo'){
     message.channel.send('veGAN sausage rolls')
   }else if (command == 'twitch'){
      message.channel.send("https://twitch.tv/tommyinnit")
   }else if (command == 'bonk'){
      message.channel.send("https://tenor.com/view/kendo-shinai-bonk-doge-horny-gif-20995284")
   }else if (command == 'good'){
      message.channel.send("Thanks.")
   }else if (command == 'loki'){
      message.channel.send("https://www.disneyplus.com/en-gb/series/loki/6pARMvILBGzF")
   }else if (command == 'yt') {
      const reddit = [
        'https://www.youtube.com/watch?v=dLIZlwhBoq0',
        'https://www.youtube.com/watch?v=mefPkbiABt0',
        'https://www.youtube.com/watch?v=otTPvyZ-YDc',
        'https://www.youtube.com/watch?v=7bmx3aiWqtg',
        'https://www.youtube.com/watch?v=Iy-Z6S7cFJc',
        'https://www.youtube.com/watch?v=s0_w3jAf5ho',
        'https://www.youtube.com/watch?v=hzyvYNN23uY'
        ];
        const response = reddit[Math.floor(Math.random(7) * reddit.length)];
     message.channel.send(response);
      }else if (command == 'cadillac'){
       message.channel.send("https://tenor.com/view/tommyinnit-tommy-gif-19045543")
      
      }else if (command == 'sanchez'){
        message.channel.send("https://images.squarespace-cdn.com/content/v1/5616ac17e4b018d366f57f53/1616923173664-5USKZPHNL65VM3F5T87Z/ke17ZwdGBToddI8pDm48kHhlTY0to_qtyxq77jLiHTtZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7T-j82ScS_xjTqFYGqFrT72qZ_E0ELtHpOZiWcSG1QwIMeEVreGuQ8F95X5MZTW1Jw/rick+sanchez+soundboard")
      
      }else if (command == 'thomas'){
       message.channel.send("https://www.youtube.com/watch?v=fkB3F4-NI8A")

      }else if (command == 'beans'){
       message.channel.send("https://www.recipetineats.com/wp-content/uploads/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg")
     

}else if(command == 'duck'){
 message.channel.send("https://tenor.com/view/cats-duck-mean-kick-gif-14721930")
      }else if (command == 'noice'){
       message.channel.send("https://tenor.com/view/noice-nice-click-gif-8843762")
       message.channel.send("<:noice:855466818595979274>")

      }else if (command == 'kitchengun'){
       message.channel.send("https://www.youtube.com/watch?v=6-7NDP8V-6A")
       message.channel.send("I'm Derek Bum")
      }else if (command == 'vine'){
         message.channel.send("https://www.youtube.com/watch?v=Sdkwu2FvFfI")
         message.channel.send("Me gusta mucho Vine")
     
      }else if (command == 'shrug'){
   message.channel.send("¯\_(ツ)_/¯")
   }else if (command == 'death'){
   message.channel.send("Commencing death... Done!")
   message.channel.send("https://tenor.com/view/kermit-kermit-the-frog-daddy-gif-5368681")
   }else if (command == 'favouritesong'){
    message.channel.send("https://www.youtube.com/watch?v=SMhFTex19DU")
    message.channel.send("https://images.genius.com/77c5535edd71788ac0763d3e869c5293.1000x987x1.png")
   }else if (command == 'bruh'){
    message.channel.send("<:BLOO:854380446610489414> <:BLOO:854380446610489414> <:BLOO:854380446610489414> <:BLOO:854380446610489414>")
    message.channel.send("https://tenor.com/view/bruh-really-tell-me-more-no-way-wth-gif-21239271")
   }else if (command == 'author'){
      message.channel.send("<@!333532620115673098>")
   }else if (command == 'kill'){
      message.channel.send("https://tenor.com/view/mickey-moue-how-to-kill-read-reading-planning-gif-5173960")
      message.channel.send("I'll just read this book")
      message.channel.send("Done!")
      message.channel.send("https://tenor.com/view/kill-house-md-wilson-excuse-me-gif-14362291")
}else if (command == 'say'){
    message.channel.send(msg)
    }else if (command === 'clear'){
    if(!args[0]) return message.channel.send("You didn't specify a real number")

    let amount = parseInt(args[0]);

    if(isNaN(amount)) return message.channel.send("That number is either too big or too small")

    message.channel.bulkDelete(amount);
    }
});
client.login('ODU0NDUwOTYzMTU0ODYyMDkx.YMkHeA.vXIjVYRe_CwZiNqjAIK_dDLCR98');