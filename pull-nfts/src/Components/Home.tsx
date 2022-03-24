import { WalletMultiButton } from "@solana/wallet-adapter-material-ui"
import React,  {useState} from "react"
import { Typography, AppBar, Paper, Button, Grid, Box, CssBaseline, Toolbar } from "@mui/material"
import CustomizedTables from './CustomizedTables'
import Copyright from "./Copyright"
import WalletBar from "./WalletBar"
import { SendOneLamportToRandomAddress } from "../Utils/SendLamports"
import GetNFTS from "../Utils/GetNFTS.js"
import { NftTable } from "./NftTable"

const Home = () => {
    const [state, setState] = useState('start')

    return (
        <>
        <CssBaseline />
        <Grid 
            container
            id="whole-app"
            direction="row"
            justifyContent="center"
            style={{ height: "80vh" }}>
            <Grid 
                id="appbar"
                style={{ position: "sticky", top: 0, left: 0, right: 0 }}
                >
                <WalletBar/>
            </Grid>
            <main>
                <div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center" 
                    >
                        <Grid item xs>
                            <Button 
                                size="large" 
                                variant="contained"
                                onClick={() => {
                                    setState('start')
                                }}
                                >Table
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button 
                                size="large" 
                                variant="contained"
                                onClick={() => {
                                    setState('show-table')
                                }}
                                >Cards
                            </Button>
                        </Grid>
                    </Grid>
                    <hr></hr>
                    <Grid container spacing={4}>
                        <Grid item xs>
                            {state === 'start' && (
                                <NftTable/>
                                )}
                            {state === 'show-table' && (
                                <GetNFTS></GetNFTS>                                     
                                )}
                        </Grid>
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
        </>

    );
}

export default Home;
