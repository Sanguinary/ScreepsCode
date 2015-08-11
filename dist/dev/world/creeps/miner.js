module.exports = {
  harvest: function( creep ){
    if( creep.carry.energy < creep.carryCapacity ){
      var mine = null;

      if( creep.memory.source == undefined ){
        mine = creep.pos.findClosest( FIND_SOURCES_ACTIVE );
        creep.memory.source = mine.id;
      } else {
        mine = Game.getObjectById( creep.memory.source );
      }

      if( mine ){
        creep.moveTo( mine );
        creep.harvest( mine );
      }

    } else {
      var s = Game.getObjectById( creep.memory.spawn )
      creep.moveTo( s );
      creep.transferEnergy( s );
    }
  }
}
