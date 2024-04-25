import { useState , useEffect} from 'react'
import axios from 'axios';

var storygachadata = [] //for whole data array idk
var storygachadatarate = []
var log = []
var log_count = 0
var last_result = 0
var textsummon1 = ''
var textsummon10 = ''



function Summon()
{
    //console.log(friendgachadatarate)
    //random stuff
    var totalWeight = storygachadatarate.reduce((acc, obj) => acc + obj.weight, 0);
    //console.log(totalWeight)
    var random = Math.random() * totalWeight;
    var weightSum = 0;
    var summon_result
    for (var i = 0; i < storygachadatarate.length; i++) {
        weightSum += storygachadatarate[i].weight;
        if (random <= weightSum) {
            summon_result = i;
            break;
        }
    }
    //console.log(summon_result)
    console.log(storygachadatarate[summon_result])
    log.push(storygachadatarate[summon_result])
    log_count++
    last_result = summon_result
    const filterattribute = getfilterdata(storygachadatarate[summon_result]);
    //console.log(filterattribute.Name,filterattribute.Rarity,filterattribute.Type)
    
    let rarityText = filterattribute.Rarity.replace(/(\d+)-Star/g, (match, p1) => {
      let stars = "⭐️".repeat(parseInt(p1));
      return stars;
  });

  textsummon1 = "You got "+filterattribute.Name+" "+rarityText+" ("+filterattribute.Type+")"

    document.getElementById("summon1result").innerHTML = textsummon1
}
function getfilterdata(item)
{
    // there are only 2 thing possible to drop, nither CE, or Servant

    switch (item.type){
        case "CE":
            return {
                Name: item.CE_Name,
                Rarity: item.Rarity,
                Type: item.type
            }
        case "Servant":
            return {
                Name: item.Servant_Name,
                Rarity: item.Rarity,
                Type: item.type
            }
      }
}

function Summon10()
{
    let storygachax10 = []
    for(let roll = 0;roll<11;roll++){
    //console.log(friendgachadatarate)
    //random stuff
    var totalWeight = storygachadatarate.reduce((acc, obj) => acc + obj.weight, 0);
    //console.log(totalWeight)
    var random = Math.random() * totalWeight;
    var weightSum = 0;
    var summon_result
    for (var i = 0; i < storygachadatarate.length; i++) {
        weightSum += storygachadatarate[i].weight;
        if (random <= weightSum) {
            summon_result = i;
            break;
        }
      }
    storygachax10.push(storygachadatarate[summon_result])
    console.log(storygachadatarate[summon_result])
    const filterattribute = getfilterdata(storygachadatarate[summon_result]);
    //console.log(filterattribute.Name,filterattribute.Rarity,filterattribute.Type)
    let rarityText = filterattribute.Rarity.replace(/(\d+)-Star/g, (match, p1) => {
        let stars = "⭐️".repeat(parseInt(p1));
        return stars;
    });
    textsummon10 = textsummon10+"You got "+filterattribute.Name+" "+rarityText+" ("+filterattribute.Type+")"+"<br>"
    }
    document.getElementById("summon10result").innerHTML = textsummon10
    
    console.log(storygachax10)
    
}

function clearonscreen()
{
    var resultonscreen = '💎 Result 💎'
    textsummon1 = ''
    textsummon10 = ''
    document.getElementById("result").innerHTML = resultonscreen
    document.getElementById("summon1result").innerHTML = textsummon1
    document.getElementById("summon10result").innerHTML = textsummon10
}

