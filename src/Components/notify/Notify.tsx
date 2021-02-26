import React from "react";
import "./Notify.scss";
import { Icon } from "semantic-ui-react";

/**
 * A general-purpose, re-usable notification which is displayed in the top-left corner of the screen for 4 seconds
 *
 * Animation is handled in the associated .scss file 'Notify.scss'
 */

interface Props {
  text: string;
  /** The text to be shown in the notification  */
  isVisible: boolean;
  /** Pass this prop as true when you want the notification to appear */
  icon: string;
  /** The name of the FontAwesome icon to be displayed in the notification (reference list of available icons at https://react.semantic-ui.com/elements/icon/ ) */
}

export const Notify: React.FC<Props> = (props: any) => {
  if (!props.isVisible) {
    return null;
  }

  return (
    <div className="fixed h-screen w-screen top-0 left-0 pointer-events-none z-50">
      <div className="notify absolute top-4 left-4 w-40 h-12 bg-secondary rounded-md shadow-md flex justify-center items-center">
        <Icon name={props.icon} />
        <span className="text-white">{props.text}</span>
      </div>
    </div>
  );
};
