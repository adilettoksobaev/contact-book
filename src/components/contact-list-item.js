import React, { Component } from 'react';

export default class ContactListItem extends Component {
    constructor(props) {
        super(props);
        this.contactMoreClick = this.contactMoreClick.bind(this);
        this.popupClick = this.popupClick.bind(this);
        this.editChangeName = this.editChangeName.bind(this);
        this.editChangePhone = this.editChangePhone.bind(this);
        this.editChangeUsername = this.editChangeUsername.bind(this);
        this.editChangeEmail = this.editChangeEmail.bind(this);
        this.editChangeWebsite = this.editChangeWebsite.bind(this);
        this.editChangeCity = this.editChangeCity.bind(this);
        this.editChangeStreet = this.editChangeStreet.bind(this);
        this.editChangeDescription = this.editChangeDescription.bind(this);
        this.editSubmit = this.editSubmit.bind(this);
    }
    state = {
        isToggleMore: false,
        isTogglePopup: false,
        name: this.props.name,
        phone: this.props.phone,
        username: this.props.username,
        email: this.props.email,
        website: this.props.website,
        city: this.props.address.city,
        street: this.props.address.streetA,
        description: this.props.posts[0].sentences
    }

    contactMoreClick () {
        this.setState(state => ({
            isToggleMore: !state.isToggleMore
        }))
    }

    popupClick () {
        this.setState(state => ({
            isTogglePopup: !state.isTogglePopup
        }))
    }

    /**
     * Edit change book list
    */

    editChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }
    editChangePhone(event) {
        this.setState({
            phone: event.target.value
        });
    }
    editChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }
    editChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }
    editChangeWebsite(event) {
        this.setState({
            website: event.target.value
        });
    }
    editChangeCity(event) {
        this.setState({
            city: event.target.value
        });
    }
    editChangeStreet(event) {
        this.setState({
            street: event.target.value
        });
    }
    editChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }
  
    /**
     * Edit submit book list
    */

    editSubmit(event) {
        this.setState(state => {
            const { id,onEdit } = this.props;
            if(state.isTogglePopup) {
                onEdit(
                    id,
                    this.state.name,
                    this.state.phone,
                    this.state.username,
                    this.state.email,
                    this.state.website,
                    this.state.city,
                    this.state.street,
                    this.state.description
                );
            }
            return {
                isTogglePopup: !state.isTogglePopup
            }
        });  
        event.preventDefault();
    }

    render() {
        const { name, avatar, phone, email, username, website, address, posts  } = this.props;

        return (
            <div className="contact-book__content">
                <div className={`contact-book__content-item ${this.state.isToggleMore ? 'active' : ''}`} onClick={this.contactMoreClick}>
                    <div className="contact-book__avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <div className="contact-book__group">
                        <div className="contact-book__name">{name}</div>
                        <div className="contact-book__phone">{phone}</div>
                    </div>
                </div>
                <div className="contact-book__edit" onClick={this.popupClick}><i className="material-icons">edit</i></div>
                <div className={`contact-book__more ${this.state.isToggleMore ? 'show' : 'hide'}`}>
                    <ul className="contact-desc">
                        <li className="contact-desc__item">
                            <i className="material-icons person">person</i>
                            <div className="">{username}</div>
                        </li>
                        <li className="contact-desc__item">
                            <i className="material-icons">mail</i>
                            <div className="">{email}</div>
                        </li>
                        <li className="contact-desc__item">
                            <i className="material-icons">laptop_mac</i>
                            <div className="">{ website}</div>
                        </li>
                        <li className="contact-desc__item">
                            <i className="material-icons place">place</i>
                            <div className="">{address.city}, {address.streetA}</div>
                        </li>
                    </ul>
                    <div className="sentences">{ posts[0].sentences}</div>
                </div>
                <div className={`pop-up ${this.state.isTogglePopup ? 'open' : 'close'}`}>
                        <div className="pop-up__content">
                            <i className="material-icons close" onClick={this.popupClick}>close</i>
                            <form className="edit-form" onSubmit={this.editSubmit}>
                                <label className="edit-form__label">
                                    <span className="edit-form__plaseholder">Name</span>
                                    <input className="edit-form__input" type="text" defaultValue={name} onChange={this.editChangeName}/>
                                </label>
                                <label className="edit-form__label">
                                    <span className="edit-form__plaseholder">Phone</span>
                                    <input className="edit-form__input" type="text" defaultValue={phone}  onChange={this.editChangePhone}/>
                                </label>
                                <label className="edit-form__label">
                                    <span className="edit-form__plaseholder">Username</span>
                                    <input className="edit-form__input" type="text" defaultValue={username} onChange={this.editChangeUsername}/>
                                </label>
                                <label className="edit-form__label">
                                    <span className="edit-form__plaseholder">Email</span>
                                    <input className="edit-form__input" type="text" defaultValue={email} onChange={this.editChangeEmail}/>
                                </label>
                                <label className="edit-form__label">
                                    <span className="edit-form__plaseholder">Website</span>
                                    <input className="edit-form__input" type="text" defaultValue={website} onChange={this.editChangeWebsite}/>
                                </label>
                                <label className="edit-form__label">
                                    <span className="edit-form__plaseholder">City</span>
                                    <input className="edit-form__input" type="text" defaultValue={address.city} onChange={this.editChangeCity}/>
                                </label>
                                <label className="edit-form__label">
                                    <span className="edit-form__plaseholder">Street</span>
                                    <input className="edit-form__input" type="text" defaultValue={address.streetA} onChange={this.editChangeStreet}/>
                                </label>
                                <label className="edit-form__label">
                                    <span className="edit-form__plaseholder">Description</span>
                                    <textarea rows="4" className="edit-form__input" type="text" defaultValue={posts[0].sentences} onChange={this.editChangeDescription}/>
                                </label>
                                <div className="edit-form__btn-group">
                                    <div className="edit-form__btn" onClick={this.popupClick}>Cancel</div>
                                    <input className="edit-form__btn" type="submit" value="Save" />
                                </div>
                            </form>
                        </div>
                        <div className="pop-up__bg" onClick={this.popupClick}></div>
                </div>
            </div>
        );
  }
};