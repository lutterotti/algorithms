import { useAppDispatch } from "../store/hooks";
import { generateSortQueue, getQueue, mergeSortQueue, quickSortQueue } from '../store/algorithmSlice';
import { useSelector } from "react-redux";
import { clone } from "lodash";

const SelectAlgorithm: React.FC<{}> = () => {
  const queue = useSelector(getQueue)
  const dispatch = useAppDispatch();

  return (
  <div className="select-algorithm">
    <div className="reset-queue" onClick={() => dispatch(generateSortQueue())}><p>Reset Queue</p></div>
    <div className="quick-queue" onClick={() => dispatch(quickSortQueue(clone(queue)))}><p>Quick Sort</p></div>
    <div className="merge-queue" onClick={() => dispatch(mergeSortQueue(clone(queue)))}><p>Merge Sort</p></div>
  </div>
  )
}

export default SelectAlgorithm;