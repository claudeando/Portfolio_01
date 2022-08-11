import React, { useState, useEffect } from 'react';
import '../App.css';

function Loading() {

    return (
        <section id="loading">
            <img src="../assets/utility/logo.png" alt="loading icon" />
            <span>LOADING</span>
            {/* <div className="dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div> */}
        </section>
    );
}

export default Loading;