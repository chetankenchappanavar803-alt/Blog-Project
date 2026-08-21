const appWrite = {
    appWriteurl : String(import.meta.env.VITE_APPWRITE_URL),
    appWriteprojectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWritedatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWritectablesid : String(import.meta.env.VITE_APPWRITE_TABLES_ID),
    appWriteBucketid : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default appWrite; 