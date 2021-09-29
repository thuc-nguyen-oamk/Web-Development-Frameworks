import React from "react";
import ButtonAddItem from "./ButtonAddItem";
import ShoppingListItem from './ShoppingListItem';

/* Shopping list component, which renders bunch of ShoppingListItem components inside a HTML ul element based on the data received through items prop */
const ShoppingList = props => {
  const styles = {
    flex: {
      display: "flex"
    }
  };

  const buttonData = ["Carrots", "Radishes", "Cabbages", "Milk"];

  return <ul>
    {
      props.items.map(i => <ShoppingListItem {...i} key={i.id} callbacks={props.callbacks} id={i.id} />)
    }
    <div style={styles.flex}>
      {buttonData.map((name, index) =>
        <ButtonAddItem
          itemName={name}
          items={props.items}
          setStateCallback={props.setStateCallback}
          key={index}
        />)}
    </div>

  </ul>
}

export default ShoppingList;