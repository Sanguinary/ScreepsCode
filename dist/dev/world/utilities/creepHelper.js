module.exports = {

  createCreep: function(spawn, creepBody, role, job, mem) {
    mem = mem || { }; // Check for provided memory or create memory
    mem.role = role;
    mem.job = job;
    if(spawn.canCreateCreep(creepBody, null) == OK) {
      spawn.createCreep(creepBody, null, mem);
      return true;
    }
    return false;
  },

  calcCost:
    function(body) {
      var cost = 0;
      body.forEach(function(element, index, array) {
        switch(element) {
          case MOVE: cost += 50; break;
          case WORK: cost += 100; break;
          case CARRY: cost += 50; break;
          case ATTACK: cost += 80; break;
          case RANGED_ATTACK: cost += 150; break;
          case HEAL: cost += 250; break;
          case TOUGH: cost += 10; break;
        }
      });
      return cost;
    },

    prefabs: {
      basicMiner: [ WORK, CARRY, MOVE ]
    }
}
