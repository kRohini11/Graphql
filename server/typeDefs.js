import { gql } from "apollo-server-express";

export const typeDefs = gql`
scalar JSON
type Student{
       name:String
       uid:String
       pwd:String
       rollno:String
       gen:String
       hobbies:String
       country:String
       address:String
}
       
input StudentsInput{
    name:String
       uid:String
       pwd:String
       rollno:String
       gen:String
       hobbies:String
       country:String
       address:String

}
type Query{
    getStudentName:String
    getUsers:[Student]
}

type Mutation{
    regStudents(data:StudentsInput):JSON
}
`
