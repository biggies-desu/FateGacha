import React, { useEffect } from 'react'
import axios from 'axios';

//call data from databasedc

var friendgachadata = [] //for whole data array idk
var friendgachadatarate = []

function Summon()
{
    //console.log(friendgachadatarate)
    //random stuff
    var totalWeight = friendgachadatarate.reduce((acc, obj) => acc + obj.weight, 0);
    //console.log(totalWeight)
    var random = Math.random() * totalWeight;
    var weightSum = 0;
    var summon_result
    for (var i = 0; i < friendgachadatarate.length; i++) {
        weightSum += friendgachadatarate[i].weight;
        if (random <= weightSum) {
            summon_result = i;
            break;
        }
    }
    console.log(summon_result)
    console.log(friendgachadatarate[summon_result])
}

function Summon10()
{
    let friendgachax10 = []
    for(let roll = 0;roll<10;roll++){
    //console.log(friendgachadatarate)
    //random stuff
    var totalWeight = friendgachadatarate.reduce((acc, obj) => acc + obj.weight, 0);
    //console.log(totalWeight)
    var random = Math.random() * totalWeight;
    var weightSum = 0;
    var summon_result
    for (var i = 0; i < friendgachadatarate.length; i++) {
        weightSum += friendgachadatarate[i].weight;
        if (random <= weightSum) {
            summon_result = i;
            break;
        }
    }
    friendgachax10.push(friendgachadatarate[summon_result])
    }
    console.log(friendgachax10)
    
}

