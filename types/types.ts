export type Project = {
    id: number,
    title: string,
    description: string | null,
    stack: string,
    imageArray: string[],
    projectUrl: {
        frontend:  {
            url: string | null,
            repository: string | null,
        } ,
        backend:   {
            url: string | null,
            repository: string | null
        } 
    },
    bgColor: string | null,
    bgPosition?: string | undefined,
    
}