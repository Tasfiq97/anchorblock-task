export interface Users{
data:{
    page: number,
per_page: number,
total: number,
total_pages: number,
data:  [
{
id: number,
email: string,
first_name:string,
last_name: string,
avatar: string
}
]
}
} 
// export interface Users{
//     page: number,
// per_page: number,
// total: number,
// total_pages: number,
// data:  [
// {
// id: number,
// email: string,
// first_name:string,
// last_name: string,
// avatar: string
// }
// ]
// }

