import { render } from '@testing-library/react';
import React, { Component } from 'react'



export  class Cpu extends Component {
    render() {
      return (
        <div className="Cpu">
            <h1>Procesor</h1>
            <a>Procesory do počítačů vyrábí 2 firmy, jimiž jsou AMD a Intel. Provádí se na něm výpočty počítače. 
            jeho základní parametry jsou počet jader, vláken a takt. Počet jader znázorňuje kolik má procesor jednotlivých součástí na výpočet. Minimální počet jader 
            u počítačového procesoru jsou 2.         
            </a>
            <h2>Jak vybrat Procesor</h2>
            <h3>Pro hráče</h3>
             <a>U většiny nových her je v minimálních požadavcích čtyřádrový procesor. Pokud máte napnutý rozpočet doporučuji pořídit si čtyřádrový procesor. 
             Pokud ale máte více peněz doporučím šestijádrový ideálně s 12ti vlákny. Ohledně taktu Je ideální mít 3 a více ghz. Šestijádrový procesor s 
             12ti vlákny koupíte od 3 000. </a>
            <h3>pro programátory a střihače</h3>
            Zde jsou parametry velice podobné jako v kolonce pro hráče. Rozdíl však je, že pokud se budete věnovat například profesionálnímu střihu videí,
             nebo konvertování či rendrování různých souborů.
             doporučuje se 12ti jádrový procesor ideálně s 24mi vlákny. Pořád vám ale stačí 6ti jádrový. Ohledně taktu Je ideální mít 3 a více ghz.
            <h3>pro běžné uživatele</h3>
               <a>Běžným uživatelům stačí na stavbu počítače dvoujádrový processor. Ten vystačí na hraní starších her, psaní dokumentů, 
                   brouzdání na internetu a sledování videí. pokud ale chcete mít počítač rychlejší a výkonnější doporučuji čtyřádrový procesor.
                   Ohledně taktu stačí mít 2 a více ghz. Takový dvoujádrový procesor seženete kolem 2 tisíc.
               </a>
        </div>
    )
}
}
export default Cpu