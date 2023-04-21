import type { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getSession } from '~/cookie.server'

export const action = async ({ request }: ActionArgs) => {
  const session = await getSession(request)
  return redirect('/', { headers: await session.destroyHeaders() })
}

export const loader = async () => {
  return redirect('/')
}
