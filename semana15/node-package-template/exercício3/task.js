const tasks = []

const addTask = () => {

    newTask = process.argv[2]
    tasks.push(newTask)
}


addTask()
console.log(tasks) 