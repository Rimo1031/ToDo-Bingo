/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Radio = ({
  name,
  value,
  state,
  setState
}: {
  name: string;
  value: number;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleRadioClick = (size: number) => {
    setState(size);
  };
  return (
    <label htmlFor={name}>
      <input
        key={name}
        type="radio"
        value={value}
        id={name}
        checked={state === value}
        onClick={() => handleRadioClick(value)}
      />
      {name}
    </label>
  );
};

const Select_Size = ({
  size,
  setSize
}: {
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const BINGO_SIZE = [3, 4, 5, 6, 7];
  return (
    <div>
      <text>빙고 크기 선택: </text>
      {BINGO_SIZE.map((bingo_size) =>
        Radio({ name: bingo_size.toString(), value: bingo_size, state: size, setState: setSize })
      )}
    </div>
  );
};

const Select_Game = () => {
  const GAME_LIST = [{ name: 'SDVX', value: 0 }];
  return (
    <div>
      <text>기종 선택: </text>
      {GAME_LIST.map((game) => (
        <label htmlFor={game.name}>
          <input key={game.name} type="radio" value={game.value} id={game.name} />
          {game.name}
        </label>
      ))}
    </div>
  );
};

const Bingo_Cell = () => {
  return (
    <td>
      <text>곡명:</text>
      <br></br>
      <text>달성 조건:</text>
    </td>
  );
};

const Bingo_Table = ({ state }: { state: number }) => {
  const arr = Array(state)
    .fill(0)
    .map((_, i) => i + 1);
  return (
    <table>
      <tbody>
        {arr.map(() => (
          <tr>{arr.map(() => Bingo_Cell())}</tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [size, setSize] = useState(0);
  return (
    <div className="App">
      <Select_Size size={size} setSize={setSize} />
      <Select_Game />
      <Bingo_Table state={size} />
    </div>
  );
};

export default App;
