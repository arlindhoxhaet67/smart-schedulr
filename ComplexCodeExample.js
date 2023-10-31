/* 
File Name: ComplexCodeExample.js

This code demonstrates a complex implementation of a task management system.
It includes various classes such as Task, User, and Project.
The code also showcases implementation of inheritance, closures, and asynchronous functions.

Note: The code provided is just an example and may not be fully functional or error-free.

*/

// Parent class - Task
class Task {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
    console.log(`Task ${this.id} marked as completed.`);
  }
}

// Child class - User
class User extends Task {
  constructor(id, name, email) {
    super(id, name);
    this.email = email;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(`Task ${task.id} added to user ${this.name}.`);
  }
}

// Child class - Project
class Project extends Task {
  constructor(id, name, deadline) {
    super(id, name);
    this.deadline = deadline;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(`Task ${task.id} added to project ${this.name}.`);
  }
}

// Creating instances of User and Project classes
const user1 = new User(1, "John", "john@example.com");
const user2 = new User(2, "Jane", "jane@example.com");

const project1 = new Project(1, "Project X", "2022-01-31");
const project2 = new Project(2, "Project Y", "2022-02-28");

// Adding tasks to users and projects
const task1 = new Task(1, "Task 1");
const task2 = new Task(2, "Task 2");
const task3 = new Task(3, "Task 3");

user1.addTask(task1);
user1.addTask(task2);
user2.addTask(task3);

project1.addTask(task1);
project1.addTask(task3);
project2.addTask(task2);

// Closing tasks asynchronously
async function closeTasks() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
  task1.markAsCompleted();
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
  task3.markAsCompleted();
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
  task2.markAsCompleted();
}

// Closing tasks
closeTasks();