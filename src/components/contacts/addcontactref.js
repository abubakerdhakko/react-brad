import React, { Component } from 'react'

export default class addContact extends Component {
    constructor (props){
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    static defaultProps = {
        name: "abu baker",
        email: "asd@gmail.com",
        phone: "111-222-333",
        
    }
    onSubmit = e =>{
    e.preventDefault();
    const contact = {

       name: this.nameInput.current.value,
       email: this.emailInput.current.value,
       phone: this.phoneInput.current.value,
    }
    console.log(contact)
}
    onChange = e => this.setState({[e.target.name]: e.target.value})
    render() {
        const {name , email , phone} = this.props;
        return (
            <div className="col-sm-10 offset-sm-1 col-md-10 offset-md-1">
            <div className="card mb-3">
                <div className="card-header">
                   addcontact
                </div>
                <div className="card-body">
                       <form onSubmit={this.onSubmit}>
                       <div className="form-group">
                            <label htmlFor="name">
                              name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="form-control form-control-lg "
                                placeholder="enter name..."
                                defaultValue={name}
                                ref={this.nameInput}
                       >
                                
                                </input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                email                               
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg "
                                placeholder="enter email..."
                                defaultValue={email}
                                ref={this.emailInput}
                                >
                                
                                </input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">
                                phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control form-control-lg "
                                placeholder="enter phone..."
                                defaultValue={phone}
                                ref={this.phoneInput}
                                >
                                
                                </input>
                        </div>

                        <button style={{color: 'red',backgroundcolor: 'red', padding: '20px'}} type='Submit' className="btn-block btn btn-light" value="Submit" ></button>
                       </form>

                    </div>
            </div>
            </div>
        )
    }
}
