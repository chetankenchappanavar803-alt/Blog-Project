import { use } from "react";
import appWrite from "../conf/conf";
import { Client, Databases, Storage, ID, Query, TablesDB } from "appwrite";


export class Services {
    client = new Client()
    tablesdb;
    storage;
    constructor() {
        this.clent
            .setEndpoint(appWrite.appWriteurl)
            .setProject(appWrite.appWriteprojectId);
        this.tablesdb = TablesDB(this.client);
        this.storage = Storage(this.client)
    }

    async CreateRow({ title, slug, content, status, featuredImage, userId }) {
        try {
            return await this.tablesdb.CreateRow(appWrite.appWritedatabaseId, appWrite.appWritectablesid, slug, { title, slug, content, status, featuredImage, userId })
        } catch (error) {
            throw error;
        }
    }

    async DeleteRow(slug) {
        try {
            await this.tablesdb.DeleteRow(slug)
            return true
        } catch (error) {
            throw error

            return false
        }
    }

    async UpdateRows(slug, { title, content, status, featuredImage, userId }) {
        try {
            return await this.tablesdb.UpdateRows(appWrite.appWritedatabaseId, appWrite.appWritectablesid, slug, { title, content, status, featuredImage, userId })
        } catch (error) {
            throw error;
        }
    }

    async  GetRow(slug) {
        try {
            return await this.tablesdb.GetRow(appWrite.appWritedatabaseId,appWrite.appWritectablesid,slug)
            return true 
        } catch (error) {
            throw error;
            return false
        }
        
    }

    async ListRows(queries = [Query.equal("status","active")]) {
        try {
            return await this.tablesdb.ListRows(appWrite.appWritedatabaseId,appWrite.appWritectablesid,queries)
            return true
        } catch (error) {
            throw error;
            return false
        }
    }

    // uploadFiles

    async uploadfiles (file) {
        try {
            return await this.storage.createFile(appWrite.appWriteBucketid,ID.unique(),file)
            return true
        } catch (error) {
            throw error;
            return false
        }
    }

    async deleteFiles (fileId) {
        try {
            await this.storage.deleteFiles(appWrite.appWriteBucketid,fileId)
            return true
        } catch (error) {
            throw error;
            return false
        }
    }

    async filePreview (fileId) {
        try {
            return await this.storage.getFilePreview(appWrite.appWriteBucketid,fileId)
        } catch (error) {
            throw error;
        }
    }
}