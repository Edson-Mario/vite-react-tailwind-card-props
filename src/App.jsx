import {useState, useRef} from "react"
import {v4} from 'uuid' 
import Card from "./components/Card"
import Tittle from "./components/Tittle"


function App() {

  const object = [
    {
      id: v4(),
      introdution: 'I\'m fullstack developer, using Java and React and React Native.',
      name: 'Sara Sharaf',
      job: 'Software Developer, PrimeIT',
      picture: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },

    {
      id: v4(),
      introdution: 'I\'m Design, using Frigma.',
      name: 'Hitman Gift',
      job: 'Web Design , PrimeIT',
      picture: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: v4(),
      introdution: 'I\'m Doctor',
      name: 'Sara Sharaf',
      job: 'Doctor, Indiama',
      picture: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: v4(),
      introdution: 'I\'m fullstack developer, using Java and React and React Native.',
      name: 'Sara Sharaf',
      job: 'Software Developer, PrimeIT',
      picture: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  const [persons, setPersons] = useState([...object])

  let inputFullname = useRef()
  let inputCompany = useRef()
  let inputIntroducation = useRef()
  let inputPicture = useRef()

  function registerPerson() {
    const profissionAndCompay = inputProfission.current.value +', '+ inputCompany.current.value
    let picture = inputPicture.current.value
    if(picture.startsWith('https://')){
      setPersons(
        [{id: v4(), name: inputFullname.current.value, job: profissionAndCompay, introdution: inputIntroducation.current.value, picture: inputPicture.current.value}
          , ...persons]
      )
    }
    
  }
  return (
   <div className="max-lg:flex max-lg:flex-col max-lg:row-span-2 grid grid-cols-5 pb-2">
    <div className="col-span-5">
      <Tittle/>
    </div>
    <div className="max-lg:mt-10 max-lg:px-2  col-span-3 m-auto mt-4">
      <div 
        className="flex flex-col items-center w-full box-border max-h-card overflow-y-auto
        px-2 py-4 border-collaps shadow-sm shadow-gray-200"
      >
        {
          persons.map((person) => (
            <div key={person.id}>
              <Card introdution={person.introdution} name={person.name} job={person.job}  picture={person.picture}/>
            </div>  
                     
          ))
        } 
      </div>
      </div>
      <div className="max-lg:mt-10 max-lg:max-w-xl max-lg:px-2 col-span-2 m-auto w-full max-w-md mt-4">
      <div className="max-lg:max-w-xl w-full max-w-md flex flex-col gap-3.5 items-center  py-14 rounded-md shadow-md border px-2 mt-2"> 
        <div className="w-full max-w-80 flex flex-col justity-center gap-1.5">
            <input 
            className=" rounded-md outline-none py-1.5 px-3 border text-gray-500 text-sm placeholder:text-sm"
            type="text"
            placeholder="Full Name" ref={inputFullname}/>
        </div>
        <div className="w-full max-w-80 flex flex-col justity-center gap-1.5">
            <input 
            className=" rounded-md outline-none py-1.5 px-3 border text-gray-500 text-sm placeholder:text-sm"
            type="text"
            placeholder="Profission" ref={inputProfission}/>
        </div>
        <div className="w-full max-w-80 flex flex-col justity-center gap-1.5">
            <input 
            className=" rounded-md outline-none py-1.5 px-3 border text-gray-500 text-sm placeholder:text-sm"
            type="text"
            placeholder="Company" ref={inputCompany}/>
        </div>
        <div className="w-full max-w-80 flex flex-col justity-center gap-1.5">
            <input 
            className=" rounded-md outline-none py-1.5 px-3 border text-gray-500 text-sm placeholder:text-sm"
            type="text"
            placeholder="Copy here the lick of the picture" ref={inputPicture}/>
        </div>
        <div className="w-full max-w-80 flex flex-col justity-center gap-1.5">
            <textarea 
            placeholder="Introducation"
            className=" rounded-md outline-none py-1.5 px-3 border text-gray-500 text-sm placeholder:text-sm"
            name="" id="" cols="30" rows="4" ref={inputIntroducation}></textarea>
        </div>
        <div className="w-full max-w-80 flex flex-col justity-center gap-1.5">
          <button className="bg-gray-700  py-1.5 outline-none text-white rounded-md font-bold hover:bg-gray-800" onClick={registerPerson}>Finish</button>
        </div>
      </div>
      </div>     
   </div>   
  )
}


export default App
