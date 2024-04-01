import { useState } from "react";
import { nanoid } from "nanoid";
import styles from "../styles/TodoPage.module.css";
import Header from "../Components/ToDoComponents/Header";
import Items from "../Components/ToDoComponents/Items";

function ToDoPage() {
  const [items, setItems] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );
  const [desc, setDesc] = useState("");

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handleCheck(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
    localStorage.setItem(
      "items",
      JSON.stringify(
        items.map((item) =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        )
      )
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;
    const newItem = {
      id: nanoid(),
      desc,
      checked: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
    localStorage.setItem("items", JSON.stringify([...items, newItem]));
    setDesc("");
  }

  function handleDelete(itemId) {
    setItems((prevItem) => prevItem.filter((item) => item.id !== itemId));
    localStorage.setItem(
      "items",
      JSON.stringify(items.filter((item) => item.id !== itemId))
    );
  }

  function handleRemoveAll() {
    if (confirm("Do you want to clear the list?")) {
      setItems([]);
      localStorage.setItem("items", JSON.stringify([]));
    }
  }

  return (
    <div className={styles.todoPageContainer}>
      <Header
        desc={desc}
        handleDescChange={handleDescChange}
        handleSubmit={handleSubmit}
      />
      <Items
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleRemoveAll={handleRemoveAll}
      />
    </div>
  );
}

export default ToDoPage;
