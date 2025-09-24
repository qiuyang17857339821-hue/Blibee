// 导入 Express.js 
const express = require ( 'express' );

// 创建一个 Express 应用const 
app = express ();

// 用于解析 JSON 主体的中间件
app . use ( express . json ());

// 设置端口和 verify_token const port = process . env . PORT || 3000 ; const verifyToken = process . env . VERIFY_TOKEN ;
 


// GET 请求的路由
app . get ( '/' , ( req , res ) => { const { 'hub.mode' : mode , 'hub.challenge' : challenge , 'hub.verify_token' : token } = req . query ;   
       

  if ( mode === 'subscribe' && token === verifyToken ) { 
    console.log ( 'WEBHOOK VERIFIED' ) ; res.status ( 
    200 ) .send ( challenge ) ; } else { res.status ( 
    403 ) .end ( ) ; } } ) ;    
    
  


// POST 请求的路由
app.post ( '/' , ( req , res ) => { const timestamp = newDate (). toISOString (). replace ( 'T' , ' ' ). slice ( 0,19 ) ; 
  console.log ( ` \ n \ nWebhook收到$ { timestamp } \ n` ) ; 
  console.log ( JSON.stringify ( req.body , null , 2 ) ) ; 
  res.status ( 200 ) .end ( ) ; } ) ;   
        


// 启动服务器
app . listen ( port , () => { 
  console . log (` \n正在监听端口 $ { port } \n `); });   
