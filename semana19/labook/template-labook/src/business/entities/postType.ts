enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: string,
    authorId: string
 }

 export type createTaskInputDTO = {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
 }