import React, { useState, useEffect } from "react";

function ItemForm({ onSave, editIndex, items, setEditIndex }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      setValue(items[editIndex]);
    }
  }, [editIndex, items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSave(value);
    setValue("");
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={editIndex !== null ? "Edit item..." : "Add item..."}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      {editIndex !== null && (
        <button
          type="button"
          className="cancel-btn"
          onClick={() => {
            setValue("");
            setEditIndex(null);
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default ItemForm;
