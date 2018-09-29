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
    saveStack: async (newStack, userId) => {
      try {
        await db.collection('stacks').insertOne(newStack, async function(err, docs) {
          let docId = docs.insertedId
          await db.collection('users').update({ _id: userId }, { $push: { owned: docId }})
        })
      } catch (error) {
        return error
      }
    },
    getStackById: async (stackId) => {
      try {
        let stack = await db.collection('stacks').find({_id: stackId}).toArray()
        return stack
      } catch (error) {
        return error
      }
    },
    getAllStacks: async (userId) => {
      try {
        let stacks = await db.collection('stacks').find({ owner: { _id: userId } }).toArray()
        return stacks
      } catch (error) {
        return error
      }
    },
  }
}