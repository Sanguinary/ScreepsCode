var CreepHelper = require( "creepHelper" );

module.exports = {

  createMiner: function( spawn, source ){
    var mem = { spawn: spawn.id };
    if(source) {
        mem.source = source.id;
    }

    var creepBody = CreepHelper.prefabs.basicMiner;
    return CreepHelper.createCreep(spawn, creepBody, "worker", "mine", mem);
  },

  createBuilder: function( spawn, source ){
    //TODO
  },

  createMeleeGuard: function ( spawn, source ){
    //TODO
  },

  createRangedGuard: function ( spawn, source ){
    //TODO
  },

  createHealer: function ( spawn, source ){
    //TODO
  }
}
