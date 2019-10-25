import React, { Component } from 'react';
import Counter from './Counter.js';
import Lest from './Lest.js';
const style = {
    margin: '20px'
};

class ControlPanel extends Component {
    render() {
        console.log('enter ControlPanel render');
        return (
            <div style={style}>
                <Counter caption="First"/>
                <Counter caption="Second" initValue={10} />
                <Counter caption="Third" initValue={20} />
                <Lest caption="Lest" />
                <button onClick={ () => this.forceUpdate() }>
                    Click me to re-render!
                </button>
            </div>
        );
    }
}

export default ControlPanel;