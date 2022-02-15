import './App.css';
import{useState}from 'react'

let adjustinterval=undefined;
function App() {
  const[watch,setWatch]=useState(0);
  const[start,setStart]=useState(false);

  const startWatch=()=>{
 adjustinterval=setInterval(()=>{
   setWatch((x)=>{
    return x+1;
   })
 },1000)
 setStart(true);
  }

  const stopWatch=()=>{
   clearInterval(adjustinterval);
   setStart(false);
  }

  const resetWatch=()=>{
     setWatch(0);
     clearInterval(adjustinterval);
     setStart(false);
  }
  return (
    <div className="App">
      <h1>start-stop</h1>
      <h1>{watch}</h1>
      <button disabled={start} onClick={startWatch}>Start</button>
      <button onClick={stopWatch}>Stop</button>
      <button onClick={resetWatch}>Reset</button>

     
    </div>
  );
}

export default App;
