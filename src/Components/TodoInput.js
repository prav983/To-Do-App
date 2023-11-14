import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import style from "./TodoInput.module.css";
import { useState } from 'react';
import { BiCommentAdd } from "react-icons/bi";
const TodoInput = ({onNewItem}) =>{
  const [todoName,setTodoName] = useState("");
  const [todoDate,setTodoDate] = useState("");
  const handleNameChanage = (event)=>{
    setTodoName(event.target.value);
  }

  const handleDateChanage = (event)=>{
    setTodoDate(event.target.value);
    
  }

  const handleButtonClick = ()=>{
 
    onNewItem(todoName,todoDate);
    setTodoDate("");
    setTodoName("");
  }
    return(
        <Container>
        <Row className={style.inputdisplay}>
        <Col xs={5}><input type='text' placeholder='Enter Todo Here ' onChange={handleNameChanage} value={todoName}/></Col>
        <Col xs={5}><input type='date' onChange={handleDateChanage} value={todoDate}/> </Col>
        <Col xs={2}> <Button variant="success" onClick={handleButtonClick}><BiCommentAdd/></Button>{' '}</Col>
        </Row>
      </Container>
    )
}

export default TodoInput;