import React, { useState } from 'react'
import { Card, Button, InputGroup, Form } from "react-bootstrap"
import { useAuth } from '../hooks/use-auth'

const Post = (props) => {

	const { post: { id, title, desc, user, comments}, addPostComment } = props

	const [IV, setIV] = useState('')
	const { isAuth, email } = useAuth();

	return (
		<Card>
			<Card.Header>{user?.name}</Card.Header>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					{desc}
				</Card.Text>
				{comments.length ?  // если существует массив , то выводит его элементы
					<>
						<hr />
						<div className="comments">
							{comments?.map(com => (
								<Card key={com.id}>
									<Card.Body>{com.user.name} | {com.comment}</Card.Body>
								</Card>
							))}
						</div>
					</>
					: ''}
					{ isAuth ?  (  // если пользователь зашёл на сайт
				<Card.Footer>
					<InputGroup className="mb-3">
						<Form.Control
							value={IV}  //ввод комментария
							onChange={(e) => setIV(e.target.value) }
							name="comment"
							placeholder="Ваш комментарий"
							aria-label="Write what you think"
							aria-describedby="basic-addon2"
						/>
						<Button onClick={() => addPostComment(id, IV)} variant="outline-success" id="button-addon2"> {/* отправление комментария*/}
							Отправить
						</Button>
					</InputGroup>
				</Card.Footer>
				) : ( <h6>Что бы комментировать и добавить обсуждение, зарегистрируйтесь или авторизуйтесь !!</h6>)  // если пользователь не зашёл на сайт
}
			</Card.Body>
		</Card>
	)
}

export default Post