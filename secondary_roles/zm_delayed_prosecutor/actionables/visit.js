var rs = require("../../../rolesystem/rolesystem.js");

module.exports = function (actionable, game, params) {

  // Send visit
  game.execute("visit", {visitor: actionable.from,
    target: actionable.to,
    priority: actionable.priority,
    reason: "zm_delayed_prosecutor-visit"});

};

module.exports.TAGS = ["drivable", "roleblockable", "visit"];