import { heroes } from './data/heroes.js';

// console.log('Inicio');

// new Promise( (resolve, reject) =>{

//     console.log('inicia cuerpo de la promesa');
//     const holi = true;
//     return ( holi )
//               ? resolve('se resolvio')
//               :reject('error');
// })
// .then( console.log )
// .catch( console.error );




// console.log('fin');

const getHeroeById = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( ( ) => {
            const result = heroes.find( el => el.id === id);
            // console.log(heroes.find(el => el.id === id ));
            ( result )
              ? resolve(result)
              : reject( 'ocurrio un error' );
        }, 1000);
    } );
};  


getHeroeById( 100 )
  .then( res => console.log(res) )
  .catch( err => console.error(err) );