import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from "./Components/ContactList/ContactList";
import uuid from 'react-uuid'
import AddContact from "./Components/AddContact/AddContact";
import Page404 from "./Components/404/page404";
import EditContact from "./Components/EditContact/EditContact";
import FavoriteContact from "./Components/FavoriteContacts/FavoriteContacts";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
class App extends Component {
    constructor() {
        super();

    }
    URL = "https://contactlist-343c6.firebaseio.com/list.json";
    refreshList() {
        fetch(this.URL, {
            method: "GET"
        }).then(data => { return data.json(); })
            .then(data => { this.setState({ List: data }) });

    }
    async saveChanges(myList) {
        await fetch(this.URL, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myList)
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.log("Error: ", error)
        });
        this.refreshList();
    }
    componentDidMount() {
        this.refreshList();
    }
    state = {
        List: [
            // {
            //     id: uuid(),
            //     name: "Andrii Riabii",
            //     phonenumber: "12312323123",
            //     street: "soborna 16",
            //     email: "cuanid@gmail.com",
            //     gender: "men",
            //     avatar: 59,
            //     isFavorite: false,
            //     classStar: "fa fa-star-o",
            // },
            // {
            //     id: uuid(),
            //     name: "ZIp zip",
            //     phonenumber: "1123123123",
            //     street: "soborna 16",
            //     email: "cuanid@gmail.com",
            //     gender: "women",
            //     avatar: 12,
            //     isFavorite: false,
            //     classStar: "fa fa-star-o",
            // },
            // {
            //     id: uuid(),
            //     name: "Kate",
            //     phonenumber: "12123123123",
            //     street: "soborna 16",
            //     email: "cuanid@gmail.com",
            //     gender: "women",
            //     avatar: 42,
            //     isFavorite: true,
            //     classStar: "fa fa-star",
            // }
        ],
        currentUser: null,
        firstlist: null,
        count: 0

    }
    changeRate = id => {
        var index = 0;
        var tempList = []; 
        if(this.state.firstlist == null){
            index = this.state.List.findIndex(x => x.id === id);
            tempList = this.state.List.slice();
        }
        else{
        index = this.state.firstlist.findIndex(x => x.id === id);
        tempList = this.state.firstlist.slice();
        }
        if (tempList[index].isFavorite == false) {
            tempList[index].classStar = "fa fa-star";
            tempList[index].isFavorite = true;

        }
        else {
            tempList[index].classStar = "fa fa-star-o";
            tempList[index].isFavorite = false;
        }
        this.saveChanges(tempList);
        // this.setState(state => {
        //     return {
        //         isFavorite: !this.tempList,
        //         classStar: !this.tempList
        //     }
        // })


    }

    addContact = (name, address, phone, email, avatar, isFavorites, genders, classname) => {
        const newElement = {
            id: uuid(),
            name: name,
            phonenumber: phone,
            street: address,
            email: email,
            gender: genders,
            avatar: avatar,
            isFavorite: isFavorites,
            classStar: classname,

        }
        var tempList = [];
        if (this.state.List != null) {
            tempList = this.state.List.slice();
        }
        tempList.push(newElement);
        this.saveChanges(tempList);
        // this.setState(state => {
        //     return {
        //         List: tempList,
        //     }
        // })


    }
    editObj = (id) => {
        const index = this.state.firstlist.findIndex(x => x.id === id);
        var tempList = this.state.firstlist.slice();

        // tempList[index].name = name;
        // tempList[index].phonenumber = phone;
        // tempList[index].street = address;
        // tempList[index].email = email;
        // tempList[index].gender = genders;
        // tempList[index].avatar = avatar;
        // tempList[index].isFavorite = isFavorites;
        // tempList[index].classStar = classname;
        this.setState(state => {
            return {
                currentUser: tempList[index],
            }
        })
    }
    deleteContact = (id) => {
        const index = this.state.List.findIndex(x => x.id === id);
        var tempList = this.state.List.slice();
        tempList.splice(index, 1);
        this.saveChanges(tempList);
        // this.setState(state => {
        //     return {
        //         List: tempList,
        //     }
        // })
    }
    editing = (id, name, address, phone, email, avatar, isFavorites, genders, classname) => {
        if (this.state.List != null) {
            var index = 0;
        var tempList = []; 
        if(this.state.firstlist == null){
            index = this.state.List.findIndex(x => x.id === id);
            tempList = this.state.List.slice();
        }
        else{
        index = this.state.firstlist.findIndex(x => x.id === id);
        tempList = this.state.firstlist.slice();
        }
            tempList[index].name = name;
            tempList[index].phonenumber = phone;
            tempList[index].street = address;
            tempList[index].email = email;
            tempList[index].gender = genders;
            tempList[index].avatar = avatar;
            tempList[index].isFavorite = isFavorites;
            tempList[index].classStar = classname;
        }
        else {
            var tempList = [];
            tempList[0].name = name;
            tempList[0].phonenumber = phone;
            tempList[0].street = address;
            tempList[0].email = email;
            tempList[0].gender = genders;
            tempList[0].avatar = avatar;
            tempList[0].isFavorite = isFavorites;
            tempList[0].classStar = classname;
        }
        this.saveChanges(tempList);
    }
    searchs = () => {
        var counter = this.state.count;
        if(counter == 0){
            var frst = this.state.List.slice();
            var tempList = this.state.List.slice();
            var founded = [];
            for(var i = 0; i < tempList.length; i++){
                if(tempList[i].name.includes(document.getElementById("searched").value)){
                    founded.push(tempList[i]);
                }
            }
        this.setState(state => {
            return {
                List: founded,
                firstlist: frst,
                count: 1
            }
        })
        }
        else{
            var tempList = this.state.firstlist.slice();
            var founded = [];
            for(var i = 0; i < tempList.length; i++){
                if(tempList[i].name.includes(document.getElementById("searched").value)){
                    founded.push(tempList[i]);
                }
            }
            this.setState(state => {
                return {
                    List: founded,
                }
            })
        }


    }
    
    render() {
        return (
            <Fragment>
                <Router>
                    <header className="hat">
                        <h1>Contact book</h1>
                        <Link className="linka" to="/">List contacts</Link>
                        <Link className="linka" to="/addContact">Add contact</Link>
                        <Link className="linka" to="/favContact">Favorites</Link>
                        <div class="topnav">
                            <input type="text" onChange={this.searchs} id="searched" placeholder="Search.."></input>
                        </div>

                    </header>
                        <main>
                            <Switch>
                                <Route path="/" exact render={() => <ContactList Data={this.state.List} changeRate={this.changeRate} editObj={this.editObj} deleteContact={this.deleteContact}></ContactList>}>

                                </Route>
                                <Route path="/favContact" exact render={() => <FavoriteContact Data={this.state.List} changeRate={this.changeRate} editObj={this.editObj} deleteContact={this.deleteContact}></FavoriteContact>}>

                                </Route>
                                <Route path="/addContact" exact render={() => <AddContact addContact={this.addContact}></AddContact>}>

                                </Route>
                                <Route path="/editContact" exact render={() => <EditContact Data={this.state.currentUser} editing={this.editing}></EditContact>}>

                                </Route>
                                <Route path="*" render={() => <Page404></Page404>}>

                                </Route>

                            </Switch>
                            {/* <ContactList Data={this.state.List} changeRate={this.changeRate} deleteContact={this.deleteContact}></ContactList>
                        <AddContact addContact={this.addContact}></AddContact> */}
                        </main>
                </Router>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

