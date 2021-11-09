import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../../styles/theme';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  margin-left: 100px;
  width: 700px;
  color: ${THEME_COLORS.russianViolet}
`;

const StyledText = styled.p`
  font-size: 18px;
`;

export default function About(){
  return(
    <StyledContainer>
      <h1>The (wo)man, the myth, the legend, Mackenzie Clark</h1>
      <a href="https://www.linkedin.com/in/clarkmackenzieb/"><StyledText>Here's my LinkedIn, if you're interested.</StyledText></a>
      <h2>
        The Past
      </h2>
      <StyledText>
        I'm a bootcamp graduate. I didn't find much work or passion with my college degree (on top of Tennessee not having a lot of international jobs... go figure?). I wasn't sure what to do or where my life was going, but I always was interested in the tech side of life, so I did a little more research into breaking into that field without a CS degree.
      </StyledText>
      <StyledText>
        So after that small quarter-life crisis, I entered DevMountain in late 2017. After graduating I was hired on there as a contractor mentoring students and working on internal software. After that stint ended, I began working at my current job at Match.com. Four years later, I'm still vibing here.
      </StyledText>
      <h2>The Present</h2>
      <StyledText>
        I work on the front end mostly and I love creating an amazing user experience for people on the web.
      </StyledText>
      <StyledText>
        Lately I've been really into accessibility. It was never really a topic for me until a few years into my job at Match. Up until then, it was always a problem handled bny someone else. Components were set up for me. Most everything was built-in. But at some point I can't identify, I realized that wasn't enough. People on our site were (expensively) committing to find love. People were baring their souls on their profiles. That's terrible enough-- but people with disabilities had to do that too, often with extreme difficulty. Everyone deserves an equal playing field to find love, especially with how terrible online dating can be.
      </StyledText>
      <h2> The Future</h2>
      <StyledText>
        I'll be moving to Canada soon with my husband. That's about as far as I've gotten when thinking about "the future."
      </StyledText>
    </StyledContainer>
  );
}