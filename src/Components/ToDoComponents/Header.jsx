import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <div>
      <h1 className={styles.heading}>To Do</h1>
      <div className={styles["inpContainer"]}>
        <form onSubmit={props.handleSubmit} className={styles["input-form"]}>
          <input
            type="text"
            value={props.desc}
            onChange={props.handleDescChange}
          />
        </form>
      </div>
    </div>
  );
}
