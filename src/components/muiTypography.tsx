import { Typography } from "@mui/material";

export const MuiTypography = () => {
    return (
        <>
            <Typography variant={'h1'}>h1</Typography>
            <Typography variant={'h2'}>h2</Typography>
            <Typography variant={'h3'}>h3</Typography>
            <Typography variant={'h4'}>h4</Typography>
            <Typography variant={'h5'}>h5</Typography>
            <Typography variant={'h6'} gutterBottom>h6</Typography>
            <Typography variant={"subtitle1"}>subtitle1</Typography>
            <Typography variant={'subtitle2'}>subtitle2</Typography>
            <Typography variant={"caption"}>caption</Typography>
            <Typography variant={'body1'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolore eius illum.</Typography>
            <Typography variant={'body2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio ducimus eius eum ex facilis numquam obcaecati odit quaerat quod, repellendus rerum unde, velit?</Typography>
            <Typography variant={"button"}>button</Typography>
            <Typography variant={"overline"}>overline</Typography>
            <Typography paragraph>Lorem ipsum dolor.</Typography>

        </>
    )
}
