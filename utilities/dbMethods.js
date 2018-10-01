'use strict'
const { ObjectId } = require('mongodb')

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
        let dbStackId = new ObjectId(stackId)
        let stack = await db.collection('stacks').find({ _id: dbStackId }).toArray()
        return stack
      } catch (error) {
        return error
      }
    },
    getUserStacks: async (userId) => {
      try {
        let stacks = await db.collection('stacks').find({ owner: { _id: userId } }).toArray()
        return stacks
      } catch (error) {
        return error
      }
    },
    getAllStacks: async () => {
      try {
        let stacks = await db.collection('stacks').find().toArray()
        return stacks
      } catch (error) {
        return error
      }
    },
    deleteStack: async (stackId) => {
      try {
        let dbStackId = new ObjectId(stackId)
        await db.collection('stacks').deleteOne({_id: dbStackId})
      } catch (error) {
        return error
      }
    },
  }
}
