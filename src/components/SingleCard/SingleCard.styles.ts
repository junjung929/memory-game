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
    position: 'absolute',
  },
  '& .back': {
    cursor: 'pointer',
  },
});

export const StyledSingleCardWrapper = styled.div<{
  flipped: boolean;
}>(
  ({ flipped }) =>
    flipped && {
      '& .front': {
        transform: 'rotateY(0deg)',
      },
    }
);
