var CreepHelper = require( "../utilities/creepHelper.js" );

module.exports = {

  createMiner: function( spawn, source ){
    var mem = { spawn: spawn.id };
      if(source) {
          mem.source = source.id;
      }

      var creepBody = CreepHelper.prefabs.basicMiner;
      return CreepHelper.createCreep(spawn, creepBody, "worker", "harvest", mem);
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
