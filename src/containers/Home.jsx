import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from  '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';


const API = 'http://localhost:3000/initalState'



const Home = () => {
    //Consume la API, mediante el custom hook
    const videos = useInitialState(API);
    console.log(`resultado-videos: {}`, videos.length);

    return videos.length === 0 ? <h1>Loading...</h1> : (
            //<div className = "App">
              //<Header />
            <> 
                
                <Search />
                
                {
                    videos.mylist?.length > 0 && 
                        <Categories title="Mis favoritos">
                            <Carousel>
                                <CarouselItem />
                            </Carousel>
                        </Categories>
                }

                {
                    videos.trends?.length > 0 && 
                    <Categories title="Cursos y diplomados">
                        <Carousel>
                            {
                                videos.trends?.map(item =>
                                    <CarouselItem key={item.id}  {...item} />
                                )
                            }
                            
                        </Carousel>
                    </Categories>
                }  

                {
                    videos.originals?.length > 0 && 
                    <Categories title="Experiencia">
                        <Carousel>
                            {
                                videos.originals?.map(item =>
                                    <CarouselItem key={item.id}  {...item} />
                                )
                            }

                        </Carousel>
                    </Categories>
                }

               
            
            </>
        )
        
};

  
   // const initialState = useInitialState(API);
   /* antes
    return initialState.length === 0 ? <h1>Loading...</h1>:(
    <div className="App">
        <Header/>
        <Search/>
        
        {
            initialState.mylist.length > 0 &&
            <Categories title="Mis favoritos">
            <Carousel>
            {
                    initialState.mylist.map(
                        item => (
                        <CarouselItem key={item.id}{...item}/>
                        )
                    )
                }           
            </Carousel>
        </Categories>

        }

        
        <Categories title="Cursos y Diplomados" >
            <Carousel>
                {
                    initialState.trends.map(
                        item => (
                        <CarouselItem key={item.id}{...item}/>
                        )
                    )
                }               
            </Carousel>
        </Categories>

        <Categories title="Experiencia">
            <Carousel>
                {
                    initialState.originals.map(
                        item=> (
                            <CarouselItem key={item.id}{...item}/>
                        )
                    )
                }
               
            </Carousel>
        </Categories>

        <Footer/>
    </div>
    )
}
*/
export default Home;