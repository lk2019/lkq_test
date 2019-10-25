import React,{Component} from 'react';
import './ClickCounter.css';

class ClickCounter extends React.Component {
    constructor(props) {
        super(props)
        //随着时间的变化，三根针是不断发生变化的，可以把它们放在this.state中
        this.state = {
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    //componentWillMount()是React组件的生命周期函数
    componentDidMount() {
        var func = function() {
            //获取当前时间
            var date = new Date()
            var minutes = date.getMinutes()
            var seconds = date.getSeconds()
            //计算旋转角度，并实时改变this.state的值
            this.setState({
                hour: (date.getHours()) % 12 * (360 / 12) + (360 / 12) * (minutes / 60),
                minute: minutes * (360 / 60) + (360 / 60) * (seconds / 60),
                second: seconds * (360 / 60)
            })
        }.bind(this)
        func()
        //每间隔1s执行一次func()方法

        this.a=setInterval(func, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.a);
    }

    render() {
        return (
            <div className="style">
                <img className="backgroundImg" src='./src/tooopen_sy_174774839442.jpg' />
                <div className="container">
                    <div className="clockMinuteLine" style={{transform: 'rotateZ('+this.state.minute+'deg)'}}></div>
                    <div className="clockHourLine" style={{transform:  'rotateZ('+this.state.hour+'deg)'}}></div>
                    <div className="clockSecondLine" style={{transform: 'rotateZ('+this.state.second+'deg)'}}></div>
                </div>
            </div>
        )
    }
}

export default ClickCounter;