function StoryBanner() {
    useEffect(() => {
        //ข้างใน
        console.log('Summon button click')
        

    //endpoint of api require for story gacha

    let endpoints = [
        'http://localhost:8081/ce_story',
        'http://localhost:8081/servant_story'
    ]

    const request = endpoints.map((url) => axios.get(url))
    axios.all(request).then((response) => {
        // console.log('ok')
        //console.log(response);
        // console.log(response[0]);
        // console.log(response[1]);
        // console.log(response[2]);
        // console.log(response[3]);
        storygachadatarate.splice(0,storygachadatarate.length) //clear array if visit page

        response.forEach(wholedata => {
            storygachadata.push(wholedata)
        });

        //trying to get fetch data into array
        for(let i=0;i<2;i++)
        {
            //console.log(friendgachadata[i].data)
            for(let j = 0;j<storygachadata[i].data.length;j++)
            {
                //console.log(friendgachadata[i].data[j])
                //apply default weighting into simulate
                if(i==0)
                {
                    let item = storygachadata[i].data[j]
                    item.weight = 0 // default weight
                    item.type = 'CE'
                    storygachadatarate.push(storygachadata[i].data[j])
                }
                else if(i==1)
                {
                    let item = storygachadata[i].data[j]
                    item.weight = 0 // default weight
                    item.type = 'Servant'
                    storygachadatarate.push(storygachadata[i].data[j])
                }
            }
        }

        //console.log(storygachadatarate)
        //some rate part (for example 2-star servant have more than one item so the odd should be 2star-servant rate / all 2star-servant item)
        //counting item

        //count for servant avaliable

        var count_3starservant = 0, count_4starservant = 0, count_5starservant = 0
        for(let i = 0 ; i<storygachadatarate.length;i++)
        {
            if(storygachadatarate[i].type === 'Servant' && storygachadatarate[i].Rarity === '3-Star')
            {
                count_3starservant += 1
            }
            else if(storygachadatarate[i].type === 'Servant' && storygachadatarate[i].Rarity === '4-Star')
            {
                count_4starservant += 1
            }
            else if(storygachadatarate[i].type === 'Servant' && storygachadatarate[i].Rarity === '5-Star')
            {
                count_5starservant += 1
            }
        }

        //counting for CE avaliable

        var count_3starCE = 0, count_4starCE = 0, count_5starCE = 0
        for(let i = 0 ; i<storygachadatarate.length;i++)
        {
            if(storygachadatarate[i].type === 'CE' && storygachadatarate[i].Rarity === '3-Star')
            {
                count_3starCE += 1
            }
            else if(storygachadatarate[i].type === 'CE' && storygachadatarate[i].Rarity === '4-Star')
            {
                count_4starCE += 1
            }
            else if(storygachadatarate[i].type === 'CE' && storygachadatarate[i].Rarity === '5-Star')
            {
                count_5starCE += 1
            }
        }

        //apply weight (rate drop)
        for(let i = 0 ; i<storygachadatarate.length;i++) //161
        {
            //servant part
            if(storygachadatarate[i].type === 'Servant' && storygachadatarate[i].Rarity === '3-Star')
            {
              storygachadatarate[i].weight = 0.4/count_3starservant
            }
            else if(storygachadatarate[i].type === 'Servant' && storygachadatarate[i].Rarity === '4-Star')
            {
              storygachadatarate[i].weight = 0.03/count_4starservant
            }
            else if(storygachadatarate[i].type === 'Servant' && storygachadatarate[i].Rarity === '5-Star')
            {
              storygachadatarate[i].weight = 0.01/count_5starservant
            }
            //CE //129

            else if(storygachadatarate[i].type === 'CE' && storygachadatarate[i].Rarity === '3-Star')
            {
              storygachadatarate[i].weight = 0.4/count_3starCE
            }
            else if(storygachadatarate[i].type === 'CE' && storygachadatarate[i].Rarity === '4-Star')
            {
              storygachadatarate[i].weight = 0.12/count_4starCE
            }
            else if(storygachadatarate[i].type === 'CE' && storygachadatarate[i].Rarity === '5-Star')
            {
              storygachadatarate[i].weight = 0.04/count_5starCE
            }
        }
        console.log(storygachadatarate)
      })
      .catch((error) => {
        // handle errors
        console.log(error)
      });


      bannerimg2.onclick = function(e) {
        var ratioX = e.target.naturalWidth / e.target.offsetWidth;
        var ratioY = e.target.naturalHeight / e.target.offsetHeight;
      
        var domX = e.x + window.pageXOffset - e.target.offsetLeft;
        var domY = e.y + window.pageYOffset - e.target.offsetTop;
      
        var imgX = Math.floor(domX * ratioX);
        var imgY = Math.floor(domY * ratioY);

        if((imgX >= 480 && imgX <= 850)&&(imgY >= 750 && imgY <= 870)) //x = 315-450 y = 415-460
        {
            console.log("Summon 1x")
            clearonscreen()
            Summon()
            
        }
        else if((imgX >= 1020 && imgX <= 1400)&&(imgY >= 750 && imgY <= 870)) //x = 315-450 y = 415-460
        {
            console.log("Summon 10x")
            clearonscreen()
            Summon10() 
        }
      
        console.log(imgX, imgY);
      };


    return () => {
        console.log('Component unmounted');
        
      };
    }, []);


  return (
    <div className='flex justify-center items-center w-screen'>
        <div>
        <div className='text-2xl pt-5 text-center'>Story Banner Gacha</div>
        <div className='pt-5 items-center max-w-3xl'><img src="./src/components/element/story.jpg" id='bannerimg2'></img></div>

        <div className='text-center mt-4'>
            <p id='result'></p>
            <p id='summon1result'></p>
            <p id='summon10result'></p>
        </div>
        
        </div>
        
    </div>
  )
}

export default StoryBanner