import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

const MyModal = (props) => {

	const [IV, setIV] = useState({
		title: '',
		desc: ''
	})

	const changeIV = (e) => {
		setIV(prev => ({   //выводит полученное значение 
			...prev,
			[e.target.name]: e.target.value
		}))
	}

	const toPublish = () => {
		props.createPost(IV)  // создается пост
		props.setmodalShow(false)
	}

	return (
		<Modal   //создание формы
			show={props.show}
			onHide={() => props.setmodalShow(false)}
			backdrop="static"
			keyboard={false}
		>
			<Modal.Header closeButton>  
				<Modal.Title>Добавление обсуждения</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Тема</Form.Label>
						<Form.Control name="title" value={IV.title} onChange={changeIV} type="text" placeholder="Введите тему для обсуждения" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Описание</Form.Label>
						<Form.Control name="desc" value={IV.desc} onChange={changeIV} placeholder="Введите описание" as="textarea" rows={3} />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => props.setmodalShow(false)}>
					Закрыть
				</Button>
				<Button onClick={toPublish} variant="primary">Опубликовать</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default MyModal