import "./App.css";
import Component from "./components/Component.js";
import Message from "./components/Message.js";
import Attribution from "./components/Attribution";

function App() {
  return (
    <>
      <div className="container">
        <Component />
        <Message />
        {/* <Attribution /> */}
      </div>
    </>
  );
}

export default App;
