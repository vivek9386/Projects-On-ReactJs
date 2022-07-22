import React from 'react'

function Alert(props)  {

    const capital = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: "40px"}}>
            {props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <span><strong>{capital("success")}!</strong>{capital(props.alert.msg)}.</span>
            </div>
            </div>}
        </div>
        
    )
}

export default Alert