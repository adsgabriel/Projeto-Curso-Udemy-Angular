import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Category } from "./pages/categories/shared/category.module";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories = [
            { id: 1, nome: 'Moradia', descricao: 'Pagamentos de contas da casa' },
            { id: 2, nome: 'Saúde', descricao: 'Planos de saúde e remédios' },
            { id: 3, nome: 'Lazer', descricao: 'Cinema, parques, praia, etc' },
            { id: 4, nome: 'Salário', descricao: 'Recebimento de Salário' },
            { id: 5, nome: 'Freelas', descricao: 'Trabalhos como freelancer' }
        ];

        return { categories } 
    }
}