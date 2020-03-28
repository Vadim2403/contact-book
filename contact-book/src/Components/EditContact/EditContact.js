import React, { Fragment, Component } from "react";
import "./EditContact.css";
import uuid from 'react-uuid'
import { Redirect } from "react-router-dom";
class EditContact extends Component {
    
    state = {
        id: this.props.Data.id,
        name: this.props.Data.name,
        phonenumber: this.props.Data.phonenumber,
        street: this.props.Data.street,
        email: this.props.Data.email,
        gender: this.props.Data.gender,
        avatar: this.props.Data.avatar,
        isFavorite: this.props.Data.isFavorite,
        classStar: this.props.Data.classStar,
        isEdited: false,
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
                isFavorite: false,
                classname: "fa fa-star-o",

            });
        }
        else{
            this.setState({
                isFavorite: true,
                classname: "fa fa-star",
            });
        }

    }
    sendData = (event) => {
        event.preventDefault();
        const {id, name, email, street, phonenumber, avatar,isFavorite,gender,classname } = this.state;
        var fav = true;
        var classs = "fa fa-star";
        if(isFavorite  != true){
            fav = false;
        }
        if(classname != classs){
            classs = "fa fa-star-o"
        }
        this.props.editing(id,name, street, phonenumber, email, avatar,fav,gender,classs);
        this.setState({
            isEdited: true
        })
    }
    checkedM = false;
    checkedF = false;
    checkedFU = false;
    checkGender = () => {
        if(this.state.gender == "men"){
           this.checkedM = true;
        }
        else this.checkedF = true;
    }
    resetFavorite = () => {
        if(this.state.isFavorite == true){
           this.checkedFU = "fa fa-star";
        }
        else{
            this.checkedFU = "fa fa-star-o"
        }
    }
    render() {
        this.checkGender();
        this.resetFavorite();
        if(this.state.isEdited == true){
            return (<Redirect to="/"></Redirect>)
        }
        return (
            <Fragment>

                <form onSubmit={this.sendData} >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name contact</label>
                        <input onChange={this.getName} type="text" class="form-control" placeholder={this.state.name}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Address contact</label>
                        <input onChange={this.getAddress} type="text" class="form-control" placeholder={this.state.street}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone contact</label>
                        <input onChange={this.getPhone} type="text" class="form-control" placeholder={this.state.phonenumber}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email contact</label>
                        <input onChange={this.getEmail} type="email" class="form-control" placeholder={this.state.email}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Avatar</label>
                        <input onChange={this.getAvatar} type="number" min="1" max="99" class="form-control" placeholder={this.state.avatar}></input>
                    </div>
                    <div class="form-group">
                        <label style={{color:"white"}} for="exampleInputEmail1">Male</label>
                        <input onChange={this.getGender} style={{margin:"15px"}} checked={this.checkedM} type="radio" id="male" name="gender" value="Men"></input>       
                    </div>
                    <div class="form-group">
                        <label style={{color:"white"}} for="exampleInputEmail1">Female</label>
                        <input onChange={this.getGender} style={{margin:"15px"}} checked={this.checkedF} type="radio" id="female" name="gender" value="Women"></input>       
                    </div>
                    <div class="form-group">
                    <i onClick={this.getRate} id="starchik" className={this.checkedFU} aria-hidden="true"></i>     
                    </div>
                    
                    <button type="submit" class="btn btn-light">Submit</button>
</form>
            </Fragment>
        )
            
    }
}

export default EditContact;