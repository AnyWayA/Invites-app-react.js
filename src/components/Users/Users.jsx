import React from 'react';
import User from './User/User';

const Users = ({items, search, invites, setInvites}) => {
    const onClickChangeInvites = (id) => {
		if (invites.includes(id)) {
			setInvites(item => item.filter(_id => _id !== id))
		} else {
			setInvites(prev => [...prev, id])
		}
	}


    return (
        <div>
            {
            items.filter(obj => {
                const fullName = obj.first_name + obj.last_name;
                return obj.email.toLowerCase().includes(search.toLowerCase()) || fullName.toLowerCase().includes(search.toLowerCase());
            }).map((obj) =>
                <User
                    key={obj.id} {...obj}
                    onClickChangeInvites={onClickChangeInvites}
                    isInvited={invites.includes(obj.id)}
                />
            )
            }
        </div>
    );
};

export default Users;
