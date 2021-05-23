import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { generateSortQueue, getQueue, Item } from '../store/algorithmSlice';
import { useSelector } from "react-redux";
import { cloneDeep } from 'lodash';

function displayItem(item: number, index: number) {

  return (
    <div className="display-item" key={index}><p className="item-value">{item}</p></div>
  )
}

const DisplayQueue: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const queue = cloneDeep(useSelector(getQueue));

  useEffect(() => {
    dispatch(generateSortQueue());
  }, [dispatch]);
  return (
    <div className="display-queue">
      <div className="item-container">{queue.map((item: number, index: number) => displayItem(item, index))}</div>
    </div>
  )
}

export default DisplayQueue;