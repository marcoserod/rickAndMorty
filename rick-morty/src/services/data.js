
import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/'

 
export async function fetchAllCharacters(r1,r2,r3,setData){
    await axios.get(`${BASE_URL}character/${r1},${r2},${r3}`)
        .then(res => {
            setData(res.data);
            return res.data;
           
        })
        .catch(err =>{
            console.log(err.message);
        })
}

export async function fetchCharactersFilteringBy(name, gender, status, page, setData, setError){
    await axios.get(`${BASE_URL}character/?name=${name}&gender=${gender}&status=${status}&page=${page}`)
        .then(res => {
            setData(res.data);
            return res.data;
        })
        .catch(err => {
            setError(true);
            console.log(err.message);
            console.log(err);
            })

}


