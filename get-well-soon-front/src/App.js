import React from 'react';
import './styles.css'
import { useState, useEffect } from 'react';

 function App() {

    const [disorders, setDisorders] = useState();

    useEffect(() => {
      fetch("http://localhost:9040/disorders")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDisorders(data);

        })
        .catch((error) => {
          console.log(error)
        });
    }, [setDisorders]);
     
   
    const [outputInfoDisorder, setoutputInfoDisorder] = useState();
    const [outputArticles, setoutputArticles] = useState();
    const [outputAdvices, setoutputAdvices] = useState();
    const [outputPsychiatrists, setoutputPsychiatrists] = useState();
    const [outputPsychologists, setoutputPsychologists] = useState();
    const [outputClinics, setoutputClinics] = useState();
    const [outputPodcasts, setoutputPodcasts] = useState();
    const [outputApps, setoutputApps] = useState();
    const [Buttons, setButtons] = useState();



    function outputButtons(i){        
        setButtons(
            <div className='options'>
                <button className='button-options' onClick={()=> InfoDisorder(i)}>Что это?</button>
                <button className='button-options' onClick={()=> InfoArticles(i)}>Статьи</button>
                <button className='button-options' onClick={()=> InfoAdvices(i)}>Советы</button>
                <button className='button-options' onClick={()=> InfoPsychologists(i)}>Психологи</button>
                <button className='button-options' onClick={()=> InfoPsychiatrists(i)}>Психиатры</button>
                <button className='button-options' onClick={()=> InfoClinics(i)}>Клиники</button>
                <button className='button-options' onClick={()=> InfoPodcasts(i)}>Подкасты</button>
                <button className='button-options' onClick={()=> InfoApps(i)}>Приложения</button>
            </div>
        )
        setoutputInfoDisorder()
        setoutputArticles()
        setoutputAdvices()
        setoutputPsychiatrists()
        setoutputPsychologists()
        setoutputClinics()
        setoutputPodcasts()
        setoutputApps()
    }

    function InfoDisorder(i){
        setoutputInfoDisorder(
            <div className='info-disorders'>            
                <div className='disorder-name'>{i.name}</div>
                <div className='disorder-description'>{i.description}</div>
                <div className='disorder-link'><a href={i.link}>источник</a></div>            
            </div>
        )
        setoutputArticles()
        setoutputAdvices()
        setoutputPsychiatrists()
        setoutputPsychologists()
        setoutputApps()
        setoutputClinics()
        setoutputPodcasts()
    }
    function InfoArticles(i){
        setoutputArticles(
            <div 
            className='articles'>
                <div className='articles-name'>{i.articles.name}</div>
                <div className='articles-link'><a href={i.articles.link}>дополнительная информация</a></div>
            </div>
        )
        setoutputInfoDisorder()
        setoutputAdvices()
        setoutputPsychiatrists()
        setoutputPsychologists()
        setoutputApps()
        setoutputClinics()
        setoutputPodcasts()
    }
    function InfoAdvices(i){
        setoutputAdvices(
            <div 
            className='advices'>
                <div>
                    <div className='advices-name'>{i.advices[0].name}</div>
                    <div className='advices-description'>{i.advices[0].description}</div>
                    <div className='advices-link'><a href={i.advices[0].link}>youtube</a></div>

                </div>
                <div>
                    <div className='advices-name'>{i.advices[1].name}</div>
                    <div className='advices-description'>{i.advices[1].description}</div>
                    <div className='advices-link'><a href={i.advices[1].link}>youtube</a></div>
                </div>                
            </div>
        )
        setoutputInfoDisorder()
        setoutputArticles()
        setoutputPsychiatrists()
        setoutputPsychologists()
        setoutputApps()
        setoutputClinics()
        setoutputPodcasts()
    }        
    function InfoPsychiatrists(i){
        setoutputPsychiatrists(
            <div 
            className='psychiatrists'>
                <div className='psychiatrists-name'>{i.psychiatrists.name}</div>
                <div className='psychiatrists-link'><a href={i.psychiatrists.link}>ссылка</a></div>

            </div>
        )
        setoutputInfoDisorder()
        setoutputArticles()
        setoutputAdvices()
        setoutputPsychologists()
        setoutputApps()
        setoutputClinics()
        setoutputPodcasts()
    }
    function InfoPsychologists(i){
        setoutputPsychologists(
            <div 
            className='psychologists'>
                <div className='psychologists-name'>{i.psychologists.name}</div>
                <div className='psychologists-link'><a href={i.psychologists.link}>ссылка</a></div>
            </div>
        )
        setoutputInfoDisorder()
        setoutputArticles()
        setoutputAdvices()
        setoutputPsychiatrists()
        setoutputApps()
        setoutputClinics()
        setoutputPodcasts()
    }
    function InfoClinics(i){
        setoutputClinics(
            <div className='clinics'>
                <div className='clinics-name'>{i.clinics.name}</div>
                <div className='clinics-link'><a href={i.clinics.link}>ссылка</a></div>
            </div>
        )
        setoutputInfoDisorder()
        setoutputArticles()
        setoutputAdvices()
        setoutputPsychiatrists()
        setoutputPsychologists()
        setoutputApps()
        setoutputPodcasts()
    }
    function InfoPodcasts(i){
        setoutputPodcasts(
            <div 
            className='podcasts'>
                    <div className='podcasts-column'>
                        <div className='podcasts-name'>{i.podcasts.name}</div>
                        <div className='podcasts-description'>{i.podcasts.description}</div>
                        <div className='podcasts-link'><a href={i.podcasts.link}>ссылка</a></div>
                </div>
                <div><img className='podcastPic' src={require('./assets/podcast.png')} alt=""/></div>

            </div>
        )
        setoutputInfoDisorder()
        setoutputArticles()
        setoutputAdvices()
        setoutputPsychiatrists()
        setoutputPsychologists()
        setoutputApps()
        setoutputClinics()
    }
    function InfoApps(i){
        setoutputApps(
            <div 
            className='apps'>
                <div className='apps-name'>{i.apps.name}</div>
                <div className='apps-description'>{i.apps.description}</div>
                <div className='apps-link'><a href={i.apps.link}>ссылка</a></div>

            </div>
        )
        setoutputInfoDisorder()
        setoutputArticles()
        setoutputAdvices()
        setoutputPsychiatrists()
        setoutputPsychologists()
        setoutputClinics()
        setoutputPodcasts()
    }
        return(
        <div>
            <h1>Get well soon</h1>
        {disorders?.map((i) => (
        <div>
            <div className='menu'>
            <button className='button-disorders'
        onClick={()=> outputButtons(i)}>
                {i.name}
                </button>
            </div>
        </div>
        ))}
        {Buttons}
        {outputInfoDisorder}
        {outputArticles}
        {outputAdvices}
        {outputPsychiatrists}
        {outputPsychologists}
        {outputClinics}
        {outputPodcasts}
        {outputApps}
        
        </div>


    )
}
export default App;

