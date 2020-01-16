import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: props.seconds
        };

        this.intervalID = window.setInterval(() => {
            this.setState({
                seconds: this.state.seconds - 1
            });
        }, 1000);
    }

    // componentDidMount() {
    //     console.log('componentDidMount', this.props);
    // }

    // componentDidUpdate(a,b,c) {
    //     console.log('componentDidUpdate', b, this.state.seconds);
    // }

    componentWillUnmount() {
        console.log('componentWillUnmount', this.props);
        window.clearInterval(this.intervalID);
    }

    render() {
        return <div>{this.state.seconds} / {this.props.seconds}</div>
    }
}

export default Timer;