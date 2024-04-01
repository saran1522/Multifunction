import "../styles/MemePage.css";
import Header from "../Components/MemeComponents/Header";
import Container from "../Components/MemeComponents/Container";

function MemePage() {
  return (
    <div className="memePageContainer">
      <div>
        <Header />
        <Container />
      </div>
    </div>
  );
}

export default MemePage;
