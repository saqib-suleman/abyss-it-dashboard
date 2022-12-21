import "./App.css";
import Card from "./components/Card";
// import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <span>
          <Card name={"Pakistan"} />
          <Card name={"Australia"} />
          <Card name={"USA"} />
        </span>
        <span>
          <Card name={"Middle East"} />
          <Card name={"Europe"} />
          <Card name={"South Africa"} />
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default App;
