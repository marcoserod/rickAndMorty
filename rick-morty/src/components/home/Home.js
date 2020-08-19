import React, { useContext, useEffect, useState } from 'react';
import RMCard from '../rmcard/RMCard';
import {Link, useLocation, useHistory, withRouter} from 'react-router-dom';
import Loader from '../loader/Loader';
import Filter from '../filter/Filter';
import { DataContext } from '../../contexts/data.context';
import { fetchAllCharacters } from '../../services/data';


const Home = (props) =>{
  const {data=null, setData} = useContext(DataContext);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [formOk, setFormOk] = useState(false)
  const history = useHistory();
  
  const randomFrom = () =>{
    return  Math.floor(Math.random() * (671 - 1)) + 1;
  }
  let random1 =  randomFrom();
  let random2 =  randomFrom();
  let random3 = randomFrom();

  useEffect(()=> {
    console.log(`here is the state of ${data}`)
    !data &&
    fetchAllCharacters(random1, random2, random3,setData);
    console.log(`here is the state of ${data}`)
  },[]);

  return(
    (data!==null)?(
    <section style={{marginBottom:"3rem"}} className="container-fluid">
    <div className="row justify-self-center justify-content-around">
        {data.map((ch) => (
          <Link key={ch.id} to={`/${ch.id}`}>
            <RMCard key={ch.id} className="Big"  id= {ch.id} name={ch.name} img= {ch.image} />
          </Link>
        ))}
    </div>
  </section>
  )

    :  
    <div>
      <Loader/>
    </div>
  )

}


  export default withRouter(Home);