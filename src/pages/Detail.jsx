import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoById } from "../redux/modules/todos";

const Detail = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todos.todo);
    console.log(todo)
  
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(getTodoById(id));
    }, [dispatch, id]);
  
    useEffect(() => {
      console.log(id, todo)  
    }, [id, todo]);


    return (
      <ListContainer>
        <ListWrap>
          <div>
            <TodoBox>
              <div>ID :{todo.id}</div>
              <DetailButton
                onClick={() => {
                  navigate("/");
                }}
              >
                이전으로
              </DetailButton>
            </TodoBox>
            <DetailTitle>{todo.title}</DetailTitle>
            <DetailBody>{todo.body}</DetailBody>
          </div>
        </ListWrap>
      </ListContainer>
    );
  };
  
  export default Detail;
  
  const ListContainer = styled.div`
    border: 2px solid #eee;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const ListWrap = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  
  const TodoBox = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
  `;
  
  const DetailTitle = styled.h1`
    padding: 0 24px;
  `;
  
  const DetailBody = styled.main`
    padding: 0 24px;
  `;
  
  const DetailButton = styled.button`
    border: 1px solid ${({ borderColor }) => borderColor};
    height: 40px;
    width: 120px;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
  `;
  