import React, { useContext, useEffect, useState } from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom';
import {DataContext, ErrorContext} from '../../contexts/data.context';
import { fetchCharactersFilteringBy } from '../../services/data';
import RMCard from '../rmcard/RMCard';
import Loader from '../loader/Loader';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faChevronLeft,faChevronRight, } from '@fortawesome/free-solid-svg-icons'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Results = (props) => {
    // const [data, setData] = useState(null);
    const {data, setData} =useContext(DataContext);
    const {error, setError} = useContext(ErrorContext);
    let query = useQuery(); 
    let search = useLocation().search;
    let name = query.get("name");
    let status = query.get("status");
    let gender = query.get("gender");
    const [page, setPage]= useState(parseInt(query.get("page")));
    const[pageNumber, setPageNumber] = useState((window.innerWidth > 700)? 8:1);
    const history = useHistory()
    const [innerStatus, setInnerStatus] = useState(status);
    const [innerGender, setInnerGender] = useState(gender);

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
        debugger;
        document.getElementById('root').scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        fetchCharactersFilteringBy(name, innerGender, innerStatus, page, setData, setError); 
        window.history.replaceState(page,'Updating',`search?status=${innerStatus}&gender=${innerGender}&name=${name? name:''}&page=${page}` );
        history.location = window.history;

        return function cleanup(){
            setData(null);
          }
    }, [page,innerStatus, innerGender,search])

    const handlePageClick = (arg) =>{
        let selectedPage = arg.selected;
        setPage(selectedPage+1)

    } 

    return (
        error? 
        <div id="nothingHere">
            <p>No results have been found, please, try searching another thing</p>
        </div>
        :
        data? 
        <section style={{marginBottom:"3rem"}} className="container-fluid">
                {data.info.pages===1?null:
                <ReactPaginate
                disabledClassName="pagination-disabled"
                previousLabel={<FontAwesomeIcon style={{fontSize: "0.7rem"}} icon={faChevronLeft}/>}
                nextLabel={<FontAwesomeIcon style={{fontSize: "0.7rem"}} icon={faChevronRight}/>}
                disableInitialCallback = {true}
                activeLinkClassName="pagination-page-active"
                containerClassName="pagination-block d-flex"
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
                    <div className={`container-fluid mt-3 d-flex ${pageNumber>1?'justify-content-end'
                    :'justify-content-center p-0 ml-n2 flex-wrap'}`}>   
                        <p
                        style={{
                            color:"white",
                            margin: "0.5rem 1rem 0.5rem 1rem"
                        }}>{`Showing ${data.info.count} result(s) for "${name && name}"`}</p>
                        <select 
                        className="my-custom-selector"
                        id="status"
                        name="status"
                        value={innerStatus} 
                        onChange={e => {setInnerStatus(e.target.value);setPage(1)}}>
                        <option value="">status</option>
                        <option value="alive">alive</option>
                        <option value="dead">dead</option>
                        <option value="unknown">unknown</option>
                        </select>
                        <select 
                        className="my-custom-selector"
                        id="gender"
                        name="gender"
                        value={innerGender} 
                        onChange={e => {setInnerGender(e.target.value);setPage(1)}}>
                        <option value="">gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="genderless">genderless</option>
                        <option value="unknown">unknown</option>
                        </select>

                </div>
                <div className={`container-fluid d-flex wrap flex-wrap pl-0 pr-0  
                ${pageNumber>1? 'ml-n3 justify-content-between':'ml-n2 justify-content-center'}`}>
                
                    {data.results.map((ch) => (
                        <Link key={ch.id} to={`/${ch.id}`}>
                        <RMCard key={ch.id} className="Big"  id= {ch.id} name={ch.name} img= {ch.image} />
                        </Link>
                    ))}
                </div>
                {data.info.pages===1?null:
                <ReactPaginate
                disabledClassName="pagination-disabled"
                previousLabel={<FontAwesomeIcon style={{fontSize: "0.7rem"}} icon={faChevronLeft}/>}
                nextLabel={<FontAwesomeIcon style={{fontSize: "0.7rem"}} icon={faChevronRight}/>}
                disableInitialCallback = {true}
                activeLinkClassName="pagination-page-active"
                containerClassName="pagination-block d-flex"
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
        </section>
        :<>
            <Loader/>
        </>

    )
}

export default Results;
