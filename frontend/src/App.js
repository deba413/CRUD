import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Add or Update item
  const handleAdd = () => {
    if (!newItem.trim()) return;
    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = newItem;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, newItem]);
    }
    setNewItem("");
  };

  // Edit item
  const handleEdit = (index) => {
    setNewItem(items[index]);
    setEditIndex(index);
  };

  // Delete item
  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  // Filter items by search
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <h1>React CRUD Application</h1>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Combined Add & Search Section */}
        <div className="input-search-row">
          <input
            type="text"
            placeholder="Add or edit item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={handleAdd}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Item List */}
        <ul className="item-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
                <div className="actions">
                  <button className="edit" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="no-data">No items found</p>
          )}
        </ul>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} CRUD App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
