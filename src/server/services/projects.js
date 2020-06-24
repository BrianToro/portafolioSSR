const MongoLib = require('../libs/mongo');

class ProjectsService {
    constructor(){
        this.collection = 'proyectos';
        this.mongoDB = new MongoLib();
    }
    async getProjects( { tags } ){
        const query = tags && { tags:   { $in: tags } };
        const projects = this.mongoDB.getAll(this.collection, query);
        return projects || [];
    }

    async getProject({ projectId }){
        const project = this.mongoDB.get(this.collection, projectId);
        return project || {};
    }

    async createProject({ project }){
        const createdProjectId = this.mongoDB.create(this.collection, project);
        return createdProjectId;
    }

    async deleteProject({ projectId }){
        const deleteProjectId = this.mongoDB.delete(this.collection, projectId);
        return deleteProjectId;
    }

    async updateProject({ projectId, project }){
        const updateProjectId = this.mongoDB.update(this.collection, projectId, project);
        return updateProjectId;
    }
}

module.exports = ProjectsService;