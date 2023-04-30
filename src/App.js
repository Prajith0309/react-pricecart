
import './App.css';
import Pricecard from './components/Pricecard';
function App(){
  let data = [
  {
    product:"FREE",
    price:"0",
    user:"Single User",
    userEnabler:true,
    userBold:false,
    storage:"5GB Storage",
    storageEnabler:true,
    publicprojects:"Unlimited Public Projects",
    publicprojectsEnabler:true,
    community:"Community Access",
    communityEnabler:true,
    privateprojects:"Unlimited Private Projects",
    privateprojectsEnabler:false,
    support:"Unlimited Phone Support",
    supportEnabler:false,
    subdomain:"Free Subdomain",
    subdomainEnabler:false,
    subdomainBold:false,
    reports:"Monthly Status Reports",
    reportsEnabler:false
  },
  {
    product:"PLUS",
    price:"9",
    user:"5 User",
    userEnabler:true,
    userBold:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicprojects:"Unlimited Public Projects",
    publicprojectsEnabler:true,
    community:"Community Access",
    communityEnabler:true,
    privateprojects:"Unlimited Private Projects",
    privateprojectsEnabler:true,
    support:"Unlimited Phone Support",
    supportEnabler:true,
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    subdomainBold:false,
    reports:"Monthly Status Reports",
    reportsEnabler:false
  },
  {
    product:"PRO",
    price:"49",
    user:"Unlimited User",
    userEnabler:true,
    userBold:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicprojects:"Unlimited Public Projects",
    publicprojectsEnabler:true,
    community:"Community Access",
    communityEnabler:true,
    privateprojects:"Unlimited Private Projects",
    privateprojectsEnabler:true,
    support:"Unlimited Phone Support",
    supportEnabler:true,
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    subdomainBold:true,
    reports:"Monthly Status Reports",
    reportsEnabler:true
  }
]
  return (
    <>
    <section class="pricing py-5">
    <div class="container">
    <div class="row">
    {
      data.map((e)=>{
         return <Pricecard val={e}/>
      })
    }
    </div>
    </div>
    </section>
    </>
  );
}

export default App;
