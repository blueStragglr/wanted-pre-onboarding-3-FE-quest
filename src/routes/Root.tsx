import {
  Form,
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom"
import { getContacts, createContact } from "../contacts"
import { useEffect } from "react"

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url)
  const q = url.searchParams.get("q") ?? undefined
  const contacts = await getContacts(q)
  return { contacts, q }
}

export async function action() {
  const contact = await createContact()
  return { contact }
}

function NewContact({ q }: { q?: string }) {
  const submit = useSubmit()

  return (
    <div>
      <Form
        id='search-form'
        role='search'
      >
        <input
          id='q'
          aria-label='Search contacts'
          placeholder='Search'
          type='search'
          name='q'
          defaultValue={q}
          onChange={(e) => submit(e.currentTarget.form)}
        />
        <div
          id='search-spinner'
          aria-hidden
          hidden={true}
        />
        <div
          className='sr-only'
          aria-live='polite'
        ></div>
      </Form>
      <Form method='post'>
        <button type='submit'>New</button>
      </Form>
    </div>
  )
}

export default function Root() {
  const { contacts, q } = useLoaderData() as { contacts: Contact[]; q?: string }
  const navigation = useNavigation()

  useEffect(() => {
    // @ts-ignore
    document.getElementById("q").value = q
  }, [q])

  return (
    <>
      <div id='sidebar'>
        <h1>Wanted Pre-onboarding course</h1>
        <NewContact q={q} />
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    <Link to={`contacts/${contact.id}`}>
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {contact.favorite && <span>★</span>}
                    </Link>
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id='detail'
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  )
}
