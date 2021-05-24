import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getQueueOptions, updateQueueOptions } from "../store/algorithmSlice";
import { useAppDispatch } from "../store/hooks";


export const GenerateQueueOptions: React.FC<{}> = () => {
  const {length_of_queue, min_value, max_value} = useSelector(getQueueOptions);
  const [updated_length, updateLengthOfQueue] = useState(length_of_queue);
  const [updated_min_value, updateMinValue] = useState(min_value);
  const [updated_max_value, updateMaxValue] = useState(max_value);

  const dispatch = useAppDispatch();

  function handleInputValue(value: string) {
    const parsed_value = value ? parseInt(value, 10) : 0;

    return parsed_value;
  }

  return (
    <div className="queue-options">
      <div className="input-field">
        <p className="input-label">Length</p>
        <input type="text" pattern="[0-9]*" className="option-input" placeholder="length" value={updated_length} onChange={(event) => updateLengthOfQueue(handleInputValue(event.target.value))}/>
      </div>
      <div className="input-field">
        <p className="input-label">Min Value</p>
        <input type="text" pattern="[0-9]*" className="option-input" placeholder="length" value={updated_min_value} onChange={(event) => updateMinValue(handleInputValue(event.target.value))}/>
      </div>
      <div className="input-field">
        <p className="input-label">Max Value</p>
        <input type="text" pattern="[0-9]*" className="option-input" placeholder="length" value={updated_max_value} onChange={(event) => updateMaxValue(handleInputValue(event.target.value))}/>
      </div>
      <div className="update-queue-options" onClick={() => dispatch(updateQueueOptions({length_of_queue: updated_length, min_value: updated_min_value, max_value: updated_max_value}))}><p>Set Queue Options</p></div>
    </div>
  )
}