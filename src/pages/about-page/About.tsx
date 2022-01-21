import React from 'react';
import styled from 'styled-components';
import { THEME_COLORS } from '../../styles/theme';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  margin-left: 100px;
  width: 700px;
  color: ${THEME_COLORS.pink}
`;

const StyledText = styled.p`
  font-size: 18px;
`;

export default function About(){
  return(
    <StyledContainer>
      <h1>The (wo)man, the myth, the legend, Mackenzie Clark</h1>
      <h2>
        At work:
      </h2>
      <StyledText>
        I love polishing the look and feel of a website, from the top-level flow and animation to the nitty-gritty optimization. I'm especially interested in creating an amazing experience for disabled users, whether that means working with product at the beginning of a feature, or going back to legacy code and updating it.
      </StyledText>
      <StyledText>
        I need structure and organization within my code and work process. If you looked at the three coffee mugs on my desk and the perpetual messy bun I rock, you'd call me a liar. But despite my disorganized desk, I strive to create a workplace with open communication, realistic timelines, good quality code. And I need that structure, because... 
      </StyledText>
      <StyledText>
        I'm a bit of a dork. I love getting up to workplace shenanigans. I remember during a project with long hours and staying late, I "borrowed" a skeleton from the Halloween decorations HR set up and set it in my boss's chair, plastic chairs and empty liquor bottle and everything. It's still his slack picture to this day. I set up a t-shirt spinner (with e-confetti!) for biweekly meetings, and the chosen team member won a silly red bubble shirt. I thrive in teams that don't take life too seriously.
      </StyledText>
      <h2>At home:</h2>
      <StyledText>
        Spoiler alert: huge nerd. I love video games. The crown jewel of my time at DevMountain was a final project dedicated to showing my current gear and raid progression in a video game called World of Warcraft. I play all types of games, from hidden object puzzle games to dark souls games. I can't say I'm very good at either of those, but I spend a lot of my free time gaming with my husband and our friends. Other than that, I enjoy reading, knitting, and watching master chef.
      </StyledText>
      <StyledText>
        I have an amazing husband and two cats, Merry and Pippin. Soon, we'll all be moving north to Canada and starting a new adventure!
      </StyledText>
    </StyledContainer>
  );
}