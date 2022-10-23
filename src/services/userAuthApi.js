import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({ reducerPath: 'userAuthApi', baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }), endpoints: (builder) => ({
    registerUser: builder.mutation({ //mutation means modify state or create update its writeable 
      query: (users) => {
        return {
          url: 'register/',
          method: 'POST',
          body: users,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: 'login/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    
    //data lena hai is liye query ka use.
    getLoggedUser: builder.query({  
      query: (access_token) => {
        return {
          url: 'profile/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),

        //data lena hai is liye query ka use.
        // getAllUserData: builder.query({  
        //   query: (access_token) => {
        //     return {
        //       url: 'profile/',
        //       method: 'GET',
        //       headers: {
        //         'authorization': `Bearer ${access_token}`,
        //       }
        //     }
        //   }
        // }),

        //data lena hai is liye query ka use.
        updateProfileData: builder.mutation({  
          query: ({updateData, id}) => {
            return {
              url: `/update-profile/${id}/`,
              method: 'PUT',
              body: updateData,
              headers:{'Content-type':'application/json'}
            }
          }
        }),

        //data lena hai is liye query ka use.
        updateTableData: builder.mutation({  
          query: ({selectedData, id}) => {
            return {
              url: `/update-table/${id}/`,
              method: 'PUT',
              body: selectedData,
              headers:{'Content-type':'application/json'}
            }
          }
        }),

        userDeleteRow: builder.mutation({  
          query: (id) => {
            return {
              url: '/delete-row/',
              method: 'DELETE',
              body: id,
              headers:{'Content-type':'application/json'}
            }
          }
        }),




    changeUserPassword: builder.mutation({
      query: ({ actualData, access_token }) => {
        return {
          url: 'changepassword/',
          method: 'POST',
          body: actualData,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),

    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: 'send-reset-password-email/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `/reset-password/${id}/${token}/`,
          method: 'POST',
          body: actualData,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
  }),
 
})
//, useChangeUserPasswordMutation, useSendPasswordResetEmailMutation,useResetPasswordMutation
export const { useRegisterUserMutation, useLoginUserMutation, 
  useGetLoggedUserQuery, useChangeUserPasswordMutation, useResetPasswordMutation, useSendPasswordResetEmailMutation, useUpdateProfileDataMutation, useUpdateTableDataMutation, useUserDeleteRowMutation} = userAuthApi
//this Hooks are created automaticaly 