function Friendgacha() {

    useEffect(() => {
    // 👇️ only runs once

    console.log('Summon button click')

    //endpoint of api require for friend gacha

    let endpoints = [
        'http://localhost:8081/ce_friend',
        'http://localhost:8081/servant_friend',
        'http://localhost:8081/exp_friendpoint',
        'http://localhost:8081/command_friendpoint',
        'http://localhost:8081/fou'
    ]

    const request = endpoints.map((url) => axios.get(url))
    axios.all(request).then((response) => {
        // console.log(response);
        // console.log(response[0]);
        // console.log(response[1]);
        // console.log(response[2]);
        // console.log(response[3]);

        response.forEach(wholedata => {
            friendgachadata.push(wholedata)
        });

        //trying to get fetch data into array
        for(let i=0;i<5;i++)
        {
            //console.log(friendgachadata[i].data)
            for(let j = 0;j<friendgachadata[i].data.length;j++)
            {
                //console.log(friendgachadata[i].data[j])
                //apply default weighting into simulate
                if(i==0)
                {
                    let item = friendgachadata[i].data[j]
                    item.weight = 0 // default weight
                    item.type = 'CE'
                    friendgachadatarate.push(friendgachadata[i].data[j])
                }
                else if(i==1)
                {
                    let item = friendgachadata[i].data[j]
                    item.weight = 0 // default weight
                    item.type = 'Servant'
                    friendgachadatarate.push(friendgachadata[i].data[j])
                }
                else if(i==2)
                {
                    let item = friendgachadata[i].data[j]
                    item.weight = 0 // default weight
                    item.type = 'EXP'
                    friendgachadatarate.push(friendgachadata[i].data[j])
                }
                else if(i==3)
                {
                    let item = friendgachadata[i].data[j]
                    item.weight = 0 // default weight
                    item.type = 'Command'
                    friendgachadatarate.push(friendgachadata[i].data[j])
                }
                else if(i==4)
                {
                    let item = friendgachadata[i].data[j]
                    item.weight = 0 // default weight
                    item.type = 'Fou'
                    friendgachadatarate.push(friendgachadata[i].data[j])
                }
            }
        }
        //some rate part (for example 2-star servant have more than one item so the odd should be 2star-servant rate / all 2star-servant item)
        //counting item

        var count_1starservant = 0, count_2starservant = 0, count_3starservant = 0, count_4starservant = 0
        for(let i = 0 ; i<friendgachadatarate.length;i++)
        {
            if(friendgachadatarate[i].type === 'Servant' && friendgachadatarate[i].Rarity === '1-Star')
            {
                count_1starservant += 1
            }
            else if(friendgachadatarate[i].type === 'Servant' && friendgachadatarate[i].Rarity === '2-Star')
            {
                count_2starservant += 1
            }
            else if(friendgachadatarate[i].type === 'Servant' && friendgachadatarate[i].Rarity === '3-Star')
            {
                count_3starservant += 1
            }
            else if(friendgachadatarate[i].type === 'Servant' && friendgachadatarate[i].Rarity === '4-Star')
            {
                count_4starservant += 1
            }
        }

        var count_1starCE = 0, count_2starCE = 0, count_3starCE = 0
        for(let i = 0 ; i<friendgachadatarate.length;i++)
        {
            if(friendgachadatarate[i].type === 'CE' && friendgachadatarate[i].Rarity === '1-Star')
            {
                count_1starCE += 1
            }
            else if(friendgachadatarate[i].type === 'CE' && friendgachadatarate[i].Rarity === '2-Star')
            {
                count_2starCE += 1
            }
            else if(friendgachadatarate[i].type === 'CE' && friendgachadatarate[i].Rarity === '3-Star')
            {
                count_3starCE += 1
            }
        }

        var count_1starcommand = 0, count_2starcommand = 0
        for(let i = 0 ; i<friendgachadatarate.length;i++)
        {
            if(friendgachadatarate[i].type === 'Command' && friendgachadatarate[i].Rarity === '1-Star')
            {
                count_1starcommand += 1
            }
            else if(friendgachadatarate[i].type === 'Command' && friendgachadatarate[i].Rarity === '2-Star')
            {
                count_2starcommand += 1
            }
        }

        var count_1starexp = 0, count_2starexp = 0, count_3starexp = 0, count_4starexp = 0, count_5starexp = 0
        for(let i = 0 ; i<friendgachadatarate.length;i++)
        {
            if(friendgachadatarate[i].type === 'EXP' && friendgachadatarate[i].Rarity === '1-Star')
            {
                count_1starexp += 1
            }
            else if(friendgachadatarate[i].type === 'EXP' && friendgachadatarate[i].Rarity === '2-Star')
            {
                count_2starexp += 1
            }
            else if(friendgachadatarate[i].type === 'EXP' && friendgachadatarate[i].Rarity === '3-Star')
            {
                count_3starexp += 1
            }
            else if(friendgachadatarate[i].type === 'EXP' && friendgachadatarate[i].Rarity === '4-Star')
            {
                count_4starexp += 1
            }
            else if(friendgachadatarate[i].type === 'EXP' && friendgachadatarate[i].Rarity === '5-Star')
            {
                count_5starexp += 1
            }
        }

        var count_1starfou = 0, count_2starfou = 0, count_3starfou = 0, count_4starfou = 0
        for(let i = 0 ; i<friendgachadatarate.length;i++)
        {
            if(friendgachadatarate[i].type === 'Fou' && friendgachadatarate[i].Rarity === '1-Star')
            {
                count_1starfou += 1
            }
            else if(friendgachadatarate[i].type === 'Fou' && friendgachadatarate[i].Rarity === '2-Star')
            {
                count_2starfou += 1
            }
            else if(friendgachadatarate[i].type === 'Fou' && friendgachadatarate[i].Rarity === '3-Star')
            {
                count_3starfou += 1
            }
            else if(friendgachadatarate[i].type === 'Fou' && friendgachadatarate[i].Rarity === '4-Star')
            {
                count_4starfou += 1
            }
        }

        //apply weight i
        for(let i = 0 ; i<friendgachadatarate.length;i++) //182
        {
            //servant part
            if(friendgachadatarate[i].Servant_Name === 'Angra Mainyu')
            {
                friendgachadatarate[i].weight = 0.0001 //0.01%
            }
            else if(friendgachadatarate[i].type === 'Servant' && friendgachadatarate[i].Rarity === '1-Star')
            {
                friendgachadatarate[i].weight = 0.0989/count_1starservant
            }
            else if(friendgachadatarate[i].type === 'Servant' && friendgachadatarate[i].Rarity === '2-Star')
            {
                friendgachadatarate[i].weight = 0.0505/count_2starservant
            }
            else if(friendgachadatarate[i].type === 'Servant' && friendgachadatarate[i].Rarity === '3-Star')
            {
                friendgachadatarate[i].weight = 0.0105/count_3starservant
            }
            else if(friendgachadatarate[i].type === 'Servant' && friendgachadatarate[i].Rarity === '4-Star')
            {
                friendgachadatarate[i].weight = 0.001/count_4starservant
            }


            else if(friendgachadatarate[i].type === 'CE' && friendgachadatarate[i].Rarity === '1-Star')
            {
                friendgachadatarate[i].weight = 0.2902/count_1starCE
            }
            else if(friendgachadatarate[i].type === 'CE' && friendgachadatarate[i].Rarity === '2-Star')
            {
                friendgachadatarate[i].weight = 0.1652/count_2starCE
            }
            else if(friendgachadatarate[i].type === 'CE' && friendgachadatarate[i].Rarity === '3-Star')
            {
                friendgachadatarate[i].weight = 0.0493/count_3starCE
            }



            else if(friendgachadatarate[i].type === 'EXP' && friendgachadatarate[i].Rarity === '1-Star')
            {
                friendgachadatarate[i].weight = 0.0885/count_1starexp
            }
            else if(friendgachadatarate[i].type === 'EXP' && friendgachadatarate[i].Rarity === '2-Star')
            {
                friendgachadatarate[i].weight = 0.0701/count_2starexp
            }
            else if(friendgachadatarate[i].type === 'EXP' && friendgachadatarate[i].Rarity === '3-Star')
            {
                friendgachadatarate[i].weight = 0.0505/count_3starexp
            }
            else if(friendgachadatarate[i].type === 'EXP' && friendgachadatarate[i].Rarity === '4-Star')
            {
                friendgachadatarate[i].weight = 0.0294/count_4starexp
            }
            else if(friendgachadatarate[i].type === 'EXP' && friendgachadatarate[i].Rarity === '5-Star')
            {
                friendgachadatarate[i].weight = 0.0099/count_5starexp
            }


            else if(friendgachadatarate[i].type === 'Command' && friendgachadatarate[i].Rarity === '1-Star')
            {
                friendgachadatarate[i].weight = 0.0112/count_1starcommand //i increase this so i closer to 1
            }
            else if(friendgachadatarate[i].type === 'Command' && friendgachadatarate[i].Rarity === '2-Star')
            {
                friendgachadatarate[i].weight = 0.005/count_2starcommand
            }


            else if(friendgachadatarate[i].type === 'Fou' && friendgachadatarate[i].Rarity === '1-Star')
            {
                friendgachadatarate[i].weight = 0.04/count_1starfou
            }
            else if(friendgachadatarate[i].type === 'Fou' && friendgachadatarate[i].Rarity === '2-Star')
            {
                friendgachadatarate[i].weight = 0.0199/count_1starfou
            }
            else if(friendgachadatarate[i].type === 'Fou' && friendgachadatarate[i].Rarity === '3-Star')
            {
                friendgachadatarate[i].weight = 0.0098/count_1starfou
            }
        }
      })

      .catch((error) => {
        // handle errors
        console.log(error)
      });

      return () => {
        console.log('Component unmounted');
        // You can perform any cleanup here
      };
    }, []); // 👈️ empty dependencies array
    return (
        <div class = 'center'><h2>Frined?</h2>
        <button onClick={Summon} class = 'CENTER'>
            summon 1x
        </button>
        <button onClick={Summon10} class = 'CENTER'>
            summon 10x
        </button>
        <h1 id="Summon_Result"></h1>
    </div>
    )
}

export default Friendgacha