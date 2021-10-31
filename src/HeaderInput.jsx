import React from "react";
import Alert from "./Alert";

const HeaderInput = ({
    alertText,
    items,
    handleAlertReset,
    input,
    handleInputChange,
    handleFormSubmit,
    editIndex,
}) => {
    return (
        <div className="grocery-form">
            {alertText && (
                <Alert
                    alertText={alertText}
                    handleAlertReset={handleAlertReset}
                    items={items}
                />
            )}
            <h3>Grocery Bud</h3>
            <form className="form-control">
                <input
                    type="text"
                    className="grocery"
                    placeholder="e.g. eggs"
                    value={input}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="submit-btn"
                    onClick={handleFormSubmit}
                >
                    {editIndex !== null ? "Edit" : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default HeaderInput;
