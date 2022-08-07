import React, { useState, useEffect } from "react";

import metamaskIcon from './svg/metamaskIcon.svg'

function Web3() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [walletId, setWalletId] = useState(null);

    async function login() {
        // Check if Meta Mask Extension exists
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletId(accounts[0]);
                setLoggedIn(true);
            } catch (error) {
                console.log("Error connecting...");
            }
        } else {
            //Show a view to install metamask
            alert("Meta Mask not supported in this browser");
        }
    }

    async function logout() {
        setWalletId(null);
        setLoggedIn(false);
    }

    return (
        <section id="web3Login">
            {!loggedIn && (
                <button onClick={() => login()}>
                    {loggedIn ? 'Disconnect Wallet' : <img src={metamaskIcon} />}
                </button>
            )}
            {loggedIn && (
                <button onClick={() => logout()}>
                    {loggedIn ? 'Disconnect Wallet' : <img src={metamaskIcon} />}
                </button>
            )}
            <p>{walletId && walletId.slice(0, 6) + "..." + walletId.slice(-4)}</p>
        </section>
    )
}

export default Web3;