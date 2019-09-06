import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Players from './players';
import  FavePlayer  from "./form"
import { render } from "@testing-library/react";

it('renders without crashing', () => {
});

test("contains players", () => {
  const container = render(<Players />);
  container.getByText(/PlAyErS/i);
});

test("contains who do you choose", () => {
  const app = render(<App />);
  app.getByPlaceholderText(/Who do you choose/i);
});
