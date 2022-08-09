import { defineStore } from 'pinia'
import { set, get } from '@/util/localStore'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      id: null,
      headerPic:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      name: ''
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setUserInfo(userInfo: any) {
      this.id = userInfo.id
      this.name = userInfo.nickname
    },
    chooseUser(vid: string) {
      if (vid === this.id) {
        return {
          headerPic: this.headerPic,
          self: true
        }
      } else {
        const friends = useFrindsStore()
        const info = friends.findFriends(vid)

        if (info) {
          return {
            self: false,
            headerPic: info.headerPic
          }
        } else {
          return undefined
        }
      }
    }
  }
})

export const useFrindsStore = defineStore('friends', {
  state: () => {
    return {
      friends: (get('friends') as any) || <any>[]
    }
  },
  actions: {
    setFriends(friends: any[]) {
      this.friends = friends
    },
    findFriends(id: string) {
      // console.log(id)
      // console.log(this.friends, '朋友')

      return this.friends.find(
        (friend: { friendId: string }) => friend.friendId == id
      )
    }
  }
})

export const useMessageStore = defineStore('message', {
  state: () => {
    return {
      messages: JSON.parse(localStorage.getItem('newMessage') as string) || []
    }
  },
  getters: {
    findId(state) {
      // console.log(state.messages)

      return (id: any) => {
        return state.messages.findIndex((v: any) => v.sendId === id) > 0
      }
    }
  },
  actions: {
    setMessages(message: any) {
      this.messages.push(message)
    },
    deleteMessages(id: string) {
      if (this.messages.length === 0) {
        return
      }
      this.messages = this.messages.filter((v: any) => id != v.sendId)
      set('newMessage', this.messages)
    }
  }
})
