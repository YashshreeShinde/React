export const AddUserFields=[
    {
        label:"Name",
        name:"name",
        type:"text",
        control:"input",
        placeholder:"Name of the user",
        initialvalue:""

    },
    {
        label:"Email",
        name:"email",
        type:"email",
        control:"input",
        placeholder:"Email of the user",
        initialvalue:""

    },
    {
        label:"Username",
        name:"username",
        type:"text",
        control:"input",
        placeholder:"Username of the user",
        initialvalue:""

    },
    {
        label:"Password",
        name:"password",
        type:"password",
        control:"input",
        placeholder:"Password of the user",
        initialvalue:""

    },
    {
        label:"Role",
        name:"role",
        type:"select",
        control:"select",
        options:[
            {key:"Accountant",value:"Accountant"},
            {key:"Clerk",value:"Clerk"}
        ],
        initialvalue:"Clerk"
    },
]