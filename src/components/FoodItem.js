import React, { useState } from "react";
import classes from "./fooditem.module.scss";

export default function FoodItem({ item, index, arr1, selectCat }) {
  const [hov, setHove] = useState(false);
  const [hv, setHv] = useState(false);

  return (
    <li
      className={classes.cardImage1}
      key={item.id}
      onMouseEnter={() => setHv(true)}
      onMouseLeave={() => setHv(false)}
    >
      {item.disabled ? (
        <img alt={"cat food"} src={item.disabledPhoto} />
      ) : (
        <>
          <img
            className={classes.pic}
            onClick={() => selectCat(arr1, index)}
            onMouseEnter={() => setHove(false)}
            onMouseLeave={() => setHove(true)}
            alt={"cat food"}
            src={
              item.select
                ? hov
                  ? item.selectedHover
                  : item.selectedPhoto
                : hv
                ? item.defaultHoever
                : item.photoNorm
            }
          />
          <div className={classes.text}>
            {item.select ? item.textSelected : item.text}
            {item.select ? null : (
              <span
                className={classes.sp}
                onClick={() => selectCat(arr1, index)}
              >
                {item.link}
              </span>
            )}
          </div>
        </>
      )}
    </li>
  );
}
