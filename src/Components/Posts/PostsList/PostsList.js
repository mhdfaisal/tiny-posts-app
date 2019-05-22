import React from 'react';
import uuid from 'uuid/v1';
import fetchData from '../../../api/fetchData';
import PostsListItem from './PostsListItem/PostsListItem';

class PostsList extends React.Component{

    state = {posts:[]}

    componentDidMount(){
        fetchData.get()
        .then(res => {
            this.setState({posts:[...res.data]})
        })
        .catch(err => console.log(err));
    }

    renderPostListItem = ()=>{
        const {posts} = this.state;
        return posts.length > 0 ? 
        posts.map(item =>{
           return(
               <div key={uuid()}>
                   <PostsListItem postItem={item} />
               </div>
           )
        }) 
        : "loading"
    }

    render(){
        return(
            <div className="container">
                {this.renderPostListItem()}
            </div>
        )
    }
}
export default PostsList;