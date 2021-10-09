
import '../css/components.css'

export const talkTo = ( name ) =>{
    
    console.log('Creating an h1-element from JS component');

    const h1 = document.createElement('h1');

    h1.innerText = `Hello my g , ${name}`;

    document.body.append(h1);
}