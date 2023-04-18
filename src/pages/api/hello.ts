// // import { NextResponse } from 'next/server'

// // const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

// // const API_KEY: string = process.env.DATA_API_KEY as string

// // export default async function GET() {
// //     const res = await fetch(DATA_SOURCE_URL)

// //     const todos: Todo[] = await res.json()

// //     return NextResponse.json(todos)
// // }



// // import { NextApiRequest, NextApiResponse } from "next";
// // import { NextRequest, NextResponse } from "next/server";

// // export async function GET(request: NextRequest) {
// //   const url = request.nextUrl;
// //   if(url.searchParams.has("name")){
// //     const name = url.searchParams.get("name");
// //     return new NextResponse('Hello, from: ' + name);
// //   }
// //   else {
// //     return new NextResponse('Please send your name in search parameter "name"');
// //   }
  
// // }


// // import type { NextApiRequest, NextApiResponse } from 'next'

// // type Data = {
// //   name: string
// // }
// // const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
// // // const API_KEY: string = process.env.DATA_API_KEY as string
// // export default async function handler( req: NextApiRequest,  res: NextApiResponse<Data>)
// //  {
     
// //  return res.status(200).json({ name: 'John Doe' })
// // }



// // import { NextResponse } from "next/server"

// // export async function GET() {
// //   return NextResponse.json({ "message": 'Hello, Next.js!' })
// // }




// // import { NextResponse } from 'next/server';

// // export async function GET() {
// //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/...', {
// //     // headers: {
// //     //   'Content-Type': 'application/json',
// //     //   'API-Key': process.env.DATA_API_KEY,
// //     // },
// //   });
// //   const data = await res.json();

// //   return NextResponse.json({ data })
// // }









// // import type { NextApiRequest, NextApiResponse } from 'next'
// // import { NextResponse, type NextRequest } from 'next/server'
// // type Data = {
// //   name: string
// // }
// // const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
// // const API_KEY: string = process.env.DATA_API_KEY as string
// // export default async function handler( req: NextRequest) {
// //     const res = await fetch(DATA_SOURCE_URL)

// //     const todos : Todo[] = await res.json()
    
// //     return NextResponse.json(todos)

// // }




// // import { type NextRequest } from 'next/server'

// // export const config = {
// //   runtime: 'edge',
// // }

// export  async function handler(req: NextRequest) {
//   const authorization = req.cookies.get('authorization')?.value
//   return fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: req.method,
//     // headers: {
//     //   authorization,
//     // },
//     redirect: 'manual',
//   })
// }


// // import { NextRequest, NextResponse } from "next/server";

// // export async function GET(request: NextRequest) {
// //   const url = request.nextUrl;
// //   if(url.searchParams.has("name")){
// //     const name = url.searchParams.get("name");
// //     return new NextResponse('Hello, from: ' + name);
// //   }
// //   else {
// //     return new NextResponse('Please send your name in search parameter "name"');
// //   }
  
// // }






// // export default function handler(req, res) {
// //   res.status(200).json({ name: 'John Doe' })
// // }




// // import { NextResponse } from "next/server"

// // export async function GET() {
// //   return NextResponse.json({ "message": 'Hello, Next.js!' })
// // }

// import type { NextApiRequest, NextApiResponse } from 'next'
// import { NextRequest, NextResponse } from "next/server";


// // import { NextRequest, NextResponse } from "next/server";
// // export default function handler(req :NextApiRequest, res : NextApiResponse) {
// //     res.status(200).json({ message: 'Hello from Next.js!' })
// //   }



// // export default function Get(req: NextRequest) {
// // const {searchParams} = new URL(req.url)
// // const name = searchParams.get('name')
// // const instrument = searchParams.get('instrument')
// // return new Response(name)
// //   }
// //   import type { NextRequest } from 'next/server'

//   export const config = {
//     runtime: 'edge',

//   }
  
//   export default async function handler(req: NextRequest) {
//     const { searchParams } = new URL(req.url)
//     const email = searchParams.get('email')
//         const name = searchParams.get('name')
//     return  NextResponse.json({email ,name})
//   }


















//   // import { NextRequest, NextResponse } from "next/server";
// // import postgres from "postgres";

// // export default async function GET(request: NextRequest) {
// //   const conn = postgres({
// //     ssl: require,
// //   });
// //   const result = await conn.unsafe("SELECT * FROM bookdata");
// //   console.log("backend result", result);
// //   return new NextResponse(JSON.stringify(result));
// // }


// // import { NextRequest, NextResponse } from "next/server";

// // import {
// //   Kysely,
// //   Generated,
// //   ColumnType,
// //   Selectable,
// //   Insertable,
// //   Updateable,
// // } from 'kysely';

// // import { NeonDialect } from "kysely-neon";

// // interface bookdata_Table {
// //   id: Generated<number>
// //   title: string
// //   current_stock:number
// //   available:boolean
// // }

// // interface Database {
// //   bookdata: bookdata_Table
// // }


// // export async function GET(request: NextRequest) {
// //   const db = new Kysely<Database>({
// //     dialect: new NeonDialect({
// //       connectionString: process.env.DATABASE_URL!,
// //     }),
// //   });
  
// //   const result = await db
// //   .selectFrom("bookdata")
// //   .selectAll()
// //   .execute()
  
// //   console.log("backend result", result);
// //   return new NextResponse(JSON.stringify(result));
// // }



// // Import necessary dependencies
// // import { NextApiRequest, NextApiResponse } from 'next';
// // import jwt from 'jsonwebtoken';
// // import neon from 'neon-js';

