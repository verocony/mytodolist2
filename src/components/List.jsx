import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleStatusTodo } from "../redux/modules/todos"
import {Link} from "react-router-dom";


const List = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
// *** 생성한 모듈을 스토어에 잘 연결했는지 확인하는 방법은 컴포넌트에서 스토어를 직접 조회하면 됨. 컴포넌트에서 리덕스 스토어를 조회할 때 : useSelector라는 react-redux의 훅을 사용! ***
// 1. store에서 꺼낸 갓을 할당 할 변수를 선언
// 2. useSelector()를 변수에 할당
// 3. useSelector 인자에 화살표 함수 넣어주기
// 4. 화살표 함수의 인자에서 값을 꺼내 return
// const number = useSelector((state) => {
//     console.log(state)
//     return state
// })

    const onDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const onToggleStatusTodo = (id) => {
        dispatch(toggleStatusTodo(id));
    };



    return (
        <ListContainer>
      <h2>Working.. 🔥</h2>
      <ListWrap>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoBox key={todo.id}>
                <Link to={`/${todo.id}`} key={todo.id}>
{                  }<div>상세보기</div>
                </Link>
                <div>
                  <h2 className="todo__title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <Btns>
                  <BtnTodo
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제
                  </BtnTodo>
                  <BtnTodo
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </BtnTodo>
                </Btns>
              </TodoBox>
            );
          } else {
            return null;
          }
        })}
      </ListWrap>
      <h2>Done..! 🎉</h2>
      <ListWrap>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoBox key={todo.id}>
                <Link to={`/${todo.id}`} key={todo.id}>
                  <MoveTo>상세보기</MoveTo>
                </Link>
                <div>
                  <h2 className="todo__title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <Btns>
                  <BtnTodo
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제
                  </BtnTodo>
                  <BtnTodo
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </BtnTodo>
                </Btns>
              </TodoBox>
            );
          } else {
            return null;
          }
        })}
      </ListWrap>
    </ListContainer>
)
};

export default List;


const ListContainer = styled.div`
    /* background-color:#f5f5f5; */
    width: 100%;
    height: auto;
    /* padding: 20px; */
    border-radius: 20px;
    margin: 20px 0;
`;
const ListWrap = styled.div`
    background-color:#f5f5f5;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    margin: 20px 0;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`;

const TodoBox = styled.div`
    width: 30%;
    height: auto;
    border: 1px solid black;
`



const Btns = styled.div`
    display: flex;
    margin: 10px 0 0 0;
`;

const BtnTodo = styled.div`
    margin: 10px 20px 10px 0;
    padding: 7px 20px;
    border-radius: 10px;
    border: 1px solid black;
    margin: 20px;
`

const MoveTo = styled.span`
    background-color: aliceblue;

`



