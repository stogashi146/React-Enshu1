import "./styles.css";
import styled from "styled-components";
import React, { useState, FC, useCallback, useMemo } from "react";
import { MemoList } from "./components/MemoList";
import { useMemoList } from "./hooks/useMemoList";

export const App: FC = () => {
  const { memoList, addTodo, deleteTodo } = useMemoList();

  const [memo, setMemo] = useState("");

  const onClickAdd = () => {
    if (memo === "") {
      alert("文字を入力してください");
    } else {
      addTodo(memo);
    }
    setMemo("");
  };

  const onClickDelete = useCallback(
    (index: number) => {
      deleteTodo(index);
    },
    [deleteTodo]
  );

  console.log(memoList);
  return (
    <>
      <h1>簡単メモアプリ</h1>
      <div>
        <input
          type="text"
          value={memo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMemo(e.target.value);
          }}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <MemoList memoList={memoList} onClickDelete={onClickDelete} />
    </>
  );
};
