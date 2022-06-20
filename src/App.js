import React from "react";
import { useState } from "react";
import "./App.scss";
import FoodItem from "../src/components/FoodItem";

let foodCat = [
  {
    id: 1,
    photoNorm: "/food/С фуа-гра1.png",
    defaultHoever: "/defaultHover/С фуа-гра1.png",
    selectedPhoto: "/Selected/С фуа-гра1.png",
    selectedHover: "/selectedHover/С фуа-гра1.png",
    disabledPhoto: "/disabled/С фуа-гра.png",
    text: 'Чего сидишь? Порадуй котэ, ',
    link: 'купи.',
    textSelected: 'Печень утки разварная с артишоками.',
    disabled: false,
    select: false,
  },
  {
    id: 2,
    photoNorm: "/food/С рыбой1.png",
    defaultHoever: "/defaultHover/С рыбой1.png",
    selectedPhoto: "/Selected/С рыбой1.png",
    selectedHover: "/selectedHover/С рыбой1.png",
    disabledPhoto: "/disabled/С рыбой.png",
    text: 'Чего сидишь? Порадуй котэ, ',
    link: 'купи.',
    textSelected: 'Головы щучьи с чесноком да свежайшая семгушка.',
    disabled: false,
    select: false,
  },
  {
    id: 3,
    photoNorm: "/food/chicken1.png",
    defaultHoever: "/defaultHover/С курой1.png",
    selectedPhoto: "/Selected/С курой1.png",
    selectedHover: "/selectedHover/С курой1.png",
    disabledPhoto: "/disabled/С курой.png",
    text: 'Чего сидишь? Порадуй котэ, ',
    link: 'купи.',
    textSelected: 'Филе из цыплят с трюфелфми в бульоне.',
    disabled: true,
    select: false,
  },
];

function App() {
  const [selected, setSelected] = useState(foodCat);

  function selectCat(arr, ind) {
    const newArr = [...arr];
    newArr[ind].select = !newArr[ind].select;
    setSelected(newArr);
  }

  console.log("selected", selected);
  return (
    <div className="background">
      <div className="shadow"></div>
      <div className="flexWrapper2">
        <h2>Ты сегодня покормил кота?</h2>
        <ul className="flexWrapper">
          {selected.map((item, index, arr1) => {
            return (
              <FoodItem
                item={item}
                index={index}
                arr1={arr1}
                selectCat={selectCat}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
