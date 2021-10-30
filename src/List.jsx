import React from "react";
import ListItem from "./ListItem";

const List = ({
    items,
    handleDeleteItem,
    handleEditItem,
    handleClearAllItems,
}) => {
    return (
        <div className="grocery-container">
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    handleDeleteItem={handleDeleteItem}
                    handleEditItem={handleEditItem}
                />
            ))}
            <button className="clear-btn" onClick={handleClearAllItems}>
                Clear Items
            </button>
        </div>
    );
};

export default List;
