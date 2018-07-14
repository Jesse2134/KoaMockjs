const KoaRouter = require('koa-router');
const router = new KoaRouter();

var Mock = require('mockjs');
const Random = Mock.Random;

// 路由开始
router.get('/', async (ctx, next) => {
  const hello = function () {
    let messages = "请求通了测试"
    return {
      messages: messages
    }
  }
  ctx.body = await hello()
})

// 路由开始
router.get('/mock/aaa', async (ctx, next) => {
  const hello = function () {
    let messages = "请求通了"
    return {
      messages: messages
    }
  }
  ctx.body = await hello()
})

// 路由开始
router.post('/mock/api/login', async (ctx, next) => {
  const hello = function () {
    let messages = "登录成功"
    return {
      messages: messages,
      user: {
        username: 'admin',
        token: 'fdahfdsahfdosafhidsoafuidgsau fgdsa;hfdpisaufdsa fjdsa'
      }
    }
  }
  ctx.body = await hello()
})

// api
router.get('/mock/api/', async (ctx, next) => {
  const hello = function () {
    let messages = "hello world, 请求通了"
    return {
      messages: messages
    }
  }
  ctx.body = await hello()
})

router.get('/mock/api/articles', async (ctx, next) => {
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

router.post('/mock/api/user', async (ctx, next) => {
  const prodeceNewData = function () {
    let articles = [];
    for (let i = 0; i < 25; i++) {
      let newArticleObject = {
        id: Random.csentence(5, 30), //  Random.csentence( min, max )
        username: Random.cname(),
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

// 派出所接口mock
// 获取table信息
router.post('/mqi/generalCtrl/findTableInfo', async (ctx, next) => {
  console.log(ctx.request.body);
  const pageSize = ctx.request.body.pageSize;
  const pageNum = ctx.request.body.pageNum;
  const menuCode = ctx.request.body.menuCode;
  const queryPair = ctx.request.body.queryPair;

  let a = {
    "menuCode": "pcs007",
    "pageNum": "1",
    "pageSize": "10",
    "queryPair": {
      "jybh": "027086"
    }
  }

  const prodeceNewData = function () {
    let data = [];
    if (queryPair) {
      let newObject = {
        JYBH: '027086',
        JYXM: Random.cname(),
        Birth: Random.date('yyyy-MM-dd').toString(),
        options: {
          isButton: true,
          value: Random.natural()
        }
      }
      data.push(newObject)
    } else {
      for (let i = 0; i < pageSize; i++) {
        let newObject = {
          JYBH: Random.string('lower', 10),
          JYXM: Random.cname(),
          Birth: Random.date('yyyy-MM-dd').toString(),
          options: {
            isButton: true,
            value: Random.natural()
          }
        }
        data.push(newObject)
      }
    }
    return {
      code: 0,
      msg: 'success',
      data: {
        list: data, 
        total: pageSize * 5 + 3,
      },
      pageNum: parseInt(pageNum),
      pageSize: parseInt(pageSize)
    }
  }
  ctx.body = await prodeceNewData()
})
// 获取table datas
router.get('/mqi/generalCtrl/findALLByMenuCode', async (ctx, next) => {
  let menuCode = ctx.query.menuCode;
  const prodeceNewData = () => {
    let data = {
      "queryConditionList": [{
          "id": 1,
          "queryId": 1,
          "colDisplayName": "警员编号",
          "colName": "JYBH",
          "colType": "text",
          "colFormat": null,
          "isScope": null,
          "scopeFlag": null,
          "dropQueryId": 0,
          "condOrder": 1,
          "selectList": null
        },
        {
          "id": 2,
          "queryId": 1,
          "colDisplayName": "警员姓名",
          "colName": "JYXM",
          "colType": "text",
          "colFormat": null,
          "isScope": null,
          "scopeFlag": null,
          "dropQueryId": 0,
          "condOrder": 2,
          "selectList": null
        },
        {
          "id": 3,
          "queryId": 1,
          "colDisplayName": "生日",
          "colName": "Birth",
          "colType": "date",
          "colFormat": "YYYY-MM-DD",
          "isScope": null,
          "scopeFlag": null,
          "dropQueryId": 0,
          "condOrder": 3,
          "selectList": null
        },
        {
          "id": 4,
          "queryId": 1,
          "colDisplayName": "职务",
          "colName": "ZW",
          "colType": "select",
          "colFormat": null,
          "isScope": null,
          "scopeFlag": null,
          "dropQueryId": 2,
          "condOrder": 4,
          "selectList": [{
              "label": "副队长",
              "value": "1"
            },
            {
              "label": "大队长",
              "value": "7"
            },
            {
              "label": "警员1",
              "value": "2"
            },

            {
              "label": "警员2",
              "value": "3"
            },
            {
              "label": "警员3",
              "value": "4"
            }
          ]
        }
      ],
      "titleNameList": [{
          "id": 2,
          "queryId": 1,
          "resultCode": "JYBH",
          "resultName": "警员编号",
          "isDisplay": "0",
          "isBond": "1",
          "isButton": "0",
          "displayOrder": 2,
          "resultType": "text",
          "qroList": null
        },
        {
          "id": 3,
          "queryId": 1,
          "resultCode": "JYXM",
          "resultName": "姓名",
          "isDisplay": "1",
          "isBond": "0",
          "isButton": "0",
          "displayOrder": 3,
          "resultType": "text",
          "qroList": null
        },
        {
          "id": 4,
          "queryId": 1,
          "resultCode": "Birth",
          "resultName": "生日",
          "isDisplay": "1",
          "isBond": "0",
          "isButton": "0",
          "displayOrder": 4,
          "resultType": "date",
          "qroList": null
        },
        {
          "id": 5,
          "queryId": 1,
          "resultCode": "option",
          "resultName": "操作",
          "isDisplay": "1",
          "isBond": "0",
          "isButton": "1",
          "displayOrder": 5,
          "resultType": "option",
          "qroList": [{
              "id": 2,
              "resultId": 5,
              "optionType": "0",
              "optionMsg": "是否删除该记录",
              "buttonName": "删除",
              "interfaceId": 3,
              "isValid": 1,
              "interfaceType": "delete",
              "createTime": "2018-07-11 13:34:52.0",
              "updateTime": null
            },
            {
              "id": 1,
              "resultId": 5,
              "optionType": "0",
              "optionMsg": null,
              "buttonName": "编辑",
              "interfaceId": 2,
              "isValid": 1,
              "interfaceType": "edit",
              "createTime": "2018-07-11 13:24:29.0",
              "updateTime": null
            }
          ]
        }
      ],
    }
    return {
      data: data,
      code: 0,
      menuCode: menuCode,
      msg: '查询指定模块pcs007'
    }
  }
  ctx.body = await prodeceNewData()
})
// 获取新增表单
router.get('/mqi/initInsert/1', async (ctx, next) => {
  const prodeceNewData = () => {
    let data = {
      "objEntity": {
        "id": 1,
        "interfaceId": 1,
        "tableName": "t_police",
        "description": "新增警员",
        "saveButtonName": "新增",
        "submitButtonName": "保存",
        "isValid": 1,
        "createTime": "2018-07-12 14:35:24",
        "updateTime": "2018-07-12 14:35:17"
      },
      "colList": [{
          "id": 1,
          "insertId": 1,
          "colDisplayName": "警员编号",
          "colName": "JYBH",
          "colDesc": "警员编号",
          "colType": "text",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 1,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:30",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 1,
            "checkType": "10",
            "checkValue": '^[1][3,4,5,6,7,8][0-9]{9}$',
            "warnMsg": "必须输入手机",
            "isValid": 1,
            "createTime": "2018-07-12 19:11:30",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 2,
          "insertId": 1,
          "colDisplayName": "警员姓名",
          "colName": "JYXM",
          "colDesc": "警员姓名",
          "colType": "text",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 2,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:30",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 2,
            "checkType": "1",
            "checkValue": null,
            "warnMsg": "警员姓名不能为空",
            "isValid": 1,
            "createTime": "2018-07-12 19:11:30",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 3,
          "insertId": 1,
          "colDisplayName": "职级",
          "colName": "ZJ",
          "colDesc": "职级",
          "colType": "select",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": 2,
          "displayOrder": 3,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:30",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 3,
            "checkType": "1",
            "checkValue": null,
            "warnMsg": "职级不能为空",
            "isValid": 1,
            "createTime": "2018-07-12 19:12:48",
            "updateTime": null
          }],
          "selectList": [{
              "label": "周恺",
              "value": "主任科员"
            },
            {
              "label": "郑尔幸",
              "value": "五级警长"
            },
            {
              "label": "朱文强",
              "value": "二级警长"
            },
            {
              "label": "陈宝华",
              "value": "三级警长"
            },
            {
              "label": "李斌",
              "value": "四级警长"
            }
          ]
        },
        {
          "id": 4,
          "insertId": 1,
          "colDisplayName": "身份证号码",
          "colName": "IDCard",
          "colDesc": "身份证号码",
          "colType": "number",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 4,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:30",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 4,
            "checkType": "4",
            "checkValue": "/(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/",
            "warnMsg": "身份证号码格式不正确",
            "isValid": 1,
            "createTime": "2018-07-12 19:17:28",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 5,
          "insertId": 1,
          "colDisplayName": "警员生日",
          "colName": "Birth",
          "colDesc": "警员生日",
          "colType": "date",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 5,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:32",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 5,
            "checkType": "7",
            "checkValue": "yyyyy-MM-dd",
            "warnMsg": "生日格式不正确",
            "isValid": 1,
            "createTime": "2018-07-12 19:18:28",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 6,
          "insertId": 1,
          "colDisplayName": "居住地址",
          "colName": "Address",
          "colDesc": "居住地址",
          "colType": "text",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 6,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:31",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 6,
            "checkType": "1",
            "checkValue": null,
            "warnMsg": "居住地址不能为空",
            "isValid": 1,
            "createTime": "2018-07-12 19:19:36",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 7,
          "insertId": 1,
          "colDisplayName": "政治面貌",
          "colName": "PoliticalStatus",
          "colDesc": "政治面貌",
          "colType": "text",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 7,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:31",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 7,
            "checkType": "4",
            "checkValue": "团员,党员",
            "warnMsg": "政治面貌只能为团员党员",
            "isValid": 1,
            "createTime": "2018-07-12 19:20:51",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 8,
          "insertId": 1,
          "colDisplayName": "所属责任区",
          "colName": "AreagroupID",
          "colDesc": "所属责任区",
          "colType": "text",
          "colFormat": null,
          "isHavaDefaultValue": 1,
          "defaultValue": "2",
          "isMust": 0,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 8,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:32",
          "updateTime": null,
          "colCheckList": [],
          "selectList": null
        }
      ]
    }
    return {
      data: data,
      code: 0,
      msg: '获取新增成功'
    }
  }
  ctx.body = await prodeceNewData();
})
// 获取编辑表单
router.get('/mqi/initUpdate/', async (ctx, next) => {
  const prodeceNewData = () => {
    let data = {
      "objEntity": {
        "id": 1,
        "interfaceId": 1,
        "tableName": "t_police",
        "description": "新增警员",
        "saveButtonName": "新增",
        "submitButtonName": "保存",
        "isValid": 1,
        "createTime": "2018-07-12 14:35:24",
        "updateTime": "2018-07-12 14:35:17"
      },
      "colList": [{
          "id": 1,
          "insertId": 1,
          "colDisplayName": "警员编号",
          "colName": "JYBH",
          "colDesc": "警员编号",
          "colType": "text",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 1,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:30",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 1,
            "checkType": "10",
            "checkValue": '^[1][3,4,5,6,7,8][0-9]{9}$',
            "warnMsg": "必须输入手机",
            "isValid": 1,
            "createTime": "2018-07-12 19:11:30",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 2,
          "insertId": 1,
          "colDisplayName": "警员姓名",
          "colName": "JYXM",
          "colDesc": "警员姓名",
          "colType": "text",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 2,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:30",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 2,
            "checkType": "1",
            "checkValue": null,
            "warnMsg": "警员姓名不能为空",
            "isValid": 1,
            "createTime": "2018-07-12 19:11:30",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 3,
          "insertId": 1,
          "colDisplayName": "职级",
          "colName": "ZJ",
          "colDesc": "职级",
          "colType": "select",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": 2,
          "displayOrder": 3,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:30",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 3,
            "checkType": "1",
            "checkValue": null,
            "warnMsg": "职级不能为空",
            "isValid": 1,
            "createTime": "2018-07-12 19:12:48",
            "updateTime": null
          }],
          "selectList": [{
              "label": "周恺",
              "value": "主任科员"
            },
            {
              "label": "郑尔幸",
              "value": "五级警长"
            },
            {
              "label": "朱文强",
              "value": "二级警长"
            },
            {
              "label": "陈宝华",
              "value": "三级警长"
            },
            {
              "label": "李斌",
              "value": "四级警长"
            }
          ]
        },
        {
          "id": 4,
          "insertId": 1,
          "colDisplayName": "身份证号码",
          "colName": "IDCard",
          "colDesc": "身份证号码",
          "colType": "number",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 4,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:30",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 4,
            "checkType": "4",
            "checkValue": "/(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/",
            "warnMsg": "身份证号码格式不正确",
            "isValid": 1,
            "createTime": "2018-07-12 19:17:28",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 5,
          "insertId": 1,
          "colDisplayName": "警员生日",
          "colName": "Birth",
          "colDesc": "警员生日",
          "colType": "date",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 5,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:32",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 5,
            "checkType": "7",
            "checkValue": "yyyyy-MM-dd",
            "warnMsg": "生日格式不正确",
            "isValid": 1,
            "createTime": "2018-07-12 19:18:28",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 6,
          "insertId": 1,
          "colDisplayName": "居住地址",
          "colName": "Address",
          "colDesc": "居住地址",
          "colType": "text",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 6,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:31",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 6,
            "checkType": "1",
            "checkValue": null,
            "warnMsg": "居住地址不能为空",
            "isValid": 1,
            "createTime": "2018-07-12 19:19:36",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 7,
          "insertId": 1,
          "colDisplayName": "政治面貌",
          "colName": "PoliticalStatus",
          "colDesc": "政治面貌",
          "colType": "text",
          "colFormat": null,
          "isHavaDefaultValue": 0,
          "defaultValue": null,
          "isMust": 1,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 7,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:31",
          "updateTime": null,
          "colCheckList": [{
            "id": null,
            "insertColId": 7,
            "checkType": "4",
            "checkValue": "团员,党员",
            "warnMsg": "政治面貌只能为团员党员",
            "isValid": 1,
            "createTime": "2018-07-12 19:20:51",
            "updateTime": null
          }],
          "selectList": null
        },
        {
          "id": 8,
          "insertId": 1,
          "colDisplayName": "所属责任区",
          "colName": "AreagroupID",
          "colDesc": "所属责任区",
          "colType": "text",
          "colFormat": null,
          "isHavaDefaultValue": 1,
          "defaultValue": "2",
          "isMust": 0,
          "editable": 1,
          "isDictValue": 0,
          "dropQueryId": null,
          "displayOrder": 8,
          "isValid": 1,
          "createTime": "2018-07-12 15:42:32",
          "updateTime": null,
          "colCheckList": [],
          "selectList": null
        }
      ]
    }
    return {
      data: data,
      code: 0,
      msg: '获取新增成功'
    }
  }
  ctx.body = await prodeceNewData();
})

router.delete('/mqi/delete', async (ctx, next) => {
  const prodeceNewData = () => {
    return {
      code: 0,
      msg: '删除成功！'
    }
  }
  ctx.body = await prodeceNewData();
})

module.exports = router;