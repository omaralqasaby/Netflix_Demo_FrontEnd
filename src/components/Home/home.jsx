import React from 'react';
import './home.css';
import Row from '../Raw/Raw';
import Banner from '../Banner/Banner'
import requests from './requests';
import Navbar from "../Navbar/navbar";
function Home(){
    return(

       <div style={{background:"black",paddingBottom:"10%"}}>
            <Navbar/>
            <div style={{margin:"0px",marginTop:"4%"}}>
            <Banner />
            </div>
           
        <div className="Home">
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

        </div>
       </div>
    )
}
export default Home;
