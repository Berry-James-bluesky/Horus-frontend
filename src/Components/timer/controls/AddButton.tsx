import React from "react";
import { Icon, Button } from "semantic-ui-react";
import "./AddButton.scss";

/**
 * Button used to add a timer
 * [in current state, only displays a { Notify }]
 *
 *
 */

type Props = {
  addTimer: any;
  /** Function passed that runs on button press (in current version, displays a notification) */
  isDisabled: boolean;
  /** Passed as FALSE until all form fields are populated, then passes TRUE (NOT YET IMPLEMENTED) */
};

const AddButton: React.FC<Props> = (props) => {
  return (
    <button
      className="add-button"
      onClick={props.addTimer}
      disabled={props.isDisabled}
    >
      <Icon name="plus" size="small" /> Add Timer
    </button>
  );
};

export default AddButton;
