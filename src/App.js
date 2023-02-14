import MainNavigation from "./MainNavigation/MainNavigation";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

export default App;
