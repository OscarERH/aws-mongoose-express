const serverless = require("serverless-http")
const express = require("express")
const User = require("./models/User")
const app = express()
const connectToDatabase = require('./db')
const csv = require('fast-csv')

app.get('/users', async (req, res) => {
  try {
    await connectToDatabase()
    const fileName = 'data.csv'
    const transformer = (doc) => {
      return {
        name: doc.name,
        email: doc.email
      }
    }
    res.setHeader('Content-disposition', `attachment; filename=${fileName}`)
    res.writeHead(200, { 'Content-Type': 'text/csv' })
    res.flushHeaders()
    const csvStream = csv.format({ headers: true }).transform(transformer)
    User.find().cursor().pipe(csvStream).pipe(res)
  } catch (error) {
    throw error
  }
})

module.exports.handler = serverless(app)
