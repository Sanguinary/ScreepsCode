var CreepGenerator = require( "/world/creepGenerator" );

if( Memory.creeps.length < 2 ){
  CreepGenerator.createMiner( Game.spawns.Spawn1 );
};
