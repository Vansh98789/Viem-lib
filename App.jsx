import {createPublicClient,http} from 'viem'
import {mainnet} from 'viem/chains'
// if we want to do some custom work like refress after some second then use tanstack library
const client=createPublicClient({
  chain:mainnet,
  transport:http(),
})
function App() {
  
async function handleClick(){
  const res=await client.getBalance({address:"0xe3F1cd0589a93170A8f7E42D3D946166eBb6CACA"});
  console.log(res);
}
  return(
    <div>
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  )
}

export default App
