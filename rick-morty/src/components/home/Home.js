import React, { useContext, useEffect, useState } from 'react';
import RMCard from '../rmcard/RMCard';
import {Link, useLocation, useHistory, withRouter} from 'react-router-dom';
import Loader from '../loader/Loader';
import Filter from '../filter/Filter';
import { DataContext } from '../../contexts/data.context';
import { fetchAllCharacters } from '../../services/data';


const Home = (props) =>{
  const {data, setData} = useContext(DataContext);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [formOk, setFormOk] = useState(false)
  const history = useHistory();

  useEffect(()=> {
    fetchAllCharacters(setData);
  },[]);

  useEffect(()=>{
    formOk && history.push(`/search?${urlGenerator(selectedStatus,selectedGender,enteredName)}&page=1`);
  },[formOk]);

  const urlGenerator = (selectedStatus, selectedGender, enteredName) => {
    const status = selectedStatus? `status=${selectedStatus}`: 'status=';
    const gender = selectedGender? `gender=${selectedGender}`: 'gender=';
    const name = enteredName ? `name=${enteredName}`: 'name=';
  
    const generatedURL = status + '&' + gender + '&' + name;
    return generatedURL;
    
  }
  const handleSubmit = (status, gender, name)=>{
    setSelectedStatus(status);
    setSelectedGender(gender);
    setEnteredName(name);
    setFormOk(true);
  }

  return (
    data? 
    <section style={{marginBottom:"3rem"}} className="container-fluid">
            <Filter 
              name={enteredName}
              gender={selectedGender}
              status={selectedStatus}
              handleSubmit={handleSubmit}/>
            <div className="row justify-self-center justify-content-around">
                {data.results.map((ch) => (
                  <Link key={ch.id} to={`/${ch.id}`}>
                    <RMCard key={ch.id} className="Big"  id= {ch.id} name={ch.name} img= {ch.image} />
                  </Link>
                ))}
            </div>
    </section>
    :<div>
      <Loader/>
    </div>

  )
}

// class Home extends React.Component{
//     constructor(props){
//       super(props);
//       this.handleSubmit = this.handleSubmit.bind(this);
//       this.state = {
//         characters: [],
//         isLoading: true,
//         selectedStatus: '',
//         selectedGender: '',
//         enteredName: '',
//         error: false,
//         errorMSG: '',
//         }    
//       }  
    
//     componentDidMount(){
//       fetch('https://rickandmortyapi.com/api/character/')
//         .then(res => res.json())
//         .then(json => {
//           console.log(json);
//           this.setState({
//             isLoading: false,
//             characters: json.results,
//             }
//           )
//         })
//       }

//       handleSubmit(status,gender,name){
//         this.setState({
//           isLoading: true,
//           selectedStatus: status,
//           selectedGender: gender,
//           enteredName: name
//         });
//       //   // fetch(`https://rickandmortyapi.com/api/character/?status=${status}&gender=${gender}&name=${name}`)
//       //   //   .then(res => 
//       //   //     {if (res.status !== 200){
//       //   //       console.log(res.error);
//       //   //       this.setState({
//       //   //         error: true,
//       //   //       })
//       //   //     }else {
//       //   //       res.json().then(json => {this.setState({isLoading: false, characters: json.results})})          
//       //   // }
//       // })
//     }   

  
//       render(){        
//         var {isLoading, characters, error, errorMSG} = this.state;
//         if(error){
//           return (
//           <div id="nothingHere">
//             <p>No results have been found, please, refresh and try again</p>
//           </div>
//           )
//         }
//         if(isLoading){
//           return <div>
//             <Loader/>
//             </div>
//         }
//         else{      
//           return(
//           <section className="container-fluid">
//             <Filter 
//               name={this.state.enteredName}
//               gender={this.state.selectedGender}
//               status={this.state.selectedStatus}
//               handleSubmit={this.handleSubmit}/>
//             <div className="row justify-self-center justify-content-around">
//                 {characters.map((ch) => (
//                   <Link to={`/${ch.id}`}>
//                     <RMCard key={ch.id} className="Big"  id= {ch.id} name={ch.name} img= {ch.image} />
//                   </Link>
//                 ))}
//             </div>
//           </section>
//           )
//         }
//     }
//   }
  

  export default withRouter(Home);