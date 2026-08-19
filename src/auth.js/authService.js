import appWrite from "../conf/conf";
import { Client, Account, ID } from 'appwrite'

export class Authservice {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
            .setProject('<PROJECT_ID>');
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

    async currentState () {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Not logged in ")
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

export default authservice = new Authservice;