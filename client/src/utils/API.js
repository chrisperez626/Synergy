import axios from "axios";

export default {
  getCurrentUser: function(){
    return axios.get("/auth/getUser");
  },
  
  signUp: (newUser) => {
    return axios.post("/auth/signup", newUser)
  },

  login: (user) => {
    return axios.post("/auth/login", user)
  },

  logout: () => {
    return axios.get("/auth/logout");
  },
  getAllProject: function(){
    return axios.get("/api/projects");
  },
  saveProject: function(projectData){
    console.log("SaveProject called");
    return axios.post("/api/projects",projectData);
  },
  getProject: function(id){
    return axios.get("/api/projects/"+id);
  },
  updateProject: function(id, projectData){
    return axios.post("/api/projects/"+id, projectData);
  },
  deleteProject: function(id){
    return axios.delete("/api/projects/"+id);
  },
  getAllTask: function(){
    return axios.get("/api/tasks");
  },
  getUserTask: function(id){
    return axios.get("api/usertasks/"+id);
  },
  saveTask: function(taskData){
    return axios.post("/api/tasks",taskData);
  },
  getTask: function(id){
    return axios.get("/api/tasks/"+id);
  },
  updateTask:function(id,taskData){
    return axios.post("/api/tasks/"+id, taskData);
  },
  deleteTask: function(id){
    return axios.delete("/api/tasks/"+id);
  }
}