import * as React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Card, CardContent } from "@mui/material/";
import NavigationBar from "../navigationBar";
import { createTheme } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ProfilePage() {
  const [showWorkoutInfo, setShowWorkoutInfo] = React.useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <NavigationBar>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Xperta Workout Planner
          </Typography>
        </Toolbar>
      </NavigationBar>
      <main style={{ display: "flex", marginTop: "1%" }}>

        <div style={{ flex: 1 }}>
          <Card
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
          </Card>
        </div>
      </main>
    </ThemeProvider>
  );
}
