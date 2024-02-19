// import Accordion from './components/accordion';
// import RandomColor from './components/random-color';

import StarRating from './components/star-rating';

function App() {
  return (
    <div
      className='App'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random Color component */}
      {/* <RandomColor /> */}
      {/* Star Rating Component */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
