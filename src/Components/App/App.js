import React from 'react';
import Layout from '../hoc/Layout/Layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PostsList from '../Posts/PostsList/PostsList';
import EditPosts from '../Posts/EditPosts/EditPost';
import Update from '../Update/Update';
import Delete from '../Delete/Delete';
import NotFound from '../NotFound/NotFound';
class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Layout>
                <Switch>
                    <Route path="/" component={PostsList} exact />
                    <Route path="/edit/:id" component={EditPosts} exact />
                    <Route path="/update" component={Update} exact />
                    <Route path="/delete" component={Delete} exact />
                    <Route component={NotFound} />
                </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}
export default App;