import React from 'react';

const AlphabetSort = ({alphabets,onSort,selected}) => {
  return (
    <ul className="alphabet">
      <li onClick={() => onSort("")} className="alphabet__item"><i className="material-icons alphabet__icon">people_outline</i></li>
      {alphabets.map((alphabet, i) => {
          return (
            <li onClick={() => onSort(alphabet)} key={i} className={selected === alphabet?"alphabet__item alphabet__item_selected":"alphabet__item"}>{alphabet}</li> 
          )
      })}
    </ul>
  );
}

export default AlphabetSort;
