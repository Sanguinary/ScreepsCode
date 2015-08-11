var CreepGenerator = require( "creepGenerator" );
var Miner = require( "miner" );

if( Memory.numMiners == undefined ){
  Memory.numMiners = 0;
};

if( Memory.numMiners < 2 ){
  if( CreepGenerator.createMiner( Game.spawns.Spawn1 ) ){
    Memory.numMiners ++;
  }
};

for( var name in Game.creeps ){
  var creep = Game.creeps[name];

  if( creep.memory.job == "mine" ){
    Miner.harvest( creep );
  }
}
