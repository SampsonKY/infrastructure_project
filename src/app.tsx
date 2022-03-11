import React from 'react';

interface IProps {
  name?: string;
  age?: number;
}

const App: React.FC<IProps> = (props) => {
  const { name = 'ky' } = props;

  return <div> Hello, {name}</div>;
};

export default App;
