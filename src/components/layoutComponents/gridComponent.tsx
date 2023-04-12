import { Box, Grid, Paper } from '@mui/material';
// grid component posiada 2 formy: container (dla rodziaca) i griItem (dla dziecka)
// The Grid component under the hood uses the flexbox module
// The Grid consists of 12 columns
// Each item in the grid can take up one or more columns as iłs width
// There are five breakpoints each corresponding to a certain device width
// xs for mobile device size,
// sm for tablet,
// md for desktop,
// lg and xl for larger monitors
// We can assign integer values to each breakpoint which indicates how many of the 12 available
// columns are occupied by that item when the viewport satisfies that breakpoint constraints

export const GridComponent = () => {
  return (
    <Grid
      container
      sx={{
        margin: '100px 0',
      }}
      rowSpacing={1}
      columnSpacing={{
        sm: 1,
        md: 5,
      }}
    >
      <Grid item md={6} xs={12}>
        <Box bgcolor='yellow' p={3}>
          <Paper>Item 1</Paper>
        </Box>
      </Grid>
      <Grid item md={6} xs={12}>
        <Box bgcolor='red' p={3}>
          Item 2
        </Box>
      </Grid>
      <Grid item md={6} xs={6}>
        <Box bgcolor='green' p={3}>
          Item 3
        </Box>
      </Grid>
      <Grid item md={6} xs={6}>
        <Box bgcolor='blue' p={3}>
          Item 4
        </Box>
      </Grid>
    </Grid>
  );
};
