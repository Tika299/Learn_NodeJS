const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
      serverSelectionTimeoutMS: 5000, // Thử chọn server trong 5s
      socketTimeoutMS: 45000, // Socket timeout 45s
      connectTimeoutMS: 10000, // Connect timeout 10s
    })
    console.log('Database connection successful')
  } catch (error) {
    console.error('Database connection error:', error.message || error)
    throw error // Ném lỗi để catch ở trên
  }
}

module.exports = { connect }
