import { useCallback, useState } from "react";

export const useMemoList = () => {
  // メモ一覧State
  const [memo, setMemo] = useState<string>("");
  const [memoList, setMemoList] = useState<string[]>([]);

  const addTodo = useCallback(
    (text: string) => {
      setMemoList([...memoList, text]);
    },
    [memoList]
  );

  const deleteTodo = useCallback(
    (index: number) => {
      let arr = [...memoList];
      arr.splice(index, 1);
      setMemoList([...arr]);
    },
    [memoList]
  );
  return { memoList, addTodo, deleteTodo };
};
