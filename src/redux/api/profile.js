import { api } from "./index";

const profileApi=api.injectEndpoints({
    endpoints:(build)=>({
        getProfile: build.query({
            query: () => ({
                url:"/auth/profile",  
            }),
        }),
        getUsers: build.query({
            query:() => ({
                url:"/admin/registered-users",
            }),
            providesTags: ["USERS"]
        }),
        deleteUsers: build.mutation({
            query:({id}) => ({
                url: `/admin/delete-user/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["USERS"]
        }),
        promoteUsers: build.mutation({
            query:({id}) => ({
                url: `/admin/add-admin/${id}`,
                method: "POST"
            }),
            invalidatesTags: ["USERS"]
        })
    })
})
export const { useGetProfileQuery, useGetUsersQuery, useDeleteUsersMutation }=profileApi