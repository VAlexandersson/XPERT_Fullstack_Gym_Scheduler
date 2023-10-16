// you need to install the following dependencies:
//npm install @mui/x-date-pickers
//npm install date-fns

import * as React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Card, CardContent } from '@mui/material/';
import NavigationBar from "../navigationBar";
import {createTheme} from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ProfilePage() {
    const [showWorkoutInfo, setShowWorkoutInfo] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [workoutData, setWorkoutData] = React.useState({});

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setShowWorkoutInfo(true);

        // Pseudo-code: Fetch workout information for the selected date from the backend.
        // Replace the following with actual backend API calls:
        // fetchWorkoutDataFromBackend(date).then(data => setWorkoutData(data));
    };

    // Pseudo-code: Save workout information to the backend for the selected date.
    // This part will be implemented in the future when the backend and database exist.
    const saveWorkoutData = (date, data) => {
        // Replace the following with actual backend API calls:
        // saveWorkoutDataToBackend(date, data);
    };

    return (
        <><ThemeProvider theme={defaultTheme}/><CssBaseline/><NavigationBar>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Xperta Workout Planner
                </Typography>
            </Toolbar>
        </NavigationBar>
            <main style={{display: 'flex', marginTop: '1%'}}>
                <div style={{width: '50%', paddingLeft: '1rem'}}>
                    {/* Calendar component */}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateCalendar onChange={handleDateClick}/>
                    </LocalizationProvider>
                </div>

                <div style={{flex: 1}}>
                    <Card style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <CardContent style={{flex: 1}}>
                            <Typography variant="h5">Workout Information</Typography>
                            <div id="workout-info">
                                {showWorkoutInfo ? 'Workout information is visible' : 'Click on a date to see workout information'}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
)
    ;
}