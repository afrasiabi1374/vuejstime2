export default function(context){
    const promise =  new Promise((resolve) => {
        setTimeout(() => {
            console.log('request is resolved')
            resolve({user_id: 1})
        })
    })
    if (process.server) {
        return promise
    }
}