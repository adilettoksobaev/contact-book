import React, { Component } from "react";
import Axios from "axios";
import SearchPanel from "../search-panel";
import AlphabetSort from "../alphabet-sort";
import ContactList from "../contact-list";
import "./app.scss";

export default class App extends Component {
    state = {
        users: [],
        search: "",
        alphabetSort: "",
    }
    componentDidMount() {
        if(localStorage.getItem(`users`)) {
            this.setState({ users: JSON.parse(localStorage.getItem(`users`)) });
        } else {
            Axios.get("http://demo.sibers.com/users").then(res => {
                localStorage.setItem(`users`, JSON.stringify(res.data));
                this.setState({ users: res.data });
            });
        }
    };

    searchItems(users, search) {
        if (search.length === 0) {
          return users;
        }

        return users.filter(user => {
          return (
               user.name.toLowerCase().indexOf(search.toLowerCase()) > -1
            );
        });
    };

    sortItems(users, alphabetSort) {
        if (!alphabetSort || (alphabetSort && alphabetSort.length === 0)) {
          return users;
        }
        return users.filter(user => {
          return user.name.toLowerCase().startsWith(alphabetSort.toLowerCase());
        });
    };

    onSearchChange = search => {
        this.setState({ search });
    };

    onEdit = (id, name, phone, username, email, website, address, streetA, posts) => {
        this.setState(state => {
            const users = state.users.map(user => {
                if(id === user.id) {
                    user.name = name;
                    user.phone = phone;
                    user.username = username;
                    user.email = email;
                    user.website = website;
                    user.address.city = address;
                    user.address.streetA = streetA;
                    user.posts[0].sentences = posts;
                }
                return user;
            });
            localStorage.setItem(`users`, JSON.stringify(users));
            return { users: users };
        });
    };

    handleAlphabetSort = (alphabetSort) => {
        if(alphabetSort === this.state.alphabetSort){
            this.setState({ alphabetSort:""});
        }else
            this.setState({ alphabetSort });
    }

    render() {
        const { users, search,alphabetSort } = this.state;
        let visibleItems = this.searchItems(users, search);
        visibleItems = this.sortItems(visibleItems, alphabetSort);

        const data = users.reduce((r, e) => {
            const group = e.name[0];
            r[group] = group;
            return r;
        }, {});

        const alphabets = Object.values(data);

        return (
            <div className="container">
                <SearchPanel onSearchChange={this.onSearchChange} />
                <AlphabetSort selected={alphabetSort} onSort={this.handleAlphabetSort} alphabets={alphabets} />
                <ContactList
                    users={ visibleItems }
                    onEdit={this.onEdit.bind(this)}
                />
                <div className="clear"></div>
            </div>
        );
    }
}

