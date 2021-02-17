import React from 'react';
import { Card, Button } from 'semantic-ui-react'
import { EditModal } from '../modal/EditModal';
import { ActiveTimer } from './ActiveTimer';
import './Timer.scss';

/**
 * Individual Timer Object
 *
 * @deprecated
 * Replaced by 'TimerObj'
 */

interface Props {
    name: string
    project: string
    client: string
    assignedTo: string
    billable: boolean
    styleType: string
}

const Timer = (props: Props) => {

    return(
        <Card className={`timer ${props.styleType}-item`}>
            <Card.Content header={props.name} />
            <Card.Content>
                <Card.Description>{props.project}, {props.client}</Card.Description>
            </Card.Content>
            <Card.Content>
                <ActiveTimer />
            </Card.Content>
            <Card.Content>
                <EditModal timerName={props.name} assignedUser={props.assignedTo} billable={props.billable}/>
                <Button>Stop Timer</Button>
            </Card.Content>
        </Card>
    )

}

export default Timer