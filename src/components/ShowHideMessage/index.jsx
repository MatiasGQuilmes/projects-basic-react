import { Button, Toast, Col, Container, Row } from "react-bootstrap"
import { useShow } from '../../hook/useShow'

const ShowHideMessage = () => {

    const {show, handLeShowMessage} = useShow(false);


    return(
        <Container>
            <Row className="mt-5">
                <Col xs={12} md={{span:6, offset:3}} className="text-center">
                    <Button className="mb-2" variant={show ? "danger" : "success"} onClick={handLeShowMessage}>
                        {show ? "Ocultar" : "Mostrar"} mensaje
                    </Button>
                    <Toast show={show} onClick={handLeShowMessage} className="m-auto">
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Container>
    )
}

export default ShowHideMessage
