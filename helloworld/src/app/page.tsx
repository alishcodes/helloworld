"use client"

import {Grid, TextField, Button, Typography} from '@mui/material';
import { useState } from 'react';

export default function Home() {
  // useState("") initializes state variable
  // name and displayText as an empty string.
  
  // Each state variable has a set function
  // used to update state variables.
  const [name, setName] = useState("");
  const [displayText, setDisplayText] = useState("");

  // Function to handle submit button click
  // Takes in the name at the time of click
  const handleClick = (name: string) => {
    // Set text to display as the name entered at time of click
    setDisplayText(name);
  }

  return (
    <>
      <Grid container direction="row" justifyContent={"center"} alignItems={"center"} paddingTop={10} spacing={2}>
        <Grid item>
          <TextField label="Name" variant="outlined" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => handleClick(name)}>
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} alignItems={"center"} paddingTop={10} spacing={2}>
        <Grid item>
          {displayText ? <Typography variant="h3">Hello, {displayText}!</Typography> : <></>}
        </Grid>
      </Grid>
    </>
  )
}
