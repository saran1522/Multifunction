export default function StartScreen({ numQuestions, dispatch }) {
  console.log(numQuestions);
  return (
    <div className="main-screen">
      <h2>Welcome To The The Quiz </h2>
      <p>{numQuestions} Questions To Test Your Tech knowledge </p>
      <button
        className="start-btn"
        onClick={() => {
          dispatch({ type: "start" });
        }}
      >
        Start Now
      </button>
    </div>
  );
}
