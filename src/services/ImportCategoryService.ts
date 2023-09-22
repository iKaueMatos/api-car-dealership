
interface IRequest {
    file: any;
}

class ImportCategoryService {

    execute({ file } : IRequest )   {
        console.log(file);
    }
}


export { ImportCategoryService };