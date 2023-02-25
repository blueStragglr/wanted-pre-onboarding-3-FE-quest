import localforage from "localforage"
import { matchSorter } from "match-sorter"
import sortBy from "sort-by"

const contactKey = "contacts"

export async function getContacts(query?: string) {
  await fakeNetwork(`getContacts:${query}`)
  let contacts = (await localforage.getItem(contactKey)) as Contact[]
  if (!contacts) contacts = []
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] })
  }
  const result = contacts.sort(sortBy("last", "createdAt"))
  return result
}

export async function createContact() {
  await fakeNetwork()
  let id = Math.random().toString(36).substring(2, 9)
  let contact: Contact = {
    id,
    createdAt: Date.now(),
    avatar: `https://picsum.photos/seed/${id}/200/200`,
  }
  let contacts = await getContacts()
  contacts.unshift(contact)
  await set(contacts)
  return contact
}

function getLocalContact() {
  return localforage.getItem(contactKey) as Promise<Contact[]>
}

export async function getContact(id: Contact["id"]) {
  await fakeNetwork(`contact:${id}`)
  let contacts = await getLocalContact()
  return contacts.find((contact) => contact.id === id)
}

export async function updateContact(
  id: Contact["id"],
  updates: Partial<Contact>
) {
  await fakeNetwork()
  let contacts = await getLocalContact()
  let contact = contacts.find((contact) => contact.id === id)
  if (!contact) throw new Error(`No contact found for ${id}`)
  Object.assign(contact, updates)
  await set(contacts)
  return contact
}

export async function deleteContact(id: Contact["id"]) {
  let contacts = await getLocalContact()
  let index = contacts.findIndex((contact) => contact.id === id)
  if (index > -1) {
    contacts.splice(index, 1)
    await set(contacts)
    return true
  }
  return false
}

function set(contacts: Contact[]) {
  return localforage.setItem(contactKey, contacts)
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: Record<string, boolean> = {}

async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {}
    return
  }

  if (fakeCache[key]) {
    return
  }

  fakeCache[key] = true
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800)
  })
}
