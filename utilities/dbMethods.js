'use strict'

// defines helper methods for server interaction with db
module.exports = function makeDbMethods(db) {
  return {

    saveUser: async (newUser) => {
      try {
        db.collection('users').insertOne(newUser)
      } catch (error) {
        return error
      }
    },
    getUser: async (userID) => {
      try {
        let user = await db.collection('users').find({_id: userID}).toArray()
        return user
      } catch (error) {
        return error
      }
    },
    // createStack: function(newStack, cb) {
    //   db.collection('stacks').insertOne(newStack, (err,results) => {
    //     if (error) throw error
    //     cb(/* TODO */)
    //   })
    // },
    // deleteStack: function(stackId) {
    //   await db.collection('stacks').deleteOne({id: stackID}, (err, results) => {
    //     if (error) throw error
    //     cb(/* TODO */)
    //   })
    // },
    // getStack: function(stackId, cb) {
    //   // #TODO
    // },
  }
}