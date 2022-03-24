import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import React, { FC, useCallback, useState } from 'react';
import { Button } from '@mui/material';
import {
    getNFTMetadataForMany,
    getNFTsByOwner,
    INFT,
  } from '../Utils/NFTget';


import { programs } from '@metaplex/js';
const {metadata: {Metadata}} = programs;

export const NftTable: FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    const [nftData, setNftData] = useState([]);
    const [loading, setLoading] = useState(false);

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        const walletNFTs = await getNFTsByOwner(publicKey, connection)
        console.log(walletNFTs)

    }, [publicKey, connection]);

    return (
        <Button variant='contained' onClick={onClick} disabled={!publicKey}>
            Get MetaData
        </Button>
    );
};