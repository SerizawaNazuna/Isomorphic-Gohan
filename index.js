const request = require('request-promise');
const randomizer = require('./randomizer')

exports.handler = async(event, context) =>{
    const options = {
        url: "https://api.gnavi.co.jp/RestSearchAPI/v3/",
        qs:{
            keyid: process.env['GURUNAVI_API_KEY'],
            range: 3,
            latitude: event['latitude'],
            longitude: event['longitude'],
            lunch: 1,
            hit_per_page: 100
        }
    }
    
    const res = await request.get(options)
    const restaurants = JSON.parse(res).rest
    const restHaveImage = restaurants.filter((value)=>{
        return value.image_url.shop_image1 != ''
    })
    const randomizedRest = randomizer.randomize(restHaveImage)

    return {
        "statusCode": "200",
        "body": randomizedRest
    }
}