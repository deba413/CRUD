import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function ItemList({ items, onEdit, onDelete }) {
  return (
    <ul className="item-list">
      {items.length > 0 ? (
        items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <div className="actions">
              <FaEdit
                className="icon edit-icon"
                onClick={() => onEdit(index)}
              />
              <FaTrash
                className="icon delete-icon"
                onClick={() => onDelete(index)}
              />
            </div>
          </li>
        ))
      ) : (
        <p className="no-data">No items found</p>
      )}
    </ul>
  );
}

export default ItemList;
