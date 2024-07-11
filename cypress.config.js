// we will be defining how e2e works
//congig cypress
const {defineConfig } = require('cypress')
module.exports=defineConfig({
    e2e:{
        baseUrl:'http://localhost:3000',
        setupNodeEvents(on,config){
            
        },
    },
})

