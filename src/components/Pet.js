import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}{' '}
            {this.props.pet.gender === 'male' ? '♂' : '♀' }
          </a>
          <div className="meta">
            <span className="date">Breed: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} years old</p>
            <p>Weight: {this.props.pet.weight}lbs</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? 
              (<button className="ui disabled button">Already adopted</button>)
              :
              (<button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>)
              }
        </div>
      </div>
    )
  }
}

export default Pet
