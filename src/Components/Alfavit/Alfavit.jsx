import React from 'react';
import s from './Alfavit.module.css';
import List from '../List';
import { useNavigate } from 'react-router-dom';

const Alfavit = () => {
  const alfavit = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const navigate = useNavigate()

  const infoClick = (title) => {
    navigate(`/alfavit/${title.toLowerCase()}`)
  }

  return (
    <div className={s.content}>
      <List
        items={alfavit && alfavit}
        renderItem={(elem, i) => (
          <div key={i}>
            <h2 onClick={() => infoClick(elem)}>{elem}</h2>
            <span>/</span>
          </div>
        )}
      />
    </div>
  )
}

export default Alfavit
