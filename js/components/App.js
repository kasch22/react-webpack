import React from 'react';
import Statement from './Statement.js'

export default class App extends React.Component {
    render() {
        const now = new Date();

        return (
            <div style={{textAlign: 'center'}}>
                <h1>The Time is: </h1>
                <p>
                    current time: {now.toTimeString()}
                </p>
                <Statement/>
            </div>
        );
    }
}
