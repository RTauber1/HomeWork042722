import React from 'react';




class PersonRow extends React.Component {

    overSixtyFive=(age)=>{
        return  age>65 ? "table-danger" : ''  
    }
    
    render() {
        const { people} = this.props;
        return( 
            people.map((p, i)=>{
                return(
                    <tr key={i} className={this.overSixtyFive(p.age)}>
                        <td>{p.firstName}</td>
                        <td>{p.lastName}</td>
                        <td>{p.age}</td>
                    </tr>
                )
            })
        )
    }
}

export default PersonRow
