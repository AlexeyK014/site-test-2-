export async function GET(req: Request) {
    const data = {
        name: 'Bob',
        age: 10,
        bio: 'Man'
    }
    return new Response(JSON.stringify(data))
}

export async function POST(req: Request) {
    
    return new Response(req.body)
}