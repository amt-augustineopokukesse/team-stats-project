const team = {
  _players: [
    {firstName: 'Lionel', lastName: 'Messi', age: 34}, 
    {firstName: 'Mason', lastName: 'Mount',     age: 22}, 
    {firstName: 'Andre', lastName: 'Ayew',    age: 31}
    ],
  _games: [
    {opponent: 'Olimpique Marseille', teamPoints: 35, opponentPoints: 27}, 
    {opponent: 'Crystal Palace', teamPoints: 67, opponentPoints: 22},
    {opponent: 'Hull City', teamPoints: 49, opponentPoints: 45}
  ],
  // Getter methods for _players and _games
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
// Create addPlayer method
addPlayer(firstName, lastName, age) {
  const player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  }
  this._players.push(player);
},
// Create addGame method
addGame(opponent, teamPoints, opponentPoints) {
  const game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints
  }
  this._games.push(game);
}
};
//Invoke addPlayer method
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);
//Invoke addGame method
team.addGame('Cavaliers', 108, 77);
team.addGame('Portland Timbers', 75, 50);
team.addGame('Toons United', 82, 66);

console.log(team.games);
