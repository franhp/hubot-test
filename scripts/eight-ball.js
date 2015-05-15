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
            "Yes",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Signs point to yes",
            "Reply hazy try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Outlook not so good",
            "Very doubtful",
            "Don't count on it",
            "My reply is no",
            "My sources say no"
        ];
        var ix;
        var question = msg.match[ 1 ];

        //Because sometimes I just want someone to agree with me
        if ( msg.message.user.name.toLowerCase() === 'mrweeble' ) {
            if ( /isn't [^ ]+$/.test( question ) ) {
                ix = Math.floor( Math.random() * 7 );
            } else if ( /is [^ ]+$/.test( question ) ) {
                ix = Math.floor( Math.random() * 4 ) + 16;
            } else {
                ix = Math.floor( Math.random() * 20 );
            }
        } else {
            ix = Math.floor( Math.random() * 20 );
        }
        msg.reply( 'I asked the Magic 8-Ball "' + msg.match[ 1 ] + '"\nIt said "' + responses[ ix ] );
    } );
};