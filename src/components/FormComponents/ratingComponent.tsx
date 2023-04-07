import { Box, Rating, Stack } from '@mui/material';
import { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export const RatingComponent = () => {
  const [rateValue, setRateValue] = useState<number | null>(3)
  console.log({ rateValue })
  return (
  <Stack spacing={2}>
    <p>ss</p>
    <Rating value={rateValue} onChange={(event, value) => {
      setRateValue(value)
    }}
    precision={0.5}
    size={'small'}
    icon={<Favorite color={'error'}/>}
    emptyIcon={<FavoriteBorder/>}
    // readOnly
    highlightSelectedOnly
    />
  </Stack>

)
}
