export interface Phone {
    work: string;
    home: string;
    mobile: string;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
}

export interface Contact {
    name: string;
    id: string;
    companyName: string;
    isFavorite: boolean;
    smallImageURL: string;
    largeImageURL: string;
    emailAddress: string;
    birthdate: string;
    phone: Phone;
    address: Address;
}