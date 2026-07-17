import { players } from './data/PlayersData';
import { IndianTeam, IndianPlayers } from './data/IndianTeamData';
import { ListofPlayers } from './components/ListofPlayers';
import { Scorebelow70 } from './components/Scorebelow70';
import { OddPlayers } from './components/OddPlayers';
import { EvenPlayers } from './components/EvenPlayers';
import { ListofIndianPlayers } from './components/ListofIndianPlayers';

function App() {
  var flag = true;

  if (flag === true) {

    return (
      <div>
        <h1>List of Players</h1>
        <ul>
          <ListofPlayers players={players} />
        </ul>

        <hr />

        <h1>List of Players having Scores Less than 70</h1>
        <ul>
          <Scorebelow70 players={players} />
        </ul>
      </div>
    );
  } else {

    return (
      <div>
        <div>
          <h1>Indian Team</h1>

          <h2>Odd Players</h2>
          <ul>
            {OddPlayers(IndianTeam)}
          </ul>

          <hr />

          <h2>Even Players</h2>
          <ul>
            {EvenPlayers(IndianTeam)}
          </ul>
        </div>

        <hr />

        <div>
          <h1>List of Indian Players Merged:</h1>
          <ul>
            <ListofIndianPlayers IndianPlayers={IndianPlayers} />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;