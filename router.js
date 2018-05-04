const KoaRouter = require('koa-router');
const router = new KoaRouter();

var Mock = require('mockjs');
const Random = Mock.Random;

// 路由开始
router.get('/', async (ctx, next) => {
  const hello = function () {
    let messages = "hello world"
    return {
      messages: messages
    }
  }
  ctx.body = await hello()
})

router.get('/mock/articles', async (ctx, next) => {
  const prodeceNewData = function () {
    let articles = [];
    for (let i = 0; i < 25; i++) {
      let newArticleObject = {
        title: Random.csentence(5, 30), //  Random.csentence( min, max )
        author: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
        createdAt: Random.date()
      }
      articles.push(newArticleObject)
    }
    return {
      articles: articles,
      total: articles.length
    }
  }
  ctx.body = await prodeceNewData()
})

module.exports = router;
