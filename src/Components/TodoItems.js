import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import style from "./TodoItems.module.css";
import { AiFillDelete } from "react-icons/ai";

const TodoItems = (props) =>{
    return(
       
        <Container>
        <Row className={style.todoitems}>
        <Col xs={5}>{props.productName}</Col>
        <Col xs={5}>{props.productDate} </Col>
        <Col xs={2}><Button variant="danger" onClick={() =>props.onClickDelete(props.productName)}><AiFillDelete/></Button>{' '}</Col>
        </Row>
      </Container>
      
    )
}

export default TodoItems;