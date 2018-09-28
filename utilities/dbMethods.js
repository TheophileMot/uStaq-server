'use strict'

// defines helper methods for server interaction with db
module.exports = function makeDbMethods(db) {
  return {

    // USER METHODS
    saveUser: async (newUser) => {
      try {
        await db.collection('users').insertOne(newUser)
      } catch (error) {
        return error
      }
    },
    getUser: async (userId) => {
      try {
        let user = await db.collection('users').find({_id: userId}).toArray()
        return user
      } catch (error) {
        return error
      }
    },

    // STACK METHODS
    saveStack: async (newStack) => {
      try {
        await db.collection('stacks').insertOne(newStack)
      } catch (error) {
        return error
      }
    },
    getStackById: async (stackId) => {
      try {
        let stack = await db.collection('users').find({_id: stackId}).toArray()
        return stack
      } catch (error) {
        return error
      }
    },
    getAllStacks: async (userId) => {
      try {
        let stacks = await db.collection('users').find({ owner: { _id: userId } }).toArray()
        // let stacks = await db.collection('users').find().toArray()        
        return stacks
      } catch (error) {
        return error
      }
    },
  }
}