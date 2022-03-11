import * as React from 'react';
import { AppBar, Typography, Toolbar, Link } from '@mui/material';
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui"


export default function WalletBar() {
    return (
            <AppBar style={{background: 'transparent'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Icon Here
                    </Typography>
                    <Link href="#"  target="_blank">
                        <Typography variant="h6" marginLeft={4} marginRight={4}> 
                            Link
                        </Typography>
                    </Link>
                    <Link href="#" target="_blank">
                        <Typography variant="h6" marginLeft={4} marginRight={4}> 
                            Link
                        </Typography>
                    </Link>
                    <WalletMultiButton></WalletMultiButton>
                </Toolbar>
            </AppBar>

    )

}