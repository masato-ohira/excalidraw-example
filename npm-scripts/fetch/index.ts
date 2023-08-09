import axios from 'axios'

const main = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log({ data })
}

main()
