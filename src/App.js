import "./styles.css";
import { ModalWithWrapper } from "./ModalWithWrapper";
import { ModalWithoutWrapper } from "./ModalWithoutWrapper";

const App = ({ withWrapper = true }) => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {withWrapper ? <ModalWithWrapper /> : <ModalWithoutWrapper />}
    </div>
  );
};

export default App;
