export const containsSpecialChars = ( str ) => {

    const specialChars = /[`!¡¿@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    return specialChars.test(str);
  }

export function checkUppercase(str){
    for (var i=0; i<str.length; i++){
      if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
        return true;
      }
    }
    return false;
};

export const checkSize = ( str, size=8 ) => {

    if ( str.length < size ){
        return false;
    }
    else{
        return true;
    }
    
}