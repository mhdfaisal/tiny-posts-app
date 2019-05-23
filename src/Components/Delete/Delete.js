import React from 'react';

const Delete = (props)=>{
    return(
        <div className="container" style={{paddingTop:"50px", minHeight:"750px"}}>
            <h3 className="mb-5">Post Deleted Successfully</h3>
            <button className="btn btn-primary" onClick={()=>{
                props.history.push("/")
            }}>Go Home</button>
        </div>
    )
}

export default Delete;