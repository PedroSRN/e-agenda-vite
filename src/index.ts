import { IPaginaHTML } from "./shared/pagina.interface";


class Index implements IPaginaHTML {
    btnCadastrar: HTMLButtonElement;

    constructor() {
        this.configurarElementos();
    }

    //metodo responsavel pelo data binding dos elementos da pagina
    public configurarElementos(): void {
    
    }

}

new Index();