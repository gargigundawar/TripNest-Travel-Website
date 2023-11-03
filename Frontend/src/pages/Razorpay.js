import React from "react";


const Payment = () => {
    const loadScript = (src) => {

        return new Promise((resolve) => {
          const script = document.createElement('script')
          script.src = src
    
          script.onload = () => {
            resolve(true)
          }
    
          script.onerror =() => {
            resolve(false)
    
          }
    
          document.body.appendChild(script)
        })
    
      }
    
    
      const displayrazorpay = async () => {
    
        const res= await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    
        if (!res){
          alert('You are offline..')
          return
    
        }
    
    
      }


return(
    <div>
        <button onClick={()=>displayrazorpay()}>Pay Now</button>
        
    </div>
)
}
export default Payment;