
import getDB from "./getDB.js";

export const resolvers = {
    Query: {
        getStudentName: () => {
            const name = "Rohini"
            return name;

        },
        getUsers: async () => {
            try {
                const db = await getDB();
                const collection = db.collection("students");
                const res = await collection.find({}).toArray();
                return res;
            }
            catch (e) {

            }
            finally {

            }
        }
    },

    Mutation: {
        regStudents: async (a, input) => {
            try {
                const db = await getDB();
                const collection = db.collection("students");
                const res = await collection.insertOne(input?.data)
                return res;
            }
            catch (e) {

            }
            finally {

            }
        }
    }
}