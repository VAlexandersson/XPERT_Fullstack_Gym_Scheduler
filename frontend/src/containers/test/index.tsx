import * as React from 'react';
import {useEffect, useState} from "react";
import Easy from '../../assets/Easy.png';
import Medium from '../../assets/Medium.png';
import Hard from '../../assets/Hard.png';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Test()
{
    const [index, setIndex] = useState(Easy);
    const [i, setI] = useState(0);
    let imgs = [Easy, Medium, Hard]
    function handleClick()
    {
        setI(i + 1)
        setIndex(imgs[i%imgs.length])
    }


    return(
      <Container>
          <Box>
              <img src={index} alt={"test"} style={{position:"relative", left:'25%'}}></img>
              <Button onClick={handleClick} variant='contained'>Click Me!</Button>
          </Box>
      </Container>
    );
}