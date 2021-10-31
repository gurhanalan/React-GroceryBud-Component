import React, { useEffect } from "react";

const Alert = ({ alertText, handleAlertReset, items }) => {
    useEffect(() => {
        let timer = setTimeout(handleAlertReset, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <h2 className={`alert alert-${alertText.type}`}>{alertText.text}</h2>
    );
};

export default Alert;
