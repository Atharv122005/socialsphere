import { v4 as uuidv4 } from 'uuid';
const post = [
    {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "maou",
            src: "/src/assets/user1.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post1.jpg"
            }
        ]

    }, {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "oma",
            src: "/src/assets/user4.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post2.jpg"
            }

        ]

    }, {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "manu",
            src: "/src/assets/user2.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post3.jpg"
            }
        ]

    }, {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "ashok",
            src: "/src/assets/user3.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post4.jpg"
            }
        ]

    },
    {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "rahul",
            src: "/src/assets/user4.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post5.jpg"
            }
        ]

    },
    {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "atharv",
            src: "/src/assets/user1.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post6.jpg"
            }
        ]

    },
    {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "dhanashri",
            src: "/src/assets/user2.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post7.jpg"
            }
        ]

    },
    {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "disksha",
            src: "/src/assets/user5.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post8.jpg"
            }
        ]

    },
    {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "hindavi",
            src: "/src/assets/user4.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post9.jpg"
            }
        ]

    },
    {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "akagsha",
            src: "/src/assets/user5.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post10.jpg"
            }
        ]

    },
    {
        PostId: uuidv4(),
        caption: "mu first post",
        user: {
            userId: uuidv4(),
            username: "Mrunal",
            src: "/src/assets/user5.jpg"
        },
        image: [
            {
                ImageId: uuidv4(),
                src: "/src/assets/post11.jpg"
            }
        ]

    },
]











const user = [
    {
        src:"/src/assets/user3.jpg",
        username:"atharv",
        userId:uuidv4(),
    },
        {
        src:"/src/assets/user1.jpg",
        username:"rahul",
        userId:uuidv4()
    },
        {
        src:"/src/assets/user2.jpg",
        username:"rahul",
        userId:uuidv4(),
    },
        {
        src:"/src/assets/user3.jpg",
        username:"rahul",
        userId:uuidv4(),
    },
        {
        src:"/src/assets/user4.jpg",
        username:"rahul",
        userId:uuidv4(),
    },
        {
        src:"/src/assets/user5.jpg",
        username:"rahul",
        userId:uuidv4(),
    },
]
export  {post ,user};


