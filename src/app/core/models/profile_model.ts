export interface ProfileModel {
    age?: string,
    dateOfBirth?: string,
    description?: string,
    imgProfile?: string,
    name?: string,
    profession?: string,
    contact?: Array<Contact>
}

interface Contact {
    id: number,
    name: string,
    url: string
}