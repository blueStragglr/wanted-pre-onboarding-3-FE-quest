import { Form, Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { getContacts, createContact } from "../contacts"

export async function loader() {
  const contacts = await getContacts()
  return { contacts }
}

export async function action() {
  const contact = await createContact()
  return { contact }
}

export default function Root() {
  const { contacts } = useLoaderData() as { contacts: Contact[] }
  return (
    <>
      <div id='sidebar'>
        <h1>Wanted Pre-onboarding course</h1>
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
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}
