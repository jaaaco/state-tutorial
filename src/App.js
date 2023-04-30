import { useState } from 'react';

const ELEMENT_COUNT = 100;

function MyCounter ({ numb, count, onClick }) {
  
  console.info({ numb, count });
  return (
    <p>
      The button no. {numb} was clicked {count} times.
      <button onClick={onClick}> Click me! </button>
    </p>
  )
}

function App() {
  const [counts, setCounts] = useState(Array(ELEMENT_COUNT).fill(0))

  const incCouner = (whichCounter) => () => {
    const countsCopy = [...counts]
    countsCopy[whichCounter] += 1
    setCounts(countsCopy)
  }

  // Array(ELEMENT_COUNT).fill(0)
  // - to robi [0, 0, 0, 0, ...]


  // Array(ELEMENT_COUNT).fill().map((x,i)=>i) 
  // - to robi [0, 1, 2, ...]

  return (
    <>
        {Array(ELEMENT_COUNT).fill().map((x,i)=>i).map((i, index) => <MyCounter key={index} count={counts[i]} numb={index +1} onClick={incCouner(i)} />)}
        <button onClick={() => {
          setCounts(Array(ELEMENT_COUNT).fill(0))
        }}>Reset ALL</button>
    </>
  );
}

export default App;


// TO JEST TO SAMO:

function zrobCosTam(par1, par2) {
  alert(par1 + par2)
}

const zrobCosTam2 = function(par1, par2) {
  alert(par1 + par2)
}

const zrobCosTam3 = (par1, par2) => {
  alert(par1 + par2)
}


// TO JEST TO SAMO:

function zrobCosTamInnego(parX) {
  return function zrobJeszczeCostTam(parX, par1, par2) {

  }
}

const zrobCosTamInnego2 = (parX) => (par1, par2) => {
  alert(par1 + par2)
}
