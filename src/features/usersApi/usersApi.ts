 import { Users } from "../../models/Users.model";
import { Delete } from "../../models/deleteUser.model";
import { Update } from "../../models/updteUser.model";
import { apiSlice } from "../apiSlice/apiSlice";

 const usersApi=apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<Users[] , number >({
            query: (page) => ({
       
              url: `/users?page=${page}&per_page=7`,
            }),
            
          }),
        updateUserById: builder.mutation<Update[] , number >({
            query: (id) => ({  
              url:`/users/${id}`,
              method:"PUT",
            }),
            
          }),
        deleteUserById: builder.mutation<Delete , number >({
            query: (id) => ({  
              url:`users/${id}`,
              method:"DELETE",  
            }),
            
          }),
      
        })
 })

 export const { useGetUsersQuery,useUpdateUserByIdMutation,useDeleteUserByIdMutation } = usersApi;