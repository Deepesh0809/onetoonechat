const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Deepesh0809:Deepesh0809@deepesh0809.drqy4kd.mongodb.net/onetoonechat?retryWrites=true&w=majority&appName=Deepesh0809').then(() => {
    console.log('Connected to MongoDB-Atlas...');
})