import { Box, Stack, Divider } from '@mui/material';

export const StackComponent = () => {
  return (
    <Stack
      sx={{
        border: '1px solid',
      }}
      direction='row'
      divider={<Divider orientation='vertical' flexItem />}
      spacing={2}
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
    </Stack>
  );
};
