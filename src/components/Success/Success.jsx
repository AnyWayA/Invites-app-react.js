import React from 'react';
import { RiSendPlaneFill } from "react-icons/ri";
import styles from './Success.module.css'

const Success = ({numberOfInvited}) => {
    return (
        <div className={styles.success}>
            <RiSendPlaneFill className={styles.iconSuccess} />

            <p>Приглашение успешно отправлено {numberOfInvited} пользователям!</p>

            <button
                className={styles.btnBack}
                onClick={() => { window.location.reload() }}
            >
                Назад
            </button>
        </div>
    );
};

export default Success;
