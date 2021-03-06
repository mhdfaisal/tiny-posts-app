import React from 'react';
import FormFields from '../../Widgets/FormFields/FormFields';
import styles from './EditPost.module.css';
import fetchData from '../../../api/fetchData';
class EditPost extends React.Component{

    state={
        userId:null,
        postId:null,
        post:{},
        postTitle:"",
        postBody:"",
        formData:{
            title:{
                element:"input",
                label:true,
                labelText:'Title',
                value:"",
                config:{
                    type:"text", 
                    placeholder:""
                }
            },
            description:{
                element:"textarea",
                label:true,
                labelText:"Description",
                value:"",
                config:{
                    placeholder:""
                }
            }
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        fetchData.get(`/${this.props.match.params.id}`)
        .then(res => {
            let {data} = res;
            this.setState({
                post:data,
                postId:data.id,
                userId:data.userId,
                formData:{
                    title:{
                        ...this.state.formData.title, value:data.title
                    },
                    description:{
                        ...this.state.formData.description, value:data.body
                    }
                }
            })
        })
    }

    handleFormFieldChange = (e,id)=>{
        let newFormData = this.state.formData[id];
        newFormData = {...newFormData, value:e.target.value}
        this.setState({formData:{...this.state.formData, [id]:newFormData}})
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        fetchData.patch(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}`,{
            title:this.state.formData.title.value,
            body:this.state.formData.description.value
        })
        .then(res => this.props.history.push("/update", {...res.data}))
        .catch(err => console.log(err))
    }

    renderEditForm =()=>{
        return(
            <form className="form">
                <div className="form-group">
                    <FormFields formData={this.state.formData.title}
                    id="title" onchange={this.handleFormFieldChange}/>
                </div>
                <div className="form-group">
                    <FormFields formData={this.state.formData.description} id="description" onchange={this.handleFormFieldChange}
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }

    renderPostHeader = ()=>{
        return(<div>
            <h4>UserId - {this.state.userId}, PostId - {this.state.postId}</h4>
        </div>)
    }

    render(){
        return(
            <div className={`container ${styles.editPostContainer}`}>
            {this.renderPostHeader()}
            {this.renderEditForm()}
            </div>
        )
    }
}
export default EditPost;