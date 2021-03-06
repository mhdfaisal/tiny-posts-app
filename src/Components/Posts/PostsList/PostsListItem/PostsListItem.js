import React from 'react';
import {Link} from 'react-router-dom';
import styles from './PostListItem.module.css';

const renderConfigButtons = (id,handleDeleteClick)=>{
    return(
        <>
        <div className="col-lg-1 col-md-2 col-sm-6 align-self-center p-1">
            <Link to={`/edit/${id}`} className="btn btn-primary btn-block">Edit</Link>
        </div>
        <div className="col-lg-1 col-md-2 col-sm-6 align-self-center p-1">
            <button className="btn btn-danger btn-block" onClick={()=> handleDeleteClick(id)}>Delete</button>
        </div>
        </>
    )
}

const PostsListItem = ({postItem, handleDeleteClick})=>{
    let {body,title,id} = postItem;
    return(
        <div className={`row ${styles.postsListItemContainer} pb-5 mb-5`}>
            <div className={`col-lg-9 col-md-8 py-3 ${styles.postListItem}`}>
                <h3>{title}</h3>
                <p className="mb-3">{body}</p>
            </div>
            <>
                {renderConfigButtons(id,handleDeleteClick)}
            </>
        </div>
    )
}
export default PostsListItem;