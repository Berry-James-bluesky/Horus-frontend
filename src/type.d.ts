interface ITimer {
    id: string
    name: string
    billable: boolean
    assignedBy: string
    assignedTo: string
    timer: object;
}

interface ApiDataType {
    data: any
    name: string
    assignedTo: string
    project: string
    client: string
    billable :boolean
    timers: object;
}