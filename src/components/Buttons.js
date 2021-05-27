import React from 'react'
import "./Button.css"

function Button(props){
    return (<div className="btn">
        <button type="button" className="btn btn-secondary" onClick ={()=>props.onUserChoose("SaiGon")}>Sai Gon</button>
        <button type="button" className="btn btn-secondary" onClick ={()=>props.onUserChoose("HaNoi")}>Ha Noi</button>
        <button type="button" className="btn btn-secondary" onClick ={()=>props.onUserChoose("HaTinh")}>Ha Tinh</button>
        <button type="button" className="btn btn-secondary" onClick ={()=>props.onUserChoose("DaNang")}>Da Nang</button>
        <button type="button" className="btn btn-secondary" onClick ={()=>props.onUserChoose("NinhThuan")}>Ninh Thuan</button>

    </div>)
}
export default Button