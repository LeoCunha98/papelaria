import './App.css';
import { store } from './redux/actions/store';
import { Provider } from 'react-redux';
import Produtos from './components/Produtos';


function App() {
  return (
    <Provider store={store}>
        <Produtos/>
    </Provider>
  );
}

export default App;
