import React from 'react';
import Trill from './Trill'
import ClickContext from "./context";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      ind:0,
      winner:null,
      crossIsNext:true,
      history:[[null,null,null,null,null,null,null,null,null]]
    }
    this.clickNode=this.clickNode.bind(this);
    this.go=this.go.bind(this);
  }
  go(step){
    if(step===1){
        if(this.state.ind<this.state.history.length-1){
            const winner=this.checkArr(this.state.history[this.state.ind+1])
            this.setState((pre)=>({
                ind:pre.ind+1,
                crossIsNext:!pre.crossIsNext,
                winner:winner
            }))
        }
        else{
            alert("已是最新的状态")
        }

    }
    if(step===-1){
        if(this.state.ind>0){
            this.setState((pre)=>({
                ind:pre.ind-1,
                crossIsNext:!pre.crossIsNext,
                winner:null
            }))
        }
        else{
            alert("已是最初的状态")
        }

    }
  }
  checkArr(arr){
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
              return arr[a];
          }
      }
      return null;
  }
  clickNode(id){
      if(this.state.winner!=null){
          const restart=window.confirm("胜负已分，是否重新开始？");
          if(restart){
              this.setState({
                  ind:0,
                  winner:null,
                  crossIsNext:true,
                  history:[[null,null,null,null,null,null,null,null,null]]
              });
          }
          return;
      }
      let his=this.state.history;
      // console.log(his.length)
      let newestArr=his[this.state.ind].slice('');
      newestArr[id]=this.state.crossIsNext?'X':'O';
      const winner=this.checkArr(newestArr)
      his[this.state.ind+1]=newestArr
      this.setState((prev)=>{
          return{
              ind:prev.ind+1,
              winner:winner,
              crossIsNext:!prev.crossIsNext,
              history:his
          }

      });
      // console.log(this.state)
  }
  render() {


    return (
        <>
            <h1>井字棋游戏</h1>
            <ClickContext.Provider value={this.clickNode}>
                <Trill sta={this.state.history[this.state.ind]}/>
            </ClickContext.Provider>
            <h2>
                {this.state.winner?"Winner is "+this.state.winner+"!":"下一步，轮到"+(this.state.crossIsNext?'X':'O')+"了"}
            </h2>
            <div>
                <button className="butt" onClick={()=>{this.go(-1)}}>上一步</button>
                <button className="butt" onClick={()=>{this.go(1)}}>下一步</button>
            </div>

        </>
    )

  }
}


export default App;
