import React, { useEffect , useState } from 'react'

function Summon(){
    console.log("ok")
}

function Storygacha() {
    const [num, setNum] = useState(0);

  useEffect(() => {
    // 👇️ only runs once
    console.log('useEffect ran');

    function incrementNum() {
      setNum(prev => prev + 1);
    }

    incrementNum();
  }, []); // 👈️ empty dependencies array
    return (
    <div class = 'center'><h2>Story Banner ig?</h2>
        <button onClick={Summon} class = 'CENTER'>
            Click me
        </button>
        <h1 id="Summon_Result"></h1>
    </div>
    )
}

export default Storygacha