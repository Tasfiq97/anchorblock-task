 import { Users } from "../models/Users.model";
import { apiSlice } from "./apiSlice/apiSlice";

 const usersApi=apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<Users[] ,void>({
            query: () => ({
              url: "/users?page=2",
            }),
            
          }),
        })
 })

 export const { useGetUsersQuery } = usersApi;