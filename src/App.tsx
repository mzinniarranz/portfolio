import { Container, Grid } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import UserController from "./components/user/UserController";

function App() {
    return (
        <>
            <Container disableGutters={true} maxWidth={false}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <header>
                            <Header />
                        </header>
                    </Grid>
                    <Grid item xs={12}>
                        <main>
                            <UserController />
                        </main>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
