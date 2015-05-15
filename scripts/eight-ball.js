/*Description:
*
*   Allows Hubot to use a magic 8-ball
*
* Dependencies:
*   None
*
* Configuration:
*   None
*
* Commands:
*   hubot [8ball|8 ball|8-ball] <question>
*
* Author:
*   james hardy
*/

module.exports = function ( robot ) {
    robot.respond( /8[ \-]?ball (.*)/i, function ( msg ) {
        var responses = [
            "It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes definitely",
            "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Yes",
            "Signs point to yes",
            "Reply hazy try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful"
        ];
        var ix = Math.floor( Math.random() * 20 );
        msg.reply( 'I asked the Magic 8-Ball "' + msg.match[1] + '"\nIt said "' + responses[ ix ] + '"' );
    });
};