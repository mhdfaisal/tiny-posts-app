import React from 'react';

class EditPost extends React.Component{

    renderEditForm =()=>{
        return(
            <form className="form">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary px-2 py-1">Submit</button>
                </div>
            </form>
        )
    }

    render(){
        return(
            <div className="container">
            {this.renderEditForm()}
            </div>
        )
    }
}
export default EditPost;