// fetch GET
fetch('https://api-to-call.com/endpoint').then(response => {
    if(response.ok){
        return response.json();
    }
    throw new Error('Reauest failed!');
}, networkError => {
    console.log(networkError.message);
}).then(jsonResponse => {
    console.log(jsonResponse);//Code to execute with jsonResponse
});
//first call the fetch() function and pass it a URL as a string for the first argument, determinig the endpoint of the request


/***************我是分割线****************/
// fetch POST
// fetch call takes two arguments
fetch('https://api-to-call.com/endpoint', {
    method: 'POST',
    body: JSON.stringify({id: '200'})
}).then().then();
//body: JSON.stringify({id: '200'}) this request is POST request and what information will be sent to the API

//*** async await try and cathc ***//

const getData = async () => {
    try{ 
        const response = await fetch('https://api-to-call.com/endpoint');
        if(response.ok){
            const jsonResponse = await response.json();
            // code to execute with jsonResponse
        }
        throw new Error('Request failed!');
    }catch(error){
        console.log(error);
    }
}

// async await POST
const getData = async () => {
    try{
        const response = await fetch('https://api-to-call.com/endpoint', {
            method: 'POST',
            body: JSON.stringify({id: '200'})
        })
        if(response.ok){
            const jsonResponse = await response.json();
            //code to execute with jsonResponse
        }
        throw new Error('Request failed!');
    }catch(error){
        console.log(error);
    }
}