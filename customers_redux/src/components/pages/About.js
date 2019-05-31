import React from 'react';
import styled from 'styled-components';
import { colours } from '../../styles/globalStyles';

const About = () => (
  <AboutWrapper>
    <h1>
      About <span>Contact</span> <span>Manager</span>{' '}
    </h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis iure,
      fugiat nihil dignissimos, assumenda placeat dolorem, culpa explicabo odit
      id! Mollitia quidem unde nisi consequuntur corporis, aspernatur beatae
      itaque ducimus placeat atque? Voluptatem commodi similique architecto
      natus aliquid! Ut maiores officia recusandae labore magnam aperiam commodi
      aliquam sed similique? Pariatur dolore eius dolor vero, ea, in cum
      laudantium voluptatem amet, harum impedit dolorem minima? Vitae sunt non
      natus perspiciatis, dolorum corrupti nulla. Expedita rem ullam eveniet aut
      culpa! Voluptatum exercitationem a perferendis voluptas quas eaque aliquam
      impedit, fuga eveniet <br /> <br /> dicta ea reprehenderit tempore
      delectus ab, cum assumenda doloribus, enim officia! Dicta nulla odit
      quisquam eveniet dolorem tenetur praesentium. Quam sequi asperiores eaque
      numquam officia, dolorum aliquam aut qui autem neque. Voluptates molestiae
      beatae minima praesentium, ullam eius nemo esse, adipisci optio amet
      impedit commodi, in consectetur odio sapiente. Aliquid vitae nisi
      aspernatur corrupti <br /> <br /> ut ratione, consequuntur debitis tenetur
      hic temporibus, veniam repudiandae tempore asperiores necessitatibus ipsam
      quibusdam commodi? Totam perspiciatis mollitia dolores modi consequatur
      vero quasi a dignissimos accusantium iste autem quas ipsam, officia
      nostrum itaque sequi voluptate soluta minima vel odit blanditiis inventore
      distinctio obcaecati! Alias pariatur ipsum, earum numquam quis maxime est
      facilis sit amet eos molestiae?
    </p>
  </AboutWrapper>
);

export default About;

const AboutWrapper = styled.div`
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  padding: 4rem;
  flex-direction: column;
  h1 {
    font-size: 3rem;
    padding: 1.6rem;
    text-shadow: 1px 2px #333;
    span:nth-child(1) {
      color: ${colours.yellowDD};
    }
    span:nth-child(2) {
      color: ${colours.yellowD};
    }
  }
  p {
    font-size: 1.8rem;
    line-height: 1.5;
    text-shadow: 1px 2px #333;
  }
`;
