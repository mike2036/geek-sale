require('dotenv').config();

// 在 Node.js 中使用'require'函数引入"stripe"模块
// 在引入模块后，通过调用该模块并传递一个参数，即密钥
// process.env 是一个 Node.js 中的全局对象，用于访问环境变量
// 最后将返回的 Stripe 客户端实例 赋值给变量'stripe'，该变量是一个对象，用于与 Stripe API 进行通信的接口
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    // 在后端服务中，创建 paymentIntent，因为前端不可信
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'AUD',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        paymentIntent,
      }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
