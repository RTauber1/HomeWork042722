import React from 'react'

class PersonForm extends React.Component {
    render() {
        const { firstName, lastName, age, onTextChangeFirstName, onTextChangeLastName, onTextChangeAge, onButtonClick, clearTable} = this.props;
        return (
            <div className='row'>
                <div className='col-md-2 md-offset-1'>
                    <input value={firstName} onChange={onTextChangeFirstName} className='form-control' placeholder='First Namer' />
                </div>
                <div className='col-md-2 md-offset-1'>
                    <input value={lastName} onChange={onTextChangeLastName} className='form-control' placeholder='Last Name' />
                </div>
                <div className='col-md-2 md-offset-1'>
                    <input value={age} onChange={onTextChangeAge}  className='form-control' placeholder='Age' />
                </div>
                <div className='col-md-2'>
                    <button onClick={onButtonClick} className='btn btn-primary btn-block'>Add</button>
                </div>
                <div className='col-md-2'>
                    <button onClick={clearTable} className='btn btn-danger btn-block'>delete table</button>
                </div>
            </div>
        )
    }
}

export default PersonForm;