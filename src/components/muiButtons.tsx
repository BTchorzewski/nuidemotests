import {Button, Menu, Stack, MenuItem, IconButton, ButtonGroup} from "@mui/material";
import {AddCircle, RemoveCircle} from '@mui/icons-material';
export const MuiButtons = () => {
  return (<Stack spacing={4} marginTop={4} marginLeft={4}>
      <Stack spacing={2} direction={'row'}>
          <Button variant={"text"}>Text</Button>
          <Button variant={"contained"}>Contained</Button>
          <Button variant={"outlined"}>Outlined</Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
          <Button variant={"text"} color={"primary"}>Contained</Button>
          <Button variant={"text"} color={"secondary"}>Contained</Button>
          <Button variant={"text"} color={"warning"}>Contained</Button>
          <Button variant={"text"} color={"error"}>Contained</Button>
          <Button variant={"text"} color={"info"}>Contained</Button>
      </Stack>
<Stack spacing={2} direction={'row'}>
          <Button variant={"contained"} color={"primary"}>Contained</Button>
          <Button variant={"contained"} color={"secondary"}>Contained</Button>
          <Button variant={"contained"} color={"warning"}>Contained</Button>
          <Button variant={"contained"} color={"error"}>Contained</Button>
          <Button variant={"contained"} color={"info"}>Contained</Button>
      </Stack>
        <Stack spacing={2} direction={'row'}>
            <Button variant={"outlined"} color={"primary"}>Contained</Button>
            <Button variant={"outlined"} color={"secondary"}>Contained</Button>
            <Button variant={"outlined"} color={"warning"}>Contained</Button>
            <Button variant={"outlined"} color={"error"}>Contained</Button>
            <Button variant={"outlined"} color={"info"}>Contained</Button>
        </Stack>
      {/*jesli chcemy w Stack komponencie mieć elementy róznej wielkości to trzeba ustawić display na block*/}
      <Stack display={"block"} spacing={2} direction={'row'}>
          <Button variant={"outlined"} color={"primary"} size={"large"}>Contained</Button>
          <Button variant={"outlined"} color={"secondary"} size={"medium"}>Contained</Button>
          <Button variant={"outlined"} color={"warning"} size={"small"}>Contained</Button>
      </Stack>
      <Stack display={"block"} spacing={2} direction={'row'}>
          <Button variant={"contained"} color={"primary"} startIcon={<AddCircle/>}>Add printer.</Button>
          <Button variant={"contained"} color={"error"} endIcon={<RemoveCircle/>}>Remove printer.</Button>
            <IconButton size={"large"} color={"error"}>
                <AddCircle/>
            </IconButton>
      <IconButton size={"medium"} color={"error"}>
                <AddCircle/>
            </IconButton>
      <IconButton size={"small"} color={"error"}>
                <AddCircle/>
            </IconButton>
      </Stack>
      <Stack direction={"row"}>
          <ButtonGroup color={"secondary"} variant={"contained"}>
              <Button>Left</Button>
              <Button>Top</Button>
              <Button>Right</Button>
          </ButtonGroup>
      </Stack>
 <Stack direction={"row"}>
          <ButtonGroup color={"primary"} variant={"outlined"} orientation={"vertical"}>
              <Button>Left</Button>
              <Button>Top</Button>
              <Button>Right</Button>
          </ButtonGroup>
      </Stack>
  </Stack>)
}