const Convert = {

    seconds: (sec: number) => {
        return Math.trunc(sec % 60)
    },

    minutes: (sec: number) => {
        return Math.trunc(sec % 3600 / 60)
    },

    hours: (sec: number) => {
        return Math.trunc(sec % (3600*24) / 3600)
    },

    days: (sec: number) => {
        return Math.trunc(sec / 86400)
    },

}

export default Convert