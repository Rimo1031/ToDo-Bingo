/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Select_Button = (
  { name, code }: { name: string; code: number },
  setGame: (game: number) => void
) => {
  return (
    <label htmlFor={name}>
      <input key={name} type="radio" value={code} id={name} />
      {name}
    </label>
  );
};

const Select_Game = () => {
  const [game, setGame] = useState(0);
  const GAME_LIST = [
    { name: 'SDVX', code: 0 },
    { name: 'IIDX', code: 1 },
    { name: 'CHUNITHM', code: 2 }
  ];
  return <div>{GAME_LIST.map((game) => Select_Button(game, setGame))}</div>;
};

const Bingo_Cell = () => {
  return (
    <td>
      <text>Hello, world!</text>
      <br></br>
      <text>Select Song:</text>
    </td>
  );
};

const Bingo_Table = () => {
  const arr: number[] = [1, 2, 3];
  return (
    <table>
      {arr.map(() => (
        <tr>{arr.map(() => Bingo_Cell())}</tr>
      ))}
    </table>
  );
};

const App = () => {
  return (
    <div className="App">
      <Select_Game />
      <Bingo_Table />
    </div>
  );
};

export default App;
