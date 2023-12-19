import Main from './Main';
// import { counterStore } from './ExampleReduxToolkit/Counter/CounterStore';
import { Provider } from 'react-redux';
// import { factorialStore } from './ExampleReduxToolkit/Factorial/FactorialStore';
import { EOStore } from './ExampleReduxToolkit/EvenODD/EOStore';





function App() {
  return (

    <div className='flex-column align-items-center d-flex justify-content-center'>
      <Provider store={EOStore}>
      <Main />
      </Provider>
    </div>

  );
}

export default App;
