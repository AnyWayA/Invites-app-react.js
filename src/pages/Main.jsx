import React, { useEffect, useState } from 'react';

import styles from './Main.module.css'

import Success from '../components/Success/Success';
import Users from '../components/Users/Users';
import Search from '../components/Search/Search';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((res) => res.json())
			.then((json) => {
				setUsers(json.data)
			})
			.catch((err) => {
				console.warn(err);
				alert('Ошибка при получении пользователей')
			})
	}, [])

	const [success, setSuccess] = useState(false);

	const onClickSendInvites = () => {
		setSuccess(true)
	}

	const [invites, setInvites] = useState([]);



	const [search, setSearch] = useState('');



	return (
		<div className={styles.layout}>
			<div className={styles.app}>
				{success ?
					<Success numberOfInvited={invites.length} />
					:
					<>
						<Search search={search} setSearch={setSearch} />

						<Users items={users} search={search} invites={invites} setInvites={setInvites} />

						{invites.length !== 0 &&
							<button
								className={styles.btn}
								onClick={() => onClickSendInvites()}
							>
								Отправить приглашение
							</button>}
					</>
				}
			</div>
		</div>
	);
}

export default App;
