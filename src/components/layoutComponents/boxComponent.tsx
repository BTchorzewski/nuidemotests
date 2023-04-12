import { Box, Stack } from '@mui/material';
// box component is a div component.
// box component cna be modified by component prop to different tags , like section, span, etc. component={'span'}
// box component has th sx prop that allows us to change css properties.

export const BoxComponent = () => {
  return (
    <Box
      sx={{
        border: '1px solid',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          width: '250px',
          height: '250px',
          color: 'white',
          padding: '24px',
          '&:hover': {
            backgroundColor: 'secondary.main',
            color: 'red',
          },
        }}
      >
        my box component is a div.
      </Box>
      <Box
        display='flex'
        height={'250px'}
        width={'250px'}
        padding={'24px'}
        bgcolor={'error.main'}
      >
        My second box
      </Box>
    </Box>
  );
};
