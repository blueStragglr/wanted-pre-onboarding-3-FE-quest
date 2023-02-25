type Timestamp = number // UNIX timestamp

type Contact = {
  id: string
  createdAt: Timestamp
} & Partial<{
  updates: Timestamp
  first: string
  last: string
  avatar: string
  twitter: string
  notes: string
  favorite: boolean
}>
