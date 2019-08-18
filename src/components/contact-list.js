import React from 'react';
import ContacListItem from './contact-list-item'

const ContactList = ({ users, onEdit }) => {
    const elements = users.map((user, i) => {
        return (
            <li key={i} className="contact-book__item">
                <ContacListItem
                  { ...user }
                  onEdit={onEdit}
                />
            </li>
        );
    });
    return (<ul className="contact-book">{ elements }</ul>)
}

export default ContactList;