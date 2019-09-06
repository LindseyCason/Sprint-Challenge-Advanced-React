import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("contains united states", () => {
  //Arrange is const.container render line below
  const app = render(<App />);
  // console.log(container);
  //Act is Getting the node by text getByText
  app.getByText(/united states/i);

  //Assert is getByText
});

est("contains brazil", () => {
  //Arrange is const.container render line below
  const app = render(<App />);
  // console.log(container);
  //Act is Getting the node by text getByText
  app.getByText(/brazil/i);

  //Assert is getByText
});

est("contains searches", () => {
  //Arrange is const.container render line below
  const app = render(<App />);
  // console.log(container);
  //Act is Getting the node by text getByText
  app.getByText(/searches/i);
  //Assert is getByText
});