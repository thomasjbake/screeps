module.exports.spawn = function (role, number) {
    let roleCreeps = _.filter(Game.creeps, (creep) => creep.memory.role == role);
    if (roleCreeps.length < number && Game.spawns['Spawn1'].canCreateCreep) {
        Game.spawns['Spawn1'].canCreateCreep = false
        var newName = role + Game.time;
        console.log('Spawning new ' + role + ': ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
            {memory: {role: role}});
    }
};