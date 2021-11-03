import styled from '@emotion/styled';

export const StyledSingleCard = styled.div({
  position: 'relative',
  '& img': {
    width: '100%',
    display: 'block',
    border: '2px solid #fff',
    borderRadius: 6,
  },
  '& .front': {
    transform: 'rotateY(90deg)',
    transition: 'all ease-in 0.2s',
    position: 'absolute',
  },
  '& .back': {
    cursor: 'pointer',
    transition: 'all ease-in 0.2s',
    transitionDelay: '0.2s',
  },
});

export const StyledSingleCardWrapper = styled.div<{
  flipped: boolean;
}>(
  ({ flipped }) =>
    flipped && {
      '& .front': {
        transform: 'rotateY(0deg)',
        transitionDelay: '0.2s',
      },
      '& .back': {
        transform: 'rotateY(90deg)',
        transitionDelay: '0s',
      },
    }
);
