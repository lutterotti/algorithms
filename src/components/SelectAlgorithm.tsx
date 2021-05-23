import { useAppDispatch } from "../store/hooks";
import { getQueue, quickSortQueue } from '../store/algorithmSlice';
import { useSelector } from "react-redux";
import { clone } from "lodash";

const SelectAlgorithm: React.FC<{}> = () => {
  const queue = useSelector(getQueue)
  const dispatch = useAppDispatch();

  function sortQueue() {
    const cloned_queue = clone(queue);
    dispatch(quickSortQueue(cloned_queue));
  }
  return (
  <div className="select-algorithm">
    <div className="reset-queue"><p>Reset Queue</p></div>
    <div className="quick-queue" onClick={() => sortQueue()}><p>Quick Sort</p></div>
    <div className="merge-queue"><p>Merge Sort</p></div>
  </div>
  )
}

export default SelectAlgorithm;