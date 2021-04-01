import {useState, useEffect} from 'react';

const useInitialState =(API) => {
    const [ videos, setVideos ] = useState ({
        mylist: [],
        trends: [],
        originals: []
    });

    useEffect(()=> {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []
    );

    console.log(`Lista de Video: \n {}`,videos);

    return videos;
};



export default useInitialState;


/*ejemplo estudiante
const selectCategorieTitle = categorie =>{
    let title
    switch (categorie) {
        case 'trends':{
            title = 'Cursos y Diplomados'
            break
        }
        case 'originals':{
            title = 'Experiencia'
            break
        }
        default:{
            title= categorie
            break
        }
    }
    return title
}

export const useInitialState = API =>{
    const [videos, setVideos] = useState (null)
    useEffect(() => {
            const getVideos = () => {
                fetch(API)
            .then(videos => videos.json())
            .then(videos => {
                    const response = {}
                    Object.keys(videos).forEach(categorie => {
                            response[selectCategorieTitle(categorie)]=
                            videos[categorie]
                        }
                    )
                setVideos(response)
                }
            )                   
            }
            getVideos()
        }, []
    )
    return videos
}
*/


