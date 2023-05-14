import {Route,Switch} from 'react-router-dom';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
    return (
      <>
      <Switch>
      <Route exact path='/' component={Navbar}></Route>
      <Route path='/add-contact' component={Form}></Route>
      </Switch>
      </>
    );
}

export default App;
