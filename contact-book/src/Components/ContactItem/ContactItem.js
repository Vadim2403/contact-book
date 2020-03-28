import React, {Fragment, Component} from "react";
import "./ContactItem.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
class ContactItem extends Component{
    state = {
        name: this.props.name,
        phonenumber: this.props.phonenumber,
        street: this.props.street,
        email: this.props.email,
        gender: this.props.gender,
        avatar: this.props.avatar,
        isFavorite: this.props.isFavorite,
        classStar: this.props.classStar
    };
    randomImage(){
        const digit = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            avatar:digit
        });
    }
    // changeRate(){
    
    //     if(this.state.isFavorite == false){
    //         this.setState({
    //             classStar:"fa fa-star",
    //             isFavorite:true
    //         });
    //     }
    //     else{
    //         this.setState({
    //             classStar:"fa fa-star-o",
    //             isFavorite:false
    //         });
    //     }
  
    // }
    render(){
        const {name, phonenumber, email, street, gender,avatar, isFavorite,classStar} = this.state;
        const url = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`
    return(
        <Fragment>
            <li className="contactItem">     
                <img src={url} alt="contact image"></img>
                <h3><i class="fa fa-male" aria-hidden="true"></i>  {name}</h3>
                <h3><i class="fa fa-phone" aria-hidden="true"></i>  {this.state.phonenumber}</h3>
                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  {street}</h3>
                <h3><i class="fa fa-envelope-o" aria-hidden="true"></i>  {email}</h3>
                <button onClick={this.randomImage.bind(this)} className="btn btn-light">Random Image</button>
                <i onClick={this.props.changeRate} className={this.props.classStar} aria-hidden="true"></i>
                <i onClick={this.props.deleteContact}  class="fa fa-trash" aria-hidden="true"></i>  
                <Link  className="linka" to="/editContact"><p onClick={this.props.editObj}>Edit</p></Link> 
                {/* onClick={this.changeRate.bind(this)} */}
            </li>
        </Fragment>
    )
    }
}

export default ContactItem;