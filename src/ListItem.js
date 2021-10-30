import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const ListItem = ({ item, handleDeleteItem, handleEditItem }) => {
    return (
        <div className="grocery-item">
            <p className="title">{item.item}</p>
            <div>
                <button
                    className="edit-btn"
                    onClick={() => {
                        handleEditItem(item.id);
                    }}
                >
                    <FaEdit />
                </button>
                <button
                    className="delete-btn"
                    onClick={() => {
                        handleDeleteItem(item.id);
                    }}
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default ListItem;
