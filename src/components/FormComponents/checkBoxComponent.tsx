import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  Typography,
  FormHelperText,
} from '@mui/material';
import React, { useState } from 'react';
import { Bookmark, BookmarkBorder } from '@mui/icons-material';
export const CheckBoxComponent = () => {
  // state for terms
  const [acceptTerms, setAcceptTerms] = useState(false);
  console.log({ acceptTerms });
  // state for skills section
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ skills });
  const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ skill: e.target.value });
    const indexOfSkill = skills.indexOf(e.target.value);
    if (indexOfSkill === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptTerms}
              onChange={(event) => setAcceptTerms(event.target.checked)}
            />
          }
          label={'I accept terms conditions.'}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTerms}
          onChange={(event) => setAcceptTerms(event.target.checked)}
        />
      </Box>
      <Box bgcolor={'red'} marginTop={10} padding={5}>
        <Typography variant='h6'>Skills section</Typography>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes('html')}
                  onChange={handleSkills}
                />
              }
              label={'html'}
              value={'html'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes('javascript')}
                  onChange={handleSkills}
                />
              }
              label={'javascript'}
              value={'javascript'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes('css')}
                  onChange={handleSkills}
                />
              }
              label={'css'}
              value={'css'}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
