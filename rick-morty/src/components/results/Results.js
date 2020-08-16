import React, { useContext, useEffect, useState } from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom';
import {DataContext} from '../../contexts/data.context';
import { fetchCharactersFilteringBy } from '../../services/data';
import RMCard from '../rmcard/RMCard';
import Loader from '../loader/Loader';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faChevronCircleLeft,faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Results = (props) => {
    const {data, setData} = useContext(DataContext);
    let query = useQuery(); 
    let name = query.get("name");
    let status = query.get("status");
    let gender = query.get("gender");
    const [page, setPage]= useState(parseInt(query.get("page")));
    const[pageNumber, setPageNumber] = useState((window.innerWidth > window.innerWidth/2)? 8:1);
    const history = useHistory()

    let x = window.matchMedia("(min-width: 700px)");
    x.addListener(widthChange);
    function widthChange(x){
        if (x.matches){
            setPageNumber(8);
        }else{
            setPageNumber(1);
        }
    }
    
    useEffect(()=>{
        fetchCharactersFilteringBy(name, gender, status, page, setData); 
        window.history.replaceState(page,'Updating',`search?status=${status}&gender=${gender}&name=${name}&page=${page}` );
        history.location = window.history;
        console.log('renderizadoooooooooo')
    }, [page])

    const handlePageClick = (arg) =>{
        let selectedPage = arg.selected;
        setPage(selectedPage+1);

    } 

    return (
        data? 
        <section style={{marginBottom:"3rem"}} className="container-fluid">
                {data.info.pages===1?null:
                <ReactPaginate
                disabledClassName="pagination-disabled"
                previousLabel={<FontAwesomeIcon style={{fontSize: "2rem"}} icon={faChevronCircleLeft}/>}
                nextLabel={<FontAwesomeIcon style={{fontSize: "2rem"}} icon={faChevronCircleRight}/>}
                disableInitialCallback = {true}
                activeLinkClassName="pagination-page-active"
                containerClassName="pagination-block sticky-top sticky-offset d-flex"
                pageClassName= "pagination-page"
                pageLinkClassName = "pagination-page"
                previousClassName = "pagination-button"
                nextClassName="pagination-button"
                initialPage={page-1}
                pageCount={data.info.pages}
                pageRangeDisplayed={pageNumber}
                marginPagesDisplayed={1}
                onPageChange={handlePageClick}/>
                }   
                {/* <Filter 
                    name={enteredName}
                    gender={selectedGender}
                    status={selectedStatus}
                    handleSubmit={handleSubmit}/> */}
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

export default Results;