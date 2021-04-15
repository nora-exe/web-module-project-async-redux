import React from 'react';
import SeaCritList from './components/SeaCritList';
import './App.css';
import { findByLabelText } from '@testing-library/dom';

export default function App() {
  return (
    <div className="App">
      <SeaCritList />
    </div>
  );
}