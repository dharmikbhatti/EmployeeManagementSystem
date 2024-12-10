const employees = [
    {
        "id": 1,
        "firstName": "Vrumik",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "isNew": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskId": 1,
                "title": "Complete Project Documentation",
                "description": "Write detailed documentation for the new feature implementation",
                "date": "2024-01-20",
                "category": "Documentation", 
                "active": true,
                "isNew": true,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 2,
                "title": "Bug Fixes in Login Module",
                "description": "Fix reported bugs in user authentication system",
                "date": "2024-01-18",
                "category": "Development",
                "active": true,
                "isNew": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 3,
                "title": "Code Review",
                "description": "Review pull requests from team members",
                "date": "2024-01-15",
                "category": "Review",
                "active": false,
                "isNew": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Chacha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "isNew": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskId": 1,
                "title": "UI Design Implementation",
                "description": "Implement new UI design for dashboard",
                "date": "2024-01-22",
                "category": "Design",
                "active": true,
                "isNew": true,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 2,
                "title": "Performance Optimization",
                "description": "Optimize application performance and loading times",
                "date": "2024-01-19",
                "category": "Development",
                "active": true,
                "isNew": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 3,
                "title": "API Integration",
                "description": "Integrate third-party payment API",
                "date": "2024-01-16",
                "category": "Integration",
                "active": false,
                "isNew": false,
                "completed": false,
                "failed": true
            },
            {
                "taskId": 4,
                "title": "Testing",
                "description": "Perform unit testing for new features",
                "date": "2024-01-14",
                "category": "Testing",
                "active": false,
                "isNew": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Kaalu",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "isNew": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "taskId": 1,
                "title": "Database Optimization",
                "description": "Optimize database queries and improve performance",
                "date": "2024-01-23",
                "category": "Database",
                "active": true,
                "isNew": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Emma",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "isNew": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskId": 1,
                "title": "Security Audit",
                "description": "Conduct security audit of the application",
                "date": "2024-01-21",
                "category": "Security",
                "active": true,
                "isNew": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 2,
                "title": "User Training",
                "description": "Prepare and conduct user training sessions",
                "date": "2024-01-20",
                "category": "Training",
                "active": true,
                "isNew": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 3,
                "title": "Documentation Review",
                "description": "Review and update system documentation",
                "date": "2024-01-18",
                "category": "Documentation",
                "active": false,
                "isNew": false,
                "completed": true,
                "failed": false
            }
        ]
    }
]


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employee, admin}
}