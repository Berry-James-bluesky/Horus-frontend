import React from 'react';
import {Button, Header, Icon, Modal, Checkbox} from 'semantic-ui-react'

/**
 * Modal used to display timer edit options
 * This is built using semantic ui for react
 */

interface Props {
    timerName: string
    /** Name assigned to timer at creation (string) */
    assignedUser: string
    /** User assigned to timer at creation (string) */
    billable: boolean
    /** Is the time spent/being spent billable? (boolean) */
}

export const EditModal: React.FC<Props> = (props: any) => {

    const [open, setOpen] = React.useState(false)

    return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Icon name='edit' size='large' className='edit-icon'/>}
        >
            <Modal.Header>Edit '{props.timerName}'</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Assigned to</Header>
                    <p>
                        {props.assignedUser}
                    </p>
                    <Header>Billable</Header>
                    <Checkbox checked={props.billable} />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button
                    content="Confirm changes"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}