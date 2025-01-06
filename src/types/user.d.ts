export interface UserRecord {
  id: string
  name: string
  username: string
  email? :string
  created: Date
  updated: Date
  verified: boolean
  /* 
    emailVisibility
  */
}