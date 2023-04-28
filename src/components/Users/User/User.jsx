import React from 'react';
import styles from './User.module.css'
import { BsPlusLg } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";

const User = ({id, email, first_name, last_name, avatar, onClickChangeInvites, isInvited}) => {
    return (
        <div className={styles.panel}>
            <img src={avatar} alt="none" />

            <div className={styles.info}>
                <h1>{first_name} {last_name}</h1>
                <p className={styles.email}>{email}</p>
            </div>

            <div
                className={styles.btn}
                onClick={() => onClickChangeInvites(id)}
            >
                {isInvited ?
                    <MdOutlineDone className={styles.btnIcon}/>
                :
                    <BsPlusLg className={`${styles.btnIcon} ${styles.btnIconAdd}`} />}
            </div>
        </div>
    );
};

export default User;
