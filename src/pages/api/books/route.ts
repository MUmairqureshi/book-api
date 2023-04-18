 
// import { type NextRequest } from 'next/server' 

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const API_KEY: string = process.env.DATA_API_KEY as string


 


import { NextResponse, type NextRequest } from 'next/server'

 
export const config = {
    runtime: 'edge',
  }
  
  // export default async function handler(req: NextRequest) {
  
  //   const res = await fetch(DATA_SOURCE_URL)

  //   const todos: Todo[] = await res.json()

  //   return NextResponse.json(todos)
  // }
  

// export async function POST(request: NextRequest) {
//     const { userId, title }: Partial<Todo> = await request.json()

//     if (!userId || !title) return NextResponse.json({ "message": "Missing required data" })

//     const res = await fetch(DATA_SOURCE_URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'API-Key': API_KEY
//         },
//         body: JSON.stringify({
//             userId, title, completed: false
//         })
//     })

//     const newTodo: Todo = await res.json()

//     return NextResponse.json(newTodo)
// }



//   export  async function DELETE(request: Request) {
//     const { id }: Partial<Todo> = await request.json()

//     if (!id) return NextResponse.json({ "message": "Todo id required" })

//     await fetch(`${DATA_SOURCE_URL}/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'API-Key': API_KEY
//         }
//     })

//     return NextResponse.json({ "message": `Todo ${id} deleted` })
// }



// export   async function PUT(request: Request) {
//     const { userId, id, title, completed }: Todo = await request.json()

//     if (!userId || !id || !title || typeof (completed) !== 'boolean') return NextResponse.json({ "message": "Missing required data" })

//     const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'API-Key': API_KEY
//         },
//         body: JSON.stringify({
//             userId, title, completed
//         })
//     })

//     const updatedTodo: Todo = await res.json()

//     return NextResponse.json(updatedTodo)
// }


















// import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

// import { Pool } from '@neondatabase/serverless';

// export default async function GET(request: Request) {
    
//     const pool = new Pool({ connectionString: process.env.NEON_DATABASE_URL });
//     const { rows } = await pool.query('SELECT * FROM bookdata');
//     // event.waitUntil(pool.end());  // doesn't hold up the response
//     return new Response(JSON.stringify(rows));
// }

// export const runtime = 'edge';

// export async function GET(request: NextRequest) {
//   const conn = postgres({
//     ssl: require,
//   });
//   const result = await conn.unsafe("SELECT * FROM bookdata");
//   console.log("backend result", result);
//   return new NextResponse(JSON.stringify(result));
// }








// import { NextRequest, NextResponse } from "next/server";

// import {
//   Kysely,
//   Generated,
//   ColumnType,
//   Selectable,
//   Insertable,
//   Updateable,
// } from 'kysely';

// import { NeonDialect } from "kysely-neon";

// interface playing_with_neon_Table {
//   id: Generated<number>
//   name: string
//   value: number
// }

// interface Database {
//   playing_with_neon: playing_with_neon_Table
// }


// export default async function GET(request: NextRequest) {
//   const db = new Kysely<Database>({
//     dialect: new NeonDialect({
//       connectionString: process.env.NEON_DATABASE_URL!,
//     }),
//   });
  
//   const result = await db
//   .selectFrom("playing_with_neon")
//   .selectAll()
//   .execute()
  
//   console.log("backend result", result);
//   return new NextResponse(JSON.stringify(result));
// }









import { Pool } from '@neondatabase/serverless';

export async function GET(request: Request) {
    
    const pool = new Pool({ connectionString: process.env.NEON_DATABASE_URL });
    const { rows } = await pool.query('SELECT * FROM bookdata');
    // event.waitUntil(pool.end());  // doesn't hold up the response
    return new Response(JSON.stringify(rows));
}




// export const runtime = 'edge';




// export const runtime = 'edge';





















