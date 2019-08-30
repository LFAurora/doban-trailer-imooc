const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')
// const { htmlTpl,ejsTpl,pugTpl } = require('./tpl')
// const ejs = require('ejs')
// const pug = require('pug')

app.use(views(resolve(__dirname,'views'),{
  extension:'pug'
}))

app.use(async (ctx,next) => {
  // ctx.type = 'text/html;charset=utf-8'
  // ctx.body = pug.render(pugTpl,{
  //   you:'Luke',
  //   me:'Scott'
  // })

  await ctx.render('index',{
    you:'Luke',
    me:'Scott'
  })
})
app.listen(4455)