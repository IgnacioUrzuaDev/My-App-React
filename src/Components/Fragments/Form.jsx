import React from 'react'

const Form = ({contSearch}) => {
    return (
    <>
    <form className="d-flex">
            <input className="form-control me-sm-2" type="text" 
            placeholder={contSearch} />
            <button className="btn btn-secondary my-2 my-sm-0" 
            type="submit">Search</button>
    </form> 
    </>
    );
}

export default Form;