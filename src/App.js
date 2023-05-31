import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import SlidingSection from './components/SlidingSection';

function App() {
  const slides = [
    { 
      intro: "Private Home 0", 
      title: "Your packed, overpriced apartment.", 
      content: { 
        color: "#999b86", 
        features: [
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
        ] 
      },
    },
    { 
      intro: "Private Home 1", 
      title: "Your packed, overpriced apartment.", 
      content: { color: "#d1ae9e",
        features: [
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
          {
            title: "Carefully isolated", 
            image:"https://://uploads-ssl.webflow.com/6475c491555ad35aceabe1c8/6475c528a89d0a45d99fa7cc_60edefc65e33fa77487393d2_Ark-Shelter-Lodge.png",
            description:"Take full-appreciation of the natural surroundings in the comfort of your own designer home and whenever you feel like it, reach the nearby common areas."
          },
        ] 
      }, 
    },
    { intro: "Private Home 2", title: "Your packed, overpriced apartment.", content: { color: "#f3eeed",} },
    { intro: "Private Home 3", title: "Your packed, overpriced apartment.", content: { color: "#c0dade",} }
  ];

  return (
    <ReactFullpage
      render={({ state, fullpageApi }) => (
        <div id="fullpage-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="section" id={"section-" + index}>
              <SlidingSection intro={slide.intro} title={slide.title} content={slide.content} keyProp={index} />
            </div>
          ))}
        </div>
      )}
    />
  );
}

export default App;
