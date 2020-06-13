import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.onSubmit && typeof this.props.onSubmit === "function") {
            this.props.onSubmit(this.state.value);
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <form onSubmit={this.handleSubmit}>
                            <h1 className='text-white'>Country Info</h1>
                            <input type="text" id="input" placeholder="Enter a country name" name="country" value={this.state.value} onChange={this.handleChange} />
                            <input type="submit" value="Search" />
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default SearchForm;