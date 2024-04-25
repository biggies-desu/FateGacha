import { useState , useEffect} from 'react'
import axios from 'axios';

var servantdata = []

const ServantDataAttribute = [
    "Servent_ID",
    "Servant_Name",
    "Servent_JPName",
    "Servent_AKA",
    "Rarity",
    "Servent_Summon",
    "Servent_Class",
    "Servent_Cost",
    "ATKLevel1",
    "ATKMaxLevel",
    "HPLevel1",
    "HPMaxLevel",
    "ATKLevel100",
    "HPLevel100",
    "ATKLevel120",
    "HPLevel120",
    "Servent_Attribute",
    "StarAbsorption",
    "StarGeneration",
    "NPChargeATK",
    "NPChargeDEF",
    "DeathRate",
    "Servent_Alignments",
    "ServentGender",
    "ServentTraits",
    "QuickHits",
    "ArtsHits",
    "BusterHits",
    "ExtraHits",
    "NPDamageType",
    "NPRank",
    "NPClassification",
    "NPHit_Count"];


function Servant_Database() {
  useEffect(() => {
    //ข้างใน
    console.log('Summon button click')

    let endpoints = [
      'http://localhost:8081/fate_servant_data'
  ]

  const request = endpoints.map((url) => axios.get(url))
    axios.all(request).then((response) => {
        // console.log(response);
        // console.log(response[0]);
        // console.log(response[1]);
        // console.log(response[2]);
        // console.log(response[3]);
        response.forEach(wholedata => {
            servantdata.push(wholedata)
        });
      }
    )

    console.log(servantdata)


    for(var i = 0; i < ServantDataAttribute.length; i++) {
      //ข่อยขี้เกียจละ
    }
    

  return () => {
    console.log('Component unmounted');
    
  };
}, []);


  return (
    <div className='flex justify-center items-center w-screen pt-8'>
      <div>
          <p id='dataTable'></p>
          <div>
          
          </div>
      </div>
    </div>
  )
}

export default Servant_Database