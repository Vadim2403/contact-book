import React, { Fragment, Component } from "react";
import { render } from "react-dom";
import ContactItem from "../ContactItem/ContactItem";
class FavoriteContact extends Component {
    
          
    state = {
        List: this.props.Data,
    }
         


         
      

    

    componentDidMount(){
    var tempList =  (this.state.List != null) ? this.state.List.slice() : [];    var favoritelist = [];
    for(var i = 0; i < tempList.length; i++){
        if(tempList[i].isFavorite == true){
        favoritelist.push(tempList[i]);
    }
    }

    this.setState({
        List: favoritelist,
    });
    }
    render(){
        var tempList =  (this.state.List != null) ? this.state.List.slice() : [];
        const singleContact = tempList.map(item => {
            return(
             <ContactItem   name={item.name}
             phonenumber={item.phonenumber}
             street = {item.street}
             email = {item.email}
             gender = {item.gender}
             avatar = {item.avatar}
             isFavorite = {item.isFavorite}
             classStar = {item.classStar}
             key={item.id}
             changeRate={() => this.props.changeRate(item.id)}
             deleteContact={() => this.props.deleteContact(item.id)}
             editObj = {() => this.props.editObj(item.id)}
             ></ContactItem>
            );
        });
     return(
        
         <Fragment>
             <p>ContacList</p>
             <ul className="list">
                 {singleContact}
             </ul>
         </Fragment>
     )
    }
}
 
 
 export default FavoriteContact;