import styles from "./Items.module.css";

export default function Items(props) {
  const noOfItems = props.items.length;
  const packedItems = props.items.filter((item) => item.checked).length;
  const packedPercentage = Math.round((packedItems / noOfItems) * 100);
  // const sortValues = ["task name", "done", "add sequence"];
  // const [sortBy, setSort] = useState("add sequence");
  // const sortedItems = [];
  // if (sortBy === "add sequence") sortedItems = props.items;
  // if (sortBy === "task name") {
  //   sortedItems = props.items
  //     .slice()
  //     .sort((a, b) => a.desc.localeCompare(b.desc));
  // }
  // if (sortBy === "done") {
  //   sortedItems = props.items
  //     .slice()
  //     .sort((a, b) => Number(a.checked) - Number(b.checked));
  // }

  return (
    <div className="item-container">
      {/* <div className="sort">
        <label htmlFor="sorts">sort by: </label>
        <select
          name=""
          id="sorts"
          value={sortBy}
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          {sortValues.map((srtval, i) => (
            <option value={srtval} key={i}>
              {srtval}
            </option>
          ))}
        </select>
      </div> */}
      <ul className={styles.list}>
        {props.items.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              props.handleCheck(item.id);
            }}
            className={styles["list-item"]}
          >
            <span
              className={styles["item-name"]}
              style={
                item.checked
                  ? { textDecoration: "line-through", color: "grey" }
                  : {}
              }
            >
              {item.desc}
            </span>
            <span
              id="remove"
              className={styles["remove-icon"]}
              onClick={() => props.handleDelete(item.id)}
            >
              ✖
            </span>
          </li>
        ))}
      </ul>
      <div className="message">
        {props.items.length
          ? `you have ${noOfItems} tasks and you have done ${packedItems} (${packedPercentage}%)`
          : "Add your 1st Task"}
      </div>
      <div className="btn-container">
        {props.items.length > 0 && (
          <button
            className={styles["remove-btn"]}
            onClick={props.handleRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
}
