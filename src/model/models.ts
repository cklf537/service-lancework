

interface GROUP{
    group_id: string
    group_name: string
}

interface USER<GROUP> {
    user_id: string
    user_name?: string
    // group?: {
    //     group_id?: string
    //     group_name?: string
    // }
    group?: GROUP
}


export {USER, GROUP};
