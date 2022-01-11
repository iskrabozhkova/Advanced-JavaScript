export interface IUser{
    id: number;
    name: string;
    email: string;
    company: ICompany;
}

export interface ICompany{
    name: string;
}
