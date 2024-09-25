import React, { type ReactNode } from 'react';

/*  ** 처음에 내가 했던거 

interface HeaderProps {
image:{
    src:string;
    alt:string;
    };
}

type HeaderProps = PropsWithChildren  */

type HeaderProps = {
    image:{
        src:string;
        alt:string;
    }
    children : ReactNode
}

export default function Header({image, children}:HeaderProps){
  return (
    <header>
        {/* <img src={image.src} alt={image.alt}></img> */} 
        {/* image 객체에 키가 2개 밖에 없는데 지금은 2개를 
            다 쓰고 있으므로 그냥 객체를 다 풀어서 출력한 것  */}

        <img {...image}/> 
        {children}
    </header>
  )
}

