'use strict'

// defines helper methods for server interaction with db
module.exports = function makeDbMethods(db) {
  return {

    saveUser: function(newUser, cb) {
      db.collection('users').insertOne(newUser, (err, results) => {
        if (error) throw error
        cb(/* TODO */)
      })
    },
    getUser: async (userID) => {
      try {
        // find user by ID in db
        let user = await db.collection('users').find({"_id": userID})
        console.log(user)
      } catch (error) {
        console.error(error)
        console.error('Could not find user in DB.')
      }
    },
    // saveStack: function(newStack, cb) {
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