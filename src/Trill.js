import Square from './square'
import React from "react";
class Trill extends React.Component{
    constructor(props){
        super(props)
        // this.clickCall=(id)=>{
        //     this.setState((prevSta)=>{
        //         let newSta=prevSta
        //         newSta[id]=crossIsNext?
        //     })
        // }
        // console.log(this.props.sta)
        this.fun1=(id)=>{
            return <Square id={id} val={this.props.sta?this.props.sta[id]:''}></Square>
        }
        // this.state={
        //     sta:Array(9).fill(null)
        // }
    }
    render(){
        return (
            <div className="trill">
                <div className="nodeRow">
                    {this.fun1(0)}
                    {this.fun1(1)}
                    {this.fun1(2)}
                </div>
                <div className="nodeRow">
                    {this.fun1(3)}
                    {this.fun1(4)}
                    {this.fun1(5)}
                </div>
                <div className="nodeRow">
                    {this.fun1(6)}
                    {this.fun1(7)}
                    {this.fun1(8)}
                </div>
            </div>
        )
    }
}

export default Trill;