import React from 'react';
import styles from './PostListItem.module.css';

const renderConfigButtons = (id)=>{
    return(
        <>
        <div className="col-md-1 offset-md-1 align-self-center no-gutters"><button className="btn btn-primary px-4 py-1">Edit</button></div>
        <div className="col-md-1 align-self-center p-0"><button className="btn btn-danger px-4 py-1">Delete</button></div>
        </>
    )
}

const PostsListItem = ({postItem})=>{
    let {body,title,id} = postItem;
    return(
        <div className={`row ${styles.postsListItemContainer}`}>
            <div className={`col-md-9 ${styles.postListItem} py-5`}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <>
                {renderConfigButtons(id)}
            </>
        </div>
    )
}
export default PostsListItem;