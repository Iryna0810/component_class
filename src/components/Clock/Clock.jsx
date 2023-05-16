import { Component } from "react";
import './clock.css'

export default class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString(),
    };

    intervalId = null;

    componentDidMount() {
        console.log('setInterval');
        this.intervalId = setInterval(
            () => this.setState({ time: new Date().toLocaleTimeString() }),
            1000,
        );
    }

    componentWillUnmount() {
        console.log('setInterval');
        clearInterval(this.intervalId);
    }

    render() {
        return <div className="clock_face">{ this.state.time}</div>
    }
}