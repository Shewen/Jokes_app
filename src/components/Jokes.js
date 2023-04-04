import  { useState, useEffect } from 'react'
import spinner from '../assets/spinner1.jpg'
import './Jokes.scss'

const Jokes = () => {
const[jokes, setJokes] = useState({})
const[isloading, setIsloading] = useState(true)



const url ="https://api.icndb.com/jokes/random";

  
const getjoke = () => {
  fetch(url)
  .then((response) =>{
    return response.json();
  } )
  .then((data) => {
    console.log(data)
    setJokes(data);
    setIsloading(false);
  } )

}


useEffect(() => {

  getjoke()

}, []
  

)

  return (
    <section className='--flex-center --100vh --bg-primary'>
    <div className='container --card --bg-light --p'>
      <h2>Random Jokes Generator</h2>
      <div className='--line'></div>
      {isloading ? (   
        <div className='--center-all'>   
      <img src= {spinner} alt='loading' width={100}/>
      </div>
) : (
  <>
<h4>Jokes id:{jokes.value.id}</h4>
<p> {jokes.value.jokes} </p>

</>
) }
      
              <br/>


     
      
      <br/>
      <button className='--btn --btn-primary' onClick={getjoke}>Generate Jokes</button>
    </div>
    </section>
  )
}

export default Jokes
