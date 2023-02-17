import Header from "./components/header/Header";
import { data } from "./helper/data";
import Card from "./components/cards/Card";

function App() {
  return (
    <div>
      <Header />

      <Card data={data} />
    </div>
  );
}

export default App;


