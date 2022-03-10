import { WalletMultiButton } from "@solana/wallet-adapter-material-ui"
import React,  {useState} from "react"
import { Typography, AppBar, Container, Paper, Button, Grid, Box, CssBaseline, Toolbar, Link } from "@mui/material"
import CustomizedTables from './CustomizedTables'
import Copyright from "./Copyright"


const Home = () => {
    const [state, setState] = useState('start')

    return (
        <>
        <CssBaseline />
        <Grid  id="whole-app"  style={{ position: "relative", height: "80vh" }}>
            <Grid 
                id="appbar"
                style={{ position: "sticky", top: 0, left: 0, right: 0 }}
                >
                <AppBar style={{background: 'transparent'}}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Icon Here
                        </Typography>
                        <a href="#"  target="_blank">
                            <Typography variant="h6" marginLeft={4} marginRight={4}> 
                                Link
                            </Typography>
                        </a>
                        <a href="#" target="_blank">
                            <Typography variant="h6" marginLeft={4} marginRight={4}> 
                                Link
                            </Typography>
                        </a>
                        <WalletMultiButton></WalletMultiButton>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid
                id="main"
                container
                justifyContent="center"
                style={{ height: "inherit"}}
            >
            <main>
                <div>
                    <Grid container spacing={6} justifyContent="center">
                        <Grid item>
                            <Button 
                                size="large" 
                                variant="contained"
                                onClick={() => {
                                    setState('start')
                                }}
                                >Send a lamport
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button 
                                size="large" 
                                variant="contained"
                                onClick={() => {
                                    setState('show-table')
                                }}
                                >Show NFTs
                            </Button>
                        </Grid>
                        {state === 'start' && (
                            <Grid item xs={12}>
                                    {/* <img src={tiers}></img> */}
                                    <Paper elevation={3} variant="outlined"> 
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        
                                    </Paper>
                            </Grid>
                        )}
                        {state === 'show-table' && (
                            <Grid item xs={12}>
                                <Button
                                    size="large" 
                                    variant="contained"
                                >
                                    Show Apes
                                </Button>                                     
                                {/* <CustomizedTables></CustomizedTables> */}
                            </Grid>
                        )}
                    </Grid>                            
                </div>

            </main>
            <Box sx={{ p: 2 }} component="footer">
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
                <Copyright />
            </Box>
            {/* End footer */}
        </Grid>
    </Grid>

</>

    );
}

export default Home;