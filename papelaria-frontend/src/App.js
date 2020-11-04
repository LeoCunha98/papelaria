import './App.css';
import { store } from './redux/actions/store';
import { Provider } from 'react-redux';
import MenuLateral from './components/MenuLateral';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import { AssessmentIcon } from '@material-ui/icons/Assessment';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
});

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <MenuLateral />
        <div className={classes.appMain}>
          <Header />
        </div>
    </Provider>
  );
}

export default App;
