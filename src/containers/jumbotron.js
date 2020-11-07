import React, { useEffect } from 'react'; 
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components';

export function JumbotronContainer() {
  // let tl = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    gsap.from(".textanim", {
      delay: 0.5,
      duration: 2,
      y: "100%",
      opacity: 0,
      stagger: 0.2,
      ease: "power3.Out",
      start: 'top 50%',
      end: 'bottom 60%',
      scrollTrigger: {
        trigger: '.anim',
        toggleActions: 'restart complete reverse reset'
      }
    })
    
    gsap.from(".imageanim", {
      duration: 2,
      x: "100%",
      opacity: 0,
      ease: "power3.out",
      start: 'top 50%',
      end: 'bottom 60%', 
      scrollTrigger: {
        trigger: ".anim",
        toggleActions: 'restart complete reverse reset'
      }
    })
  }, []);

  return (
    <Jumbotron.Container>
      {jumboData.map(item=>(
        <Jumbotron className="anim" key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title className="textanim">{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle className="textanim">{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane className="imageanim">
            <Jumbotron.Image src={item.image} alt={item.alt}/>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
