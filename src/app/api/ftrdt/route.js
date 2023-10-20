//1. Import Area 


//2. Define Area 
async function POST(req){
    const { city,area } = await req.json();
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('searchReferer')

    //Every function return somethig 
    return Response.json({
                            msg:"hello"+city,
                            msg2:`hello2 ${area}`,
                            msg3:`hello3 ${query}`,
                        });
}
//3. Export Area 
//3.2 named Export 
            //   { KEY:VALUE }
module.exports = { POST:POST }