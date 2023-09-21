interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecicationRespository {
    create({ name, description } : ICreateSpecificationDTO) : void;
}

export  { ISpecicationRespository, ICreateSpecificationDTO  }