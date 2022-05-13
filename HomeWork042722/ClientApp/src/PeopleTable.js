import React from 'react'
import PersonForm from './PersonForm '
import PersonRow from './PersonRow'



class PeopleTable extends React.Component {

    state = {
        firstName:'',
        lastName:'',
        age:'',
        people: []
    }

    onTextChangeFirstName = e => {
        this.setState({ firstName: e.target.value })
    }

    onTextChangeLastName = e => {
        this.setState({ lastName: e.target.value })
    }

    onTextChangeAge = e => {
        this.setState({ age: e.target.value })
    }

   onButtonClick = () => {
        const { firstName, lastName, age, people } = this.state
        const person ={firstName: firstName, lastName: lastName, age: age}
        const copy = [...people, person];
        this.setState({ people: copy, firstName: '', lastName:'', age: ''})
        
    }

    tableOrNot=()=>{
    const {people}=this.state
    if(people.length!==0){
        return (
            <div>
                <table className='table table-hover table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PersonRow people={this.state.people}/>
                    </tbody>
                </table>
            </div>
        )
    
    }
    return   <h1>No people added yet! Add some people!</h1>
    }

    clearTable=()=>{
        this.setState({people:[]})
    }
   

    render() {
        return (
            <div className='container mt-5'>
                   <PersonForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age} 
                    onTextChangeFirstName={this.onTextChangeFirstName}
                    onTextChangeLastName={this.onTextChangeLastName}
                    onTextChangeAge={this.onTextChangeAge}
                    onButtonClick={this.onButtonClick}
                    clearTable={this.clearTable}/>
                    {this.tableOrNot()}
            </div>
            
        )
    }
}

export default PeopleTable;