// // // Create Neon connection pool
// // const pool = neon.createPool({
// //   connectionString: process.env.DB_CONNECTION_STRING,
// //   poolSize: 10,
// // });

// // // Define API middleware for authentication
// // export const authenticate = (handler) => async (req, res) => {
// //   try {
// //     // Get token from authorization header
// //     const token = req.headers.authorization?.replace('Bearer ', '');

// //     // Verify token
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

// //     // Attach user id to request
// //     req.userId = decoded.userId;

// //     // Call the actual API handler
// //     return handler(req, res);
// //   } catch (error) {
// //     // Return error response for unauthorized requests
// //     return res.status(401).json({ error: 'Unauthorized' });
// //   }
// // };

// // Define API routes
// // export default async (req: NextApiRequest, res: NextApiResponse) => {
// //   // Check API endpoint and method
// //   if (req.method === 'GET') {
// //     // Handle GET requests
// //     if (req.url === '/status') {
// //       // Handle status endpoint
// //       return res.status(200).json({ status: 'OK' });
// //     } else if (req.url === '/books') {
// //       // Handle books endpoint with optional query parameters
// //       const { type, limit } = req.query;
// //       const query = neon.query().select().from('books');
// //       if (type) {
// //         query.where('type', type);
// //       }
// //       if (limit) {
// //         query.limit(limit);
// //       }
// //       const books = await pool.executeQuery(query);
// //       return res.status(200).json(books);
// //     } else if (req.url.startsWith('/books/')) {
// //       // Handle single book endpoint
// //       const bookId = req.url.replace('/books/', '');
// //       const query = neon.query().select().from('books').where('id', bookId).first();
// //       const book = await pool.executeQuery(query);
// //       if (book) {
// //         return res.status(200).json(book);
// //       } else {
// //         return res.status(404).json({ error: 'Book not found' });
// //       }
// //     } else if (req.url === '/orders') {
// //       // Handle get all orders endpoint
// //       const query = neon.query().select().from('orders');
// //       const orders = await pool.executeQuery(query);
// //       return res.status(200).json(orders);
// //     } else if (req.url.startsWith('/orders/')) {
// //       // Handle get single order endpoint
// //       const orderId = req.url.replace('/orders/', '');
// //       const query = neon.query().select().from('orders').where('id', orderId).first();
// //       const order = await pool.executeQuery(query);
// //       if (order) {
// //         return res.status(200).json(order);
// //       } else {
// //         return res.status(404).json({ error: 'Order not found' });
// //       }
// //     }
// //   } else if (req.method === 'POST') {
// //     // Handle POST requests
// //     if (req.url === '/orders') {
// //       // Handle submit order endpoint with authentication
// //       if (!req.userId) {
// //         return res.status(401).json({ error: 'Unauthorized' });
// //       }
// //       const { bookId, customerName } = req.body;
// //       if (!bookId || !customerName) {
// //         return res.status(400























// // export async function POST(request: Request) {
// //     const { userId, title }: Partial<Todo> = await request.json()

// //     if (!userId || !title) return NextResponse.json({ "message": "Missing required data" })

// //     const res = await fetch(DATA_SOURCE_URL, {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json',
// //             'API-Key': API_KEY
// //         },
// //         body: JSON.stringify({
// //             userId, title, completed: false
// //         })
// //     })

// //     const newTodo: Todo = await res.json()

// //     return NextResponse.json(newTodo)
// // }

// // export async function PUT(request: Request) {
// //     const { userId, id, title, completed }: Todo = await request.json()

// //     if (!userId || !id || !title || typeof (completed) !== 'boolean') return NextResponse.json({ "message": "Missing required data" })

// //     const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
// //         method: 'PUT',
// //         headers: {
// //             'Content-Type': 'application/json',
// //             'API-Key': API_KEY
// //         },
// //         body: JSON.stringify({
// //             userId, title, completed
// //         })
// //     })

// //     const updatedTodo: Todo = await res.json()

// //     return NextResponse.json(updatedTodo)
// // }

// // export async function DELETE(request: Request) {
// //     const { id }: Partial<Todo> = await request.json()

// //     if (!id) return NextResponse.json({ "message": "Todo id required" })

// //     await fetch(`${DATA_SOURCE_URL}/${id}`, {
// //         method: 'DELETE',
// //         headers: {
// //             'Content-Type': 'application/json',
// //             'API-Key': API_KEY
// //         }
// //     })

// //     return NextResponse.json({ "message": `Todo ${id} deleted` })
// // }
















// // import { Pool } from '@neondatabase/serverless';

// // export default async function GET(request: Request) {
    
// //     const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// //     const { rows } = await pool.query('SELECT * FROM bookdata');
// //     // event.waitUntil(pool.end());  // doesn't hold up the response
// //     return new Response(JSON.stringify(rows));
// // }

// // export const runtime = 'edge';


// // // pages/api/hello_worlds.js
// // import postgres from "postgres";

// // const conn = postgres();

// // function selectAll() {
// //   return conn.query("SELECT * FROM hello_world");
// // }






// // import { Pool } from '@neondatabase/serverless';

// // export default async   function GET(request: Request) {
    
// //     const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// //     const { rows } = await pool.query('SELECT * FROM bookdata');
// //     // event.waitUntil(pool.end());  // doesn't hold up the response
// //     return new Response(JSON.stringify(rows));
// // }

// // export const runtime = 'edge';