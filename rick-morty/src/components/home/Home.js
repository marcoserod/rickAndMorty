import React, { useContext, useEffect, useState } from 'react';
import RMCard from '../rmcard/RMCard';
import {Link, useLocation, useHistory, withRouter} from 'react-router-dom';
import Loader from '../loader/Loader';
import Filter from '../filter/Filter';
import { DataContext } from '../../contexts/data.context';
import { fetchAllCharacters } from '../../services/data';


const Home = (props) =>{
  const [data, setData] = useState(null);
  const [timer, setTimer] = useState(false);
  
  const history = useHistory();
  
  const randomFrom = () =>{
    return  Math.floor(Math.random() * (671 - 1)) + 1;
  }
  let random1 =  randomFrom();
  let random2 =  randomFrom();
  let random3 = randomFrom();

  useEffect(()=>{
    setData(null)
    fetchAllCharacters(random1, random2, random3,setData, 3000);
    setTimeout(() => setTimer(!timer),5000);
  },[timer]);

    

  return(
    <>
    <div className='container-fluid d-flex text-white justify-content-center align-items-center'
    style={{
      height: "20vh",
      background: "rgb(52,58,64)",
      background: "linear-gradient(180deg, rgba(52,58,64,1) 20%, rgba(32,35,41,1) 80%)"
    }}>
      <h1>Welcome</h1>
    </div>
    
    {data?
    <section style={{marginBottom:"3rem"}} className="container-fluid">
    <div className="row justify-self-center justify-content-around">
        {data.map((ch) => (
          <Link key={ch.id} to={`/${ch.id}`}>
            <RMCard key={ch.id} className="Big"  id= {ch.id} name={ch.name} img= {ch.image} />
          </Link>
        ))}
    </div>
  </section>
    :  
    <div>
      <Loader/>
    </div>
        }
  </>
  )

}


  export default withRouter(Home);