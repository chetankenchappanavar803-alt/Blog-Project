import appWrite from "../conf/conf";
import { Client, Account, ID, AppwriteException } from 'appwrite'

export class Authservice {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(appWrite.appWriteurl)
            .setProject(appWrite.appWriteprojectId);
        const account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        const account = Account(client)
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                return this.Login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            return error
        }
    }

    async Login ({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async currentState (userId) {
        try {
            return await this.account.get(userId)
        } catch (error) {
            alert("Not logged in ")
        }

        return null
    }

    async removeAccount () {
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            throw error
        }
    }
}

const authservice = new Authservice();
export default authservice;