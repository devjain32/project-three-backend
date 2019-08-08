import React from "react";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label>{props.message}</label>
                <input 
                    className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="search"
                    placeholder="Search for plants"
                    onChange={props.handleChange}
                />
            </div>
            <button type="submit" className="submitBtn btn" onClick={props.handleFormSubmit}>
                Search
            </button>
        </form>
    )
}



export default SearchForm;
