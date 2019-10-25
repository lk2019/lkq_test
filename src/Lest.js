import React,{Component,PropTypes } from "react";
const style={
    display:'flex',
    margin:'20px'
};
class Lest extends Component{
    constructor(props){
        super(props);
        this.state={
            count:100
        };
    }
    render() {
        const {caption}=this.props;
        return (
            <div style={style}>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )
    }
}
export default Lest;