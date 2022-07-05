import styled from "styled-components";
import React, { FC } from "react";

type Props = {
  memoList: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memoList, onClickDelete } = props;

  return (
    <MemoListBox>
      <p>メモ一覧</p>
      <ul>
        {memoList.map((memo, index) => {
          return (
            <>
              <li key={index}>
                {memo}
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            </>
          );
        })}
      </ul>
    </MemoListBox>
  );
};

const MemoListBox = styled.div`
  width: 100%;
  border: solid 1px #222;
  margin: 1rem;
`;
