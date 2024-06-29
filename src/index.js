import './style.css';

const sidebar = {
    window: document.querySelector(".sidebar"),
}

const project = {
    dialogTask: document.querySelector("#taskDialog"),
    dialogProject: document.querySelector("#projectDialog"),
    btnNewProject: document.querySelector("#newProject"),
    btnSubmitProject: document.querySelector("#createProject"),
    btnPersonal: document.querySelector("#Personal"),
    btnShopping: document.querySelector("#Shopping"),
    btnSubmitTask: document.querySelector("#createTask"),
}

const content = {
    window: document.querySelector(".content"),
}

project.btnNewProject.addEventListener("click", () => {
    project.dialogProject.showModal();
})

const projectList = {}
const taskList = {}


function AddTools(object) {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    object.appendChild(wrapper);

    const btnNewTask = document.createElement("div");
    btnNewTask.className = "NewTask";
    btnNewTask.textContent = "+ New Task";
    wrapper.appendChild(btnNewTask);
}

const newProject = function() {

    const BlankProject = (newProjectName) => {
        const userProject = document.createElement("button");
        sidebar.window.appendChild(userProject);
        userProject.textContent = newProjectName;
        userProject.className = "side"
        AddTools(content.window)

        userProject.addEventListener("click", () => {
            while (content.window.firstChild) {
                content.window.removeChild(content.window.lastChild)
            }
            AddTools(content.window)
            const btnNewTask = document.querySelector(".NewTask")
            btnNewTask.addEventListener("click", () => {
                project.dialogTask.showModal();
            })
            TaskMaker(projectList.task.name, projectList.task.desc, projectList.task.date)

        })


        return { userProject }
    }
    
    const Personal = () => {
        const cells = document.createElement("div");
        cells.className = "cells";
        content.window.appendChild(cells);
        const cell_text = document.createElement("div");
        cell_text.className = "cell-text";
        cells.appendChild(cell_text);
        cell_text.textContent = "Congratulate Jimmy";

        const newcells = document.createElement("div");
        newcells.className = "cells";
        content.window.appendChild(newcells);
        const newcell_text = document.createElement("div");
        newcell_text.className = "cell-text";
        newcells.appendChild(newcell_text);
        newcell_text.textContent = "Make some Music";

        let PersonalList =  {
            Prewritten: {
                Jimmy: `${cell_text.textContent}`,
                Music: `${newcell_text.textContent}`,
            }
        }

        Object.assign(projectList, PersonalList)
        console.log(projectList)


    }
    
    const Shopping = () => {
        const cells = document.createElement("div");
        cells.className = "cells";
        content.window.appendChild(cells);
        const cell_text = document.createElement("div");
        cell_text.className = "cell-text";
        cells.appendChild(cell_text);
        cell_text.textContent = "Milk";
    }

    const TaskMaker = (title, desc, date) => {
        const cells = document.createElement("div");
        cells.className = "cells";
        content.window.appendChild(cells);
        const cell_text = document.createElement("div");
        cell_text.className = "cell-text";
        cells.appendChild(cell_text);
        cell_text.textContent = `${title} - ${desc}`

        const wrapper = document.createElement("div");
        cells.appendChild(wrapper)
        wrapper.className= "wrapper"

        const Wdate = document.createElement("div");
        Wdate.textContent = date;
        wrapper.appendChild(Wdate)

    }

    return { Personal, Shopping, BlankProject, TaskMaker }
}

project.btnPersonal.addEventListener("click", () => {
    while (content.window.firstChild) {
        content.window.removeChild(content.window.lastChild)
    }
    AddTools(content.window)
    newProject().Personal()
    const btnNewTask = document.querySelector(".NewTask")
    btnNewTask.addEventListener("click", () => {
        project.dialogTask.showModal();
    })
})


project.btnShopping.addEventListener("click", () => {
    while (content.window.firstChild) {
        content.window.removeChild(content.window.lastChild)
    }
    AddTools(content.window)
    newProject().Shopping()
    const btnNewTask = document.querySelector(".NewTask")
    btnNewTask.addEventListener("click", () => {
        project.dialogTask.showModal();
    })
    
})

project.btnSubmitProject.addEventListener("click", () => {
    while (content.window.firstChild) {
        content.window.removeChild(content.window.lastChild)
    }
    project.dialogProject.close()
    const newProjectName = document.querySelector("#project").value
    newProject().BlankProject(newProjectName)
    const btnNewTask = document.querySelector(".NewTask")
    btnNewTask.addEventListener("click", () => {
        project.dialogTask.showModal();
    })

    const newUserProject = {
        task: {}
    }
    Object.assign(projectList, newUserProject)
})

const customTask = {

}

project.btnSubmitTask.addEventListener("click", (event) => {
    const formResponses = {
        taskTitle: document.querySelector("#newTask").value,
        taskDesc: document.querySelector("#description").value,
        taskDate: document.querySelector("#date").value,
    }
    event.preventDefault()
    project.dialogTask.close()
    newProject().TaskMaker(formResponses.taskTitle, formResponses.taskDesc, formResponses.taskDate)
    const userTask = {
        name: formResponses.taskTitle,
        desc: formResponses.taskDesc,
        date: formResponses.taskDate,
    }

    Object.assign(customTask, userTask)
    Object.assign(projectList.task, customTask)  
    console.log(projectList)
})


