import ClickContext from "./context";

function Square(props){

    return <ClickContext.Consumer>
        {click=>(<div className='node' onClick={()=>{click(props.id)}}>{props.val}</div>)}
    </ClickContext.Consumer>

}

export default Square;