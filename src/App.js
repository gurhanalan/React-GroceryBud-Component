import React, { useState, useEffect } from "react";
import List from "./List";

import HeaderInput from "./HeaderInput";

const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};

function App() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState(getLocalStorage());
    const [editIndex, setEditIndex] = useState(null);
    const [alertText, setAlertText] = useState(null);
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!input) {
            setAlertText({ text: "Please Enter A Value", type: "danger" });
        } else if (editIndex !== null && input) {
            setItems((prev) => {
                prev[editIndex] = { id: prev[editIndex]["id"], item: input };

                return prev;
            });
            setEditIndex(null);
            setInput("");
            setAlertText({ text: "Value Changed", type: "success" });
        } else if (input) {
            const newInput = {
                id: new Date().getTime().toString(),
                item: input,
            };
            setAlertText({ text: "Item Added To The List", type: "success" });
            setItems((prev) => [...prev, newInput]);
            setInput("");
        }
    };

    const handleDeleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
        setAlertText({ text: "Item Removed", type: "danger" });
    };

    const handleEditItem = (id) => {
        let index = items.findIndex((item) => item.id === id);

        setInput(items[index]["item"]);
        setEditIndex(index);
    };

    const handleClearAllItems = () => {
        setItems([]);
        setAlertText({ text: "Empty List", type: "danger" });
    };

    const handleAlertReset = () => {
        setAlertText(null);
    };

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(items));
    }, [items]);

    return (
        <section className="section-center">
            <HeaderInput
                alertText={alertText}
                items={items}
                handleAlertReset={handleAlertReset}
                input={input}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                editIndex={editIndex}
            />
            <List
                items={items}
                handleDeleteItem={handleDeleteItem}
                handleEditItem={handleEditItem}
                handleClearAllItems={handleClearAllItems}
            />
        </section>
    );
}

export default App;
