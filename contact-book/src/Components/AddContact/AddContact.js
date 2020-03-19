import React, { Fragment, Component } from "react";
import "./AddContact.css";

class AddContact extends Component {
    
    state = {
        name: null,
        email: null,
        phone: null,
        address: null,
        avatar: null,
        classname: null,
        isFavorites: null,
        genders: null,
    }
    getName = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    getAddress = (event) => {
        this.setState({
            address: event.target.value
        });
    }
    getPhone = (event) => {
        this.setState({
            phone: event.target.value
        });
    }
    getEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    getAvatar = (event) => {
        this.setState({
            avatar: event.target.value
        });
    }
    getGender = (event) => {
        if(document.getElementById("male").checked == true){
            this.setState({
                genders: "men"
            });
        }
        else{
            this.setState({
                genders: "women"
            });
        }
    }
    getRate = (event) => {
        var currentclass =  document.getElementById("starchik").className;
        if(currentclass == "fa fa-star-o"){
            document.getElementById("starchik").className = "fa fa-star";
           }
           else{
            document.getElementById("starchik").className = "fa fa-star-o";
           }
        console.log(currentclass)
        if(currentclass == "fa fa-star"){
            this.setState({
                classname: "fa fa-star-o",
                isFavorites: false
            });
        }
        else{
            this.setState({
                classname: "fa fa-star",
                isFavorites: true
            });
        }

    }
    sendData = (event) => {
        event.preventDefault();
        const { name, email, address, phone, avatar,isFavorites,genders,classname } = this.state;
        this.props.addContact(name, address, phone, email, avatar,isFavorites,genders,classname);
    }
    

    render() {

        return (
            <Fragment>

                <form onSubmit={this.sendData} >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name contact</label>
                        <input onChange={this.getName} type="text" class="form-control" placeholder="Enter name"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Address contact</label>
                        <input onChange={this.getAddress} type="text" class="form-control" placeholder="Enter address"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone contact</label>
                        <input onChange={this.getPhone} type="text" class="form-control" placeholder="Enter phone"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email contact</label>
                        <input onChange={this.getEmail} type="email" class="form-control" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Avatar</label>
                        <input onChange={this.getAvatar} type="number" min="1" max="99" class="form-control" placeholder="Enter avatar"></input>
                    </div>
                    <div class="form-group">
                        <label style={{color:"white"}} for="exampleInputEmail1">Male</label>
                        <input onChange={this.getGender} style={{margin:"15px"}} type="radio" id="male" name="gender" value="Men"></input>       
                    </div>
                    <div class="form-group">
                        <label style={{color:"white"}} for="exampleInputEmail1">Female</label>
                        <input onChange={this.getGender} style={{margin:"15px"}} type="radio" id="female" name="gender" value="Women"></input>       
                    </div>
                    <div class="form-group">
                    <i onClick={this.getRate} id="starchik" className="fa fa-star-o" aria-hidden="true"></i>     
                    </div>
                    <button type="submit" class="btn btn-light">Submit</button>
</form>
            </Fragment>
        )
            
    }
}

export default AddContact;