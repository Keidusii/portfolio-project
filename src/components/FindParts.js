import React from 'react';

function FindParts() {
    return (
        <div className="container" id="findParts">
            <div className="text-center">
                <h1>Find Parts</h1>
                <h5 className="mt-4">PC Part Picker is the way to go!</h5>
                <p>
                    Go to <a href="https://pcpartpicker.com" target="_blank" rel="noreferrer">PCPartPicker.com</a> to find compatible parts for you're build. If you need help,
                    you can contact us.
                </p>
            </div>
            <div className="text-center">
                <a href="https://pcpartpicker.com" target="_blank" rel="noreferrer" className="btn main-button btn-light text-nowrap">Find Parts</a>
            </div>
            <hr />
        </div>
    );
}

export default FindParts;