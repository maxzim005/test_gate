import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Form_1 from './components/Form_1/Form_1';
import Form_2 from './components/Form_2/Form_2';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <Header />
      <Sidebar />
      <div className='app-wrapper-content'>
        <Route path='/form_1' render={() => <Form_1 />} />
        <Route path='/form_2' render={() => <Form_2 />} />
      </div>
    </div>
  );
}

export default App;
