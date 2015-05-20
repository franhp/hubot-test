# Description:
#   Moe owes us croissants
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   croissant - Pester Moe
#
# Author:
#   cole


phrases = [
  "bring us croissants",
  "A croissant would be lovely right now.",
  "I could really go for a croissant.",
  "will there be croissants soon?",
]
module.exports = (robot) ->
  robot.hear /croissant/i, (msg) ->
    msg.send "@moe: " + msg.random phrases
