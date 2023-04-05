import { Button, Icon, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FormatBold, FormatItalic, FormatUnderlined} from '@mui/icons-material'
import { useState } from 'react';
export const ToggleButtonComponent = () => {
  const [formats, setFormats] = useState<string[]>([])

  const handleFormatsChange = (e: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats)
  };
  console.log({formats})
  return (
    <Stack spacing={2} direction={'row'} margin={4}>
    <ToggleButtonGroup aria-label='text formating' value={formats} onChange={handleFormatsChange} color={'error'} size={'large'}>
      <ToggleButton value={'bold'} aria-label='bold'>
        <FormatBold/>
      </ToggleButton>
      <ToggleButton value={'italic'} aria-label='italic'>
        <FormatItalic/>
      </ToggleButton>
      <ToggleButton value={'underlined'} aria-label='underlined'>
        <FormatUnderlined/>
      </ToggleButton>
    </ToggleButtonGroup>
    </Stack>
  )
}

export const ToggleSingielButtonComponent = () => {
  const [formats, setFormats] = useState<string[] | null>(null)
  // aby zrobic singiel toggle to należuy dodać nulla do stanu oraz prop exclusive do komponentu ToggleButtonGroup.
  const handleFormatsChange = (e: React.MouseEvent<HTMLElement>, updatedFormats: string[] | null) => {
    setFormats(updatedFormats)
  };
  console.log({formats})
  return (
    <Stack spacing={2} direction={'row'} margin={4}>
      <ToggleButtonGroup
        aria-label='text formating'
        value={formats} onChange={handleFormatsChange}
        color={'error'}
        size={'large'}
        exclusive
      >
        <ToggleButton value={'bold'} aria-label='bold'>
          <FormatBold/>
        </ToggleButton>
        <ToggleButton value={'italic'} aria-label='italic'>
          <FormatItalic/>
        </ToggleButton>
        <ToggleButton value={'underlined'} aria-label='underlined'>
          <FormatUnderlined/>
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  )
}