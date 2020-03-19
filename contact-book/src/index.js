import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from "./Components/ContactList/ContactList";
import uuid from 'react-uuid'
import AddContact from "./Components/AddContact/AddContact";
import Page404 from "./Components/404/page404";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
class App extends Component {
    state = {
        List: [
            {
                id: uuid(),
                name: "Andrii Riabii",
                phonenumber: "12312323123",
                street: "soborna 16",
                email: "cuanid@gmail.com",
                gender: "men",
                avatar: 99,
                isFavorite: false,
                classStar: "fa fa-star-o",
            },
            {
                id: uuid(),
                name: "ZIp zip",
                phonenumber: "1123123123",
                street: "soborna 16",
                email: "cuanid@gmail.com",
                gender: "women",
                avatar: 12,
                isFavorite: false,
                classStar: "fa fa-star-o",
            },
            {
                id: uuid(),
                name: "Kate",
                phonenumber: "12123123123",
                street: "soborna 16",
                email: "cuanid@gmail.com",
                gender: "women",
                avatar: 42,
                isFavorite: true,
                classStar: "fa fa-star",
            }
        ]
    }
    changeRate = id => {
        console.log(id);
        const index = this.state.List.findIndex(x => x.id === id);
        var tempList = this.state.List.slice();
        if (tempList[index].isFavorite == false) {
            tempList[index].classStar = "fa fa-star";
            tempList[index].isFavorite = true;

        }
        else {
            tempList[index].classStar = "fa fa-star-o";
            tempList[index].isFavorite = false;
        }
        this.setState(state => {
            return {
                isFavorite: !this.tempList,
                classStar: !this.tempList
            }
        })


    }
    addContact = (name, address, phone, email, avatar,isFavorites,genders,classname) => {
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
        var tempList = this.state.List.slice();
        tempList.push(newElement);
        this.setState(state => {
            return {
                List: tempList,
            }
        })

    }
    deleteContact = (id) => {
        const index = this.state.List.findIndex(x => x.id === id);
        var tempList = this.state.List.slice();
        tempList.splice(index, 1);
        this.setState(state => {
            return {
                List: tempList,
            }
        })
    }
    render() {
        return (
            <Fragment>
                <Router>
                    <header className="hat">
                        <h1>Contact book</h1>
                        <Link className="linka" to="/">List contacts</Link>
                        <Link className="linka" to="/addContact">Add contact</Link> 
                    </header>
                    <main>
                        <Switch>
                            <Route path="/" exact render={() => <ContactList Data={this.state.List} changeRate={this.changeRate} deleteContact={this.deleteContact}></ContactList>}>

                            </Route>
                            <Route path="/addContact" exact render={() => <AddContact addContact={this.addContact}></AddContact>}>

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

