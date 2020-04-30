
const todolist = (title, description, dueDate, priority) => {
    //const sayHello = () => console.log('hello!');
    let checklist = [];
    return { title, description, dueDate, priority, checklist };
  };


export { todolist }