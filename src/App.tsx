import Home from "./pages/Home/home";
import { Provider } from "react-redux";
import store from "./middleware/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
