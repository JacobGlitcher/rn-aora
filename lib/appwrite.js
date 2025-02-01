import { Client, Account, ID } from 'react-native-appwrite'

const client = new Client()
const account = new Account(client)

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aora',
  projectId: '679e122400323c3c7025',
  databaseId: '679e153c00010d741065',
  userCollectionId: '679e158a00393ce74b6e',
  videoCollectionId: '679e15e40031d4e63c73',
  storageId: '679e17c60010acdc7f5d',
}

client.setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform)

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
      console.log(response)
    }, function (error) {
      console.log(error)
    })
}
