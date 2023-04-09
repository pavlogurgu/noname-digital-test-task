import data from '../auth/services/dataBackup.json'
import { nanoid } from 'nanoid'


export function Users() {

    const users = [data]

console.log(users)


  return  (
    <>
   {users.map((user) => <h2 key = {nanoid()}>{}</h2>)}
    </>
  )
}