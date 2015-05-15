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

module.exports = (robot) ->
  robot.hear /croissant/i, (msg) ->
    msg.send "@moe: bring us croissants"
