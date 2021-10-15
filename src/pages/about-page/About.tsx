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
`

const StyledText = styled.p`
  font-size: 18px;
`

export default function About(){

  return(
    <StyledContainer>
      <h1>The (wo)man, the myth, the legend, the Mackenzie Clark</h1>
      <a href="https://www.linkedin.com/in/clarkmackenzieb/"><StyledText>Here's my LinkedIn, if you're interested.</StyledText></a>
      <h2>
        The Past
      </h2>
      <StyledText>
        Right now, I'm a software engineer and I think it's pretty cool, but I'll come out and say it: I don't have a formal CS degree. I wasn't interested in STEM in college, despite my family having a big focus in STEM. I'm a bootcamp babe. When I graduated college with my International Studies degree, I realized that Tennessee (where I was living at the time) doesn't have too many international options, unless you're going into excel sheet fun. It turns out the only real use for my degree was going abroad and teaching. My near-fluency in Mandarin was quickly becoming a party trick my friends or relatives asked about at gatherings. "How do you say bathroom in Chinese?"
      </StyledText>
      <StyledText>
        So after a small quarter-life crisis, I entered DevMountain in late 2017. After graduating I was hired on as a contractor mentoring students and working on internal software. After that stint ended, I began working at my current job, Match.com. Four years later, I'm still vibing here.
      </StyledText>
      <StyledText>
        I wish I had more interesting things to put on here, but my story is similar to a lot of people. As the technology sector boomed, people took advantage of the bootcamps springing up. For better or for worse, it offered a quick entry point to a lucrative career path. Some find more success than others. Others aren't so lucky.
      </StyledText>
      <h2>The Present</h2>
      <StyledText>
        I work on the front end. I like to refer to myself as a UI engineer, but my "official" title is Engineer II. My bootcamp encouraged students to list themselves as full-stack, due to our rudementary experience setting up node servers, but as I got more experience, I found myself gravitating to the front end. While I do work closely with our API team, I rarely modify our middleware outside of redirecting, and I haven't touched a server file in a long, long time.
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