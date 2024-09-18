

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

interface VIEW {
    designname: string;
    viewname: string;
}



export {USER, GROUP, VIEW};
