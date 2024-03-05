import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list=["All","Gaming","Songs","Live","Cricket","News","Music","Javascript"," Programming","Watched"]
  return (
    <div className='flex'>
{  list.map((name)=>{
    return <Button name={name}/>
  })
  }
     
    </div>
  )
}

export default ButtonList
