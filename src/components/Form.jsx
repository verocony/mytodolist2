import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/modules/todos"

const Form = () => {
  const id = Date.now().toString()

const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const onChangeHandler = (event) => {
    const {value, name} = event.target;  // 객체 구조분해
    // console.log(event.target.name)
    // console.log(event.target.value)
    setTodo({...todo, [name]:value});
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('sdf')

    dispatch(addTodo({...todo, id}));
    setTodo({
        id:0,
        title:"",
        body:"",
        isDone:false,
    });
  };


    return (
        <FormContainer onSubmit={onSubmitHandler}>

            <InputBox>
                <input
                type="text" 
                name="title" 
                value={todo.title} 
                onChange={onChangeHandler} //onChange 변화가 일어났는지 탐지
                placeholder="제목"
                >
                
                </input>

                <input
                type="text"
                name="body" 
                value={todo.body} 
                onChange={onChangeHandler}
                placeholder="내용"
                >
                </input>
                
            </InputBox>

            <AddButton onClick={(e) => {onSubmitHandler(e)}}> 추가</AddButton>

        </FormContainer>
    );

    
};

export default Form;

const FormContainer = styled.div`
  width: 100%;
    height: auto;
    background-color: #eee;
    border-radius: 20px;
    /* padding: 30px; */
    display: flex;
    gap: 20px;
    position: relative;
`


const InputBox = styled.div`
    width: 100%;
    height: auto;
    background-color: #eee;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    gap: 20px;
    position: relative;
`
// const AddInput = styled.div`
//     width: 230px;
//     border-radius: 20px;
//     padding: 10px;
//     margin: 5px 20px;
//     border: 1px solid black;
// `

const AddButton = styled.button`
position: absolute;
    right: 20px;
    width: 100px;
    border-radius: 10px;
    padding: 10px;
    margin: 5px 20px;
    border: none;
    background-color: #008080;
    font-size: 16px;
    font-weight: bolder;
    color: #fff;
`

