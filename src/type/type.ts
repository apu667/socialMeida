export interface MenuTypes {
    id:number;
    name:string;
    ions:any
}

export interface UserArray{ 
    id?:string| number;
    name:string;
    img:string;
}

export interface CommentType {
  user: string
  text: string
}

export interface PostTypes {
  profileImg?: string
  name: string
  userName: string
  title?: string
  postImg?: string
  like: string[]
  comment: CommentType[]
}