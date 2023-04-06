import config from '@src/config'
import mongoose, { ConnectOptions } from 'mongoose'

export default async () => {
  const connection = await mongoose
    .connect(config.MONGO_URI, {
      useNewUrlParser: true,
    } as ConnectOptions)
    .catch(err => console.log(err))
  // return connection.connection.db;
}
