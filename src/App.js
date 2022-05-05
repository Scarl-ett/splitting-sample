import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import SplitMe from './SplitMe';
import loadable from '@loadable/component';
// import { Component } from 'react';
// import notify from './notify';

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback : <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    // notify();
    // import('./notify').then(result => result.default());
    // import 함수는 promise 반환
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        {/* <Suspense fallback={<div>loading...</div>}> */}
          {visible && <SplitMe />}
        {/* </Suspense> */}
      </header>
    </div>
  );
}

// class App extends Component {
//   state = {
//     SplitMe : null
//   };
//   handleClick = async () => {
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe : loadedModule.default
//     });
//   };
//   render() {
//     const {SplitMe} = this.state;
//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React!</p>
//           {SplitMe && <SplitMe />}
//         </header>
//       </div>
//     );
//   }
// }

export default App;
