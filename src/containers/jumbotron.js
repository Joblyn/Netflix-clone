import React, { useRef } from 'react'; 
import { gsap } from "gsap/all";
import { useIntersection } from "react-use";

import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components';

export function JumbotronContainer() {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootmargin: "0",
    threshold: 0.5
  })

  const fadeIn = element => {
    gsap.from(element, 5, {
      opacity: 1,
      x: -60,
      ease: 'power4.out',
      stagger: {
        amount: 0.3
      }
    })
  }

  const fadeOut = element => {
    gsap.from(element, 1, {
      opacity: 0,
      x: -100,
      ease: 'power4.out',
    })
  }

  intersection && intersection.intersectionRatio < 0.5 ?
  fadeOut(".fadeIn")
  : fadeIn(".fadeOut");  

  return (
    <Jumbotron.Container ref={sectionRef}>
      {jumboData.map(item=>(
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane className="fadeIn" ref={sectionRef}>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane className="fadeIn">
            <Jumbotron.Image src={item.image} alt={item.alt}/>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
