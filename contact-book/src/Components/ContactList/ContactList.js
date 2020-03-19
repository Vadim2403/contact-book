import React, {Fragment} from "react";
import "./ContacList.css";
import ContactItem from "../ContactItem/ContactItem";


const ContactList = ({Data,changeRate, deleteContact}) => {
   const singleContact = Data.map(item => {
       return(
        <ContactItem name={item.name}
        phonenumber={item.phonenumber}
        street = {item.street}
        email = {item.email}
        gender = {item.gender}
        avatar = {item.avatar}
        isFavorite = {item.isFavorite}
        classStar = {item.classStar}
        key={item.id}
        changeRate={() => changeRate(item.id)}
        deleteContact={() => deleteContact(item.id)}
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

export default ContactList;