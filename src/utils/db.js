const { username, password } = process.env;

export const connectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.xwbgiyg.mongodb.net/UserData?retryWrites=true&w=majority&appName=Cluster0";