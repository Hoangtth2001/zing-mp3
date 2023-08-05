
 export const getArraySlider = (start , end , num ) => { 
    const limit = start > end ? num : end ;
    let output =  [];
    for(let i = start ; i <= limit ; i++){
        output.push( i );
    }    
    if(start > end ){
        for(let i = 0 ; i <= end  ; i++){
            output.push( i );
        }   
    }
    return output;  
 }