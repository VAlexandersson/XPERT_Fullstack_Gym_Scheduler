import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from "react";


const cards = [0, 1, 2];
let answer;
let exercises;

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Exercises()
{

    const [nodes, setNodes] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getAllExercises();
    }, []);

    const getAllExercises = () => {
        fetch("http://localhost:4001/api/browse", {
            method: "GET",
            headers: {
                "Content-type": "text/html; charset=UTF-8"
            }
        })
            .then(async (response) =>
            {
                setNodes(await response.json());
                setLoading(false);
            });
    }

    if (isLoading)
    {
        return <div className="App">Loading...</div>;
    }
    return (
        <>
            <Album allExercises={nodes}></Album>
        </>
    )

}

function Album(allExercises) {

    console.log(allExercises.allExercises.catalog);
    let catalog = allExercises.allExercises.catalog;
    let exercises : string[] = [];
    for (let i = 0; i < catalog.length; i++)
    {
        exercises.push(catalog[i])
    }
    console.log(exercises)

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Exercises
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            By signing up now, you can access a huge catalog of
                            excercises.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Sign up now</Button>
                            <Button variant="outlined">Swag</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random?wallpapers"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {exercises[card].name}
                                        </Typography>
                                        <Typography>
                                            {exercises[card].description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}