import { store } from './redux/actions/store';
import { Provider } from 'react-redux';
import MenuLateral from './components/MenuLateral';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import Produtos from './pages/Produtos';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
  }
});

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <MenuLateral />
        <div className={classes.appMain}>
          <Header />
          <Produtos />
        </div>
    </Provider>
  );
}

export default App;
