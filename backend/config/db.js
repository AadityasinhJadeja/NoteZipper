const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://aadityasinh:aadityasinh@cluster0.pdqgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(
//       // "mongodb+srv://aadityasinh:aadityasinh@cluster0.pdqgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//       process.env.MONGO_URI,
//       {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//         //   useFindAndModify: true,
//       }
//     );

//     console.log(`MongoDB Connected: ${conn.connection.host} `);
//   } catch (error) {
//     console.log(`Error: ${error.message}`);
//     process.exit();
//   }
// };

// module.exports = connectDB;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       //   useFindAndModify: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host} `);
//   } catch (error) {
//     console.log(`Error: ${error.message}`);
//     process.exit();
//   }
// };

// module.exports = connectDB;

// const mongoose = require("mongoose");

// require('dotenv').config({ path: 'ENV_FILENAME' });

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     });
//     console.log(`MongoDB Conected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit();
//   }
// };

// module.exports = connectDB;
