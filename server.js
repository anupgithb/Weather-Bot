import axios from "axios";
import { Telegraf } from "telegraf";

const TOKEN = '5832305990:AAGf80gggu1ahPggtGPQr03v3-X-xcJrecs';

const bot = new Telegraf(TOKEN);
const Url = 'http://api.weatherstack.com/current?access_key=757afed653beeeb55db41a6620b2420a&query="';


const fetchData = async (cityName) => {
  try {
    const res = await axios.get(`${Url + cityName}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
    
    
  };
  
  // fetchData("New York");
  
  bot.start(async(ctx) => {
    ctx.reply("Hello im a bot");
    try{
      const { data } = await fetchData('delhi india');
    console.log(data);
    if (data.success === false) {
        ctx.reply("Enter a valid city name:");
      } else {
        const { current, location } = data;
        const weatherStatus = current.weather_descriptions[0];
    
        ctx.reply(
          `🌆 City:${location.name}\n-\n 🕔Time : ${location.localtime.split(' ')[1]} \n-\n 🌡 Temperature : ${
            current.temperature
          }°\n-\n❓ Weather status: ${
            (weatherStatus.toLowerCase().includes("clear") === true && "☀️") ||
            (weatherStatus.toLowerCase().includes("haze") === true && "😶‍🌫️") ||
            (weatherStatus.toLowerCase().includes("sunny") === true && "☀️") ||
            (weatherStatus.toLowerCase().includes("hot") === true && "☀️") ||
            (weatherStatus.toLowerCase().includes("cold") === true && "☀️") ||
            (weatherStatus.toLowerCase().includes("cloud") === true && "☁️") ||
            (weatherStatus.toLowerCase().includes("overcast") === true && "☁️") ||
            (weatherStatus.toLowerCase().includes("rain") === true && "🌧") ||
            (weatherStatus.toLowerCase().includes("snow") === true && "❄️")
          } ${current.weather_descriptions[0]}`
        );
      }
    }
    catch(error)
    {
      console.log(error.message);
    }
    
    setInterval(async()=>{
        ctx.reply("Hello im a bot from interval");
        try{
          const { data } = await fetchData('delhi india');
        console.log(data);
        if (data.success === false) {
            ctx.reply("Enter a valid city name:");
          } else {
            const { current, location } = data;
            const weatherStatus = current.weather_descriptions[0];
        
            ctx.reply(
              `🌆 City:${location.name}\n-\n 🕔Time : ${location.localtime.split(' ')[1]} \n-\n 🌡 Temperature : ${
                current.temperature
              }°\n-\n❓ Weather status: ${
                (weatherStatus.toLowerCase().includes("clear") === true && "☀️") ||
                (weatherStatus.toLowerCase().includes("haze") === true && "😶‍🌫️") ||
                (weatherStatus.toLowerCase().includes("sunny") === true && "☀️") ||
                (weatherStatus.toLowerCase().includes("hot") === true && "☀️") ||
                (weatherStatus.toLowerCase().includes("cold") === true && "☀️") ||
                (weatherStatus.toLowerCase().includes("cloud") === true && "☁️") ||
                (weatherStatus.toLowerCase().includes("overcast") === true && "☁️") ||
                (weatherStatus.toLowerCase().includes("rain") === true && "🌧") ||
                (weatherStatus.toLowerCase().includes("snow") === true && "❄️")
              } ${current.weather_descriptions[0]}`
            );
          }
        }
        catch(error)
        {
          console.log(error.message);
        }    
    },1000*60*60)
    
  });
  
  
  bot.launch();