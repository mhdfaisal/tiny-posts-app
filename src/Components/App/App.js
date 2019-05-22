import React from 'react';
import Layout from '../hoc/Layout/Layout';
import {HashRouter, Route, Switch} from 'react-router-dom';
import PostsList from '../Posts/PostsList/PostsList';
import EditPosts from '../Posts/EditPosts/EditPost';
class App extends React.Component{

    render(){
        return(
            <HashRouter>
                <Layout>
                <Switch>
                    <Route path="/" component={PostsList} exact />
                    <Route path="/edit/:id" component={EditPosts} exact />
                </Switch>
                </Layout>
            </HashRouter>
        )
    }
}
export default App;