import React from 'react';

const renderFormField = ({id, formData, onchange})=>{
    let showLabel = formData.label ? <label htmlFor={id}>{formData.labelText}</label> : null;
    switch(formData.element){
        case "input": return(
                         <>
                         {showLabel}
                         <input {...formData.config} 
                         value={formData.value}
                         onChange={(e)=>{onchange(e,id)}}
                         className="form-control"/>
                         </>
                        )
        case "textarea": return(
                            <>
                                {showLabel}
                                <textarea {...formData.config}
                                value={formData.value}
                                onChange={(e)=>{onchange(e,id)}}
                                className="form-control"
                                rows="3"
                                ></textarea>
                            </>
                        )
        default: return null
    }
}

const FormFields = (props) =>{
    return(
        <>
            {renderFormField(props)}
        </>
    )
}

export default FormFields;