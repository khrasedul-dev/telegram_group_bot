// const { Telegraf } = require('telegraf')
const {Composer,Telegraf} = require('micro-bot')

// const bot = new Telegraf("5026833569:AAHkz_WlSppeYYR-BgoAWOkheFjTQRPBJPc")

const bot = new Composer()

bot.on('new_chat_members', (ctx) => {
    Telegraf.telegram.sendMessage(ctx.chat.id,"Hello "+ctx.from.first_name + " "+ ctx.from.last_name +"\nHow can i help you?",{
        reply_markup:{
            inline_keyboard:[
                [{text: "See all item", callback_data:"allItem"}]
            ]
        }
    })
});

bot.action("allItem",(ctx)=>{
    ctx.answerCbQuery();
    ctx.deleteMessage();
    Telegraf.telegram.sendMessage(ctx.chat.id, "Choose an option",{
        reply_markup:{
            inline_keyboard:[
                [{text: "Item 1",callback_data:"item1"}],
                [{text: "Item 2",callback_data:"item1"}],
                [{text: "Item 3",callback_data:"item1"}],
                [{text: "Item 4",callback_data:"item1"}],
                [{text: "Item 5",callback_data:"item1"}]
            ]
        }
    })
})


bot.action("item1",(ctx)=>{
    ctx.answerCbQuery();
    ctx.deleteMessage();
    Telegraf.telegram.sendMessage(ctx.chat.id,"You are click item 1",{
        reply_markup:{
            inline_keyboard:[
                [{text: "Go Back", callback_data: "allItem"}]
            ]
        }
    })
})

module.exports = bot