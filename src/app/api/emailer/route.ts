import { emailer } from '@/utils/emailer'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const message = await request.json()

  console.log(message)
  const res = await emailer(message)

  return NextResponse.json(message)
}
