import $axios from '@/shared/config/axios.config'
import { defineStore } from 'pinia'

import { onData, onItems } from '@/utils/store'

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [],
    }),
    actions: {
        replaceUsers(users, pageInfo) {
            this.users = users
            return { items: users, pageInfo }
        },
        replaceUser(user) {
            const index = this.users.findIndex((u) => u.userId === user.userId)
            if (index !== -1) {
                this.users[index] = user
            } else {
                this.users.push(user)
            }
            return user
        },
        // upsertUser(user) {
        //     this.users = upsert(this.users, user, 'userId')
        //     return user
        // },
        async getUsers(query) {
            return await $axios.get('users', { params: query }).then(onItems(this.replaceUsers))
        },
        async getUser(id) {
            return await $axios.get(`users/${id}`).then(onData(this.replaceUser))
        },
        async updateUser(user) {
            return await $axios.patch(`users/${user.userId}`, user).then(onData(this.replaceUser))
        },
    },
})
