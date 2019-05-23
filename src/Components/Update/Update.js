import React from 'react';


const handleGoToHomeClick = (props)=>{
    props.history.push("/")
}

const Update = (props)=>{
    let {title,body}=props.location.state;
    return(
        <div className="container mt-5">
            <div className="">
                <h2 className="mb-3">{title}</h2>
                <p className="mb-4">{body}</p>
                <button className="btn btn-primary mt-5" onClick={()=>{handleGoToHomeClick(props)}}>Go to home</button>
            </div>
        </div>
    )
}
export default Update;